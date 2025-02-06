import style from './Society.module.css'
import Arena from './image/arena.jpg'
 
export function Society() {
    return (
        <section className={style.container}>
            <div className={style.titulo}>
            <h1>Arena Society</h1>
            <img src={Arena} alt="" />
            </div>
            <div className={style.society}>

            </div>
        </section>
    )
}