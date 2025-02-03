import style from './Foods.module.css'

export function Foods() {
    return (
        <div className={style.container}>
            <div className={style.foods}>
                <h1>Olá aqui está nosso cardapio <span>😋</span></h1>
                <div className={style.divfoods}>
                    <p>Em produção</p>
                </div>
            </div>
        </div>
    )
}