import styled from "styled-components";
import theme from "../theme";

export const LinksArea = styled.div({
  alignItems: "center",
  display: "flex",
});

// 対義語は「DetailColumn」
export const LinksColumn = styled.div({
  width: "40vw",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  //fontSize: "calc(10px + 2vmin)",
  color: theme.colors.text.lmPrimary,
  "@media screen and (max-width: 820px)": {
    width: "100%",
  },
});

export const LinksRow = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "40px",
  paddingBottom: "5px",
  cursor: "pointer",
});

export const LinksRowSelected = styled.div({
  background: theme.colors.button.lmPrimarySelected,
  color: theme.colors.text.lmSecondary,
  display: "flex",
  flexDirection: "column",
  height: "40px",
  paddingBottom: "5px",
  // cursor: "pointer",
});

export const DetailColumn = styled.div({
  width: "50vw",
  alignItems: "center",
  justifyContent: "center",
  //fontSize: "calc(10px + 2vmin)",
  color: theme.colors.text.lmPrimary,
  "@media screen and (max-width: 820px)": {
    display: "none",
  },
});

export const DetailColumnSP = styled.div({
  display: "none",
  wordBreak: "break-all",
  "@media screen and (max-width: 820px)": {
    background: theme.colors.button.lmPrimarySelected, // これもボタンカラーみたいなの作る
    color: theme.colors.text.lmSecondary,
    display: "flex",
    width: "100vw", // スマホの時は100%
    // display: "flex",
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    //fontSize: "calc(10px + 2vmin)",
    // color: TEXT_COLOR_PRIMAL,
  },
});

export const DetailRow = styled.div({
  display: "flex",
  flexDirection: "column",
  // height: "40px",
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
