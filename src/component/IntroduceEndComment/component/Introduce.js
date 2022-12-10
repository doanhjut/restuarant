import React, { useEffect, useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import background_introduce from "../../../image/background-introduce.png"
import background_introduce1 from "../../../image/background-introduce1.png"
import Card from './Card';
import Comment from './Comment';
import { DatePicker, Space, message } from 'antd';
import axios from 'axios';
import background_introduce_1 from "../../../image/introducPage/background_introduce/image1.jpg"
import background_introduce_2 from "../../../image/introducPage/background_introduce/image2.jpg"
import background_introduce_3 from "../../../image/introducPage/background_introduce/image3.jpg"
import background_introduce_4 from "../../../image/introducPage/background_introduce/image4.jpg"
import trade_story_1 from "../../../image/introducPage/trade_story/image1.jpg"
import trade_story_2 from "../../../image/introducPage/trade_story/image2.jpg"
import trade_story_3 from "../../../image/introducPage/trade_story/image3.jpg"
import trade_story_4 from "../../../image/introducPage/trade_story/image4.jpg"
import content_1 from "../../../image/introducPage/content/image1.jpg"
import content_2 from "../../../image/introducPage/content/image2.jpg"
import content_3 from "../../../image/introducPage/content/image3.jpg"
import content_4 from "../../../image/introducPage/content/image4.jpg"
function Dish() {
    const [blogPageIntro, setBlogPageIntro] = useState();
    const [newAddress, setNewAddress] = useState();
    const [newContent, setNewContent] = useState();
    const [listImageBackroungIntroduce, setListImageBackroungIntroduce] = useState([background_introduce_1, background_introduce_2, background_introduce_3, background_introduce_4]);
    const [listImageTradeStory, setListImageTradeStory] = useState([trade_story_1, trade_story_2, trade_story_3, trade_story_4]);
    const [listImageContent, setListImageContent] = useState([content_1, content_2, content_3, content_4]);
    const [role, setRoleAccount] = useState((localStorage.getItem('role')));
    const [statusPopUpSetItemImageBackroungIntroduce, setStatusPopUpSetItemImageBackroungIntroduce] = useState(false);
    const [statusPopUpSetItemImageContent, setStatusPopUpSetItemImageContent] = useState(false);
    const [statusPopUpSetItemImageBackroungTrade, setStatusPopUpSetItemImageBackroungTrade] = useState(false);
    const [itemImageBackroungIntroduce, setItemImageBackroungIntroduce] = useState();
    const [itemImageBackroungTrade, setItemImageBackroungTrade] = useState();
    const [itemImageBackroungContent, setItemImageBackroungContent] = useState();
    const sendMessage = () => {
        message.error('Thông tin được lưu thành công', 3);
    }
    const onSetitemImageBackroungIntroduce = (number) => {
        console.log(number);
        setItemImageBackroungIntroduce(number);
        setStatusPopUpSetItemImageBackroungIntroduce(false);
    }
    const onSetitemImageBackroungTrade = (number) => {
        setItemImageBackroungTrade(number);
        setStatusPopUpSetItemImageBackroungTrade(false);
    }
    const onSetitemImageBackroungContent = (number) => {
        setItemImageBackroungContent(number);
        setStatusPopUpSetItemImageContent(false);
    }
    const onChangeContentIntroduce = (e) => {
        setBlogPageIntro({ ...blogPageIntro, [e.target.name]: e.target.value });
    }
    const onControlerItemAdrress = (action, item) => {
        if (action === "add") {
            setBlogPageIntro({ ...blogPageIntro, list_adrress: [...blogPageIntro.list_adrress, newAddress] });
        } else {
            var list_adrress = blogPageIntro.list_adrress;
            list_adrress.splice(item, 1);
            setBlogPageIntro({ ...blogPageIntro, list_adrress: [...list_adrress] });
        }
    }
    const onControlerItemContent = (action, item) => {
        if (action === "add") {
            setBlogPageIntro({ ...blogPageIntro, content: [...blogPageIntro.content, newContent] });
        } else {
            var content = blogPageIntro.content;
            content.splice(item, 1);
            setBlogPageIntro({ ...blogPageIntro, content: [...content] });
        }
    }
    const onSaveDataIntroduce = ()=>{
        console.log(blogPageIntro);
    }
    useEffect(() => {
        axios.get('http://192.168.160.85:5000/restaurant/blogPageIntro')
            .then(res => {
                setBlogPageIntro(res.data.results[0]);
                setItemImageBackroungIntroduce(res.data.results[0].itemImageBackroungIntroduce)
                setItemImageBackroungTrade(res.data.results[0].itemImageBackroungTrade)
                setItemImageBackroungContent(res.data.results[0].itemImageBackroungContent)
            })
            .catch(error => {
                const errorMsg = error.message
            })
    }, [])
    return (
        <div className="introduce">
            <div className="introduce_image">
                {role == "admin"
                    ?
                    <div style={{ width: "100%", height: "100%", position: "absolute", top: "0", backgroundColor: "rgb(134,132,132,0.8)", zIndex: "2", textAlign: "center", }}>
                        {
                            statusPopUpSetItemImageBackroungIntroduce ?
                                <div style={{ width: "60%", height: "60vh", marginLeft: "20%", display: "flex", flexWrap: "wrap", padding: "1%", border: "1px solid black", borderRadius: "15px", background: "gray", marginTop: "20VH" }}>
                                    {
                                        listImageBackroungIntroduce.map((image, key) => (
                                            <div className='item_image' style={{ width: "50%", height: "28vh", position: "relative" }} onClick={() => onSetitemImageBackroungIntroduce(key)}>
                                                <img style={{ width: "100%", height: "100%" }} key={key} src={image}></img>
                                                {itemImageBackroungIntroduce == (key) ?
                                                    <div className='opacity' style={{ width: "100%", height: "100%" }} >
                                                        <a><i className="fas fa-check"></i></a>
                                                    </div>
                                                    : ""
                                                    //  <div className='opacity' onClick={() => onPicImageSubmit(itemImage)}>
                                                    //     <a>{itemImage?.pic}</a>
                                                    // </div>
                                                }
                                            </div>


                                        ))
                                    }
                                </div>
                                :
                                <button onClick={() => setStatusPopUpSetItemImageBackroungIntroduce(true)} style={{ marginTop: "25%", padding: "1% 2%", borderRadius: "15px", backgroundColor: "rgb(134,132,132,0.3)" }} >ChangeImage</button>}

                    </div>
                    : ""
                }
                <img src={listImageBackroungIntroduce[itemImageBackroungIntroduce]} className="background-img background-img0"></img>
                <img src={listImageBackroungIntroduce[itemImageBackroungIntroduce]} className="background-img background-img1"></img>
            </div>

            <div className="introduce-content">
                <div className="introduce-menu">
                    <div className="introduce-information">
                        <label>{blogPageIntro?.title}</label>
                        <p>{blogPageIntro?.title_note}</p>
                    </div>
                    <div className='progress-bar-bottom'>
                        <div className='progress-bar' >
                            <ProgressBar now={60} variant="dark" />
                        </div>
                        <label>05/05</label>
                    </div>

                </div>

            </div>
            <div className='trade-story'>
                <label>CÂU CHUYỆN THƯƠNG HIỆU</label><br />
                {
                    role == "admin" ?
                        <input value={blogPageIntro?.trade_story} name="trade_story" onChange={onChangeContentIntroduce} />
                        :
                        <i>{blogPageIntro?.trade_story}</i>
                }

                <div className='trade-story-content'>
                    <div className='trade-story-content-text'>
                        {
                            role == "admin" ?
                                <textarea style={{ width: "100%", height: "40%" }} value={blogPageIntro?.trade_story_note} name="trade_story_note" onChange={onChangeContentIntroduce} />
                                :
                                <p>
                                    {blogPageIntro?.trade_story_note}
                                </p>
                        }
                        {
                            role == "admin" ?

                                <div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Add Item adress" aria-label="Recipient's username" aria-describedby="basic-addon2" value={newAddress} onChange={(e) => setNewAddress(e.target.value)} />
                                        <span class="input-group-text" id="basic-addon2" onClick={() => onControlerItemAdrress('add', null)}>Add</span>
                                    </div>
                                    <ul>
                                        {
                                            blogPageIntro?.list_adrress?.map((adrress, key) => (
                                                <li key={key}>{adrress}  <i onClick={() => onControlerItemAdrress('remove', key)} className="fa-solid fa-minus" style={{ cursor: "pointer", marginLeft: "5%", background: "blue", padding: "0.2% 0.7%", borderRadius: "8PX" }}></i></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                :
                                <ul>
                                    {
                                        blogPageIntro?.list_adrress?.map((adrress, key) => (
                                            <li key={key}>{adrress}  </li>
                                        ))
                                    }
                                </ul>
                        }
                    </div>
                    <div style={{ width: "45%", position: 'relative', height: "100%" }}>
                        {role == "admin"
                            ?
                            <div style={{ width: "100%", height: "100%", position: "absolute", height: "100%", backgroundColor: "rgb(134,132,132,0.8)", zIndex: "2", textAlign: "center", }}>
                                {
                                    statusPopUpSetItemImageBackroungTrade ?
                                        <div style={{ width: "100%", height: "100%", display: "flex", flexWrap: "wrap", padding: "1%", border: "1px solid black", borderRadius: "15px", background: "gray" }}>
                                            {
                                                listImageTradeStory.map((image, key) => (
                                                    <div className='item_image' style={{ width: "50%", height: "50%", position: "relative" }} onClick={() => onSetitemImageBackroungTrade(key)}>
                                                        <img style={{ width: "100%", height: "100%" }} key={key} src={image}></img>
                                                        {itemImageBackroungTrade == (key) ?
                                                            <div className='opacity' style={{ width: "100%", height: "100%" }} >
                                                                <a><i className="fas fa-check"></i></a>
                                                            </div>
                                                            : ""
                                                            //  <div className='opacity' onClick={() => onPicImageSubmit(itemImage)}>
                                                            //     <a>{itemImage?.pic}</a>
                                                            // </div>
                                                        }
                                                    </div>


                                                ))
                                            }
                                        </div>
                                        :
                                        <button onClick={() => setStatusPopUpSetItemImageBackroungTrade(true)} style={{ marginTop: "25%", padding: "1% 2%", borderRadius: "15px", backgroundColor: "rgb(134,132,132,0.3)" }} >ChangeImage</button>}

                            </div>
                            : ""
                        }
                        <img src={listImageTradeStory[itemImageBackroungTrade]} style={{ height: "100%" }}></img>
                    </div>

                </div>
            </div>
            <div className='trade-story'>
                <label>TINH HOA NGŨ VỊ LẨU</label><br />
                <i>— Hương vị Lẩu chỉ có tại Wang —</i>
                <div className='trade-story-content'>

                    <div style={{ width: "80%", position: 'relative', height: "100%" }}>
                        {role == "admin"
                            ?
                            <div style={{ width: "100%", height: "100%", position: "absolute", height: "100%", backgroundColor: "rgb(134,132,132,0.8)", zIndex: "2", textAlign: "center", }}>
                                {
                                    statusPopUpSetItemImageContent ?
                                        <div style={{ width: "100%", height: "100%", display: "flex", flexWrap: "wrap", padding: "1%", border: "1px solid black", borderRadius: "15px", background: "gray" }}>
                                            {
                                                listImageContent.map((image, key) => (
                                                    <div className='item_image' style={{ width: "50%", height: "50%", position: "relative" }} onClick={() => onSetitemImageBackroungContent(key)}>
                                                        <img style={{ width: "100%", height: "100%" }} key={key} src={image}></img>
                                                        {itemImageBackroungContent == (key) ?
                                                            <div className='opacity' style={{ width: "100%", height: "100%" }} >
                                                                <a><i className="fas fa-check"></i></a>
                                                            </div>
                                                            : ""
                                                            //  <div className='opacity' onClick={() => onPicImageSubmit(itemImage)}>
                                                            //     <a>{itemImage?.pic}</a>
                                                            // </div>
                                                        }
                                                    </div>


                                                ))
                                            }
                                        </div>
                                        :
                                        <button onClick={() => setStatusPopUpSetItemImageContent(true)} style={{ marginTop: "30%", padding: "1% 2%", borderRadius: "15px", backgroundColor: "rgb(134,132,132,0.3)" }} >ChangeImage</button>}

                            </div>
                            : ""
                        }
                        <img style={{ marginRight: "3%" }} src={listImageContent[itemImageBackroungContent]}></img>
                    </div>
                    {
                        role == "admin" ?
                            <div className='trade-story-content-text' style={{ marginTop: "2%" }}>
                                <p>
                                    <textarea style={{ width: "100%", height: "100px" }} value={blogPageIntro?.title_content} name="title_content" onChange={onChangeContentIntroduce} />
                                </p>
                                <p>
                                    <textarea style={{ width: "100%", height: "50px" }} value={blogPageIntro?.content_note} name="content_note" onChange={onChangeContentIntroduce} />
                                </p>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Add Item Content" aria-label="Recipient's username" aria-describedby="basic-addon2" value={newContent} onChange={(e) => setNewContent(e.target.value)} />
                                    <span class="input-group-text" id="basic-addon2" onClick={() => onControlerItemContent('add', null)}>Add</span>
                                </div>
                                <ul>
                                    {blogPageIntro?.content?.map((content, key) => (
                                        <li key={key}>{content}<i onClick={() => onControlerItemContent('remove', key)} className="fa-solid fa-minus" style={{ cursor: "pointer", marginLeft: "5%", background: "blue", padding: "0.2% 0.7%", borderRadius: "8PX" }}></i></li>)
                                    )}

                                </ul>
                            </div>
                            :
                            <div className='trade-story-content-text'>
                                <p>
                                    {blogPageIntro.title_content}
                                </p>
                                <p>
                                    {blogPageIntro.content_note}
                                </p>
                                <ul>
                                    {blogPageIntro?.content?.map((content, key) => (
                                        <li key={key}>{content}</li>)
                                    )}

                                </ul>
                            </div>
                    }
                </div>
            </div>
            <div className='trade-story infor-menu'>
                <label>THỰC ĐƠN ĐẶC BIỆT</label><br />
                <i>— Tất cả ngày trong tuần —</i>
                <div >
                    <Card />
                </div>
            </div>
            <div className='trade-story' style={{ marginBottom: '5%' }}>
                <label>TIN TỨC</label><br />
                <i>— Thông tin và khuyến mãi —</i>
                <div className='box-content'>
                    <div class="card">
                        <div class="imgBx">
                            <img src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
                        </div>
                        <div class="details">
                            <h2>SomeOne Famous<br /><span>Director</span></h2>
                        </div>
                    </div>

                    <div class="card">
                        <div class="imgBx">
                            <img src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
                        </div>
                        <div class="details">
                            <h2>SomeOne Famous<br /><span>Producer</span></h2>
                        </div>
                    </div>

                    <div class="card">
                        <div class="imgBx">
                            <img src="https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
                        </div>
                        <div class="details">
                            <h2>SomeOne Famous<br /><span>Actor</span></h2>
                        </div>
                    </div>
                </div>
            </div>
            <Comment></Comment>
            <div className=' infor-menu infor-contact'>

                <div className='infor-introduce infor-contact-item'>
                    <div className='trade-story'>
                        <label>Lẩu Wang – Vua Buffet Lẩu</label><br />
                        <i>— Hương vị Lẩu chỉ có tại Wang —</i>
                        <hr />
                        <div className='trade-story-content'>
                            <div>
                                <a style={{ fontWeight: 'bold' }}>Hotline</a><i>05051999</i><br />
                                <p>
                                    Lẩu Wang là hệ thống chuỗi nhà hàng buffet lẩu tại Hà Nội được đánh giá cao về chất lượng và giá cả. Buffet tại Lẩu Wang gồm: 139K – 179K , khách hàng sẽ được thưởng thức tới gần 50 món ăn từ ba chỉ bò Mỹ, hải sản tổng hợp, khai vị hấp dẫn với Gà sốt Hàn Quốc, Salad Hoa quả, Ngao xào sốt Thái cùng vô vàn những món ăn, thức uống hấp dẫn khác…
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='infor-address infor-contact-item' style={{ display: "flex" }}>
                    <div className='trade-story' style={{ display: "grid", marginLeft: "5%" }}>
                        <div style={{ marginTop: "7%" }}>
                            <label>Hệ thống cơ sở Lẩu Wang</label><br />
                            <i>— Hương vị Lẩu chỉ có tại Wang —</i>
                        </div>

                        <div className='trade-story-content'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.247659892366!2d105.7699102154988!3d21.022774286001628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454af1a896751%3A0xe60949cdb52032ca!2zTmcuIDMyMiDEkC4gTeG7uSDEkMOsbmgsIE3hu7kgxJDDrG5oIDEsIE5hbSBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1665115648343!5m2!1svi!2s" style={{ width: "auto", height: "430px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div style={{ textAlign: "center", padding: "0 5% 0 5%" }}>
                        <p style={{ color: "orange", fontSize: "26px", fontWeight: "bold" }}>Liên hệ</p>
                        <a>Cần thông tin về nhà hàng của chúng tôi, hoặc cách đặt bàn ? Để lại cho chúng tôi một tin nhắn chúng tôi sẽ liên lạc với bạn</a>
                        <div>
                            <div id="first_form">
                                <label>Full Name :</label>
                                <input id="fname" placeholder="Full Name" type="text" />
                                <label>Email :</label>
                                <input id="email" placeholder="Email" type="text" />
                                <label>Contact Number :</label>
                                <input id="contact" placeholder="Contact Number" type="text" />
                                <label>Address :</label>
                                <input id="address" placeholder="Address" type="text" />
                                <button type="submit" onClick={sendMessage}>Gửi liên hệ </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='infor-item-contact infor-contact-item'>
                    <div className='trade-story'>
                        <label>Lẩu Wang – Vua Buffet Lẩu</label><br />
                        <i>— Hương vị Lẩu chỉ có tại Wang —</i>
                        <hr />
                        <div className='trade-story-content'>
                            <div>
                                <a style={{ fontWeight: 'bold' }}>Hotline</a><i>---05051999---</i><br />
                                <p>
                                    Lẩu Wang là hệ thống chuỗi nhà hàng buffet lẩu tại Hà Nội được đánh giá cao về chất lượng và giá cả. Buffet tại Lẩu Wang gồm: 139K – 179K , khách hàng sẽ được thưởng thức tới gần 50 món ăn từ ba chỉ bò Mỹ, hải sản tổng hợp, khai vị hấp dẫn với Gà sốt Hàn Quốc, Salad Hoa quả, Ngao xào sốt Thái cùng vô vàn những món ăn, thức uống hấp dẫn khác…
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="back-to-top hidden" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
                position: "fixed", zIndex: "5", right: "2rem", bottom: "2rem", borderRadius: "50%", background: "#141c38", padding: "0.5rem 1rem", border: "none", cursor: "pointer",
                opacity: "100%",
                transition: "opacity 0.5s",
            }}>
               <i class="fas fa-up" style={{color:"white"}}></i>
            </button>
            <button class="back-to-top hidden" onClick={onSaveDataIntroduce} style={{
                position: "fixed", zIndex: "5", right: "5rem", bottom: "2rem", borderRadius: "10px", background: "gray", padding: "0.5rem 1rem", border: "none", cursor: "pointer",
                opacity: "100%",
                transition: "opacity 0.5s",
            }}>
                <a>Save content</a>
            </button>
        </div >
    )
}

export default Dish
