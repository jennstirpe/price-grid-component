import { GlobalStyles } from "./components/styled/Global";
import { ThemeProvider } from "styled-components";

import { StyledMain } from "./components/styled/Container.styled";
import Header from "./components/Header";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import Signature from "./components/Signature";



const theme = {
  colors: {
    cyan: "hsl(179, 62%, 43%)",
    lightCyan: "rgb(70,190, 189)",
    lightestCyan: "rgb(172, 250, 250)",
    yellow: "hsl(71, 73%, 54%)",
    lightGray: "hsl(204, 43%, 93%)",
    grayishBlue: "hsl(218, 22%, 67%)",
  }
}


function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />

      <StyledMain>
        <Header />
        <Subscription />
        <Footer />
      </StyledMain>

      <Signature />

    </>
    </ThemeProvider>
  );
}

export default App;
