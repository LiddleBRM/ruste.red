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

export const ProfileTableRowLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:visited {
    color: inherit;
  }
`;

export const DescriptionArea = styled.div({
  display: "flex",
  flexDirection: "column",
  minHeight: "40px",
  margin: "40px 0px", // TODO 親要素にgap指定する方法でやりましょうね
  textAlign: "left",
});

export const DescriptionRow = styled.div({
  display: "flex",
  minHeight: "40px",
  textAlign: "left",
});
