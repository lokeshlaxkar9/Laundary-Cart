import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav-login">
      <div id="brand-name">LAUNDRY</div>
      <div id="nav-links-login">
        <div className="nav-link-login">Home</div>
        <div className="nav-link-login">Pricing</div>
        <div className="nav-link-login">Career</div>
        <div className="nav-link-login" id="userName">
          {"Sign In"}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
