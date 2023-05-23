import "../index.css"
import { setRating } from '../utilities/setRating.jsx';

// @Recibe información del setRating para generar las estrellas de rating
export default function Rating({ votes }) {
    return <div className={"container"}>{setRating(votes)}</div>;
}