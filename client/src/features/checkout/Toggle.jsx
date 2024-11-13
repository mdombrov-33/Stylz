import useThemeStore from "@/store/theme-store";

function Toggle() {
  const { theme } = useThemeStore((state) => state);

  return (
    <label
      htmlFor="AcceptConditions"
      className={`${theme === "lemonade" ? "bg-[#a6ac9d]" : "bg-[#121212]"} relative inline-block h-8 w-14 cursor-pointer rounded-full transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-success`}
    >
      <input
        type="checkbox"
        id="AcceptConditions"
        className="peer sr-only"
        name="call-me"
      />

      <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
    </label>
  );
}

export default Toggle;
