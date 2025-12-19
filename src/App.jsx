import ThemeToggleSlider from "./components/ThemeToggleSlider";

function App() {
  return (
    <div
      className="
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        bg-white
        dark:bg-black
        text-black
        dark:text-white
        transition-colors
        duration-300
      "
    >
      <h1 className="text-2xl font-semi-bold mb-6">
        THEME BUTTON
      </h1>

      <ThemeToggleSlider />
    </div>
  );
}

export default App;
