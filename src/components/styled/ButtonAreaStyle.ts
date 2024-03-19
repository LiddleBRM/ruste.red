import styled from "styled-components";
import theme from "../theme";

export const ButtonArea = styled.div({
  backgroundColor: theme.colors.button.lmPrimary,
  height: "120px",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: theme.colors.text.lmPrimary,
});

export const CategoryTab = styled.button({
  backgroundColor: theme.colors.button.lmPrimary,
  color: theme.colors.text.lmPrimary,
  border: "none",
  width: "30vw",
  fontSize: "34px",
  cursor: "pointer",
  "@media screen and (max-width: 820px)": {
    fontSize: "22px",
  },
});

export const CategoryTabSelected = styled.button({
  backgroundColor: theme.colors.button.lmPrimarySelected,
  color: theme.colors.text.lmSecondary,
  border: "none",
  width: "30vw",
  fontSize: "34px",
  "@media screen and (max-width: 820px)": {
    fontSize: "22px",
  },
});
