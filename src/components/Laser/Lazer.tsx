import ImageCarrousel from './Imagens/Img'
import style from './Lazer.module.css'
import { Mapa } from './Map/Map'

export function Lazer() {
    return (
        <section id='lazer' className={style.seclazer}>
            <div className={style.divlazer}>
                <h1>Desfrute de momentos inesquecíveis em um ambiente feito para relaxar, se divertir e celebrar a vida!" 🏊🍹🎶</h1>
                <div className={style.informes}>
                    <div className={style.imagens}>
                        <ImageCarrousel />
                    </div>
                    <div className={style.mapa}>
                        <p>Nosso espaço de lazer está aqui!</p>
                        <div className={style.local}>
                            <Mapa />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}