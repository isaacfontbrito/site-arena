import style from './Header.module.css'
import arenaBeer from '../../assets/arenaBeer.png.png'
import arenaClub from '../../assets/arenaclube.png'
import { MdSportsSoccer } from "react-icons/md";
import { FaBookOpen, FaUtensils, FaCocktail, FaCalendarAlt, FaWater } from "react-icons/fa";
import { Link } from 'react-scroll'; 

export function Header() {
    return (
        <div className={style.header}>        
                <div className={style.divImg}>
                        <img className={style.img1} src={arenaBeer} alt="" />
                    
                    <img className={style.img2} src={arenaClub} alt="" />
                </div>
                
            
            

            <div className={style.sidebar}>
                    <div className={style.btnsEsplorer}>
                        <Link className={style.link} to='lazer' smooth={true} duration={500}>lazer <FaWater/></Link>
                        <Link className={style.link} to='gastronomia' smooth={true} duration={500}>Gastronomia <FaUtensils/></Link>
                        <Link className={style.link} to='cardapio-online' smooth={true} duration={500}>Cardapio online <FaBookOpen/></Link>
                        <Link className={style.link} to='bebidas' smooth={true} duration={500}>Bebidas <FaCocktail/></Link>
                        <Link className={style.link} to='escolinha' smooth={true} duration={500}>Escolinha de futebol <MdSportsSoccer/></Link>
                        <Link className={style.link} to='Eventos' smooth={true} duration={500}>Eventos <FaCalendarAlt/></Link>
                    </div>
                
            </div>
                
        </div>

    )
}