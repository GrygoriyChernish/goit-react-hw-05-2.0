import Navigation from "../Navigation/Navigation.jsx";
import { header } from "./Header.module.css";

const Header = () => {
    return (<header className={header}>
        <div className="container">
            <Navigation/>
        </div>
    </header>)
}

export default Header;