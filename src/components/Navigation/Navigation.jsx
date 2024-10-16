import { NavLink } from "react-router-dom";
import { nav, active } from './Navigation.module.css'
import clsx from "clsx";

const buildLinkClass = ({isActive}) => {
    return clsx(isActive && active);
};

const Navigation = () => {
    return <nav className={nav}>
        <NavLink to="/" className={buildLinkClass}>Home</NavLink>
        <NavLink to="/movies" className={buildLinkClass}>Movies</NavLink>
    </nav>
}

export default Navigation;