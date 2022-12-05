import React, { useEffect, useState } from 'react'
import LineChart from './chart/LineChart'
import './admin.css'
import PieChart from './chart/PieChart'
import TableDish from './table/TableDish'
import TableComment from './table/TableComment'
import TableDishs from './table/TableDishs'
import TableBook from './table/TableBook'
import axios from 'axios'
import tran from '../../translations/translations.js';
import InforReportRestaurant from './InforReportRestaurant'
import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux'

function Admin() {
    const navigate = useNavigate();
    const translate = useSelector(state => state.translate);
    const [tableCommentDish, setTableCommentDish] = useState('comment');
    const [createBook, setCreateBook] = useState(false);
    const [changeItem, setChangeItem] = useState();
    const [statusPopUp, setStatusPopUp] = useState(false);
    const [nameDish, setNameDish] = useState("")
    const [noteDish, setNoteDish] = useState("")
    const [imageDish, setImageDish] = useState("")
    const [priceDish, setPriceDish] = useState("")
    const [accessToken,setAccessToken] = useState((localStorage.getItem('access'))) 
    const [statusLogin, setStatusLogin] = useState(false);
    
    const onChangeTabs = (action) => {
        navigate(action);
    }
    useEffect(() => {

    }, [tableCommentDish])
    const onClosePopUp = () => {
        setNameDish("")
        setNoteDish("")
        setImageDish("")
        setPriceDish("")
        setCreateBook(false)
        setStatusPopUp(false);
    }
    const onChangeItemDish = (item) => {
        setChangeItem(item);
        setNameDish(item.lable)
        setNoteDish(item.content)
        setPriceDish(item.price)
        setImageDish(item.img)
        setCreateBook(true);
        setStatusPopUp(true);
    }
    const onDeleteItemDish = (item) => {
        const id = item.id;
        axios.delete('http://192.168.160.85:5000/restaurant/dishs/'+id)
            .then(res => {
                // // console.log(listCommentUser.concat(res.data.results));
                // console.log(res.data);
                onClosePopUp()
            })
            .catch(error => {
                const errorMsg = error.message
            })
    }
    useEffect(() => {
        if(accessToken && accessToken!=""){
            setStatusLogin(true);
        }else{
            onChangeTabs("/login")
        }
    }, [createBook])
    const saveActionDish = () => {
        if (!statusPopUp) {
            axios.put('http://192.168.160.85:5000/restaurant/dishs', {
                lable: nameDish,
                content: noteDish,
                img: imageDish,
                price:priceDish
            })
                .then(res => {
                    // // console.log(listCommentUser.concat(res.data.results));
                    // console.log(res.data);
                    onClosePopUp()
                })
                .catch(error => {
                    const errorMsg = error.message
                })
        } else {
            axios.patch('http://192.168.160.85:5000/restaurant/dishs', {
                content: noteDish
                , dislike: changeItem.dislike
                , evaluate: changeItem.evaluate
                , id: changeItem.id
                , img: imageDish
                , lable: nameDish
                , like: changeItem.like
                , star1: changeItem.star1
                , star2: changeItem.star2
                , star3: changeItem.star3
                , star4: changeItem.star4
                , star5: changeItem.star5
                ,price : priceDish
            })
                .then(res => {
                    onClosePopUp()
                })
                .catch(error => {
                    const errorMsg = error.message
                })
        }
    }
    return (
        <div className='admin'>
            <InforReportRestaurant/>
            <div className='chart-statistic'>
                <div className='chart line-chart'>
                    <a>{tran.t('functional', { lng: translate })}</a>
                    <LineChart />
                </div>
                <div className='chart chart2' style={{ marginLeft: "2%" }}>
                    <a>ĐỘ hài lòng</a>
                    <div style={{ paddingLeft: "5%" }} className="chart2-content">
                        <PieChart />
                        <PieChart />
                    </div>
                </div>
            </div>
            <div className='table-coment-dish'>
                <div className='statistic_laybe'>
                    <p style={{ fontSize: "24px", fontWeight: "bold" }}>Danh sách đặt bàn</p>
                </div>
                <hr></hr>
                <TableBook />
            </div>
            <div className='table-coment-dish'>
                <div className='statistic_laybe'>
                    <p style={{ fontSize: "24px", fontWeight: "bold" }}>Danh sách món ăn</p>
                    <button onClick={() => setCreateBook(true)}>Thêm món mới</button>
                </div>
                {
                    createBook ?
                        <div className='popup_create_dish'>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input value={nameDish} onChange={(e) => setNameDish(e.target.value)} type="text" class="form-control" placeholder="Tên món ăn" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input value={noteDish} onChange={(e) => setNoteDish(e.target.value)} type="text" class="form-control" placeholder="Mô tả ngắn cho món ăn" aria-label="Mô tả " aria-describedby="basic-addon2" />
                                <span class="input-group-text" id="basic-addon2"> Mô tả</span>
                            </div>
                            <label for="basic-url" class="form-label" style={{ color: "white" }}>Địa chỉ ảnh</label>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                                <input value={imageDish} onChange={(e) => setImageDish(e.target.value)} type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                            </div>
                            <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">@</span>
                                <input value={priceDish} onChange={(e) => setPriceDish(e.target.value)} type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                            </div>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-10">
                                <button class="btn btn-primary me-md-2" type="button" onClick={saveActionDish}>Thêm</button>
                                <button class="btn btn-primary" type="button" onClick={onClosePopUp}>Hủy</button>
                            </div>
                        </div> : ""
                }

                <hr></hr>
                <TableDishs onChangeItemDish={onChangeItemDish} onDeleteItemDish={onDeleteItemDish} />
            </div>
            <div className='table-coment-dish'>
                <div className='statistic_laybe'>
                    <p style={{ fontSize: "24px", fontWeight: "bold" }}>Thống kê bình luận</p>
                    <div>
                        <button style={tableCommentDish == 'comment' ? { backgroundColor: "gray", color: "white" } : {}} onClick={() => setTableCommentDish('comment')}>Nhà hàng</button>
                        <button style={tableCommentDish == 'comment' ? {} : { backgroundColor: "gray", color: "white" }} onClick={() => setTableCommentDish('dish')}>Món ăn</button>
                    </div>
                </div>
                <hr></hr>
                {
                    tableCommentDish === 'comment' ?
                        <TableComment />
                        :
                        <TableDish />
                }
            </div>
        </div>
    )
}

export default Admin
