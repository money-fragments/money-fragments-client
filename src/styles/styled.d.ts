import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      brandRed: string;
      brandYellow: string;
      brand100: string;
      brand50: string;
      brand0: string;
      black100: string;
      mono100: string;
      mono60: string;
      mono30: string;
      mono0: string;
      white100: string;
      white60: string;
      white30: string;
      white0: string;
      black60: string;
      black30: string;
      black0: string;
    };

    fontSize: {
      title: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      content: string;
    };
    lineHeight: {
      title: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      content: string;
    };
  }
}
