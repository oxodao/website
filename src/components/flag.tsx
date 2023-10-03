import '../assets/css/flag.css';

const countries = {
    'FR': '/assets/france.png',
    'US': '/assets/united-states.png',
}

export default function Flag({country}: {country: 'FR'|'US'}) {
    return <img className="flag" src={countries[country]} alt={"Set language to " + country} />;
}
