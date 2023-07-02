import React from "react";
import { Footer } from "./layout/Footer";
import { Main } from "./layout/Main";
import { Header } from "./layout/Header";

class App extends React.Component {

  render() {
    
    return(
    <>
      <Header />
      <Main />
      <Footer />
    </>
    )
  }
}

export default App;