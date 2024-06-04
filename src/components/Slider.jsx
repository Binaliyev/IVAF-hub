import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Sertificat1 from "../assets/imgs/sertificat1.jpg"
import Sertificat2 from "../assets/imgs/sertificat2.jpg"
import Sertificat3 from "../assets/imgs/sertificat3.jpg"

export const Slider = () => {

    const slider = [
        {
            font: Sertificat1,
            id:1
        },
        {
            font: Sertificat2,
            id:2
        },
        {
            font: Sertificat3,
            id:3
        }
    ]
    const style = {margin: "1rem 0"}
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="slide"
            >
                {slider.map((item, index) => {
                    return(
                        <SwiperSlide key={index}>
                            <img src={item.font} alt="slider-img" width={320} height={610} style={style} className='slide-img' />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}