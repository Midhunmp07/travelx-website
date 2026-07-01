import { useState } from "react";

function MoodFinder() {
  const [place, setPlace] = useState(null);

  const moods = {
    Relax: {
      emoji: "🏖️",
      name: "Goa",
      image: "goa.jpg",
      desc: "Relax on beautiful beaches and enjoy peaceful sunsets.",
      price: "₹6,999",
    },

    Adventure: {
      emoji: "🏔️",
      name: "Wayanad",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
      desc: "Perfect for trekking, waterfalls and camping.",
      price: "₹5,999",
    },

    Romantic: {
      emoji: "❤️",
      name: "Munnar",
      image: "munnar.jpg",
      desc: "A romantic hill station with tea gardens.",
      price: "₹4,999",
    },

    Beach: {
      emoji: "😌",
      name: "Jaipur",
      image: "jaipur.jpg",
      desc: "Discover magnificent forts, royal palaces and rich Rajasthani culture.",
      price: "₹7,499"
    },

    Nature: {
      emoji: "🌿",
      name: "Ooty",
      image: "ooty.jpg",
      desc: "Green hills, lakes and pleasant climate.",
      price: "₹5,499",
    },

    Mountains: {
    emoji: "🏔️",
    name: "Manali",
    image: "manali.jpg",
    desc: "Enjoy breathtaking mountain views, cool weather and snow-covered landscapes.",
    price: "₹7,999",
    },

  };

  return (
    <section className="mood" id="finder">
      <h2> Mood Finder </h2>

      <p>What's your travel mood today?</p>

      <div className="mood-buttons">
        <button onClick={() => setPlace(moods.Relax)}>Relax</button>

        <button onClick={() => setPlace(moods.Adventure)}>Adventure</button>

        <button onClick={() => setPlace(moods.Romantic)}>Romantic</button>

        <button onClick={() => setPlace(moods.Beach)}>Heritage</button>

        <button onClick={() => setPlace(moods.Nature)}>Nature</button>

        <button onClick={() => setPlace(moods.Mountains)}>Mountains</button></div>

      {place && (
        <div className="result-card">
          <img src={place.image} alt={place.name} />

          <h3>
            {place.emoji} {place.name}
          </h3>

          <p>{place.desc}</p>

          <h4>{place.price}</h4>

          <button className="book-btn">Book Now</button>
        </div>
      )}
    </section>
  );
}

export default MoodFinder;