import style from './Foods.module.css'

export function Foods() {
    return (
        <div className={style.container}>
            <div className={style.foods}>
                <h1>Olá aqui está nosso cardapio</h1>
                <div className={style.divfoods}>
                    <h1>Em produção</h1>
                </div>
            </div>
        </div>
    )
}