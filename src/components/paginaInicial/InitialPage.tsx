import { Soccer } from "../Escolinha/Soccer";
import { Footer } from "../Footer/Footer";
import { Foods } from "../Gastronomia/Foods";
import { Header } from "../Header/Header";
import { Lazer } from "../Laser/Lazer";
import { Society } from "../Society/Society";

export function PageInitial() {
    return (
        <div>
            <Header/>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4850599300377417"
                    crossOrigin="anonymous">

            </script>
            <Lazer />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4850599300377417"
                    crossOrigin="anonymous">

            </script>
            <Foods />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4850599300377417"
                    crossOrigin="anonymous">

            </script>
            <Society />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4850599300377417"
                    crossOrigin="anonymous">

            </script>
            <Soccer  />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4850599300377417"
                    crossOrigin="anonymous">

            </script>
            <Footer />
        </div>
    )
}