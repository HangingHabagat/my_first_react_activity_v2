const Contact = () => {
  return (
    <div className='Contact'>
      <h1> Ask Karma Kofi!</h1>
      <p>
        Do you questions, feedback, or suggestions? Don't hesitate to leave a
        message below.{" "}
      </p>

      <form action='/action_page.php'>
        <label for='fname'>Complete Name:</label>
        <br />
        <input type='text' id='cname' name='cname' value='Juan dela Cruz' />
        <br />
        <br />
        <label for='lname'>E-mail:</label>
        <br />

        <input
          type='email'
          id='email'
          name='email'
          value='jdcruz@website.com'
        />
        <br />
        <br />
        <textarea>Type Question, Feedback, and/or Suggestions</textarea>
        <br />
        <br />
        <input className='submitBtn' type='submit' value='Submit' />
      </form>
      <br />
    </div>
  );
};

export default Contact;
