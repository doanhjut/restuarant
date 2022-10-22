import axios from 'axios';
import React, { useEffect, useState } from 'react'

function TableDish() {
    const [listDataTableDish, setListDataTableDish] = useState([]);
    useEffect(() => {
        axios.get('http://192.168.160.85:5000/restaurant/commentDish')
            .then(res => {
                setListDataTableDish(res.data.results);
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
                        <th>người đặt bàn</th>
                        <th>Tên ngón ăn</th>
                        <th>Bình luận</th>
                        <th>Đánh giá</th>
                        <th>Đánh giá chung</th>
                        <th>Ngày đánh giá</th>
                    </tr>
                </thead>
                <tbody>
                    {listDataTableDish.map((commentDishs, index) => (
                        <tr>
                        <td>{index+1}</td>
                        <td>{commentDishs.nameCustommer}</td>
                        <td>{commentDishs.nameDish}</td>
                        <td>{commentDishs.comment}</td>
                        <td>{commentDishs.evaluate}</td>
                        <td>{commentDishs.overallReview}</td>
                        <td>{commentDishs.date}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableDish
