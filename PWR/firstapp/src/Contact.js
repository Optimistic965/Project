import emailjs from "emailjs-com";

const Contact = () => {

   // const message = <div className="success"><h4>Message Sent Successfully!!</h4></div>;
   // const error = <div className="error"><h4>Message failed to send, Kindly retry...</h4></div>;

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w9og5ok",
        "template_nyokf6j",
        e.target,
        "user_qjIE4JOKrdkxN40NJGYvk"
      )
      .then((res) => {
        const success = res.status;
        console.log(success)
      })
      .catch((err) => console.log(err));
       e.target.reset();
  }

  return (
    <div className="aboutcon">
      <h2>Contact Me</h2>
      <h5>Let's Work Together</h5>
      <div className="form">
        <form onSubmit={sendEmail}>
          <div className="name">
           <label htmlFor="user_name">Name :</label>
           <input name="name" placeholder="Full Name" type="text" />
          </div>
          <div className="email">
            <label htmlFor="Emailaddress">Email :</label>
            <input name="user_email" placeholder="Email Address" type="email" />
          </div>
          <div className="message">
            <label htmlFor="message">Message : </label>
            <textarea
              placeholder="What do you have for me?...."
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
         <div className="mailbtn">
          <button type="submit">
            Send
          </button>
         </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
