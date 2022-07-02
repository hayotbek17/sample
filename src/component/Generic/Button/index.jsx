import React from "react";
import { Container } from "./style";

export const Button = ({
  children,
  onClick,
  type,
  width,
  height,
  mr,
  ml,
  mt,
  mb,
}) => {
  return (
    <Container
      mr={mr}
      ml={ml}
      mb={mb}
      mt={mt}
      type={type}
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export default Button;
