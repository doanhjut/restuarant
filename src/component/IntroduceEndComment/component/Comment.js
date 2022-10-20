import React, { useEffect, useState } from 'react'
import logo_star from "../../../image/logo-star.png"
import star from "../../../image/star.png"
import avata1 from "../../../image/avata1.png"
import like from "../../../image/like.png"
import dislike from "../../../image/dislike.png"
import axios from 'axios'
import io from "socket.io-client";
const socket = io.connect("http://192.168.160.85:5000");
function Comment() {
    const [commentCustomer, setCommetCustomer] = useState('');
    const [stars, setStars] = useState(['1', '2', '3', '4']);
    const [commentNameCustomer, setCommetNameCustomer] = useState('');
    const [commentPhoneCustomer, setCommetPhoneCustomer] = useState('');

    const [listCommentUser, setListCommentUser] = useState([
        {
            time: "20/04/2002",
            evaluate: "4",
            comment: "Tôi đã có những trải nghiệm tuyệt vời",
            like: "5",
            dislike: "0"
        }
    ])

    const changeNumberStar = (action) => {
        if (action === 'plus') {
            if (stars.length < 6) {
                setStars([...stars, '1']);
            }
        } else {
            if (stars.length > 1) {
                var dataTemp = stars;
                dataTemp.splice(0, 1);
                setStars([...dataTemp]);
            }
        }

    }
    const saveCommentCustomer = () => {
        console.log("commentNameCustomer", commentNameCustomer);
        console.log("commentPhoneCustomer", commentPhoneCustomer);
        console.log("commentCustomer", commentCustomer);
        axios.put('http://192.168.160.85:5000/restaurant/comments', {
            phoneNumber: commentPhoneCustomer,
            comment: commentCustomer,
            evaluate: stars.length
        })
            .then(res => {
                console.log("oke");
            })
            .catch(error => {
                const errorMsg = error.message
            })
    }
    useEffect(() => {
        axios.get('http://192.168.160.85:5000/restaurant/comments')
            .then(res => {
                setListCommentUser([...listCommentUser.concat(res.data.results)])
                // console.log(listCommentUser.concat(res.data.results));
            })
            .catch(error => {
                const errorMsg = error.message
            })
    }, [commentCustomer])
    useEffect(() => {
        socket.on("reset_comment", () => {
            console.log("oke");
            setListCommentUser([{
                time: "20/04/2002",
                evaluate: "4",
                comment: "Tôi đã có những trải nghiệm tuyệt vời",
                like: "5",
                dislike: "0"
            }])
            axios.get('http://192.168.160.85:5000/restaurant/comments')
                .then(res => {
                    setListCommentUser([...listCommentUser.concat(res.data.results)])
                    // console.log(listCommentUser.concat(res.data.results));
                })
                .catch(error => {
                    const errorMsg = error.message
                })
        });
    }, [socket]);
    return (
        <div className='comment'>
            <div className='lable-commnet'>
                <div className='logo'>
                    <img src={logo_star}></img>
                    <p>Đánh giá</p>

                </div>
                <hr />
            </div>

            <div className='list-comment'>
                <div style={{ height: "370px", overflow: "auto" }}>
                    {listCommentUser.map((comment) => (
                        <div>
                            <div className='information-customer-introduce' style={{ marginTop: "2%" }}>
                                <img src={avata1}></img>
                                <div className='infor'>
                                    <b>Khách hàng</b>
                                    <br></br>
                                    <i>{comment.time}</i>
                                </div>
                                {comment.evaluate=='1'?
                                <div className='introduce-star'>
                                    <img src={star}></img>
                                </div>:
                                comment.evaluate=='2'?
                                <div className='introduce-star'>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </div>:
                                comment.evaluate=='3'?
                                <div className='introduce-star'>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </div>:
                                comment.evaluate=='4'?
                                <div className='introduce-star'>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </div>:
                                <div className='introduce-star'>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </div>
                                }

                            </div>
                            <div className='content-comment'>
                                <p>{comment.comment}</p>
                            </div>
                            <div className='number-of-favorites'>
                                <a>{comment.like}</a>
                                <img src={like}></img>
                                <a>{comment.dislike}</a>
                                <img src={dislike}></img>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='popup-input'>
                    <div class="section full-height">
                        <input class="modal-btn" type="checkbox" id="modal-btn" name="modal-btn" />
                        {/* <label for="modal-btn">Open Modal <i class="uil uil-expand-arrows"></i></label> */}
                        <div style={{ width: "100%" }} class="modal-btn" for="modal-btn">
                            <input type='text' className='content-text' onChange={(e) => setCommetCustomer(e.target.value)}></input>
                            <label for="modal-btn"><i class="fa-solid fa-share"></i></label>

                        </div>
                        {/* <input class="modal-btn" type="checkbox" id="modal-btn" name="modal-btn" /> */}
                        {/* <label for="modal-btn">Open Modal <i class="uil uil-expand-arrows"></i></label> */}

                        <div class="modal">
                            <div class="modal-wrap" style={{ overflow: "initial" }}>
                                <div class="container">
                                    <div class="part card-details" style={{width:"60%"}}>
                                        <br />
                                        <h3>
                                            Credit Card Details
                                        </h3>
                                        <form action="" if="cc-form" autocomplete="off">
                                            <div class="group card-number">
                                                <label for="first">Đánh giá</label>

                                                <div className='introduce-star'>
                                                    <i class="fa-solid fa-minus" style={{ margin: "5%" }} onClick={() => changeNumberStar('minus')}></i>
                                                    {stars.map((stars) => (
                                                        <img src={star}></img>
                                                    ))}
                                                    <i class="fa-solid fa-plus" style={{ margin: "5%" }} onClick={() => changeNumberStar('plus')}></i>
                                                </div>

                                            </div>
                                            <div class="group card-name">
                                                <label for="name">Tên khách hàng</label>
                                                <input type="text" id="name" class="" maxlength="20" placeholder="Name Surname" onChange={(e) => setCommetNameCustomer(e.target.value)} />
                                            </div>
                                            <div class="group card-expiry">
                                                <div class="input-item expiry">
                                                    <label for="expiry">Số điện thoại đặt bàn</label>
                                                    <input type="text" class="month" id="expiry" placeholder="02" onChange={(e) => setCommetPhoneCustomer(e.target.value)} />
                                                </div>
                                                <div class="input-item csv">
                                                    <label for="csv">Nội dung đánh giá</label>
                                                    <textarea type="text" class="csv" value={commentCustomer} onChange={(e) => setCommetCustomer(e.target.value)} />
                                                </div>
                                            </div>
                                            <div class="grup submit-group">
                                                <span class="arrow"></span>
                                                <label for="modal-btn" onClick={saveCommentCustomer} style={{ width: "100px", marginTop: "10%", float: "right", marginRight: "30%" ,border:"1px solid gray",backgroundColor:"orange",height:"35px",borderRadius:"10px",padding:"2% 0 0 8%"}}>Bình luận</label>
                                            </div>
                                        </form>
                                        {/* <input type="submit" class="submit" value="Bình luận"  /> */}
                                    </div>

                                    <div class="part bg">

                                        <img src='https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg'></img>
                                    </div>
                                    <label for="modal-btn"><i class="fa-solid fa-xmark" style={{ marginLeft: "0%", }}></i></label>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment
