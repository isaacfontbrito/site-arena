import style from './Society.module.css'
import Arena from './image/campo.png'
import Reserva from './image/marcarhorario.jpg'
 
export function Society() {
    return (
        <section id='society' className={style.container}>
            <div className={style.titulo}>
            <h1>Arena Society Beer</h1>
            <img src={Arena} alt="" />
            </div>
            <div className={style.society}>
                <div className={style.divImg}>     
                    <img src={Reserva} alt="" />
                    <button>Agendar</button>
                </div>
            </div>
        </section>
    )
}