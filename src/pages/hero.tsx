import '../assets/css/hero.css';
import Colored from '../components/colored';

export default function Hero() {
    return <section className="hero">
        <h1 className="content">I'm <Colored color="BLUE">Nathan JANCZEWSKI</Colored></h1>
        <h2 className="content">Software engineer</h2>
        <a className="content button" href="#aboutme">About me</a>
    </section>
}