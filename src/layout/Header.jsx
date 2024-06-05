import { Link } from "react-scroll"
import { FaTelegram } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import { SideBar } from "../components";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import Logo from "../assets/imgs/logo.jpg"
export const Header = () => {
    const { sideBar, setSideBar } = useContext(Context)
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-inner">
                        {/* IVAF hub */}
                        <Link offset={-10}
                            to="aboute-us"
                            duration={800}
                            smooth={true}>
                                <img src={Logo} alt="logo" className="site-logo"/>
                            {/* <h1 className="site-logo"><span className="color-i">I</span>VAF hub</h1> */}
                        </Link>
                        <ul className="header-ul">
                            <li className="header-list">
                                <Link className="header-link"
                                    offset={10}
                                    to="courses"
                                    duration={800}
                                    smooth={true}>Kurslar</Link>
                            </li>
                            <li className="header-list">
                                <Link className="header-link"
                                    offset={-10}
                                    to="aboute-us"
                                    duration={800}
                                    smooth={true}>Biz haqimizda</Link>
                            </li>
                            <li className="header-list">
                                <Link className="header-link"
                                offset={-10}
                                to="connection"
                                duration={800}
                                smooth={true}>Bog'lanish</Link>
                            </li>
                        </ul>
                        <div className="header-icon-box">
                            <FaTelegram className="header-icon" onClick={() => window.location.href = "https://t.me/iteachcenter"} />
                        </div>
                        <div className="side-bar-Icon-box">
                            <TiThMenuOutline className="side-bar-icon" onClick={() => setSideBar(true)} />
                        </div>
                    </div>
                </div>
            </header>
            {sideBar ?
                (
                    <SideBar />
                )
                :
                null
            }
        </>
    )
}