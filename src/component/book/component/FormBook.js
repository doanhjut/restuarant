import React, { useEffect, useState } from 'react'
import './formBook.css'
import { DatePicker, Space, message } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function FormBook() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [numberTable, setNumberTable] = useState('');
    const [dateTime, setDateTime] = useState(moment(new Date()).format('DD-MM-YYYY'));
    const onChangeTimeBook = (date, dateString) => {
        // console.log(dateString);
        // console.log(moment(date).format('DD-MM-YYYY'));
        setDateTime(moment(date).format('DD-MM-YYYY'));
    }
    const saveBook = () => {
        console.log(name, '-', phone, '-', numberTable);
        if (name !== "" && phone !== "" && numberTable !== "") {
            if (0 < numberTable && numberTable < 13) {
                var phoneno = /^\d{10}$/;
                if (phone.match(phoneno)){
                    axios.put('http://192.168.160.85:5000/restaurant/book',{
                        "name": numberTable,
                        "status":dateTime,
                        "nameCustomer": name,
                        "phoneNumber": phone
                    })
                    .then(res => {
                        // setListCommentUser([...listCommentUser.concat(res.data.results)])
                        // // console.log(listCommentUser.concat(res.data.results));
                        navigate('/')
                    })
                    .catch(error => {
                        const errorMsg = error.message
                    })
                }
                else {
                    message.error('Số điện thoại không đúng', 3);
                    return false;
                }
                console.log((numberTable));
            } else {
                message.error('Số bàn sai', 3);
            }
        } else {
            message.error('Vui lòng điền đầy đủ thông tin', 3);
        }
    }
    useEffect(() => {

    }, [name, phone, numberTable, dateTime])
    return (
        <div class="login-root">
            <div class="box-root flex-flex flex-direction--column" style={{ minheight: "100vh", flexGrow: "1" }}>
                <div class="loginbackground box-background--white padding-top--64">
                    <div class="loginbackground-gridContainer">
                        <div class="box-root flex-flex" style={{ gridArea: " top / start / 8 / end" }}>
                            <div class="box-root" style={{ backgroundimage: "linear-gradient(white 0%, rgb(247, 250, 252) 33%)", flexGrow: "1" }}>
                            </div>
                        </div>
                        <div class="box-root flex-flex" style={{ gridArea: " 4 / 2 / auto / 5" }}>
                            <div class="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: "1" }}></div>
                        </div>
                        <div class="box-root flex-flex" style={{ gridArea: " 6 / start / auto / 2" }}>
                            <div class="box-root box-background--blue800" style={{ flexGrow: "1" }}></div>
                        </div>
                        <div class="box-root flex-flex" style={{ gridArea: " 7 / start / auto / 4" }}>
                            <div class="box-root box-background--blue animationLeftRight" style={{ flexGrow: "1" }}></div>
                        </div>
                        <div class="box-root flex-flex" style={{ gridArea: " 8 / 4 / auto / 6" }}>
                            <div class="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: "1" }}></div>
                        </div>
                        <div class="box-root flex-flex" style={{ gridArea: " 2 / 15 / auto / end" }}>
                            <div class="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: "1" }}></div>
                        </div>
                        <div class="box-root flex-flex" style={{ gridArea: " 3 / 14 / auto / end" }}>
                            <div class="box-root box-background--blue animationRightLeft" style={{ flexGrow: "1" }}></div>
                        </div>
                        <div class="box-root flex-flex" style={{ gridArea: " 4 / 17 / auto / 20" }}>
                            <div class="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: "1" }}></div>
                        </div>
                        <div class="box-root flex-flex" style={{ gridArea: " 5 / 14 / auto / 17" }}>
                            <div class="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: "1" }}></div>
                        </div>
                    </div>
                </div>
                <div class="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: "1", zIndex: "9" }}>
                    <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                        <h1><a href="http://blog.stackfindover.com/" rel="dofollow">Đặt bàn</a></h1>
                    </div>
                    <div class="formbg-outer">
                        <div class="formbg">
                            <div class="formbg-inner padding-horizontal--48">
                                <span class="padding-bottom--15">Điền thông để đặt bàn</span>
                                <form id="stripe-login">
                                    <div class="field padding-bottom--24">
                                        <label for="email">Tên người dùng</label>
                                        <input type="text" onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div class="field padding-bottom--24">
                                        <div class="grid--50-50">
                                            <label for="password">Số điện thoại người dùng</label>
                                            <div class="reset-pass">

                                            </div>
                                        </div>
                                        <p>Tin nhắn sẽ gửi tới đẻ xác nhận?</p>
                                        <input type="text" onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                    <div class="field padding-bottom--24">
                                        <label for="email">Đặt bàn số</label>
                                        <p>Số bàn hiển thị trong trang chủ và có giá trị từ 1-12?</p>
                                        <input type="number" onChange={(e) => setNumberTable(e.target.value)} />
                                    </div>
                                    <div class="field field-checkbox  flex-flex align-center">
                                        <label for="checkbox">
                                            <input type="checkbox" name="checkbox" /> Số bàn đặt

                                        </label>
                                    </div>
                                    <br />
                                    <DatePicker defaultValue={moment(new Date())} onChange={onChangeTimeBook} />
                                    <br />
                                    <div class="field padding-bottom--24" style={{ marginTop: "5%" }}>
                                        {/* <input type="submit" name="submit" value="Đặt bàn" /> */}
                                        <a onClick={saveBook}>Đặt bàn</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormBook
