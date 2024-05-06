import { createSignal } from "solid-js";
import NavBar from './components/Bars/Navbar';
import LeftBar from './components/Bars/Leftbar';
import logo from "./assets/logo.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";


const App = () => {
  return (
    <div class="app">
      <NavBar />
      <div class="main-content">
        <LeftBar />
        <div class="content">
          <h1>Welcome to My Website</h1>
          <p>This is the main content area.</p>
        </div>
      </div>
    </div>
  );
};

export default App;