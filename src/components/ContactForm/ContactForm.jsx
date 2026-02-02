import "./ContactForm.css";

const ContactForm = () => {
  const handleSubmit = (e) => {
    return;
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
        <div className="contact-button-row">
          <button type="reset" className="contact-reset-button">
            Clear
          </button>
        </div>
        <div className="contact-button-row">
          <button type="submit" className="contact-submit-button">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
