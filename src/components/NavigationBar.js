
import { Link } from "react-router-dom";

export default function NavigationBar() {
    return (
        <nav className="navbar">
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/stocks" className="nav-link">
                Stocks
              </Link>
            </li>
          </ul>
        </nav>
      );
    };
