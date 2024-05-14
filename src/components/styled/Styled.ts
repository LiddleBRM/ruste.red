import styled from "styled-components";
import theme from "../theme";

const BG_COLOR_PRIMAL = "#000000"; // 黒

export const Background = styled.div({
  textAlign: "center",
  background: BG_COLOR_PRIMAL,
});

export const AppHeader = styled.header({
  //あとで消す
  backgroundColor: BG_COLOR_PRIMAL,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: theme.colors.text.lmPrimary,
});

export const NameHeader = styled.header({
  backgroundColor: BG_COLOR_PRIMAL,
  // minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "42px",
  color: theme.colors.text.lmPrimary,
  // TODO スマホの時の高さとフォントサイズを変更
});

export const NameheaderDesc = styled.div({
  display: "flex",
  minHeight: "40px",
  margin: "30px 0px",
  justifyContent: "center",
  fontSize: "20px",
});

export const MainBody = styled.header({
  backgroundColor: BG_COLOR_PRIMAL,
  minHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: theme.colors.text.lmPrimary,
});

export const Linktext = styled.a({
  color: "#61dafb",
});
