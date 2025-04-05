// TODO: Make a header component that will appear on multiple pages
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Header() {
    return (
        <Navigation
            links={<Link key={1} className="nav-link" to="/">
                Portfolio
            </Link>} />,
            <Link key={2} className="nav-link" to="/contact">
                Contact
            </Link>,
            <Link key={3} className="nav-link" to="/aboutme">
                About Me
            </Link>,
            <Link key={4} className="nav-link" to="/resume">
                Resume
                </Link>
                
    );
}