import Colored from "./colored";

export default function MainMenu () {
    return <div id="main_menu" className="primary">
        <ul>
            <li><a href="#aboutme"><Colored color="BLUE">About me</Colored></a></li>
            <li><a href="#projects"><Colored color="BLUE">Projects</Colored></a></li>
            <li><a href="#contact"><Colored color="BLUE">Contact</Colored></a></li>
        </ul>
    </div>
}