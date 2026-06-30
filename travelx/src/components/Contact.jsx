function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>

      <p>Have any questions? We'd love to hear from you.</p>

      <form className="contact-form">
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
          rows="6"
          placeholder="Your Message"
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