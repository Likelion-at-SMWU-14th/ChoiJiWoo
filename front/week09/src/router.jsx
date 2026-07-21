import { createBrouserRouter } from "react";
import App from "./App";

const router = createBrouserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default router;
