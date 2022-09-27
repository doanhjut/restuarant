import React from 'react'
import logo_star from "../../../image/logo-star.png"
import star from "../../../image/star.png"
import avata1 from "../../../image/avata1.png"
import like from "../../../image/like.png"
import dislike from "../../../image/dislike.png"


function Comment() {
    const listCommentUser=[
        {
            img:"luudanh.png",
            time:"20/04/2002",
            evaluate:"4",
            content:"Tôi đã có những trải nghiệm tuyệt vời",
            like:"5",
            dislike:"0"
        },
    ]
    return (
        <div className='comment'>
            <div className='lable-commnet'>
                <div className='logo'>
                    <img src={logo_star}></img>
                    <p>Đánh giá</p>
                </div>
                <hr/>
            </div>
            <div className='list-comment'>
                <div>
                    <div className='information-customer-introduce'>
                        <img src={avata1}></img>
                        <div className='infor'>
                            <b>Lưu Danh</b>
                            <br></br>
                            <i>20/04/2002</i>
                        </div>
                        <div className='introduce-star'>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                        </div>
                    </div>
                    <div className='content-comment'>
                        <p>Tôi đã có những trải nghiệm tuyệt vời!</p>
                    </div>
                    <div className='number-of-favorites'>
                        <a>5</a>
                        <img src={like}></img>
                        <a>0</a>
                        <img src={dislike}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment
