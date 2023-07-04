import styled from "styled-components";

const BG_COLOR_PRIMAL = "#000000"; // 黒
const TEXT_COLOR_PRIMAL = "#00793D"; // 黒
// TODO こいつらconstに移動したいね

export const AboutArea = styled.div({
  alignItems: "left",
  display: "flex",
});

// TODO もうちょいマシな名前を考える
export const KomokuColumn = styled.div({
  width: "90vw",
  alignItems: "left",
  color: TEXT_COLOR_PRIMAL,
});

export const ProfileTable = styled.div({});

export const ProfileTableRow = styled.div({
  display: "flex",
  height: "40px",
  // width: "100%",
});

export const ProfileTableRowKey = styled.div({
  width: "40%",
  textAlign: "center",
});

export const ProfileTableRowValue = styled.div({
  width: "60%",
  textAlign: "left",
});

/*
export const ProfileColumn = styled.div({
  width: "70vw", // スマホの時は100%
  // display: "flex",
  // flexDirection: "row",
  alignItems: "left",
  // justifyContent: "center",
  //fontSize: "calc(10px + 2vmin)",
  color: TEXT_COLOR_PRIMAL,
  "@media screen and (max-width: 820px)": {
    width: "100%",
  },
});

export const ProfileTable = styled.div({});

export const ProfileTableRow = styled.div({
  height: "40px",
});

export const TachieColumn = styled.div({
  width: "30vw", // スマホの時は100%
  display: "flex",
  flexDirection: "row",
  alignItems: "left",
  // justifyContent: "center",
  //fontSize: "calc(10px + 2vmin)",
  color: TEXT_COLOR_PRIMAL,
  "@media screen and (max-width: 820px)": {
    display: "none",
  },
});

*/
