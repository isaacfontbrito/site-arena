import style from './Foods.module.css'


export function Foods() {
    return (
        <div id='gastronomia' className={style.container}>
            <div className={style.foods}>
                <div className={style.headerFoods}>
                    <h1>Explore Nossa Gastronomia</h1>
                </div>
                <div className={style.petiscos}>
                    <h3>Petiscos</h3>
                </div>
                <div className={style.refeicoes}>
                    <h3>Refeições</h3>
                    <p>Garnições</p>
                </div>
                <div className={style.frutosMar}>
                    <h3>Especial Frutos do Mar</h3>
                </div>
                
            </div>
        </div>
    )
}