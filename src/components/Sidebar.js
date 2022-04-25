import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();
    return (
        <div className="sidebar">
            <Link className={location.pathname === '/' ? 'active' : ''} to="/">Home</Link>
            <Link className={location.pathname === '/search' ? 'active' : ''} to="/search">Search</Link>
        </div>
    );
}

export default Sidebar;
