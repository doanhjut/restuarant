import background from "../../../image/background.jpg"
import table_img from "../../../image/table-img.jpg"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import { Stage, Layer, Star, Text } from "react-konva";
import { callApiGetDataTable } from "../../../actions/index";
import Loading from "../../unit/Loading";
import { useNavigate } from "react-router-dom";


function generateShapes() {
    return [
        {
            id: "1",
            x: window.innerWidth * 0.474,
            y: window.innerHeight * 0.36,
            rotation: 0,
            isDragging: false
        },
        {
            id: "2",
            x: window.innerWidth * 0.556,
            y: window.innerHeight * 0.36,
            rotation: 0,
            isDragging: false
        },
        {
            id: "3",
            x: window.innerWidth * 0.632,
            y: window.innerHeight * 0.36,
            rotation: 0,
            isDragging: false
        },
        {
            id: "4",
            x: window.innerWidth * 0.705,
            y: window.innerHeight * 0.36,
            rotation: 0,
            isDragging: false
        },
        {
            id: "5",
            x: window.innerWidth * 0.474,
            y: window.innerHeight * 0.542,
            rotation: 0,
            isDragging: false
        },
        {
            id: "6",
            x: window.innerWidth * 0.556,
            y: window.innerHeight * 0.542,
            rotation: 0,
            isDragging: false
        },
        {
            id: "7",
            x: window.innerWidth * 0.632,
            y: window.innerHeight * 0.542,
            rotation: 0,
            isDragging: false
        },
        {
            id: "8",
            x: window.innerWidth * 0.705,
            y: window.innerHeight * 0.542,
            rotation: 0,
            isDragging: false
        },
        {
            id: "9",
            x: window.innerWidth * 0.474,
            y: window.innerHeight * 0.705,
            rotation: 0,
            isDragging: false
        },
        {
            id: "10",
            x: window.innerWidth * 0.556,
            y: window.innerHeight * 0.705,
            rotation: 0,
            isDragging: false
        },
        {
            id: "11",
            x: window.innerWidth * 0.632,
            y: window.innerHeight * 0.705,
            rotation: 0,
            isDragging: false
        },
        {
            id: "12",
            x: window.innerWidth * 0.705,
            y: window.innerHeight * 0.705,
            rotation: 0,
            isDragging: false
        }
    ]
}
const INITIAL_STATE = generateShapes();
// console.log(INITIAL_STATE);
function App() {
    const [stars, setStars] = React.useState([]);
    const [status, setStatus] = useState(false);
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const dispatch = useDispatch();
    const [onChangeTime, setOnChangeTime] = useState(moment(new Date()).format('DD-MM-YYYY'))
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(callApiGetDataTable());
        // console.log(dataTable);
    }, [])
    const dataTable = useSelector(state => state.dataTable);

    const restaurantBook = () => {

        if (dataTable.restaurant_book) {
            const data_book = [];
            dataTable.restaurant_book.results.forEach(customer_book => {
                if (customer_book.status === onChangeTime) {
                    data_book.push(INITIAL_STATE[customer_book.name - 1]);
                }

            });
            setStars(data_book);
            setStatus(true);
        }
    }

    const onChangeTimeBook = (date, dateString) => {
        // console.log(dateString);
        console.log(moment(date).format('DD-MM-YYYY'));
        setOnChangeTime(moment(date).format('DD-MM-YYYY'))
    }

    useEffect(() => {
        restaurantBook();
    }, [onChangeTime])
    return (
        <>
            {/* {!status ? */}
            {/* {status ?
                <Loading></Loading>
                : */}
            <div className="book">
                {/* <div className="">

                    </div> */}
                <img src={background} className="background-img"></img>
                <div className="book-content" >
                    <div style={{ zIndex: "100", top: "5%", position: "absolute", right: "5%" }} className="button-change-book">
                        <DatePicker defaultValue={moment(new Date(), dateFormatList[0])} format={dateFormatList} onChange={onChangeTimeBook} />
                        <div class="box-2">
                            <div class="btn btn-two" onClick={()=> navigate('/book')}>
                                <span>ĐẶT BÀN</span>
                            </div>
                        </div>
                    </div>
                    <div className="restaurant-map">
                        <img src={table_img}></img>
                        {/* <div>
                                <label>Lưu Danh</label>
                            </div> */}
                        <div className="restaurant-map-booked">
                            <Stage width={window.innerWidth} height={window.innerHeight}>
                                <Layer>
                                    {stars ?
                                        stars.map((star) => (
                                            <Star
                                                key={star.id}
                                                id={star.id}
                                                x={star.x}
                                                y={star.y}
                                                numPoints={5}
                                                innerRadius={20}
                                                outerRadius={40}
                                                fill="#89b717"
                                                opacity={0.8}
                                                draggable
                                                rotation={star.rotation}
                                                shadowColor="black"
                                                shadowBlur={10}
                                                shadowOpacity={0.6}
                                                shadowOffsetX={star.isDragging ? 10 : 5}
                                                shadowOffsetY={star.isDragging ? 10 : 5}
                                                scaleX={star.isDragging ? 1.2 : 1}
                                                scaleY={star.isDragging ? 1.2 : 1}
                                            // onDragStart={handleDragStart}
                                            // onDragEnd={handleDragEnd}
                                            />
                                        )) : ""}
                                </Layer>
                            </Stage>
                        </div>
                    </div>
                </div>


            </div>
            {/* } */}
        </>

    );
}

export default App;
