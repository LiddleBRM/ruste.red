import styled from "styled-components";
import theme from "../theme";

export const LangSelectArea = styled.div({
  backgroundColor: theme.colors.button.lmPrimary,
  height: "80px",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: theme.colors.text.lmPrimary,
});

export const LangSelectTag = styled.button<{
  isSelected: boolean;
}>((props) => ({
  backgroundColor: props.isSelected
    ? theme.colors.button.lmPrimarySelected
    : theme.colors.button.lmPrimary,
  color: theme.colors.text.lmPrimary,
  border: "none",
  width: "30vw",
  fontSize: "34px",
  cursor: "pointer",
  "@media screen and (max-width: 820px)": {
    fontSize: "22px",
  },
}));
