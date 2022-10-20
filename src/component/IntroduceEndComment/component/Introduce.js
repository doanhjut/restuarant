import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import background_introduce from "../../../image/background-introduce.png"
import background_introduce1 from "../../../image/background-introduce1.png"
import Card from './Card';
import Comment from './Comment';
import { DatePicker, Space, message } from 'antd';

function Dish() {
    const sendMessage = ()=>{
        message.error('Thông tin được lưu thành công', 3);
    }
    return (
        <div className="introduce">
            <div className="introduce_image">
                <img src={background_introduce} className="background-img background-img0"></img>
                <img src={background_introduce1} className="background-img background-img1"></img>
            </div>

            <div className="introduce-content">
                <div className="introduce-menu">
                    <div className="introduce-information">
                        <label>Thổi hồn ẩm thực Việt</label>
                        <p>       Bánh phở mềm mềm, nước dùng ngọt đậm vị</p>
                        <p> xương ống heo, hành ngò thơm nức mũi,</p>
                        <p>thịt ăn kèm đầy bát chắc chắn sẽ làm bạn hài lòng.</p>
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
                <i>-- Tinh hoa ẩm thực Việt --</i>
                <div className='trade-story-content'>
                    <div className='trade-story-content-text'>
                        <p>
                            Lẩu Wang là hệ thống chuỗi nhà hàng buffet lẩu tại Hà Nội được tin tưởng và đánh giá cao về chất lượng và giá cả các set buffet chỉ từ 139K, khách hàng sẽ được thưởng thức tới gần 50 món ăn từ ba chỉ bò Mỹ, hải sản tổng hợp, khai vị hấp dẫn với gà chiên cay ngọt Hàn Quốc, ngao xào, salad cùng vô vàn những món ăn, thức uống hấp dẫn khác.
                        </p>
                        <p>
                            Với sự phát triển không ngừng, đến nay Lẩu Wang đã xây dựng và hoạt động 9 cơ sở:
                        </p>
                        <ul>
                            <li>CS1: 134 Trần Đại Nghĩa, Hai Bà Trưng.  </li>
                            <li>CS3: Số 21 đường 19/5, Văn Quán, Hà Đông  </li>
                            <li>CS4: 17 Tam Khương (số 17 ngõ 10 Tôn Thất Tùng). </li>
                            <li>CS5: 81B Nguyễn Khang, Yên Hòa, Cầu Giấy.</li>
                        </ul>
                    </div>
                    <img src='https://blog.dktcdn.net/files/mo-hinh-nha-hang.jpg'></img>
                </div>
            </div>
            <div className='trade-story'>
                <label>TINH HOA NGŨ VỊ LẨU</label><br />
                <i>— Hương vị Lẩu chỉ có tại Wang —</i>
                <div className='trade-story-content'>
                    <img style={{ marginRight: "3%" }} src='https://kinhdoanhnhahang.vn/wp-content/uploads/2016/11/phan-loai-nha-hang-6.jpg'></img>
                    <div className='trade-story-content-text'>
                        <p>
                            Lẩu Wang là hệ thống chuỗi nhà hàng buffet lẩu tại Hà Nội được tin tưởng và đánh giá cao về chất lượng và giá cả các set buffet chỉ từ 139K, khách hàng sẽ được thưởng thức tới gần 50 món ăn từ ba chỉ bò Mỹ, hải sản tổng hợp, khai vị hấp dẫn với gà chiên cay ngọt Hàn Quốc, ngao xào, salad cùng vô vàn những món ăn, thức uống hấp dẫn khác.
                        </p>
                        <p>
                            Với sự phát triển không ngừng, đến nay Lẩu Wang đã xây dựng và hoạt động 9 cơ sở:
                        </p>
                        <ul>
                            <li>CS1: 134 Trần Đại Nghĩa, Hai Bà Trưng.  </li>
                            <li>CS3: Số 21 đường 19/5, Văn Quán, Hà Đông  </li>
                            <li>CS4: 17 Tam Khương (số 17 ngõ 10 Tôn Thất Tùng). </li>
                            <li>CS5: 81B Nguyễn Khang, Yên Hòa, Cầu Giấy.</li>
                        </ul>
                    </div>
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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.247659892366!2d105.7699102154988!3d21.022774286001628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454af1a896751%3A0xe60949cdb52032ca!2zTmcuIDMyMiDEkC4gTeG7uSDEkMOsbmgsIE3hu7kgxJDDrG5oIDEsIE5hbSBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1665115648343!5m2!1svi!2s" style={{ width: "auto", height: "430px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div style={{ textAlign: "center" ,padding:"0 5% 0 5%"}}>
                        <p style={{ color:"orange", fontSize:"26px", fontWeight:"bold"}}>Liên hệ</p>
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
        </div>
    )
}

export default Dish
