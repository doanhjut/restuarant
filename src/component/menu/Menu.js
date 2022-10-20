import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './menu.css'
function Menu() {
    const [pages,setPages] = useState(['/'])
    const navigate = useNavigate();
    const onChangeTabs = (action) => {
        navigate(action);
    }
    useEffect(()=>{
        console.log(pages);
        onChangeTabs(pages)
    },[pages])
    return (
        <div className='menu'>
            <nav>
                <a onClick={()=>setPages('/')}>Trang chủ</a>
                <a onClick={()=>setPages('/dishs')} >Menu</a>
                <a onClick={()=>setPages('/view')}>Đặt bàn</a>
                <a >Địa chỉ</a>
                <a >Liên hệ</a>
                <div class="animation start-home" style= {pages=='/' ? {	width: "100px",left: "0",backgroundColor: "#1abc9c"}: 
                                                         pages=='/dishs' ? {	width: "110px",left: "100px",backgroundColor: "#e74c3c"} :
                                                         {width: "100px",left: "210px",backgroundColor: "#3498db"}} ></div>
            </nav>
        </div>
    )
}

export default Menu
