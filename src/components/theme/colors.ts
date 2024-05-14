import checkQuery from "../functions/CheckQuery";

export const colors = {
  background: {
    lmPrimary: "#000000",
  },
  text: {
    lmPrimary: checkQuery() ? "#9B2ACB" : "#00793D",
    lmSecondary: "#000000",
  },
  button: {
    lmPrimary: "#000000",
    lmPrimarySelected: checkQuery() ? "#9B2ACB" : "#00793D",
  },
} as const;
export default colors;
