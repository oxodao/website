import '../assets/css/flag.css';

const countries = {
    'FR': '/assets/france.png',
    'US': '/assets/united-states.png',
}

export default function Flag({country, onClick}: {country: 'FR'|'US', onClick?: () => void}) {
    return <img onClick={onClick} className="flag" src={countries[country]} alt={"Set language to " + country} />;
}
