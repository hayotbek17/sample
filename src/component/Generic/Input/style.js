import styled from "styled-components";

const Container = styled.div`
  /* props */
  height: ${({ height }) => height || "55px"};
  width: ${({ width }) => width || "100%"};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};

  /* inputDiv */
  display: flex;
  align-items: center;
  background: #f8fafc;
  border: 1px solid #eff2f7;
  border-radius: 4px;
`;

const Icon = styled.div``;

const Inputs = styled.input`
  /* input */
  outline: none;
  border: none;
  background: none;
  width: 100%;

  /* font */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #323a56;
  padding-left: 5px;
`;

export { Container, Inputs, Icon };
