import { FaTelegram } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { Link } from "react-scroll";
import { Context } from "../context/Context";
import { useContext } from "react";
import Logo from "../assets/imgs/logo.jpg"
export const SideBar = () => {
    const { setSideBar } = useContext(Context)
    return (
        <>
            <div className="side-bar-box">
                <div className="side-bar">
                    <FiX className="x-icon" onClick={() => setSideBar(false)} />
                    <div className="side-bar-components">
                        <Link
                            offset={-10}
                            to="aboute-us"
                            duration={800}
                            smooth={true}
                            onClick={() => setSideBar(false)}>
                            <img src={Logo} alt="logo" className="site-logo" />
                            {/* <h1 className="site-logo side-bar-log "><span className="color-i">I</span>VAF hub</h1> */}
                        </Link>
                        <Link className="side-bar-link"
                            offset={-10}
                            to="courses"
                            duration={800}
                            smooth={true}
                            onClick={() => setSideBar(false)}>Kurslar</Link>
                        <Link className="side-bar-link"
                            offset={-10}
                            to="aboute-us"
                            duration={800}
                            smooth={true}
                            onClick={() => setSideBar(false)}>Biz haqimizda</Link>
                        <Link className="side-bar-link"
                            offset={-10}
                            to="connection"
                            duration={800}
                            smooth={true}
                            onClick={() => setSideBar(false)}>Bog'lanish</Link>
                        <div className="side-bar-icon-box">
                            <FaTelegram className="side-bar-icon" onClick={() => window.location.href = "https://t.me/iteachcenter"} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}