import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    color: {
      primary: string;
      lightestGrey: string;
      lightGrey: string;
      darkGrey: string;
      darkestGrey: string;
      backgroundColor: string;
      containerColor: string;
      fontColor: string;
    };
    fonts: {
      play: string;
      exo2: string;
    };
  }
}
