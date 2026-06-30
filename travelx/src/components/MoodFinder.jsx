import { useState } from "react";

function MoodFinder() {
  const [destination, setDestination] = useState("");

  const findDestination = (mood) => {
    switch (mood) {
      case "Relax":
        setDestination("🌿 Munnar - Enjoy nature and peace.");
        break;

      case "Adventure":
        setDestination("🏔️ Manali - Perfect for trekking and adventure.");
        break;

      case "Beach":
        setDestination("🏖️ Goa - Relax on beautiful beaches.");
        break;

      case "Nature":
        setDestination("🌳 Wayanad - Explore forests and waterfalls.");
        break;

      case "Heritage":
        setDestination("🏰 Jaipur - Discover forts and palaces.");
        break;

      default:
        setDestination("");
    }
  };

  return (
    <section className="finder" id="finder">
      <h2>Find Your Perfect Destination</h2>

      <p>Select your travel mood</p>

      <select onChange={(e) => findDestination(e.target.value)}>
        <option value="">Choose Mood</option>
        <option value="Relax">Relax</option>
        <option value="Adventure">Adventure</option>
        <option value="Beach">Beach</option>
        <option value="Nature">Nature</option>
        <option value="Heritage">Heritage</option>
      </select>

      {destination && (
        <div className="result">
          <h3>{destination}</h3>
        </div>
      )}
    </section>
  );
}

export default MoodFinder;