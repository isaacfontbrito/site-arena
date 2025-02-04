import style from './Foods.module.css'

export function Foods() {
    return (
        <div id='gastronomia' className={style.container}>
            <div className={style.foods}>
                <h1>Explore Nossa Gastronomia<span>😋</span></h1>
                <div className={style.divfoods}>
                    <p>Em produção</p>
                </div>
            </div>
        </div>
    )
}