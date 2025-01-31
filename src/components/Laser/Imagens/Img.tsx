import { Swiper , SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper'
import img1 from '../Imagens/images/jms-kFHz9Xh3PPU-unsplash.jpg'
import img2 from '../Imagens/images/pexels-asphotograpy-1002703.jpg'
import img3 from '../Imagens/images/pexels-pixabay-459728.jpg'

import style from './Img.module.css'
import { useState } from 'react'

const images = [
    img1,
    img2,
    img3,

]

export default function ImageCarrousel() {
    const [ isHovered, setIsHovered] = useState<SwiperType | null>(null)

    return (
        <Swiper 
            className={style.imageContainer}
            pagination={{clickable: true}}
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{delay: 2000, disableOnInteraction: false}} // Inicia o auto play quando hover
            onSwiper={setIsHovered}
            onMouseEnter={() => isHovered?.autoplay.start()}
            onMouseLeave={() => isHovered?.autoplay.stop()}
        >
            {images.map((src, index) => (
                <SwiperSlide className={style.images} key={index}>
                    <img src={src} alt={`Imagem`} className={style.images} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}