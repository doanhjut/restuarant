import axios from 'axios';
import React, { useEffect, useState } from 'react'
import star from './../../image/star.png'
import tran from '../../translations/translations.js';
import { useSelector } from 'react-redux';
function InforReportRestaurant() {
    const [minEvaluete, setMinEvaluete] = useState();
    const [maxEvaluete, setMaxEvaluete] = useState();
    const [listBill, setListBill] = useState();
    const [total, setTotal] = useState(0);
    const [totalEvalueComment, setTotalEvalueComment] = useState(0);
    const translate = useSelector(state => state.translate);
    const getDish = () => {
        var minEvaluete = { evaluate: "5" };
        var maxEvaluete = { evaluate: "1" };
        axios.get('http://192.168.160.85:5000/restaurant/dishs')
            .then(res => {
                // setListDataTableDish(res.data.results);
                res.data.results.forEach(dish => {
                    if (parseFloat(dish.evaluate).toFixed(2) < parseFloat(minEvaluete.evaluate).toFixed(2)) {
                        minEvaluete = dish;
                    }
                    if (parseFloat(dish.evaluate).toFixed(2) > parseFloat(maxEvaluete.evaluate).toFixed(2)) {
                        maxEvaluete = dish;
                    }
                });
                setMinEvaluete(minEvaluete);
                setMaxEvaluete(maxEvaluete);
            })
            .catch(error => {
                const errorMsg = error.message
            })

    }
    const getComment = () => {
        axios.get('http://192.168.160.85:5000/restaurant/comments')
            .then(res => {
                // setListDataTableDish(res.data.results);
                var totalEvalue = 0;
                res.data.results.forEach(comment => {
                    totalEvalue += comment.evaluate
                });
                setTotalEvalueComment(totalEvalue / (res.data.results.length));
            })
            .catch(error => {
                const errorMsg = error.message;
            })


    }
    const getBill = () => {
        axios.get('http://192.168.160.85:5000/restaurant/bill')
            .then(res => {
                // setListDataTableDish(res.data.results);
                setListBill(res.data.results);
                var totalPrice = 0;
                res.data.results.forEach(price => {
                    totalPrice = totalPrice + parseInt(price.pay);
                });
                setTotal(totalPrice);
            })
            .catch(error => {
                const errorMsg = error.message;
            })

    }

    useEffect(() => {
        getDish()
        getBill()
        getComment()
    }, []);
    return (
        <div className='statistic'>
            <div className='statistic_laybe'>
                <p>{tran.t('product_statistics', { lng: translate })}</p>
                <button>View all</button>
            </div>
            <hr></hr>
            <div className='content_statistic'>
                <div className='content_statistic_item'>
                    <div style={{ display: "flex" }}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjSRij-f2irgGw3X5_7sw7rshhDrLYNEgg5A&usqp=CAU'></img>
                        <div >
                            <p>{tran.t('customers_number', { lng: translate })}</p>
                            <h3>
                                1,7K+
                            </h3>
                            <span> <a>54,12%</a> số người</span>
                        </div>
                    </div>
                </div>
                <div className='content_statistic_item'>
                    <div style={{ display: "flex" }}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjSRij-f2irgGw3X5_7sw7rshhDrLYNEgg5A&usqp=CAU'></img>
                        <div >
                            <p>{tran.t('customer_satisfaction', { lng: translate })}</p>
                            <h3>
                                {totalEvalueComment}
                                <img src={star} style={{ width: "20px", height: "20px", marginLeft: "3%" }} />
                            </h3>
                            {/* <span> Độ hài lòng tăng <a>2,12%</a></span> */}
                        </div>
                    </div>
                </div>
                <div className='content_statistic_item'>
                    <div style={{ display: "flex" }}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpmdI_Qdiutgbmms0M8McPrwnigTZDLTmkA&usqp=CAU'></img>
                        <div >
                            <p>{tran.t('customers_number', { lng: translate })}</p>
                            <h3>
                                {total?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                            </h3>
                            <span>Giảm <a style={{ color: "red" }}>4,12%</a> số người</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='content_statistic'>

                <div className='content_statistic_item'>
                    <div style={{ display: "flex" }}>
                        <img src='https://resources.tallysolutions.com/wp-content/uploads/2020/01/What-is-Bill-of-Sale.png'></img>
                        <div >
                            <p>{tran.t('paid_bill_number', { lng: translate })}</p>
                            <h3>
                                {listBill?.length} #
                            </h3>
                            <span> Độ hài lòng tăng <a>2,12%</a></span>
                        </div>
                    </div>
                </div>
                <div className='content_statistic_item'>
                    <div style={{ display: "flex" }}>
                        <img src={minEvaluete?.img}></img>
                        <div >
                            <p>{tran.t('lowest_rating', { lng: translate })}</p>
                            <h3>
                                {minEvaluete?.evaluate}
                                <img src={star} style={{ width: "20px", height: "20px", marginLeft: "3%" }} />
                            </h3>
                            <span>Giảm <a style={{ color: "red" }}>0,12%</a></span>
                        </div>
                    </div>
                </div>
                <div className='content_statistic_item'>
                    <div style={{ display: "flex" }}>
                        <img src={maxEvaluete?.img}></img>
                        <div >
                            <p>{tran.t('top_rated', { lng: translate })}</p>
                            <h3>
                                {maxEvaluete?.evaluate}
                                <img src={star} style={{ width: "20px", height: "20px", marginLeft: "3%" }} />
                            </h3>
                            <span>Tăng <a>2,12%</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <i>* Thông số cửa hàng</i>
        </div>
    )
}

export default InforReportRestaurant