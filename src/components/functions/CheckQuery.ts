export default function checkQuery() {
  // URLの形式 : example.com?showDescription=true&archivePage=338
  const params = new URLSearchParams(location.search);

  switch (params.get("showDescription")) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      return false;
  }
}
