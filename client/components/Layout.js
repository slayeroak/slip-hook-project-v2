import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import { isAuth, logout } from '../helpers/auth';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Column from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Layout = ({ children }) => {
    const head = () => (
        <React.Fragment>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous"
            />
            <link rel="stylesheet" href="/static/css/styles.css" />
        </React.Fragment>
    );

    const nav = () => (
        <ul className="nav nav-tabs bg-warning">
            <li className="nav-item">
                <Link href="/">
                    <a className="nav-link text-dark">Home</a>
                </Link>
            </li>

            <li className="nav-item">
                <Link href="/user/link/create">
                    <a className="nav-link text-dark btn btn-success" style={{ borderRadius: '0px' }}>
                        Submit a link
                    </a>
                </Link>
            </li>

            {!isAuth() && (
                <React.Fragment>
                    <li className="nav-item">
                        <Link href="/login">
                            <a className="nav-link text-dark">Login</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/register">
                            <a className="nav-link text-dark">Register</a>
                        </Link>
                    </li>
                </React.Fragment>
            )}

            {isAuth() && isAuth().role === 'admin' && (
                <li className="nav-item ml-auto">
                    <Link href="/admin">
                        <a className="nav-link text-dark">{isAuth().name}</a>
                    </Link>
                </li>
            )}

            {isAuth() && isAuth().role === 'subscriber' && (
                <li className="nav-item ml-auto">
                    <Link href="/user">
                        <a className="nav-link text-dark">{isAuth().name}</a>
                    </Link>
                </li>
            )}

            {isAuth() && (
                <li className="nav-item">
                    <a onClick={logout} className="nav-link text-dark">
                        Logout
                    </a>
                </li>
            )}
        </ul>
    );

    const footer = () => {
        return (
            <Container className = "fixed-bottom bg-secondary">
                <Row>
                    <React.Fragment>
                        <Column className="col-md-3">
                            <h3>Sliphook</h3>
                        </Column>
                        <Column className="col-md-5">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <Link href="/">
                                        <a className="nav-link text-dark">Home</a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/user/link/create">
                                        <a className="nav-link text-dark btn btn-success" style={{ borderRadius: '0px' }}>
                                            Submit a link
                                        </a>
                                    </Link>
                                </li>

                                {!isAuth() && (
                                    <React.Fragment>
                                        <li className="nav-item">
                                            <Link href="/login">
                                                <a className="nav-link text-dark">Login</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/register">
                                                <a className="nav-link text-dark">Register</a>
                                            </Link>
                                        </li>
                                    </React.Fragment>
                                )}

                                {isAuth() && isAuth().role === 'admin' && (
                                    <li className="nav-item ml-auto">
                                        <Link href="/admin">
                                            <a className="nav-link text-dark">{isAuth().name}</a>
                                        </Link>
                                    </li>
                                )}

                                {isAuth() && isAuth().role === 'subscriber' && (
                                    <li className="nav-item ml-auto">
                                        <Link href="/user">
                                            <a className="nav-link text-dark">{isAuth().name}</a>
                                        </Link>
                                    </li>
                                )}

                                {isAuth() && (
                                    <li className="nav-item">
                                        <a onClick={logout} className="nav-link text-dark">
                                            Logout
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </Column>
                    </React.Fragment>
                </Row>
            </Container>
        );
    };
    
    // const footer = () => {
    //     return (
    //       <Container clas>=>
    //         <Row>
    //           <Column className="col-md-3">
    //             <h1>Sliphook</h1>
    //           </Column>
    //           <Column className="col-md-3">
    //             <ul className="nav flex-column">
    //               <li className="nav-item">
    //                 <a href="#!">Fishing Tutorials</a>
    //               </li>
    //               <li className="nav-item">
    //                 <a href="#!">Bait, Tackle, & More</a>
    //               </li>
    //               <li className="nav-item">
    //                 <a href="#!">Weather & Tide</a>
    //               </li>
    //               <li className="nav-item">
    //                 <a href="#!">Profile</a>
    //               </li>
    //             </ul>
    //           </Column>
    //           <Column className="col-md-3">
    //             <ul className="nav flex-column">
    //               <li className="nav-item">
    //                 <a href="#!">About us?</a>
    //               </li>
    //               <li className="nav-item">
    //                 <a href="#!">Are you a captain?</a>
    //               </li>
    //               <li className="nav-item">
    //                 <a href="#!">Github Repositiry</a>
    //               </li>
    //               <li className="nav-item">
    //                 <a href="#!">Contact us?</a>
    //               </li>
    //             </ul>
    //           </Column>
    //           <Column>
    //             <div>
    //               <Button varient="outline-warning" size="sm">
    //                 {" "}
    //                 To The Top
    //               </Button>
    //               <div className="social-link">
    //                 <Button varient="outline-warning" size="sm">
    //                   {" "}
    //                   Subscribe :{" "}
    //                 </Button>
    //                 <a href="#!">
    //                   <i className="fa fa-facebook"></i>
    //                 </a>
    //                 <a href="#!">
    //                   <i className="fa fa-linkedin"></i>
    //                 </a>
    //                 <a href="#!">
    //                   <i className="fa fa-instagram"></i>
    //                 </a>
    //               </div>
    //               <div className="go-to-top">
    //                 <a href="#top">
    //                   <i className="fa fa-angle-up"></i>
    //                 </a>
    //               </div>
    //             </div>
    //           </Column>
    //         </Row>
    //       </Container>
    //     );
    //   };

    return (
        <React.Fragment>
            {head()} {nav()} {footer()}<div className="container pt-5 pb-5">{children}</div>
        </React.Fragment>
    );
};

export default Layout;