import styles from './Header.module.css'
import arenaBeer from '../../assets/arenaBeer.png.png'
import arenaClub from '../../assets/arenaclube.png'
import { MdSportsSoccer } from "react-icons/md";
import { FaBookOpen, FaUtensils, FaCocktail, FaCalendarAlt, FaWater } from "react-icons/fa";


export function Header() {
    return (
        <div className={styles.header}>        
                <div className={styles.divImg}>
                        <img className={styles.img1} src={arenaBeer} alt="" />
                    
                    <img className={styles.img2} src={arenaClub} alt="" />
                </div>
                
            
            

            <div className={styles.sidebar}>
                    <div className={styles.btnsEsplorer}>
                        <span><a href="#">lazer <FaWater/> </a></span>
                        <span><a href="#">Cardapio <FaBookOpen/></a></span>
                        <span><a href="#">Gastronomia <FaUtensils/></a></span>
                        <span><a href="#">Bebidas <FaCocktail/></a></span>
                        <span><a href="#">Escolinha de futebol <MdSportsSoccer/></a></span>
                        <span><a href="#">Eventos <FaCalendarAlt/></a></span>
                    </div>
                
            </div>
                
        </div>

    )
}