import useThemeStore from "@/store/theme-store";

function PayPalBtn() {
  const { theme } = useThemeStore((state) => state);

  return (
    <button
      onClick={() =>
        window.open(
          "https://www.paypal.com/in/webapps/mpp/paypal-popup",
          "WIPaypal",
          "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700",
        )
      }
      className={`${theme === "lemonade" ? "bg-accent hover:bg-yellow-500" : "bg-white hover:bg-gray-300"} btn w-60 rounded-lg`}
    >
      <img
        src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png"
        alt="PayPal Logo"
        className="h-12 w-40" // You can adjust the size of the logo if needed
      />
    </button>
  );
}

export default PayPalBtn;
