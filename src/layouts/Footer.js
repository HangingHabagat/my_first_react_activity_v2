
const Footer = () => {

    const today = new Date();
    

    return(
   
       <footer>
           <p><i>"Masarap sa Gabi, lalo na sa Umaga!"</i> Copyright &copy;  {today.getFullYear()}  </p>
       </footer>
   
      )
     
   
   }
   
   export default Footer;