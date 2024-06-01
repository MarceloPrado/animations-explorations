import "reset-css";
import { useState } from "react";

import { AppListItems } from "./demos/AppListItems/AppListItems";
import { LoadingButton } from "./demos/LoadingButton/LoadingButton";
import { AnimatedHeight } from "./demos/AnimatedHeight/AnimatedHeight";
import { DemoView } from "./components/DemoView";
import { MenuBar } from "./components/MenuBar";

const demos = [
  {
    label: "App List Items",
    value: "app-list-items",
    app: <AppListItems />,
  },
  {
    label: "Loading Button",
    value: "loading-button",
    app: <LoadingButton />,
  },
  {
    label: "Animated Height",
    value: "animated-height",
    app: <AnimatedHeight />,
  },
];

function App() {
  const [currentDemo, setCurrentDemo] = useState(demos[0].value);

  //   if (currentDemo === "app-list-items") {
  //     return <AppListItems />;
  //   }

  //   if (currentDemo === "loading-button") {
  //     return <LoadingButton />;
  //   }

  //   if (currentDemo === "animated-height") {
  //     return <AnimatedHeight />;
  //   }
  const activeDemo = demos.find((demo) => demo.value === currentDemo);

  return (
    <DemoView
      menu={
        <MenuBar
          activeItemValue={currentDemo}
          items={demos}
          onItemClick={(item) => setCurrentDemo(item)}
        />
      }
      demo={activeDemo ? activeDemo.app : null}
    />
  );
}

export default App;
