import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './Slider.module.scss'
import SubmitLink from '../../UI/SubmitLink';

function Slider() {
    const data = [
        {
            img: 'https://res.cloudinary.com/dluqxr8lw/image/upload/v1732546905/561_glg7fd.png',
            title: 'Test1'
        },
        {
            img: 'https://res.cloudinary.com/dluqxr8lw/image/upload/v1732546906/1456_bdfodt.png',
            title: 'Test 2'
        },
        {
            img: 'https://res.cloudinary.com/dluqxr8lw/image/upload/v1732546906/2149272103_hoips3.png',
            title: 'Test 3'
        }
    ]
    return (
        <Swiper
            className={styles.slider}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {data?.map((item)=>{
                    return (
                        <SwiperSlide key={item.title}>
                            <div className={`${styles['slider__item']}`}>
                                <img src={item.img} alt={item.title} className={`${styles['slider__item--cover']}`}/>
                                <div className="d-flex justify-content-center">
                                    <SubmitLink  className={styles.link}/>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
        </Swiper>
    )
}

export default Slider;
