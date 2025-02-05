import { Soccer } from "../Escolinha/Soccer";
import { Footer } from "../Footer/Footer";
import { Foods } from "../Gastronomia/Foods";
import { Header } from "../Header/Header";
import { Lazer } from "../Laser/Lazer";

export function PageInitial() {
    return (
        <div>
            <Header/>
            <Lazer />
            <Foods />
            <Soccer  />
            <Footer />
        </div>
    )
}