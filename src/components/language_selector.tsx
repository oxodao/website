import Flag from "./flag";
import '../assets/css/flag.css';

export default function LanguageSelector() {
    return <div className="LanguageSelector">
        <Flag country="FR" />
        <Flag country="US" />
    </div>
}