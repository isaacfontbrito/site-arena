import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import img1 from '../Imagens/images/jms-kFHz9Xh3PPU-unsplash.jpg'
import img2 from '../Imagens/images/pexels-asphotograpy-1002703.jpg'


import style from './Img.module.css'

const images = [
    img1,
    img2,

]

export default function ImageCarrousel() {
    return (
        <Swiper 
            className={style.imageContainer}
            pagination={{clickable: true}}
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
        >
            {images.map((src, index) => (
                <SwiperSlide className={style.images} key={index}>
                    <img src={src} alt={`Imagem`} className={style.images} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}