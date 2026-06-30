function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        🌍 TravelX
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#destinations">Destinations</a></li>
        <li><a href="#packages">Packages</a></li>
        <li><a href="#finder">Finder</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
  );
}

export default Navbar;