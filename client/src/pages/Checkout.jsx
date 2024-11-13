import { useEffect } from "react";

import useUserStore from "@/store/user-store";
import useThemeStore from "@/store/theme-store";
import useCartStore from "@/store/cart-store";
import RightSide from "@/features/checkout/RightSide";
import LeftSide from "@/features/checkout/LeftSide";

function Checkout() {
  const { theme } = useThemeStore((state) => state);
  const { user } = useUserStore((state) => state);
  const { cart } = useCartStore((state) => state);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <main className="grid h-screen grid-cols-4 items-center justify-between">
      <LeftSide user={user} />
      <RightSide cart={cart} theme={theme} />
    </main>
  );
}

export default Checkout;
