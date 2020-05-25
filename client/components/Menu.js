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


const Menu = () => (
    <ul className="nav nav-tabs">
        <li className="nav-item">
            <Link href="/">
                <a className="nav-link text-dark">Home</a>
            </Link>
        </li>

        <li className="nav-item">
            <Link href="/user/link/create">
                <a className="nav-link text-dark btn" style={{ borderRadius: '0px' }}>
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
                <Link href="/weather">
                    <a className="nav-link text-dark">Weather</a>
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

        <style jsx>{`
            .menu {
                margin: 5px 0 0;
                padding: 0;
                list-style: none;
                display: flex;
            }
            .menu li a {
                font-size: 22px;
                color: #f36a22;
                text:f36a22;
                font-weight: 300;
                padding: 5px 2px;
                margin: 0 10px;
                text-decoration: none;
            }
            .menu li a:hover {
                padding-bottom: 3px;
                border-bottom: 2px solid #ffe525;
            }
            @media (max-width: 600px) {
                .menu {
                display: block;
                margin-top: 20px;
                }
                .menu li {
                display: inline-block;
                }
                .menu li a {
                font-size: 18px;
                }
            }
        `}</style>
    </ul>
  );
  
  export default Menu;