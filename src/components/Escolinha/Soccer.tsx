
import { Link } from 'react-router-dom'
import style from './Soccer.module.css'
import Icone from './image/futebol.png'

export function Soccer() {
    

    return (
        <section id='escolinha' className={style.container}>
            <h1>Escolinha de futebol <img src={Icone} alt="" /></h1>
            <div className={style.fut}>
                <div>
                    
                </div>
            </div>
            <Link to='registration'>
                <button>Faça sua matrícula</button>
            </Link>
            
        </section>
    )
}