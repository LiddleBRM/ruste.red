import styled from "styled-components";
import theme from "../theme";

export const AboutArea = styled.div({
  alignItems: "left",
  display: "flex",
});

// TODO もうちょいマシな名前を考える
export const KomokuColumn = styled.div({
  width: "90vw",
  alignItems: "left",
  color: theme.colors.text.lmPrimary,
});

export const ProfileTable = styled.div({});

export const ProfileTableRow = styled.div({
  display: "flex",
  minHeight: "40px",
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
