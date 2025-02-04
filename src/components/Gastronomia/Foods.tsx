import style from './Foods.module.css'
import feijoada from './images/feijoada.jpg'
import panelada from './images/panelada.jpg'
import batata from './images/batata.jpg'
import carangueijo from './images/carangueijo.jpg'

export function Foods() {
    return (
        <div id='gastronomia' className={style.container}>
            <div className={style.foods}>
                <h1>Explore Nossa Gastronomia<span>😋</span></h1>
                <div className={style.divfoods}>
                    <div className={style.containerComidas}>
                        <div className={style.images}>
                            <img src={feijoada} alt="" />
                        </div>
                        <p>Feijoada</p>
                    </div>
                    <div className={style.containerComidas}>
                        <div className={style.images}>
                            <img src={panelada} alt="" />
                        </div>
                        <p>Panelada</p>
                    </div>
                    <div className={style.containerComidas}>
                        <div className={style.images}>
                            <img src={batata} alt="" />
                        </div>
                        <p>Batata</p>
                    </div>
                    <div className={style.containerComidas}>
                        <div className={style.images}>
                            <img src={carangueijo} alt="" />
                        </div>
                        <p>Carangueijo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}