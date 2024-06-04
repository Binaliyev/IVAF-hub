import { createContext, useState } from "react";
import English from "../assets/imgs/English_lang.jpg"
import Mother_tung from "../assets/imgs/mother_tangueg.jpg"
import Russian_lang from "../assets/imgs/russian_lang.jpg"
import Biology_img from "../assets/imgs/biology_img.jpg"
import Math_img  from "../assets/imgs/math_img.jpg"
import Bugalteria_img  from "../assets/imgs/bugalteria_img.jpg"
import Prezident_img  from "../assets/imgs/prezident_img.jpg"
import axios from "axios";
export const Context = createContext()

export const AppContext = ({ children }) => {
    const [sideBar, setSideBar] = useState(false)
    const [modal, setModal] = useState(false)
    const SERVIS_ID = process.env.REACT_APP_SERVIS_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_ID = process.env.REACT_APP_PUBLIC_ID
    const handleEmailPost = async (firstname, lastname, tel, course, comment) =>{
        try {
            const data =  {
                service_id: SERVIS_ID,
                template_id: TEMPLATE_ID,
                user_id: PUBLIC_ID,
                template_params: {
                    firstname: firstname,
                    lastname: lastname,
                    tel: tel,
                    course: course,
                    comment: comment
                }
            };
            const request = await axios.post(`https://api.emailjs.com/api/v1.0/email/send`, data)
            if (request.status === 200) {
                alert("Sizning so'rovingiz muvafaqiyatli yuborildi")
            }
        } catch (error) {
    
            console.log(error);
        }
    }

    const courses = [
        {
            subject: "Ingliz tili",
            font: English,
            variants: [
                {
                    variant_name: "General English",
                    info: {
                        day: 3,
                        time: "2",
                        price: 160,
                        duration: 3
                    },
                    id: 0
                },
                {
                    variant_name: "A1-A2",
                    info: {
                        day: 3,
                        time: "2",
                        price: 220,
                        duration: 2
                    },
                    id: 1
                },
                {
                    variant_name: "B1-B2",
                    info: {
                        day: 3,
                        time: "2",
                        price: 260,
                        duration: 2
                    },
                    id: 2
                },
                {
                    variant_name: "IELTS",
                    info: {
                        day: 3,
                        time: "2",
                        price: 350,
                        duration: 2
                    },
                    id: 3
                },
                {
                    variant_name: "Multilevel",
                    info: {
                        day: 3,
                        time: "2",
                        price: 260,
                        duration: 1
                    },
                    id: 4
                }
            ],
            id: 0
        },
        {
            subject: "Ona tili",
            font: Mother_tung,
            variants: [
                {
                    variant_name: "Ona tili va Adabiyot ",
                    info: {
                        day: 3,
                        time: "2",
                        price: 220,
                        duration: 5
                    },
                    id: 0
                }
            ],
            id: 1
        },
        {
            subject: "Rus tili",
            font: Russian_lang,
            variants: [
                {
                    variant_name: "Gramatika",
                    info: {
                        day: 3,
                        time: "2",
                        price: 220,
                        duration: 5
                    },
                    id: 0
                },
                {
                    variant_name: "So'zlashuv",
                    info: {
                        day: 3,
                        time: "2",
                        price: 220,
                        duration: 5
                    },
                    id: 1
                }
            ],
            id: 2
        },
        {
            subject: "Biologiya",
            font: Biology_img,
            variants: [
                {
                    variant_name: "Universitetga tayorlov",
                    info: {
                        day: 3,
                        time: "2",
                        price: 220,
                        duration: 5
                    },
                    id: 0
                }
            ],
            id: 3
        },
        {
            subject: "Matematika",
            font:Math_img,
            variants: [
                {
                    variant_name: "Universitetga tayorlo",
                    info: {
                        day: 3,
                        time: "4",
                        price: 220,
                        duration: 6
                    },
                    id: 0
                }
            ],
            id: 4
        },
        {
            subject: "Bug'alteria",
            font: Bugalteria_img,
            variants: [
                {
                    variant_name: "Excel",
                    info: {
                        day: 3,
                        time: "2",
                        price: 490,
                        duration: 1
                    },
                    id: 0
                },
                {
                    variant_name: "Nazariya",
                    info: {
                        day: 3,
                        time: "2",
                        price: 490,
                        duration: 4
                    },
                    id: 1
                },
                {
                    variant_name: "1C (Amaliyot)",
                    info: {
                        day: 3,
                        time: "2",
                        price: 490,
                        duration: 4
                    },
                    id: 2
                }
            ],
            id: 5
        },

        {
            subject: "Prezident maktabi",
            font: Prezident_img,
            variants: [
                {
                    variant_name: "Ingliz tili",
                    info: {
                        day: 3,
                        time: "2",
                        price: 190,
                        duration: 4
                    },
                    id: 0
                },
                {
                    variant_name: "Tanqidiy fikrlash (Matematika)",
                    info: {
                        day: 3,
                        time: "2",
                        price: 190,
                        duration: 4
                    },
                    id: 1
                }
            ],
            id: 5
        }
    ]
    const initialState = {
        sideBar: sideBar,
        setSideBar: setSideBar,
        courses: courses,
        modal: modal,
        setModal: setModal,
        handleEmailPost: handleEmailPost
    }
    return (
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    )
}