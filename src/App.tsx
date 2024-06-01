import "reset-css";
import { useState } from "react";

import { AppListItems } from "./demos/AppListItems/AppListItems";
import { LoadingButton } from "./demos/LoadingButton/LoadingButton";

const demos = ["app-list-items", "loading-button"];

function App() {
  const [currentDemo, setCurrentDemo] = useState(demos[1]);

  if (currentDemo === "app-list-items") {
    return <AppListItems />;
  }

  if (currentDemo === "loading-button") {
    return <LoadingButton />;
  }

  return <p>Choose demo</p>;
}

export default App;
