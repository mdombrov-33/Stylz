import useThemeStore from "@/store/theme-store";

function ApplePayBtn() {
  const { theme } = useThemeStore((state) => state);
  return (
    <button
      onClick={() =>
        window.open(
          "https://www.apple.com/apple-pay/",
          "WIApplePay",
          "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700",
        )
      }
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg"
        alt="Apple Pay Logo"
        className={`${theme === "lemonade" ? "bg-neutral-content hover:bg-gray-300" : "bg-white hover:bg-gray-300"} btn w-60 rounded-lg`}
      />
    </button>
  );
}
export default ApplePayBtn;
