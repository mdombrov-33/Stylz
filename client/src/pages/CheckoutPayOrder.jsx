import ApplePayBtn from "@/features/checkout/ApplePayBtn";
import GooglePayBtn from "@/features/checkout/GooglePayBtn";
import PayPalBtn from "@/features/checkout/PayPalBtn";

function CheckoutPayOrder() {
  return (
    <>
      <div className="divider">
        <p className="font-redHatDisplay font-bold">Express Checkout</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <GooglePayBtn />
        <ApplePayBtn />
        <PayPalBtn />
      </div>
      <div className="divider">
        <p className="font-redHatDisplay text-sm font-bold uppercase">
          or pay with a credit card
        </p>
      </div>
    </>
  );
}

export default CheckoutPayOrder;
