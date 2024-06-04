import { FaTelegram } from "react-icons/fa"
import IVAF_hup_logo from "../assets/imgs/IVAF_hup.jpg"
import { IoLocationSharp } from "react-icons/io5"
import { BsFillTelephoneFill } from "react-icons/bs"
export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-inner">
                        <div className="logo-info-box">
                                <img src={IVAF_hup_logo} alt="logo" className="footer-logo" />
                            <div className="footer-info-box">
                                <p className="footer-info-text"><span><BsFillTelephoneFill className="footer-info-icon" /></span> 88 390 07 39</p>
                                <p className="footer-info-text"><span><IoLocationSharp className="footer-info-icon" /></span> Р-49, Chelak, Samarqand-v</p>
                                <p className="footer-info-text"><span><FaTelegram className="footer-info-icon" /></span> IVAF hub</p>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2700.943421993416!2d66.85671816620908!3d39.9222572717712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDU1JzE5LjQiTiA2NsKwNTEnMzEuOSJF!5e0!3m2!1sen!2s!4v1716379767137!5m2!1sen!2s"
                                width="600"
                                height="450"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                className="ivaf_hup-location"></iframe>
                        </div>
                        <h1 className="end-text">IVAF hub {new Date().getFullYear()} </h1>
                    </div>
                </div>
            </footer>
        </>
    )
}