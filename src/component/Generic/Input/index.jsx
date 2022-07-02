import React from "react";
import { Container, Inputs, Icon } from "./style";

export const Input = ({
  children,
  onClick,
  onChange,
  type,
  placeholer,
  defaultValue,
  height,
  width,
  mt,
  mb,
  ml,
  mr,
}) => {
  return (
    <Container
      onClick={onClick}
      onChange={onChange}
      height={height}
      width={width}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
    >
      <Icon>{children}</Icon>
      <Inputs type={type} placeholder={placeholer} value={defaultValue} />
    </Container>
  );
};

export default Input;
