import { Link } from "react-scroll";
import course_img from "../assets/imgs/course.jpg";
import about_students_img from "../assets/imgs/aboute-students.png";
import { CoursesCard, Slider, TeachersCards } from "../components";
import { useFormik } from "formik";
import * as Yup from "yup"
import { useContext, useRef } from "react";
import { Context } from "../context/Context";
export const Main = () => {
    const { courses, handleEmailPost } = useContext(Context)
    const firsRef = useRef()
    const lastRef = useRef()
    const telRef = useRef()
    const selectRef = useRef()
    const commentRef = useRef()
    const initialValues = {
        firstname: "",
        lastname: "",
        tel: "",
        course: "",
        comment: ""

    }
    const validationSchema = Yup.object({
        firstname: Yup.string().required("Ism kirgizish majburiy").matches(/^[a-zA-Z]+$/, "Ism hechqanday belgilarsiz va bo'shliqlarsiz bo'lishi kerak"),
        lastname: Yup.string().required("Familya kirgizish majburiy").matches(/^[a-zA-Z]+$/, "Familya hechqanday belgilarsiz va bo'shliqlarsiz bo'lishi kerak"),
        tel: Yup.string().required("Tilefon raqamini kirgizish majburiy"),
        course: Yup.string().required("Kursni kirgizish majburiy")
    })
    const handleSubmit = async (event) => {
        event.preventDefault()
        const { firstname, lastname, tel, course, comment } = formik.values
        if (formik.isValid === true) {
            if (firstname ,lastname, tel , course) {
                handleEmailPost(firstname, lastname, tel, course, comment)
            }
            firsRef.current.value = null
            lastRef.current.value = null
            telRef.current.value = null
            selectRef.current.value = null
            commentRef.current.value = null
        } else if (formik.isValid === false) {
            alert("malumotlarni to'g'irlang")
        }
    }
    const formik = useFormik({ initialValues, validationSchema, handleSubmit })
    return (
        <>
            <main>
                <section className="hero">
                    <div className="container">
                        <div className="hero-inner">
                            <div className="start-box">
                                <h1 className="start-text">Zamonaviy va Sifatli ta'lim</h1>
                                <Link className="start-button"
                                    offset={-10}
                                    to="connection"
                                    duration={800}
                                    smooth={true}>Boshlash</Link>
                            </div>
                            <div id="aboute-us">
                                <div className="aboute-text-card-box">
                                    <div className="aboute-text-box">
                                        <h1 className="aboute-text">Biz haqimizda</h1>
                                        <p className="aboute-title">
                                            IVAF hub - bu to’liq siklli fan mutaxassislarini tayorlab chiqaruvchi fan akademiyasi. Biz o’quvchilar uchun ideal darslarni ishlab chiqamiz va o’qtuvchilar bilan doimiy aloqani o’rnatib beramiz. Sizni tanlagan sohangizda kerakli mutaxassisga aylanishingiz - bu biz qiladigan ish. Biz sizning eng dahshatli orzularingizni haqiqatga aylantirsh uchun mavjudmiz.
                                            Shuning uchun istalgan vaqtda biz bilan bog'laning
                                        </p>
                                    </div>
                                    <div className="aboute-info-box">
                                        <div className="info-card-box">
                                            <img src={course_img} alt="course-img" className="aboute-card-img" />
                                            <span className="aboute-card-text">Kurslar</span>
                                            <p className="aboute-card-number">6ta</p>
                                        </div>
                                        <div className="info-card-box">
                                            <img src={about_students_img} alt="course-img" className="aboute-card-img" />
                                            <span className="aboute-card-text">O'quvchilar</span>
                                            <p className="aboute-card-number">50+</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="slide-teacher-box">
                                    <div className="iphone-border-box">
                                        <Slider />
                                    </div>
                                    <div className="iphone-border-box">
                                        <TeachersCards />
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            <div id="courses">
                                <h1 className="courses-text">Kurslar</h1>
                                <div className="courses-box">
                                    <CoursesCard />
                                </div>
                            </div>
                            {/*  */}
                            <div id="connection">
                                <h1 className="connection-text">Bog'lanish</h1>
                                <form className="connection-form" onSubmit={handleSubmit} >
                                    <div className="validation-box">
                                        <input type="text" className="connection-inputs" placeholder="Ismingizni kirgizing" {...formik.getFieldProps("firstname")} ref={firsRef} />
                                        {formik.touched.firstname && formik.errors.firstname && (
                                            <span className="error-text"> {formik.errors.firstname}</span>
                                        )}
                                    </div>
                                    <div className="validation-box">
                                        <input type="text" className="connection-inputs" placeholder="Familiyangizni kirgizing" {...formik.getFieldProps("lastname")} ref={lastRef} />
                                        {formik.touched.lastname && formik.errors.lastname && (
                                            <span className="error-text"> {formik.errors.lastname}</span>
                                        )}
                                    </div>
                                    <div className="validation-box">
                                        <input type="tel" className="connection-inputs" placeholder="Telifon raqamingizni kirgizing" {...formik.getFieldProps("tel")} ref={telRef} />
                                        {formik.touched.tel && formik.errors.tel && (
                                            <span className="error-text"> {formik.errors.tel}</span>
                                        )}
                                    </div>
                                    <div className="validation-box">
                                        <select className="connection-select" {...formik.getFieldProps("course")} ref={selectRef} >
                                            <option>Kurslardan birini tanlang</option>
                                            {courses.map((item, index) => {
                                                return (
                                                    <option value={item.subject} key={index}>{item.subject}</option>
                                                )
                                            })}
                                        </select>
                                        {formik.touched.courses_variants && formik.errors.courses_variants && (
                                            <span className="error-text"> {formik.errors.courses_variants}</span>
                                        )}
                                    </div>
                                    <textarea className="connection-textarea" placeholder="Izoh qoldiring" {...formik.getFieldProps("comment")} ref={commentRef}></textarea>
                                    <button type="submit" className="submit-button">
                                        submit
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
