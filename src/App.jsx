import banner from './assets/cover.png';
import { A, Route, Routes } from '@solidjs/router';
import HomePage from './pages/HomePage';
import { createSignal } from 'solid-js';

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false);

  function toggleTheme() {
    setDarkTheme(!darkTheme()); // see netNinja solid-js series
  }
  return (
    <div class="container m-auto">
      <header
        class="my-4 p-2 text-xl flex items-center gap-4 justify-end"
        classList={{ 'bg-gray-700': darkTheme(), 'text-white': darkTheme() }}
      >
        <span
          class="cursor-pointer material-symbols-outlined"
          onClick={toggleTheme}
        >
          Light Mode
        </span>
        <h1 class="mr-auto">Solid App Tuto | Net Ninja</h1>

        <A href="/">Home</A>
        <A href="/about">About</A>

        <img src={banner} alt="site banner" width={400} height={100} />
      </header>

      <Routes>
        <Route path="/" component={HomePage} />
        <Route
          path="/about"
          element={<div>This site was made with Solid</div>}
        />
      </Routes>
    </div>
  );
}

export default App;
