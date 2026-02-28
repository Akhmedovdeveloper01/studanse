import { useState } from "react";
import project_logo from "./assets/svg/project_logo.svg";
import ThemeMode from "./components/theme/theme_mode";

function App() {
  return (
    <>
    <div>
      <ThemeMode/>
      <p className="text-[red]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur blanditiis natus eius! Sit qui cumque dolores, itaque harum ratione cum molestias perferendis quis odit nulla temporibus veritatis quia ex earum?</p>
    </div>
    </>
  );
}

export default App;
