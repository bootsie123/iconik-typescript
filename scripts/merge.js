import fs from "fs";

const openapi = JSON.parse(fs.readFileSync("./openapi.json"));

openapi.info.title = "Iconik";
openapi.servers = [
  {
    url: "https://app.iconik.io/API/"
  }
];

fs.writeFileSync("./openapi.json", JSON.stringify(openapi, null, 2));
