import { useEffect, useState } from "react";
import visa from "../../assets/contact/visa.png";
import americanExpress from "../../assets/contact/americanexpress.png";
import masterCard from "../../assets/contact/mastercard.png";
import discover from "../../assets/contact/discover.png";
import jcb from "../../assets/contact/jcb.png";
import paypal from "../../assets/contact/paypal.png";
import apple from "../../assets/contact/apple.png";
import google from "../../assets/contact/google.png";
import giro from "../../assets/contact/giro.png";
import Loader from "../../components/Loader";

const images = [
  visa,
  americanExpress,
  masterCard,
  discover,
  jcb,
  paypal,
  apple,
  google,
  giro,
];

function preloadImages(imageArray, callback) {
  let loadedCount = 0;
  imageArray.forEach((image) => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      loadedCount++;
      if (loadedCount === imageArray.length) {
        callback();
      }
    };
  });
}

function Payment() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    preloadImages(images, () => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div>
        <p className="mt-6 p-4 text-center font-redHatDisplay text-2xl font-bold xl:mr-44">
          We support different payment services, check them out!
        </p>
      </div>
      {loading ? (
        <div className="mt-12 flex items-center justify-center">
          <div className="spinner">
            <Loader />
          </div>
        </div>
      ) : (
        <section className="mt-12 grid grid-cols-2 items-center justify-center gap-12 px-6 sm:grid-cols-3">
          <img
            className="min-h-[9rem] min-w-[10rem] md:h-36 md:w-40"
            src={visa}
            alt="Visa"
          />
          <img
            className="min-h-[9rem] min-w-[10rem] md:h-36 md:w-40"
            src={americanExpress}
            alt="American Express"
          />
          <img
            className="min-h-[9rem] min-w-[10rem] md:h-36 md:w-40"
            src={discover}
            alt="Discover"
          />
          <img
            className="min-h-[9rem] min-w-[10rem] md:h-36 md:w-40"
            src={jcb}
            alt="JCB"
          />
          <img
            className="min-h-[9rem] min-w-[10rem] md:h-36 md:w-40"
            src={paypal}
            alt="PayPal"
          />
          <img
            className="min-h-[9rem] min-w-[10rem] md:h-36 md:w-40"
            src={apple}
            alt="Apple Pay"
          />
          <img
            className="min-h-[9rem] min-w-[10rem] md:h-36 md:w-40"
            src={google}
            alt="Google Pay"
          />
          <img
            className="min-h-[9rem] min-w-[10rem] md:h-36 md:w-40"
            src={giro}
            alt="Giro"
          />
          <img
            className="min-h-[9rem] min-w-[10rem] md:h-36 md:w-40"
            src={masterCard}
            alt="MasterCard"
          />
        </section>
      )}
    </>
  );
}

export default Payment;
