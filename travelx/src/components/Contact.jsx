function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>

      <p>Have any questions? We'd love to hear from you.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          required
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;