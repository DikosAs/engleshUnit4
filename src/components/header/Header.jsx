import "./header.css"
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header__fix">
        <nav className="header__nav">
          <Link to={ "/home" } >Home page</Link>
          <Link to={ "/about" } >About our school</Link>
          <Link to={ "/events" } >School events</Link>
        </nav>
      </div>
    </header>
  )
}