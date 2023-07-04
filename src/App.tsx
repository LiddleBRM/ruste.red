import React from "react";
import Index from "./components/Index";
import {
  AppHeader,
  Background,
  Linktext,
  NameHeader,
} from "./components/styled/Styled";

function App() {
  return (
    <Background>
      <AppHeader>
        <p>
          <Index />
        </p>
      </AppHeader>
    </Background>
  );
}

export default App;
