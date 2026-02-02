import "./ContactForm.css";

const ContactForm = () => {
  const handleSubmit = () => {
    console.log("test");
  };
  return (
    <section className="contact-form">
      <form action="#" method="get" onSubmit={handleSubmit}>
        <div className="contact-form-row">
          <label>
            First Name:
            <input type="text" name="first-name-input" />
          </label>
        </div>
        <div className="contact-form-row">
          <label>
            Last Name:
            <input type="text" name="last-name-input" />
          </label>
        </div>
        <div className="contact-form-row">
          <label>
            Email:
            <input
              type="email"
              name="email-input"
              placeholder="example@gmail.com"
              required
            />
          </label>
        </div>
        <div className="contact-form-row">
          <button type="reset" className="contact-reset-button">
            Clear
          </button>
          <button type="submit" className="contact-submit-button">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
