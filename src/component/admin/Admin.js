import React, { useEffect, useState } from 'react'
import LineChart from './chart/LineChart'
import './admin.css'
import PieChart from './chart/PieChart'
import star from './../../image/star.png'
import TableDish from './table/TableDish'
import TableComment from './table/TableComment'
function Admin() {
    const [tableCommentDish, setTableCommentDish] = useState('comment');
    useEffect(()=>{

    },[tableCommentDish])
    return (
        <div className='admin'>
            <div className='statistic'>
                <div className='statistic_laybe'>
                    <p>Thống kê sản phẩm</p>
                    <button>View all</button>
                </div>
                <hr></hr>
                <div className='content_statistic'>
                    <div className='content_statistic_item'>
                        <div style={{ display: "flex" }}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjSRij-f2irgGw3X5_7sw7rshhDrLYNEgg5A&usqp=CAU'></img>
                            <div >
                                <p>Số lượng khách hàng</p>
                                <h3>
                                    1,7K+
                                </h3>
                                <span> <a>54,12%</a> số người</span>
                            </div>
                        </div>
                    </div>
                    <div className='content_statistic_item'>
                        <div style={{ display: "flex" }}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjSRij-f2irgGw3X5_7sw7rshhDrLYNEgg5A&usqp=CAU'></img>
                            <div >
                                <p>Độ hài lòng khách hàng</p>
                                <h3>
                                    4.3
                                    <img src={star} style={{ width: "20px", height: "20px", marginLeft: "3%" }} />
                                </h3>
                                <span> Độ hài lòng tăng <a>2,12%</a></span>
                            </div>
                        </div>
                    </div>
                    <div className='content_statistic_item'>
                        <div style={{ display: "flex" }}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpmdI_Qdiutgbmms0M8McPrwnigTZDLTmkA&usqp=CAU'></img>
                            <div >
                                <p>Lợi nhuận</p>
                                <h3>
                                    $ 1,7K+
                                </h3>
                                <span>Tăng <a>25,12%</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <i>* Thông số cửa hàng</i>
            </div>
            <div className='chart-statistic'>
                <div className='chart line-chart'>
                    <a>Số lượng khách hàng tới quán</a>
                    <LineChart />
                </div>
                <div className='chart chart2' style={{ marginLeft: "2%" }}>
                    <a>ĐỘ hài lòng</a>
                    <div style={{  paddingLeft: "5%" }} className="chart2-content">
                        <PieChart />
                        <PieChart />
                    </div>
                </div>
            </div>
            <div className='table-coment-dish'>
                <div className='statistic_laybe'>
                    <p style={{ fontSize: "24px", fontWeight: "bold" }}>Thống kê bình luận</p>
                    <div>
                        <button style={tableCommentDish=='comment'?{backgroundColor:"gray",color:"white"}:{}} onClick={()=>setTableCommentDish('comment')}>Nhà hàng</button>
                        <button style={tableCommentDish=='comment'?{}:{backgroundColor:"gray",color:"white"}} onClick={()=>setTableCommentDish('dish')}>Món ăn</button>
                    </div>
                </div>
                <hr></hr>
                {
                    tableCommentDish === 'comment' ?
                        <TableComment />
                        :
                        <TableDish />
                }
            </div>
        </div>
    )
}

export default Admin
