import styled, { DefaultTheme } from 'styled-components';

interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  fontSize?: number | string;
  padding?: number | string;
  borderRadius?: number | string;
  children?: string;
  theme: DefaultTheme;
}

export const CustomButton = styled.button<ButtonProps>`
  border: 0.5px solid gray;
  box-shadow: 0px 2px 2px lightgray;

  cursor: pointer;

  background: ${(props) =>
    props.backgroundColor
      ? (props: any) => props.theme.colors[`${props.backgroundColor}`]
      : (props) => props.theme.colors.white30};

  color: ${(props) =>
    props.color
      ? (props) => props.color
      : (props) => props.theme.colors.black100};

  width: ${(props) => props.width || '60px'};
  height: ${(props) => props.height || '30px'};

  font-size: ${(props) =>
    props.fontSize
      ? (props: any) => props.theme.fontSize[`${props.fontSize}`]
      : (props) => props.theme.fontSize.content};

  border-radius: ${(props) => props.borderRadius || '15px'};

  /* 호버 기능을 추가했습니다.  */
  &:hover {
    background: ${(props) =>
      props.backgroundColor
        ? (props: any) => props.theme.colors[`${props.backgroundColor}`]
        : (props) =>
            props.theme.colors
              .mono0}; // 왼쪽의 props.theme.colors.[mono0]에서 원하는 색상을 넣으시면 됩니다.

    color: ${(props) =>
      props.color
        ? (props) => props.color
        : (props) =>
            props.theme.colors
              .white100}; // 왼쪽의 props.theme.colors.[white100]에서 원하는 색상을 넣으시면 됩니다.
  }
`;
