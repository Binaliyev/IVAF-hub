import { useContext, useState } from "react";
import { FiX } from "react-icons/fi";
import { Context } from "../context/Context";
export const Modal = ({ variants }) => {
    const { setModal } = useContext(Context)
    const [data, setData] = useState({})
    return (
        <><div className="modal-box">
            <div className="modal">
                <div className="modal-icon-box">
                    <FiX className="x-icon" onClick={() => { setModal(false); window.localStorage.removeItem("courses_id"); window.localStorage.removeItem("variants_id") }} />
                </div>
                <div className="variants-info-box">
                    <div className="variants-box">
                        <p className="modal-text">Yo'nalishlar</p>
                        {
                            variants.map((item) => {
                                return (
                                    <>
                                        <div className="variants-card" onClick={() => {
                                            window.localStorage.setItem("variants_id", item.id)
                                            if (window.localStorage.getItem("variants_id") && window.localStorage.getItem("variants_id") == item.id) {
                                                setData(item.info)
                                            }
                                        }
                                        }>
                                            <span className="variants-text">{item.variant_name}</span>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className={ Number(window.localStorage.getItem("variants_id") ) % 2 === 0 ? "info-color-box" :  "info-box"}>
                        <p className="modal-text">Ma'lumotlar</p>
                        {data.day ? (<p className="modal-info-title">Kurs kunlari haftada {data.day} kundan</p>) : null}
                        {data.time ? (<p className="modal-info-title">Dars davomiyligi {`${data.time}`} soat</p>) : null}
                        {data.price ? (<p className="modal-info-title">Kurs narhi oyiga {data.price} 000 so'm</p>) : null}
                        {data.duration ? (<p className="modal-info-title">Kurs davomiyligi {data.duration} oy</p>) : null}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}