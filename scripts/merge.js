import fs from "fs";

console.log("Merging OpenAPI specs...");

const openapi = JSON.parse(fs.readFileSync("./openapi.json"));

openapi.info.title = "Iconik";
openapi.servers = [
  {
    url: "https://app.iconik.io/API/"
  }
];

fs.writeFileSync("./openapi.json", JSON.stringify(openapi, null, 2));

console.log("Specs merged!");

const version = openapi?.info?.version;

const packageJSON = JSON.parse(fs.readFileSync("./package.json"));

if (version && version !== packageJSON.json) {
  console.log(
    `OpenAPI (${version}) and package.json (${packageJSON.version}) versions are mismatched!\nUpdating package.json version to ${version}...`
  );

  packageJSON.version = version;

  fs.writeFileSync("./package.json", JSON.stringify(packageJSON, null, 2));
}
