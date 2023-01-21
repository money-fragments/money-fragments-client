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
      mono100B: string;
      mono60B: string;
      mono30B: string;
      mono0B: string;
      mono100W: string;
      mono60W: string;
      mono30W: string;
      mono0W: string;
      white100: string;
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
