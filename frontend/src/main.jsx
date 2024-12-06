import { StrictMode } from "react";
import { createRoot } from "react-dom/cloent";
import "./index.css";
import router from "./router/Router";
import { RoutreProvider} from "react-router"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)