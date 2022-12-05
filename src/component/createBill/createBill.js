
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import moment, { months } from 'moment';
import React from 'react';
import './createBill.css';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import axios from "axios";

function CreateBill() {
    const inputRef = useRef(null);
    const random_code = (Math.random() + 1).toString(36).substring(1);
    const date = moment(new Date()).format("MMMM DD ,YYYY");
    const [listBill,setListBill] = useState([]);
    const { Option } = Select;
    const [listDataTableDish, setListDataTableDish] = useState([]);
    const [picDish, setPicDish] = useState({
        price:0
    });
    const [numberDish, setNumberDish] = useState(0);
    const [total, setTotal] = useState(0);
    const [customerPrice,setCustomerPrice] = useState(0);
    const [nameCustomer,setNameCustomer] = useState("");
    const [numberPhoneCustomer,setNumberPhoneCustomer] = useState("");

    const handleChange = (value) => {
        // console.log(`selected ${value}`);
        listDataTableDish.forEach(dish => {
            if (dish.lable==value) {
                setPicDish(dish);
            }
        });
        if(value==""){
            setPicDish({
                price:0
            })
        }
    };
    const printDocument = () => {
        html2canvas(inputRef.current).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "JPEG", 0, 10);
            pdf.save("download.pdf");
        });
    };

    const saveDishItem = () =>{

        setListBill([...listBill,{
            nameDish:picDish.lable,
            rate: picDish.price,
            amount: numberDish

        }])
        var totalTemp =0;
        listBill.forEach(element => {
            totalTemp=totalTemp+element.rate*element.amount
        });
        totalTemp=totalTemp+numberDish*picDish.price
        setTotal(totalTemp)
        setPicDish({
            price:0
        })
    }

    const onRemoveItemDish = (index) =>{
        var totalTemp =0;
        var listBillTemp = listBill;
        listBillTemp.splice(index, 1);
        setListBill([...listBillTemp]);
        listBillTemp.forEach(itemDish => {
            totalTemp=totalTemp+itemDish.rate*itemDish.amount
        });
        setTotal(totalTemp)
        setPicDish({
            price:0
        })
    }
    const saveBill = () =>{
        var bill = "";
        listBill.forEach(itemDish => {
            bill=bill+itemDish.nameDish
        });
        axios.put('http://192.168.160.85:5000/restaurant/bill',{
            "name": random_code,
            "status": moment(new Date()).format("DD-MM-YYYY"),
            "nameCustomer": nameCustomer,
            "phoneNumber": numberPhoneCustomer,
            "dish": bill,
            "pay": total.toString(),
            "date": moment(new Date()).format("DD-MM-YYYY")
        })
            .then(res => {
                // setListDataTableDish(res.data.results);
                console.log(res.data.results);
            })
            .catch(error => {
                const errorMsg = error.message
            })
    }
    useEffect(() => {
        axios.get('http://192.168.160.85:5000/restaurant/dishs')
            .then(res => {
                setListDataTableDish(res.data.results);
                // console.log(res.data.results);
            })
            .catch(error => {
                const errorMsg = error.message
            })

    }, [listBill,picDish])
    return (
        <div className="create_bill_content">
            <div className='create_bill' id="divToPrint" ref={inputRef}>
                <header>
                    <h1>BILL THANH TOÁN</h1>
                    <address>
                        <p>Hương Việt </p>
                        <p>46 Ngõ 322 đường Mỹ Đình
                            <br />Nam Từ Liên, Hà Nội</p>
                        <p>08688-566-46</p>
                    </address>
                </header>
                <article>
                    <h1>Recipient</h1>
                    <address>
                        <p>Hóa đơn thanh toán<br />Hương Việt restuarant</p>
                    </address>
                    <table className="meta">
                        <tr>
                            <th><span>Invoice #</span></th>
                            <td><span>{random_code}</span></td>
                        </tr>
                        <tr>
                            <th><span>Date</span></th>
                            <td><span>{date}</span></td>
                        </tr>
                        <tr>
                            <th><span>Amount Due</span></th>
                            <td><span id="prefix">$</span><span>600.00</span></td>
                        </tr>
                    </table>
                    <table className="inventory">
                        <thead>
                            <tr>
                                <th><span >STT</span></th>
                                <th><span >Tên món</span></th>
                                <th><span >Đơn giá</span></th>
                                <th><span >Số lượng</span></th>
                                <th><span >Thành tiền</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {listBill.map((itemDish, index) => (
                                <tr>
                                    <td><a className="cut" onClick={()=>onRemoveItemDish(index)}>-</a><span >{index + 1}</span></td>
                                    <td><span >{itemDish.nameDish}</span></td>
                                    <td><span>{itemDish.rate.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span></td>
                                    <td><span>{itemDish.amount}</span></td>
                                    <td><span>{(itemDish.rate * itemDish.amount).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span></td>
                                </tr>
                            ))}
                            <tr>
                                <td><a className="cut">-</a>
                                </td>
                                <td><span>
                                    <Select
                                        mode="multiple"
                                        style={{ width: '100%' }}
                                        placeholder="select dish"
                                        defaultValue={[]}
                                        onChange={handleChange}
                                        optionLabelProp="label"
                                    >
                                        {
                                            listDataTableDish?.map((dishItem, key) => (
                                                <Option value={dishItem.lable} key={key} label={dishItem.lable}>
                                                    <div className="demo-option-label-item">
                                                        {dishItem.lable}
                                                    </div>
                                                </Option>
                                            ))
                                        }
                                    </Select>
                                </span></td>
                                <td><span>{(picDish.price)?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span></td>
                                <td><input type="number" style={{width:"100%",paddingLeft:"20%",border:"0px"}} value={numberDish} onChange={(e)=>setNumberDish(e.target.value)}></input></td>
                                <td><span>{(picDish.price*numberDish)?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <a className="add" style={{float:'right',width:"50px",height:"25px",paddingTop:"7px"}} onClick={saveDishItem}>+</a>
                    <table className="balance">
                        <tr>
                            <th><span>Tổng tiền</span></th>
                            <td>{total?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                        </tr>
                        <tr>
                            <th><span>Số tiền đã trả</span></th>
                            <td><input type="text" style={{width:"100%",border:"0px",backgroundColor:"rgb(210, 217, 248)",height:"30px",borderRadius:"10px",paddingLeft:"15%"}} value={customerPrice} onChange={(e)=>setCustomerPrice(e.target.value)}></input><span data-prefix>VND</span></td>
                        </tr>
                        <tr>
                            <th><span>Dư</span></th>
                            <td><span>{(customerPrice-total).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span></td>
                        </tr>
                    </table>
                    <table className="balance" style={{float:"left"}}>
                        <tr>
                            <th><span>Tên KH</span></th>
                            <td><input type="text" style={{width:"100%",border:"0px",backgroundColor:"rgb(210, 217, 248)",height:"30px",borderRadius:"10px",paddingLeft:"15%"}} value={nameCustomer} onChange={(e)=>setNameCustomer(e.target.value)}></input></td>
                        </tr>
                        <tr>
                            <th><span>SĐT</span></th>
                            <td><input type="text" style={{width:"100%",border:"0px",backgroundColor:"rgb(210, 217, 248)",height:"30px",borderRadius:"10px",paddingLeft:"15%"}} value={numberPhoneCustomer} onChange={(e)=>setNumberPhoneCustomer(e.target.value)}></input></td>
                        </tr>
                    </table>
                </article>
                <a className="add" style={{float:'right',width:"100px",height:"35px",paddingTop:"10px"}} onClick={saveBill}>Lưu</a>
                <aside>
                    <h1><span>Hương Việt</span></h1>
                    <div>
                        <p>khoản thanh toán đã bao gồm VAT 10%.</p>
                    </div>
                </aside>
            </div>
            <div className="mb5">
                <button onClick={printDocument}>Print</button>
            </div>
        </div>
    );
};
export default CreateBill;
// 