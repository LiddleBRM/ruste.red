import styled from "styled-components";

const BG_COLOR_PRIMAL = "#000000"; // 黒
const TEXT_COLOR_PRIMAL = "#00793D"; // 黒
// TODO 目の色をカラーピッカーで測定する

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
  color: TEXT_COLOR_PRIMAL,
});

export const NameHeader = styled.header({
  backgroundColor: BG_COLOR_PRIMAL,
  // minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "42px",
  color: TEXT_COLOR_PRIMAL,
  // TODO スマホの時の高さとフォントサイズを変更
});

export const MainBody = styled.header({
  backgroundColor: BG_COLOR_PRIMAL,
  minHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: TEXT_COLOR_PRIMAL,
  // TODO スマホの時の高さを変更
});

export const Linktext = styled.a({
  color: "#61dafb",
});
