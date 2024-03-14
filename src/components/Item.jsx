import { Link } from "react-router-dom";

function Item(props) {

    const {name, url} = props;
    
    let shortUrl = url.split("/");


    return ( <>
        <li>
            <Link to={"/pokemones/" + shortUrl[6]}>{name}</Link>
        </li>
    </> );
}

export default Item;