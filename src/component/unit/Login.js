import React from 'react'
import './index.css';
function Login() {
    return (
        <div>
            <div className="container-login">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login">
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input type="text" className="login__input" placeholder="User name / Email" />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" className="login__input" placeholder="Password" />
                            </div>
                            <button className="button login__submit">
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                        <div className="social-login">
                            <h3>log in via</h3>
                            <div className="social-icons">
                                <a href="#" className="social-login__icon fab fa-instagram"></a>
                                <a href="#" className="social-login__icon fab fa-facebook"></a>
                                <a href="#" className="social-login__icon fab fa-twitter"></a>
                            </div>
                        </div>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
            <div className="container-login2">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Sign Up
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="column" id="main">
                                    <h1>Sign Up </h1>
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                                    <form>
                                        <div className="form-group">
                                            <label for="exampleInputName">Name</label>
                                            <input type="name" className="form-control" id="exampleInputName" placeholder="Name" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">E-mail </label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Sign Up</button>
                                    </form>
                                </div>
                                <div>
                                    {/* <svg width="67px" height="578px" viewBox="0 0 67 578" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <title>Path</title>
                                    <desc>Created with Sketch.</desc>
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <path d="M11.3847656,-5.68434189e-14 C-7.44726562,36.7213542 5.14322917,126.757812 49.15625,270.109375 C70.9827986,341.199016 54.8877465,443.829224 0.87109375,578 L67,578 L67,-5.68434189e-14 L11.3847656,-5.68434189e-14 Z" id="Path" fill="#F9BC35"></path>
                                    </g>
                                </svg> */}
                                </div>
                                <div className="column" id="secondary">
                                    <div className="sec-content">
                                        <h2>Welcome Back!</h2>
                                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                                        <button type="button" className="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Login
