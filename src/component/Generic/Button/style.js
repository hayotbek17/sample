import styled from "styled-components";

const getType = (type) => {
  switch (type) {
    case "primary":
      return {
        background: "#1D72D2",
        color: "#FFFFFF",
        boxShadow: "0px 7px 12px rgba(32, 81, 137, 0.24)",
      };
    default:
      return {
        background: "#EFF2F7",
        color: "#323A56",
        border: "1px  solid #EFF2F7",
      };
  }
};

export const Container = styled.div`
  /* props */
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "64px")};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-right: ${({ mr }) => `${mr}px`};

  /* btn */
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  ${({ type }) => getType(type)}
  :active {
    transform: scale(0.98);
    opacity: 0.8;
  }

  /* font */
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
