"use client";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { useState } from "react";
import light from "@/app/styles/themes/light";
import dark from "@/app/styles/themes/dark";
import Footer from "./components/footer/footer";
import Profile from "./components/profile/profile";
import Carousel from "./components/carousel/carousel";

export default function App() {
  const [theme, setTheme] = useState(light);

  const switchTheme = () => {
    theme == light ? setTheme(dark) : setTheme(light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <button onClick={switchTheme}>change</button>
        <Profile />
        <Carousel />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
