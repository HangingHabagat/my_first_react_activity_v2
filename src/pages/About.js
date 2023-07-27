import karmaabout from "../components/Images/karmaabout.jpg";
const About = () => {
  return (
    <div className='About'>
      <h1> About Karma Kofi!</h1>
      <p>
        At Karma Kofi, we believe that every cup of coffee can make a positive
        impact on the world. We are more than just a café; we are a community of
        like-minded individuals who come together to enjoy exceptional coffee
        while contributing to meaningful social causes. From sourcing our beans
        ethically to supporting local farmers and donating a portion of our
        proceeds to charitable initiatives, we strive to embody the spirit of
        good karma in everything we do.
      </p>

      <img src={karmaabout} alt='karmaabout' />
      <h2>Our Coffee.</h2>
      <p>
        Indulge your senses with our carefully curated selection of premium
        coffee blends. Each batch is expertly roasted to perfection, ensuring a
        rich and flavorful experience with every sip. Whether you prefer a
        classic espresso, a velvety cappuccino, or a refreshing cold brew, we
        have something to satisfy every coffee lover's palate. We also offer a
        variety of dairy and non-dairy milk options to cater to different
        dietary preferences.
      </p>
      <h2>Join the Karma Movement.</h2>
      <p>
        We believe that everyone has the power to make a positive impact. Join
        us on our journey of spreading good karma and making the world a better
        place, one coffee at a time. Follow us on social media, sign up for our
        newsletter, or become a member of our Karma Krew to stay connected and
        be part of our mission.
      </p>
    </div>
  );
};

export default About;
