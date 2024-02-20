"use client";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { useState } from "react";
import light from "@/app/styles/themes/light";
import dark from "@/app/styles/themes/dark";

export default function App() {
  const [theme, setTheme] = useState(light);

  const switchTheme = () => {
    theme == light ? setTheme(dark) : setTheme(light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <button onClick={switchTheme}>change</button>
      <h1>TESTE</h1>
      <p>teste</p>
    </ThemeProvider>
  );
}