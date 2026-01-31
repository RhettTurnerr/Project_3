import React, { useImperativeHandle } from "react";
import "./Navbar.css"
import { Link , useMatch, useResolvedPath} from "react-router-dom";


export default function Navbar(){

    return <nav className="nav">
        <Link to="/home">Logo</Link>
        <ul>
            <MyLink to="/todo" className="nav-todo">ToDo</MyLink>
            <MyLink to="/contact" className="nav-contact">Contact</MyLink>
        </ul>
        {}
    </nav>
}

function MyLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
        <li className={isActive ? "active" : ""}>
            <Link to = {to} {...props}>
                {children}
            </Link>
        </li>
    )
}