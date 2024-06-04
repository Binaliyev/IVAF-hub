import IVAF_hupTE from "../assets/imgs/IVAF_hup-T-E.jpg";
import IVAF_hupTE2 from "../assets/imgs/IVAF_hup-T-E2.jpg";
import IVAF_hupTE3 from "../assets/imgs/IVAF_hub-T-E3.jpg";
import IVAF_hupTM from "../assets/imgs/IVAF_hub-T-M.jpg";
import IVAF_hupTM2 from "../assets/imgs/IVAF_hub-T-M2.jpg";
export const TeachersCards = () => {
    const teachers = [
        {
            img: IVAF_hupTE,
            name: "Akbarova Elvira",
            science: "Inglis tili",
            id: 1
        },
        {
            img: IVAF_hupTE2,
            name: "Allamurodova Umida ",
            science: "Inglis tili",
            id: 2
        },
        {
            img: IVAF_hupTE3,
            name: "Temirov Amir",
            science: "Inglis tili",
            id: 3
        },
        {
            img: IVAF_hupTM,
            name: "Ruzikulov Jurabek",
            science: "Matematika",
            id: 4
        },
        {
            img:IVAF_hupTM2 ,
            name: "Ruzikulov Shoxrux",
            science: "Matematika",
            id: 5
        }
    ]
    return (
        <>
            <div className="teachers-box">
                {teachers.map((item, index) => {
                    return (
                        <div className="teacher-card" key={index} id={item.id}>
                            <img src={item.img} alt="teacher-img" className="teachers-img" />
                            <h1 className="teachers-name">{item.name}</h1>
                            <p className="teachers-science">{item.science}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}