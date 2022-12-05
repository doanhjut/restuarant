import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './menu.css'
import tran from '../../translations/translations.js';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from "../../actions/index";
function Menu() {
    const translate = useSelector(state => state.translate);
    const dispatch = useDispatch();
    const [pages, setPages] = useState(['/'])
    const navigate = useNavigate();
    const onChangeTabs = (action) => {
        navigate(action);
    }
    const [role, setRoleAccount] = useState((localStorage.getItem('role')))
    // const onChangeLanguages = () =>{
    //     dispatch(onChangeLanguage());
    // }

    const changeLanguageFunc =()=>{
        dispatch(changeLanguage());
    }
    useEffect(() => {
        onChangeTabs(pages)
    }, [pages])
    return (
        <div className='menu'>
            {role == "admin" ?
                <nav>
                    <a onClick={() => setPages('/')}>{tran.t('home_page',{lng:translate})} </a>
                    <a onClick={() => setPages('/dishs')} >{tran.t('menu',{lng:translate})}</a>
                    <a onClick={() => setPages('/view')}>{tran.t('book',{lng:translate})}</a>
                    <a >{tran.t('address',{lng:translate})}</a>
                    <a >{tran.t('contact',{lng:translate})}</a>
                    <a onClick={() => setPages('/admin')}>{tran.t('admin',{lng:translate})}</a>
                    <a onClick={() => setPages('/createBill')}>{tran.t('create_bill',{lng:translate})}</a>
                    <div class="animation start-home" style={pages == '/' ? { width: "100px", left: "0", backgroundColor: "#1abc9c" } :
                        pages == '/dishs' ? { width: "110px", left: "100px", backgroundColor: "#e74c3c" } :
                            pages == '/view' ? { width: "100px", left: "210px", backgroundColor: "#3498db" } :
                                pages == '/admin' ? { width: "100px", left: "600px", backgroundColor: "#3498db" } :
                                    { width: "120px", left: "710px", backgroundColor: "#3498db" }
                    } ></div>
                </nav>
                :
                role == "user" ?
                    <nav>
                        <a onClick={() => setPages('/')}>{tran.t('home_page',{lng:translate})}</a>
                        <a onClick={() => setPages('/dishs')} >{tran.t('menu',{lng:translate})}</a>
                        <a onClick={() => setPages('/view')}>{tran.t('book',{lng:translate})}</a>
                        <a >{tran.t('address',{lng:translate})}</a>
                        <a >{tran.t('contact',{lng:translate})}</a>
                        <a onClick={() => setPages('/createBill')}>{tran.t('create_bill',{lng:translate})}</a>
                        <div class="animation start-home" style={pages == '/' ? { width: "100px", left: "0", backgroundColor: "#1abc9c" } :
                            pages == '/dishs' ? { width: "110px", left: "100px", backgroundColor: "#e74c3c" } :
                                pages == '/view' ? { width: "100px", left: "210px", backgroundColor: "#3498db" } :
                                    { width: "120px", left: "590px", backgroundColor: "#3498db" }
                        } ></div>
                    </nav>
                    :
                    <nav>
                        <a onClick={() => setPages('/')}>{tran.t('home_page',{lng:translate})}</a>
                        <a onClick={() => setPages('/dishs')} >{tran.t('menu',{lng:translate})}</a>
                        <a onClick={() => setPages('/view')}>{tran.t('book',{lng:translate})}</a>
                        <a >{tran.t('address',{lng:translate})}</a>
                        <a >{tran.t('contact',{lng:translate})}</a>
                        <div class="animation start-home" style={pages == '/' ? { width: "100px", left: "0", backgroundColor: "#1abc9c" } :
                            pages == '/dishs' ? { width: "110px", left: "100px", backgroundColor: "#e74c3c" } :
                                { width: "100px", left: "210px", backgroundColor: "#3498db" }} ></div>
                    </nav>
            }
            <div>
                <div class="switch-toggle" >
                    <input type="checkbox" id="location" onClick={changeLanguageFunc}/>
                    <label for="location"></label>
                </div>
            </div>
        </div >
    )
}

export default Menu
