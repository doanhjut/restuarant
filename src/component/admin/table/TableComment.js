import axios from 'axios';
import React, { useEffect, useState } from 'react'

function TableComment() {
    const [listDataTableComment, setListDataTableComment] = useState([]);
    useEffect(() => {
        axios.get('http://192.168.160.85:5000/restaurant/comments')
            .then(res => {
                setListDataTableComment(res.data.results);
            })
            .catch(error => {
                const errorMsg = error.message
            })

    }, []);
    return (
        <div className='table'>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Số điện thoại đặt bàn</th>
                        <th>Đánh giá</th>
                        <th>Bính luận</th>
                        <th>Đồng ý</th>
                        <th>Không đồng ý</th>
                    </tr>
                </thead>
                <tbody>
                    {listDataTableComment.map((commentDishs, index) => (
                        <tr>
                        <td>{index+1}</td>
                        <td>{commentDishs.phoneNumber}</td>
                        <td>{commentDishs.evaluate}</td>
                        <td>{commentDishs.comment}</td>
                        <td>{commentDishs.like}</td>
                        <td>{commentDishs.dislike}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableComment
