import { useEffect } from 'react';
import visa from "../../assets/contact/visa.png";
import americanExpress from "../../assets/contact/americanexpress.png";
import masterCard from "../../assets/contact/mastercard.png";
import discover from "../../assets/contact/discover.png";
import jcb from "../../assets/contact/jcb.png";
import paypal from "../../assets/contact/paypal.png";
import apple from "../../assets/contact/apple.png";
import google from "../../assets/contact/google.png";
import giro from "../../assets/contact/giro.png";

const images = [
  visa,
  americanExpress,
  masterCard,
  discover,
  jcb,
  paypal,
  apple,
  google,
  giro
];

function preloadImages(imageArray) {
  imageArray.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
}

function Payment() {
  useEffect(() => {
    preloadImages(images);
  }, []);

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 justify-center items-center mt-12 gap-12 px-6">
      <img className="md:h-36 md:w-40 min-w-[10rem] min-h-[9rem]" loading="lazy" src={visa} alt="Visa" />
      <img className="md:h-36 md:w-40 min-w-[10rem] min-h-[9rem]" loading="lazy" src={americanExpress} alt="American Express" />
      <img className="md:h-36 md:w-40 min-w-[10rem] min-h-[9rem]" loading="lazy" src={discover} alt="Discover" />
      <img className="md:h-36 md:w-40 min-w-[10rem] min-h-[9rem]" loading="lazy" src={jcb} alt="JCB" />
      <img className="md:h-36 md:w-40 min-w-[10rem] min-h-[9rem]" loading="lazy" src={paypal} alt="PayPal" />
      <img className="md:h-36 md:w-40 min-w-[10rem] min-h-[9rem]" loading="lazy" src={apple} alt="Apple Pay" />
      <img className="md:h-36 md:w-40 min-w-[10rem] min-h-[9rem]" loading="lazy" src={google} alt="Google Pay" />
      <img className="md:h-36 md:w-40 min-w-[10rem] min-h-[9rem]" loading="lazy" src={giro} alt="Giro" />
      <img className="md:h-36 md:w-40 min-w-[10rem] min-h-[9rem]" loading="lazy" src={masterCard} alt="MasterCard" />
    </section>
  );
}

export default Payment;