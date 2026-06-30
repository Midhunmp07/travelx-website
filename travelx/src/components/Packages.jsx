function Packages() {
  const packages = [
    {
      id: 1,
      title: "Basic",
      price: "₹4,999",
      duration: "2 Days / 1 Night",
      features: ["Hotel Stay", "Breakfast", "Sightseeing"]
    },
    {
      id: 2,
      title: "Premium",
      price: "₹9,999",
      duration: "4 Days / 3 Nights",
      features: ["3★ Hotel", "Meals", "Adventure Activities"]
    },
    {
      id: 3,
      title: "Luxury",
      price: "₹19,999",
      duration: "7 Days / 6 Nights",
      features: ["5★ Hotel", "All Meals", "Private Cab"]
    }
  ];

  return (
    <section className="packages" id="packages">
      <h2>Travel Packages</h2>

      <div className="package-container">
        {packages.map((item) => (
          <div className="package-card" key={item.id}>
            <h3>{item.title}</h3>

            <h1>{item.price}</h1>

            <p>{item.duration}</p>

            <ul>
              {item.features.map((feature, index) => (
                <li key={index}>✔ {feature}</li>
              ))}
            </ul>

            <button>Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Packages;


