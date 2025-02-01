import styles from './Header.module.css'
import arenaBeer from '../../assets/arenaBeer.png.png'
import arenaClub from '../../assets/arenaclube.png'


export function Header() {
    return (
        <div className={styles.header}>        
                <div className={styles.divImg}>
                        <img className={styles.img1} src={arenaBeer} alt="" />
                    
                    <img className={styles.img2} src={arenaClub} alt="" />
                </div>
                
            
            

            <div className={styles.sidebar}>
                    <div className={styles.btnsEsplorer}>
                        <span><a href="#">lazer</a></span>
                        <span><a href="#">Cardapio</a></span>
                        <span><a href="#">Gastronomia</a></span>
                        <span><a href="#">Bebidas</a></span>
                        <span><a href="#">Escolinha de futebol</a></span>
                        <span><a href="#">Eventos</a></span>
                    </div>
                
            </div>
                
        </div>

    )
}