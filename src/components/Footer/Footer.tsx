import style from './Footer.module.css'
import { MdEmail } from 'react-icons/md'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'


export function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.informes}>
                <ul>
                    <li><a href="#">{<FaWhatsapp />}</a></li>
                    <li><a href="https://www.instagram.com/arenasocietybeeer/">{<FaInstagram />}</a></li>
                    <li><a href="#">{<MdEmail />}</a></li>
                </ul>
                
            </div>


            <p>&copy; Arena Society | Arena Clube</p>
        </div>
    )
}