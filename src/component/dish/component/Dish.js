import React from 'react'
import background2 from "../../../image/background2.jpg"
import dish1 from "../../../image/menu1.png"

function Dish() {
    return (
        <div className="dish">
            <img src={background2} className="background-img"></img>
            <div className="dish-content">
                <div className="restaurant-dish-menu row">
                    <div className="restaurant-dish-booked col-5">
                        <label>Phở bò Hà Thành</label>
                        <p>       Bánh phở mềm mềm, nước dùng ngọt đậm
                            vị xương ống heo, hành ngò thơm nức mũi,
                            thịt ăn kèm đầy bát chắc chắn sẽ làm bạn hài lòng.</p>
                    </div>
                    <div className='col-7'>
                        <img src={dish1}></img>
                    </div>


                </div>
            </div>


        </div>
    )
}

export default Dish
