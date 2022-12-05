import axios from 'axios';
import React, { useEffect, useState } from 'react'

function TableDishs(props) {
    const [listDataTableDish, setListDataTableDish] = useState([]);
    useEffect(() => {
        axios.get('http://192.168.160.85:5000/restaurant/dishs')
            .then(res => {
                setListDataTableDish(res.data.results);
            })
            .catch(error => {
                const errorMsg = error.message
            })

    }, []);
    const onChangeItemDish = (item) =>{
        // console.log(item);
        props.onChangeItemDish(item)
    }
    const onDeleteItemDish = (item) =>{
        props.onDeleteItemDish(item)
    }

    return (
        <div className='table'>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên món ăn</th>
                        <th>Ghi chú</th>
                        <th>Đánh giá</th>
                        <th>Ảnh </th>
                        <th>Hành động </th>
                    </tr>
                </thead>
                <tbody>
                    {listDataTableDish.map((commentDishs, index) => (
                        <tr>
                        <td>{index+1}</td>
                        <td>{commentDishs.lable}</td>
                        <td>{commentDishs.content}</td>
                        <td>{commentDishs.evaluate}</td>
                        <td><img style={{width:"200px",height:"100px"}} src={commentDishs.img}></img></td>
                        <td className='action_dish'>
                            <button  onClick={()=>onChangeItemDish(commentDishs)}>Sửa</button>
                            <button onClick={()=>onDeleteItemDish(commentDishs)}>Xóa</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableDishs
