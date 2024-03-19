import styled from "styled-components";
import theme from "../theme";

export const ContactArea = styled.div({
  alignItems: "center",
  display: "flex",
});

export const ContactMeansColumn = styled.div({
  width: "40vw",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  //fontSize: "calc(10px + 2vmin)",
  color: theme.colors.text.lmPrimary,
  cursor: "pointer",
  "@media screen and (max-width: 820px)": {
    width: "100%",
  },
});

export const ContactMeansRow = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "40px",
  paddingBottom: "5px",
  cursor: "pointer",
});

export const ContactMeansRowSelected = styled.div({
  background: theme.colors.button.lmPrimarySelected,
  color: theme.colors.text.lmSecondary,
  display: "flex",
  flexDirection: "column",
  // height: "40px",
  paddingBottom: "5px",
  cursor: "pointer",
});

export const DetailColumn = styled.div({
  width: "50vw",
  alignItems: "center",
  justifyContent: "center",
  color: theme.colors.text.lmPrimary,
  "@media screen and (max-width: 820px)": {
    display: "none",
  },
});

export const DetailColumnSP = styled.div({
  display: "none",
  "@media screen and (max-width: 820px)": {
    background: theme.colors.button.lmPrimarySelected,
    color: theme.colors.text.lmSecondary,
    display: "flex",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
    //    color: TEXT_COLOR_PRIMAL,
  },
});

export const DetailRow = styled.div({
  display: "flex",
  flexDirection: "column",
  paddingBottom: "5px",
  cursor: "pointer",
});

export const ProfileTable = styled.div({});

export const ProfileTableRowKey = styled.div({
  width: "40%",
  textAlign: "center",
});

export const ProfileTableRowValue = styled.div({
  width: "60%",
  textAlign: "left",
});
