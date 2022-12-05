import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
function TableBook() {
    const [listDataTableDish, setListDataTableDish] = useState([]);
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const [onChangeTime, setOnChangeTime] = useState(moment(new Date()).format('DD-MM-YYYY'))
    useEffect(() => {
        axios.get('http://192.168.160.85:5000/restaurant/book')
            .then(res => {
                setListDataTableDish(res.data.results);
            })
            .catch(error => {
                const errorMsg = error.message
            })

    }, []);
    const onChangeTimeBook = (date, dateString) => {
        // console.log(dateString);
        console.log(moment(date).format('DD-MM-YYYY'));
        setOnChangeTime(moment(date).format('DD-MM-YYYY'))
    }
    const onDeleteItemBill = (itemBill) => {
        console.log(itemBill);
        const id = itemBill.id;
        axios.delete('http://192.168.160.85:5000/restaurant/book/' + id)
            .then(res => {
            })
            .catch(error => {
                const errorMsg = error.message
            })
    }
    return (
        <div className='table'>
            <DatePicker defaultValue={moment(new Date(), dateFormatList[0])} format={dateFormatList} onChange={onChangeTimeBook} />
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Số bàn</th>
                        <th>Tên người đặt bàn</th>
                        <th>Số điện thoại liên hệ</th>
                        <th>Thời gian </th>
                        <th>Hành động </th>
                    </tr>
                </thead>
                <tbody>
                    {listDataTableDish.map((itemBill, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{itemBill.name}</td>
                            <td>{itemBill.nameCustomer}</td>
                            <td>{itemBill.phoneNumber}</td>
                            <td>{itemBill.status}</td>
                            <td >
                                <button style={{ width: "90px", margin: "10px", backgroundColor: "rgb(136, 136, 206)", marginLeft: "35%" }} onClick={() => onDeleteItemBill(itemBill)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableBook
