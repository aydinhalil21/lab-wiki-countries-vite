import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/" ><p>WikiCountries</p></Link >
      </div>
    </nav>
    </>
    )
}

export default Navbar;
