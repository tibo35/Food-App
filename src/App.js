import { Fragment } from "react";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
