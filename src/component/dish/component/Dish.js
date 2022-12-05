import React, { useEffect, useState } from 'react'
import './dish.css';
import { DatePicker, Space, message } from 'antd';
import star from "../../../image/star.png"
import star_black from "../../../image/star_black.png"
import io from "socket.io-client";
import Menu from '../../menu/Menu';
import axios from 'axios';
import moment from 'moment';
const socket = io.connect("http://192.168.160.85:5000");

function Dish() {
    const [dataDisd, setDataDish] = useState([
        // {
        //     "lable": "Phở bò Hà Thành",
        //     "content": "Bánh phở mềm mềm, nước dùng ngọt đậm vị xương ống heo, hành ngò thơm nức mũi, thịt ăn kèm đầy bát chắc chắn sẽ làm b...",
        //     "img": { backgroundImage: 'url(https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250313281452.jpg)' },
        //     "evaluate": 3.5
        // },
        // {
        //     "lable": "Bún thang",
        //     "content": "Món ăn mang hương vị thanh tao, thể hiện tròn vẹn nét tinh hoa ẩm thực của người dân Hà thành chế biến tỉ mỉ, công phu.",
        //     "img": { backgroundImage: 'url(https://bep360.net/wp-content/uploads/2021/06/cach-nau-bun-thang.jpg)' },
        //     "evaluate": 3.6
        // },
        // {
        //     "lable": "Phở bát đá",
        //     "content": "Hương vị món phở bò bát đá hấp dẫn với đặc trưng là phần thịt mềm bánh phở dẻo cùng với vị nước dùng cau cau của gừng...",
        //     "img": { backgroundImage: 'url(https://noiphodien123.vn/wp-content/uploads/2022/07/pho-de-bat-da-bang-liet-okeconde.jpg)' },
        //     "evaluate": 3.7
        // },
        // {
        //     "lable": "Phở tôm hùm",
        //     "content": "Từng sớ tôm ngọt và dai làm mình mắc ghiền thiệt sự . Đầu tôm có gạch và thịt luôn nha nên ăn 2ng được chứ ko phải th...",
        //     "img": { backgroundImage: 'url(https://hotel84.com/hotel84-images/news/img1/pho-tom-hum-bat-da.jpg)' },
        //     "evaluate": 3.8
        // },
        // {
        //     "lable": "Cua lột sốt chanh dây",
        //     "content": "Con cua lột khá bự ăn nguyên con cua cùng vs cái sốt chua chua ngọt ngọt.",
        //     "img": { backgroundImage: 'url(https://haisancoto.com/uploads/images/tom-su-lam-mon-ngon.jpg)' },
        //     "evaluate": 3.9
        // },
        // {
        //     "lable": "Tôm sốt chanh dây",
        //     "content": "Món tôm sốt chanh dây có màu vàng của tôm và chanh dây nhìn thật đẹp mắt. Tôm vẫn giữ được độ dai và ngọt hòa quyện ...",
        //     "img": { backgroundImage: 'url(https://cdn.tgdd.vn/Files/2021/08/11/1374539/2-cach-lam-mon-tom-sot-chanh-day-thom-ngon-la-mieng-202108111632179470.jpg)' },
        //     "evaluate": 4.0
        // },
        // {
        //     "lable": "Phở bát đá",
        //     "content": "Hương vị món phở bò bát đá hấp dẫn với đặc trưng là phần thịt mềm bánh phở dẻo cùng với vị nước dùng cau cau của gừng...",
        //     "img": { backgroundImage: 'url(https://noiphodien123.vn/wp-content/uploads/2022/07/pho-de-bat-da-bang-liet-okeconde.jpg)' },
        //     "evaluate": 3.7
        // },
        // {
        //     "lable": "Phở tôm hùm",
        //     "content": "Từng sớ tôm ngọt và dai làm mình mắc ghiền thiệt sự . Đầu tôm có gạch và thịt luôn nha nên ăn 2ng được chứ ko phải ...",
        //     "img": { backgroundImage: 'url(https://hotel84.com/hotel84-images/news/img1/pho-tom-hum-bat-da.jpg)' },
        //     "evaluate": 3.8
        // },
        // {
        //     "lable": "Cua lột sốt chanh dây",
        //     "content": "Con cua lột khá bự ăn nguyên con cua cùng vs cái sốt chua chua ngọt ngọt.",
        //     "img": { backgroundImage: 'url(https://haisancoto.com/uploads/images/tom-su-lam-mon-ngon.jpg)' },
        //     "evaluate": 3.9
        // },
        // {
        //     "lable": "Tôm sốt chanh dây",
        //     "content": "Món tôm sốt chanh dây có màu vàng của tôm và chanh dây nhìn thật đẹp mắt. Tôm vẫn giữ được độ dai và ngọt hòa quyện ....",
        //     "img": { backgroundImage: 'url(https://cdn.tgdd.vn/Files/2021/08/11/1374539/2-cach-lam-mon-tom-sot-chanh-day-thom-ngon-la-mieng-202108111632179470.jpg)' },
        //     "evaluate": 4.0
        // },
    ]);
    const [listBill, setListBill] = useState([]);
    const [nameCustomer, setNameCustomer] = useState('')
    const [numberPhoneCustomer, setNumberPhoneCustomer] = useState('');
    const [dishPic, setDishPic] = useState();
    const [evaluate, setEvaluate] = useState(false);
    const [starEvaluate, setStarEvaluate] = useState('3');
    const [commentCustomer, setCommentCustomer] = useState('')
    useEffect(() => {
        axios.get('http://192.168.160.85:5000/restaurant/dishs')
            .then(res => {
                const dishs = []
                // setListBill(bill.results);
                res.data.results.forEach(element => {
                    var dishtemp = {
                        "lable": element.lable,
                        "content": element.content,
                        "img": { backgroundImage: "url(" + element.img + ")" },
                        "evaluate": element.evaluate
                    }
                    dishs.push(dishtemp)
                });
                setDataDish(dishs);
            })
            .catch(error => {
                const errorMsg = error.message
            })
    }, [dishPic]);
    useEffect(() => {
        axios.get('http://192.168.160.85:5000/restaurant/bill')
            .then(res => {
                const bill = res.data
                setListBill(bill.results);
            })
            .catch(error => {
                const errorMsg = error.message
            })
    }, [dishPic]);
    useEffect(() => {
        // console.log(numberPhoneCustomer);
        if (numberPhoneCustomer.length > 9) {
            listBill.forEach(bill => {
                if (bill.phoneNumber === numberPhoneCustomer) {
                    var countDish = false;
                    const listDish = bill.dish.split(",");
                    listDish.forEach(dish => {
                        if (dish === dishPic.lable) {
                            setNameCustomer(bill.nameCustomer)
                            setEvaluate(true)
                            countDish = true;
                        }
                    });
                    if (!countDish) {
                        message.error('Món ăn không có trong danh sách các món được đặt', 3);
                    }
                } else {
                    message.error('Số điện thoại không chính xác', 3);
                }
            });
        } else {
            setEvaluate(false)
        }
    }, [numberPhoneCustomer])
    const background = { backgroundImage: 'url(https://cdn.daynauan.info.vn/wp-content/uploads/2019/05/suon-non-kho-nuoc-dua.jpg)' }
    const onPicDish = (dishs) => {
        setDishPic(dishs)
    }
    const onSetChangeStarUpdate = (data) => {
        axios.patch('http://192.168.160.85:5000/restaurant/dishs', data)
            .then(res => {
                setDishPic();
            })
            .catch(error => {
                const errorMsg = error.message
            })
    }
    const onSetChangeStar = () => {

        axios.get('http://192.168.160.85:5000/restaurant/dishs')
            .then(res => {
                // const bill = res.data
                // setListBill(bill.results);
                res.data.results.forEach(element => {
                    if (element.lable === dishPic.lable) {
                        if (starEvaluate == 1) {
                            var evaluatetemp = (parseInt(element.star1) + 1) + parseInt(element.star2) + parseInt(element.star3) + parseInt(element.star4) + parseInt(element.star5);
                            var numberStar = (parseInt(element.star1) + 1) + parseInt(element.star2) * 2 + parseInt(element.star3) * 3 + parseInt(element.star4) * 4 + parseInt(element.star5) * 5;
                            onSetChangeStarUpdate({
                                content: element.content
                                , dislike: element.dislike
                                , evaluate: (numberStar / evaluatetemp).toFixed(1)
                                , id: element.id
                                , img: element.img
                                , lable: element.lable
                                , like: element.like
                                , star1: (parseInt(element.star1) + 1).toString()
                                , star2: element.star2
                                , star3: element.star3
                                , star4: element.star4
                                , star5: element.star5
                                ,price: element.price
                            })
                        } else if (starEvaluate == 2) {
                            var evaluatetemp = (parseInt(element.star1)) + (parseInt(element.star2) + 1) + parseInt(element.star3) + parseInt(element.star4) + parseInt(element.star5);
                            var numberStar = (parseInt(element.star1)) + (parseInt(element.star2) + 1) * 2 + parseInt(element.star3) * 3 + parseInt(element.star4) * 4 + parseInt(element.star5) * 5;
                            onSetChangeStarUpdate({
                                content: element.content
                                , dislike: element.dislike
                                , evaluate: (numberStar / evaluatetemp).toFixed(1)
                                , id: element.id
                                , img: element.img
                                , lable: element.lable
                                , like: element.like
                                , star1: element.star1
                                , star2: (parseInt(element.star2) + 1).toString()
                                , star3: element.star3
                                , star4: element.star4
                                , star5: element.star5
                                ,price: element.price
                            })
                        }
                        else if (starEvaluate == 3) {
                            var evaluatetemp = (parseInt(element.star1)) + parseInt(element.star2) + (parseInt(element.star3) + 1) + parseInt(element.star4) + parseInt(element.star5);
                            var numberStar = (parseInt(element.star1)) + parseInt(element.star2) * 2 + (parseInt(element.star3) + 1) * 3 + parseInt(element.star4) * 4 + parseInt(element.star5) * 5;
                            onSetChangeStarUpdate({
                                content: element.content
                                , dislike: element.dislike
                                , evaluate: (numberStar / evaluatetemp).toFixed(1)
                                , id: element.id
                                , img: element.img
                                , lable: element.lable
                                , like: element.like
                                , star1: element.star1
                                , star2: element.star2
                                , star3: (parseInt(element.star3) + 1).toString()
                                , star4: element.star4
                                , star5: element.star5
                                ,price: element.price
                            })
                        }
                        else if (starEvaluate == 4) {
                            var evaluatetemp = (parseInt(element.star1)) + parseInt(element.star2) + parseInt(element.star3) + (parseInt(element.star4) + 1) + parseInt(element.star5);
                            var numberStar = (parseInt(element.star1)) + parseInt(element.star2) * 2 + parseInt(element.star3) * 3 + (parseInt(element.star4) + 1) * 4 + parseInt(element.star5) * 5;
                            onSetChangeStarUpdate({
                                content: element.content
                                , dislike: element.dislike
                                , evaluate: (numberStar / evaluatetemp).toFixed(1)
                                , id: element.id
                                , img: element.img
                                , lable: element.lable
                                , like: element.like
                                , star1: element.star1
                                , star2: element.star2
                                , star3: element.star3
                                , star4: (parseInt(element.star4) + 1).toString()
                                , star5: element.star5
                                ,price: element.price
                            })
                        }
                        else {
                            var evaluatetemp = (parseInt(element.star1)) + parseInt(element.star2) + parseInt(element.star3) + parseInt(element.star4) + (parseInt(element.star5) + 1);
                            var numberStar = (parseInt(element.star1)) + parseInt(element.star2) * 2 + parseInt(element.star3) * 3 + parseInt(element.star4) * 4 + (parseInt(element.star5) + 1) * 5;
                            onSetChangeStarUpdate({
                                content: element.content
                                , dislike: element.dislike
                                , evaluate: (numberStar / evaluatetemp).toFixed(1)
                                , id: element.id
                                , img: element.img
                                , lable: element.lable
                                , like: element.like
                                , star1: element.star1
                                , star2: element.star2
                                , star3: element.star3
                                , star4: element.star4
                                , star5: (parseInt(element.star5) + 1).toString()
                                ,price: element.price
                            })
                        }
                    }
                });
            })
            .catch(error => {
                const errorMsg = error.message
            })
    }

    const onSubmitComment = () => {

        if (commentCustomer === '') {
            message.error('Vui lòng đưa ra đánh giá cho món ăn', 3);
        } else {
            axios.put('http://192.168.160.85:5000/restaurant/commentDish', {
                "phoneNumber": numberPhoneCustomer,
                "nameCustommer": nameCustomer,
                "comment": commentCustomer,
                "evaluate": starEvaluate,
                "overallReview": dishPic.evaluate.toString(),
                "nameDish": dishPic.lable,
                "date": moment(new Date()).format('DD-MM-YYYY'),
            })
                .then(res => {
                    // const bill = res.data
                    // setListBill(bill.results);
                    // console.log(dishPic.lable);
                })
                .catch(error => {
                    const errorMsg = error.message
                })
            onSetChangeStar();
        }
    }
    return (
        <div className='dish-menu'>
            <div className="containers">
                {dataDisd.map((dishs) => (
                    <div className="card" style={{ position: "relative" }}>
                        <div className="box" style={dishs.img} >
                            {dishPic ?
                                dishPic.lable == dishs.lable ?
                                    <div style={{ width: "85%", marginLeft: "5%", zIndex: "99" }}>
                                        <span style={{ fontSize: "18px", fontWeight: "bold", color: "white" }}>Đánh giá món ăn </span>
                                        {/* <hr /> */}
                                        <label style={{ color: "white", marginLeft: "10%" }}>Số điện thoại đặt hàng</label>
                                        <input style={{ width: "90%", height: "40px", borderRadius: "8px", paddingLeft: "5%", color: "black" }} onChange={(e) => setNumberPhoneCustomer(e.target.value)}></input>
                                        {evaluate ?
                                            <div>
                                                <div class="star-container" style={{ display: "flex", marginTop: "10%",justifyContent: "center" }}>
                                                    <input type="radio" name="star" id="one" />
                                                    <label for="one" onClick={() => setStarEvaluate('5')}>
                                                        {starEvaluate == '5' ?
                                                            <img src={star} style={{ width: "40px" }} />
                                                            :
                                                            <img src={star_black} style={{ width: "40px" }} />
                                                        }
                                                        {/* <a style={{color:"black"}}>Lưu Danh</a> */}
                                                    </label>
                                                    <input type="radio" name="star" id="two" />
                                                    <label for="two" onClick={() => setStarEvaluate('4')}>
                                                        {starEvaluate == '4' || starEvaluate == '5' ?
                                                            <img src={star} style={{ width: "40px" }} />
                                                            :
                                                            <img src={star_black} style={{ width: "40px" }} />
                                                        }
                                                    </label>
                                                    <input type="radio" name="star" id="three" />
                                                    <label for="three" onClick={() => setStarEvaluate('3')}>
                                                        {starEvaluate == '4' || starEvaluate == '5' || starEvaluate == '3'  ?
                                                            <img src={star} style={{ width: "40px" }} />
                                                            :
                                                            <img src={star_black} style={{ width: "40px" }} />
                                                        }
                                                    </label>
                                                    <input type="radio" name="star" id="four" />
                                                    <label for="four" onClick={() => setStarEvaluate('2')}>
                                                        {starEvaluate == '4' || starEvaluate == '5' ||starEvaluate == '3' || starEvaluate == '2' ?
                                                            <img src={star} style={{ width: "40px" }} />
                                                            :
                                                            <img src={star_black} style={{ width: "40px" }} />
                                                        }
                                                    </label>
                                                    <input type="radio" name="star" id="five" />
                                                    <label for="five" onClick={() => setStarEvaluate('1')}>
                                                        <img src={star} style={{ width: "40px" }} />
                                                    </label>

                                                </div>
                                                {starEvaluate == '1' ? <span style={{ fontSize: "60px", marginTop: "20px", marginLeft: "25%" }}>😭</span> :
                                                    starEvaluate == '2' ? <span style={{ fontSize: "60px", marginTop: "20px", marginLeft: "25%" }}>😮‍💨</span> :
                                                        starEvaluate == '3' ? <span style={{ fontSize: "60px", marginTop: "20px", marginLeft: "25%" }}>🤪</span> :
                                                            starEvaluate == '4' ? <span style={{ fontSize: "60px", marginTop: "20px", marginLeft: "25%" }}>😁</span> :
                                                                <span style={{ fontSize: "60px", marginTop: "20px", marginLeft: "25%" }}>😍</span>
                                                }
                                                <br />
                                                <label>Đánh giá </label>
                                                <input style={{ width: "90%", height: "40px", borderRadius: "8px", paddingLeft: "5%", color: "black" }} onChange={(e) => setCommentCustomer(e.target.value)}></input>
                                                <button onClick={() => setDishPic()} className='btn_danh_gia' style={{ width: "40%", height: "40px", borderRadius: "8px", padding: "1%", color: "black", fontSize: "16px", marginTop: "20px", float: "right", marginRight: "10%", backgroundColor: "#666" }} >Hủy</button>
                                                <button onClick={onSubmitComment} className='btn_danh_gia' style={{ width: "40%", height: "40px", borderRadius: "8px", padding: "1%", color: "black", fontSize: "16px", marginTop: "20px", float: "right", marginRight: "10%" }} >Đánh giá</button>
                                            </div>
                                            : <button onClick={() => setDishPic()} className='btn_danh_gia' style={{ width: "40%", height: "40px", borderRadius: "8px", padding: "1%", color: "black", fontSize: "16px", marginTop: "20px", float: "right", marginRight: "10%", backgroundColor: "#666" }} >Hủy</button>}
                                    </div>
                                    :
                                    <div className="content" >
                                        <h2>01</h2>
                                        <h3 style={{ color: "white" }}>{dishs.lable}</h3>
                                        <i style={{ color: "white" }}>{dishs.evaluate}</i><img src={star} style={{ width: "25px", marginTop: "-5%" }}></img>
                                        <p style={{ color: "white" }}>{dishs.content}</p>
                                        <a href="#modal-opened" class="link-1" id="modal-closed" onClick={() => onPicDish(dishs)}>Read More</a>
                                    </div>
                                :
                                <div className="content" >
                                    <h2>01</h2>
                                    <h3 style={{ color: "white" }}>{dishs.lable}</h3>
                                    <i style={{ color: "white" }}>{dishs.evaluate}</i><img src={star} style={{ width: "25px", marginTop: "-5%" }}></img>
                                    <p style={{ color: "white" }}>{dishs.content}</p>
                                    <a href="#modal-opened" class="link-1" id="modal-closed" onClick={() => onPicDish(dishs)}>Read More</a>
                                </div>
                            }
                        </div>
                    </div>
                ))}
                {/* {dishPic ?
                    <div style={{ display: "flex", color: "white", position: "absolute", padding: "3%", width: "800px", height: "600px", backgroundColor: "gray", backgroundImage: "url(http://www.vietfuntravel.com.vn/image/data/Ha-Noi/am-thuc-ha-noi/tat-ca-nha-hang-co-khong-gian-dep-ha-noi-1.jpg)", borderRadius: "10px" }}>
                        <div style={{ width: "40%" }}>
                            <span style={{ fontSize: "26px", fontWeight: "bold", color: "white" }}>Đánh giá món ăn </span>
                            <hr />
                            <label>Số điện thoại đặt hàng</label>
                            <input style={{ width: "90%", height: "40px", borderRadius: "8px", paddingLeft: "5%", color: "black" }} onChange={(e) => setNumberPhoneCustomer(e.target.value)}></input>
                            {evaluate ?
                                <div>
                                    <div class="star-container" style={{ display: "flex", marginTop: "10%" }}>
                                        <input type="radio" name="star" id="one" />
                                        <label for="one" onClick={() => setStarEvaluate('5')}>
                                            <svg class="star">
                                                <use xlinkHref="#star" />
                                            </svg>
                                        </label>
                                        <input type="radio" name="star" id="two" />
                                        <label for="two" onClick={() => setStarEvaluate('4')}>
                                            <svg class="star">
                                                <use xlinkHref="#star" />
                                            </svg>
                                        </label>
                                        <input type="radio" name="star" id="three" />
                                        <label for="three" onClick={() => setStarEvaluate('3')}>
                                            <svg class="star">
                                                <use xlinkHref="#star" />
                                            </svg>
                                        </label>
                                        <input type="radio" name="star" id="four" />
                                        <label for="four" onClick={() => setStarEvaluate('2')}>
                                            <svg class="star">
                                                <use xlinkHref="#star" />
                                            </svg>
                                        </label>
                                        <input type="radio" name="star" id="five" />
                                        <label for="five" onClick={() => setStarEvaluate('1')}>
                                            <svg class="star">
                                                <use xlinkHref="#star" />
                                            </svg>
                                        </label>

                                    </div>
                                    {starEvaluate == '1' ? <span style={{ fontSize: "60px", marginTop: "20px", marginLeft: "25%" }}>😭</span> :
                                        starEvaluate == '2' ? <span style={{ fontSize: "60px", marginTop: "20px", marginLeft: "25%" }}>😮‍💨</span> :
                                            starEvaluate == '3' ? <span style={{ fontSize: "60px", marginTop: "20px", marginLeft: "25%" }}>🤪</span> :
                                                starEvaluate == '4' ? <span style={{ fontSize: "60px", marginTop: "20px", marginLeft: "25%" }}>😁</span> :
                                                    <span style={{ fontSize: "60px", marginTop: "20px", marginLeft: "25%" }}>😍</span>
                                    }
                                    <br />
                                    <label>Đánh giá </label>
                                    <input style={{ width: "90%", height: "40px", borderRadius: "8px", paddingLeft: "5%", color: "black" }} onChange={(e) => setCommentCustomer(e.target.value)}></input>
                                    <button onClick={() => setDishPic()} className='btn_danh_gia' style={{ width: "40%", height: "40px", borderRadius: "8px", padding: "1%", color: "black", fontSize: "16px", marginTop: "20px", float: "right", marginRight: "10%", backgroundColor: "#666" }} >Hủy</button>
                                    <button onClick={onSubmitComment} className='btn_danh_gia' style={{ width: "40%", height: "40px", borderRadius: "8px", padding: "1%", color: "black", fontSize: "16px", marginTop: "20px", float: "right", marginRight: "10%" }} >Đánh giá</button>
                                </div>
                                : <button onClick={() => setDishPic()} className='btn_danh_gia' style={{ width: "40%", height: "40px", borderRadius: "8px", padding: "1%", color: "black", fontSize: "16px", marginTop: "20px", float: "right", marginRight: "10%", backgroundColor: "#666" }} >Hủy</button>}
                        </div>

                        <div className='card_dish_oder' style={{ width: "50%" }}>
                            <div className="card" style={{ position: "relative" }}>
                                <div className="box" style={dishPic.img} >
                                    <div className="content" >
                                        <h3 style={{ color: "white" }}>{dishPic.lable}</h3>
                                        <i style={{ color: "white" }}>{dishPic.evaluate}</i><img src={star} style={{ width: "25px", marginTop: "-5%" }}></img>
                                        <p style={{ color: "white" }}>{dishPic.content}</p>
                                        <a href="#modal-opened" class="link-1" id="modal-closed" onClick={() => onPicDish(dishPic)}>Read More</a>


                                        <div class="star-source">
                                            <svg>
                                                <linearGradient x1="50%" y1="5.41294643%" x2="87.5527344%" y2="65.4921875%" id="grad">
                                                    <stop stop-color="#bf209f" offset="0%"></stop>
                                                    <stop stop-color="#d62a9d" offset="60%"></stop>
                                                    <stop stop-color="#ED009E" offset="100%"></stop>
                                                </linearGradient>
                                                <symbol id="star" viewBox="153 89 106 108">
                                                    <polygon id="star-shape" stroke="url(#grad)" stroke-width="5" fill="currentColor" points="206 162.5 176.610737 185.45085 189.356511 150.407797 158.447174 129.54915 195.713758 130.842203 206 95 216.286242 130.842203 253.552826 129.54915 222.643489 150.407797 235.389263 185.45085"></polygon>
                                                </symbol>
                                            </svg>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> :
                    ""} */}
            </div>
        </div>

    )
}

export default Dish
