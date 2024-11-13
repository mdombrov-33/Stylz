import PhoneInput from "react-phone-input-2";
import useThemeStore from "@/store/theme-store";
import { useEffect } from "react";

function PhoneInputCheckout() {
  const { theme } = useThemeStore((state) => state);

  // Dynamically set CSS variables based on the theme
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--input-bg-color",
      theme === "lemonade" ? "#ffffff" : "#121212",
    );
    document.documentElement.style.setProperty(
      "--input-text-color",
      theme === "lemonade" ? "#000" : "##9FB9D0",
    );
    document.documentElement.style.setProperty(
      "--input-placeholder-color",
      theme === "lemonade" ? "#000" : "#9FB9D0",
    );
    document.documentElement.style.setProperty(
      "--input-border-color",
      theme === "lemonade" ? "#1C1B1B" : "#1C1B1B",
    );
    document.documentElement.style.setProperty(
      "--dropdown-bg-color",
      theme === "lemonade" ? "#ffffff" : "#121212",
    );
  }, [theme]);

  return (
    <div className="mt-2">
      <PhoneInput
        placeholder="Enter phone number"
        inputProps={{
          name: "phone",
        }}
        inputStyle={{ width: "288px", borderRadius: "8px" }}
      />
    </div>
  );
}

export default PhoneInputCheckout;
