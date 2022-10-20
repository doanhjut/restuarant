import React, { useEffect, useState } from 'react'
import './dish.css';
import background2 from "../../../image/background2.jpg"
import dish1 from "../../../image/medu-dish/menu1.png"
import dish2 from "../../../image/medu-dish/menu2.png"
import dish3 from "../../../image/medu-dish/menu3.png"
import dish4 from "../../../image/medu-dish/menu4.png"
import dish5 from "../../../image/medu-dish/menu5.png"
import star from "../../../image/star.png"
import io from "socket.io-client";
import Menu from '../../menu/Menu';
const socket = io.connect("http://192.168.160.85:5000");

function Dish() {
    const dataDisd = [
        {
            "lable": "Phở bò Hà Thành",
            "content": "Bánh phở mềm mềm, nước dùng ngọt đậm vị xương ống heo, hành ngò thơm nức mũi, thịt ăn kèm đầy bát chắc chắn sẽ làm b...",
            "img": { backgroundImage: 'url(https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250313281452.jpg)' },
            "evaluate": 3.5
        },
        {
            "lable": "Bún thang",
            "content": "Món ăn mang hương vị thanh tao, thể hiện tròn vẹn nét tinh hoa ẩm thực của người dân Hà thành chế biến tỉ mỉ, công phu.",
            "img": { backgroundImage: 'url(https://bep360.net/wp-content/uploads/2021/06/cach-nau-bun-thang.jpg)' },
            "evaluate": 3.6
        },
        {
            "lable": "Phở bát đá",
            "content": "Hương vị món phở bò bát đá hấp dẫn với đặc trưng là phần thịt mềm bánh phở dẻo cùng với vị nước dùng cau cau của gừng...",
            "img": { backgroundImage: 'url(https://noiphodien123.vn/wp-content/uploads/2022/07/pho-de-bat-da-bang-liet-okeconde.jpg)' },
            "evaluate": 3.7
        },
        {
            "lable": "Phở tôm hùm",
            "content": "Từng sớ tôm ngọt và dai làm mình mắc ghiền thiệt sự . Đầu tôm có gạch và thịt luôn nha nên ăn 2ng được chứ ko phải th...",
            "img": { backgroundImage: 'url(https://hotel84.com/hotel84-images/news/img1/pho-tom-hum-bat-da.jpg)' },
            "evaluate": 3.8
        },
        {
            "lable": "Cua lột sốt chanh dây",
            "content": "Con cua lột khá bự ăn nguyên con cua cùng vs cái sốt chua chua ngọt ngọt.",
            "img": { backgroundImage: 'url(https://haisancoto.com/uploads/images/tom-su-lam-mon-ngon.jpg)' },
            "evaluate": 3.9
        },
        {
            "lable": "Tôm sốt chanh dây",
            "content": "Món tôm sốt chanh dây có màu vàng của tôm và chanh dây nhìn thật đẹp mắt. Tôm vẫn giữ được độ dai và ngọt hòa quyện ...",
            "img": { backgroundImage: 'url(https://cdn.tgdd.vn/Files/2021/08/11/1374539/2-cach-lam-mon-tom-sot-chanh-day-thom-ngon-la-mieng-202108111632179470.jpg)' },
            "evaluate": 4.0
        },
        {
            "lable": "Phở bát đá",
            "content": "Hương vị món phở bò bát đá hấp dẫn với đặc trưng là phần thịt mềm bánh phở dẻo cùng với vị nước dùng cau cau của gừng...",
            "img": { backgroundImage: 'url(https://noiphodien123.vn/wp-content/uploads/2022/07/pho-de-bat-da-bang-liet-okeconde.jpg)' },
            "evaluate": 3.7
        },
        {
            "lable": "Phở tôm hùm",
            "content": "Từng sớ tôm ngọt và dai làm mình mắc ghiền thiệt sự . Đầu tôm có gạch và thịt luôn nha nên ăn 2ng được chứ ko phải ...",
            "img": { backgroundImage: 'url(https://hotel84.com/hotel84-images/news/img1/pho-tom-hum-bat-da.jpg)' },
            "evaluate": 3.8
        },
        {
            "lable": "Cua lột sốt chanh dây",
            "content": "Con cua lột khá bự ăn nguyên con cua cùng vs cái sốt chua chua ngọt ngọt.",
            "img": { backgroundImage: 'url(https://haisancoto.com/uploads/images/tom-su-lam-mon-ngon.jpg)' },
            "evaluate": 3.9
        },
        {
            "lable": "Tôm sốt chanh dây",
            "content": "Món tôm sốt chanh dây có màu vàng của tôm và chanh dây nhìn thật đẹp mắt. Tôm vẫn giữ được độ dai và ngọt hòa quyện ....",
            "img": { backgroundImage: 'url(https://cdn.tgdd.vn/Files/2021/08/11/1374539/2-cach-lam-mon-tom-sot-chanh-day-thom-ngon-la-mieng-202108111632179470.jpg)' },
            "evaluate": 4.0
        },
    ];
    // const [dish, setDish] = useState(dataDisd[0]);
    // // const [count,setCount] = useState(0);
    // useEffect(() => {
    //     var temp = 0;
    //     socket.on("change-page-dishs", (data) => {
    //         if (data.action == "left") {
    //             if (temp == 0) {
    //                 temp = 5;
    //                 var newDish = dataDisd[temp];
    //                 setDish(newDish);
    //             } else {
    //                 temp = temp - 1;
    //                 var newDish = dataDisd[temp];
    //                 setDish(newDish);
    //             }
    //         } else {
    //             if (temp == 5) {
    //                 temp = 0;
    //                 var newDish = dataDisd[temp];
    //                 setDish(newDish);
    //             } else {
    //                 temp = temp + 1;
    //                 var newDish = dataDisd[temp];
    //                 setDish(newDish);
    //             }
    //         }
    //     });
    // }, [socket]);
    // useEffect(() => {
    //     var temp = 0;
    //     setInterval(() => {
    //         if (temp < 6) {
    //             var newDish = dataDisd[temp]
    //             setDish(newDish);
    //             temp = temp + 1;
    //             // console.log(temp);
    //         } else {
    //             var newDish = dataDisd[0]
    //             setDish(newDish);
    //             temp = 0;
    //         }
    //     }, 5000);
    // }, [])
    console.log(dataDisd);
    const background = { backgroundImage: 'url(https://cdn.daynauan.info.vn/wp-content/uploads/2019/05/suon-non-kho-nuoc-dua.jpg)' }
    return (
        // <div className="dish">
        //     <img src={background2} className="background-img"></img>
        //     <div className="dish-content">

        //         <div className="restaurant-dish-menu row">
        //             <div className="restaurant-dish-booked col-5">
        //                 <label>{dish.lable}</label>
        //                 <p>{dish.content}</p>
        //             </div>
        //             <div className='col-7'>
        //                 <img src={dish.img}></img>
        //             </div>
        //         </div>

        //     </div>


        // </div>

        <div className='dish-menu'>
            <div className="containers">
                {dataDisd.map((dishs) => (
                    <div className="card">
                        <div className="box" style={ dishs.img } >
                        {/* <div className="box"> */}
                            <div className="content">
                                <h2>01</h2>
                                <h3 style={{color:"white"}}>{dishs.lable}</h3>
                                <i style={{color:"white"}}>{dishs.evaluate}</i><img src={star} style={{ width: "25px", marginTop: "-5%" }}></img>
                                <p style={{color:"white"}}>{dishs.content}</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                ))}
                {/* <div className="card">
                    <div className="box" style={background}>
                        <div className="content">
                            <h2>01</h2>
                            <h3>Card One</h3>
                            <i>3.5</i><img src={star} style={{ width: "25px", marginTop: "-5%" }}></img>
                            <p>Canh dưa chua thịt quay ngon là khi vị canh không bị mặn, có độ chua vừa phải, thịt quay không quá dai, cải chua có độ dai giòn dễ chịu.?</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2>01</h2>
                            <h3>Card One</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2>01</h2>
                            <h3>Card One</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2>01</h2>
                            <h3>Card One</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2>01</h2>
                            <h3>Card One</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2>01</h2>
                            <h3>Card One</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2>01</h2>
                            <h3>Card One</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2>02</h2>
                            <h3>Card Two</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2>03</h2>
                            <h3>Card Three</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>

    )
}

export default Dish
