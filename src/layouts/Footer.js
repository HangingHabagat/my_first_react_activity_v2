const Footer = () => {
  const today = new Date();

  return (
    <footer>
      <p>
        <i>Karma Kofi Coffee House</i> &copy; {today.getFullYear()}{" "}
      </p>
    </footer>
  );
};

export default Footer;
