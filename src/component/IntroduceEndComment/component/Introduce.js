import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import background_introduce from "../../../image/background-introduce.png"
import background_introduce1 from "../../../image/background-introduce1.png"


function Dish() {
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
        </div>
    )
}

export default Dish
