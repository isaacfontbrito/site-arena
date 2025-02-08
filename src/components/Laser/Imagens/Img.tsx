import { Swiper , SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper'


import img5 from '../Imagens/images/arena5.jpg'
import img6 from '../Imagens/images/arena6.jpg.jpg'
import img7 from '../Imagens/images/arena7.jpg.jpg'

import style from './Img.module.css'
import { useState } from 'react'
import * as React from 'react'

const images = [
    img7,
    img5,
    img6,
    
    


]

export default function ImageCarrousel() {
    const [ isHovered, setIsHovered] = useState<SwiperType | null>(null)
    const [ zoomImage, setZoomImage] = useState<string | null>(null)

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Escape") {
            setZoomImage(null)
        }
    }

    return ( 
        <div
            onMouseEnter={() => isHovered?.autoplay.start()}
            onMouseLeave={() => isHovered?.autoplay.stop()}
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >

            <Swiper 
                className={style.imageContainer}
                pagination={{clickable: true}}
                modules={[Pagination, Autoplay, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{delay: 2000, disableOnInteraction: false}} // Inicia o auto play quando hover
                onSwiper={setIsHovered}
            >
                {images.map((src, index) => (
                    <SwiperSlide className={style.images} key={index}>
                        <img 
                            src={src} 
                            alt={`Imagem`} 
                            className={style.images}
                            onClick={() =>setZoomImage(src)}
                        />
                    </SwiperSlide>
            ))}
        </Swiper>

        {zoomImage && (
            <div className={style.zoomOverlay} onClick={() => setZoomImage(null)}>
                <img src={zoomImage} alt="Zoom" className={style.zoomedImage} />
            </div>
        )}
        </div>
    )
}