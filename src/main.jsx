import { createRoot } from "react-dom/client";
import App from "./App";
import "./css/styles.css";

const app = document.querySelector("#root");
const root = createRoot(app);

root.render(<App />);
