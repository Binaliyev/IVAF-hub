import { useContext, useState } from "react"
import { Context } from "../context/Context"
import { Modal } from "./CoursesModal"
export const CoursesCard = () => {
    const { courses, modal, setModal } = useContext(Context)
    const [data, setData] = useState([])
    return (
        <>
            {modal === true ? (<Modal variants={data.length? data : []} />) : null}
            {courses.map((item, index) => {
                return (
                    <>
                        <div className="courses-card" key={index} style={{ backgroundImage: `url(${item.font})` }} onClick={() => {
                            setModal(true)
                            window.localStorage.setItem("courses_id", item.id)
                            if (window.localStorage.getItem("courses_id") && window.localStorage.getItem("courses_id") == item.id) {
                                setData(item.variants)
                            }
                        }}>
                            <h1 className="courses-name">{item.subject}</h1>
                        </div>
                    </>
                )
            })}
        </>
    )
}