function Destinations() {

  const destinations = [
    {
      id: 1,
      name: "Munnar",
      image: "munnar.jpg",
      description: "Beautiful tea gardens and cool climate."
    },
    {
      id: 2,
      name: "Goa",
      image: "goa.jpg",
      description: "Relax on beautiful beaches and enjoy nightlife."
    },
    {
      id: 3,
      name: "Manali",
      image: "manali.jpg",
      description: "Enjoy snow mountains and adventure sports."
    },
    {
      id: 4,
      name: "Ooty",
      image: "ooty.jpg",
      description: "A peaceful hill station with amazing views."
    },
    {
      id: 5,
      name: "Wayanad",
      image: "wayanad.jpg",
      description: "Explore waterfalls, forests and tea plantations."
    },
    {
      id: 6,
      name: "Jaipur",
      image: "jaipur.jpg",
      description: "Discover royal forts and rich Rajasthani culture."
    }
  ];

  return (
    <section className="destinations" id="destinations">

      <h2>Popular Destinations</h2>

      <div className="destination-container">

        {destinations.map((place) => (

          <div className="destination-card" key={place.id}>

            <img src={place.image} alt={place.name} />

            <div className="destination-content">

              <h3>{place.name}</h3>

              <p>{place.description}</p>

              <button>Explore</button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Destinations;