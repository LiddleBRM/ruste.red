import styled from "styled-components";

const BG_COLOR_PRIMAL = "#000000"; // 黒
const TEXT_COLOR_PRIMAL = "#00793D"; // 黒

export const ButtonArea = styled.div({
  backgroundColor: BG_COLOR_PRIMAL,
  height: "120px",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: TEXT_COLOR_PRIMAL,
});

export const CategoryTab = styled.button({
  backgroundColor: BG_COLOR_PRIMAL,
  color: TEXT_COLOR_PRIMAL,
  border: "none",
  width: "30vw",
  fontSize: "34px",
  cursor: "pointer",
  "@media screen and (max-width: 820px)": {
    fontSize: "22px",
  },
});

export const CategoryTabSelected = styled.button({
  backgroundColor: TEXT_COLOR_PRIMAL,
  color: BG_COLOR_PRIMAL,
  border: "none",
  width: "30vw",
  fontSize: "34px",
  "@media screen and (max-width: 820px)": {
    fontSize: "22px",
  },
});
