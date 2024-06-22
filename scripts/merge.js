import fs from "fs";

console.log("Merging OpenAPI specs...");

const openapi = JSON.parse(fs.readFileSync("./openapi.json"));

openapi.info.title = "Iconik";
openapi.servers = [
  {
    url: "https://app.iconik.io/API/"
  }
];

console.log("Adding tags...");

if (!openapi.tags) openapi.tags = [];

for (const [path, obj] of Object.entries(openapi.paths)) {
  const tagName = path.split("/")[1];

  if (!openapi.tags.find(tag => tag.name === tagName))
    openapi.tags.push({
      name: tagName
    });

  for (const method of Object.values(obj)) {
    if (!method.tags) method.tags = [tagName];
  }
}

console.log("Tags added!");

fs.writeFileSync("./openapi.json", JSON.stringify(openapi, null, 2));

console.log("Specs merged!");

const version = openapi?.info?.version;

const packageJSON = JSON.parse(fs.readFileSync("./package.json"));

if (version && version !== packageJSON.version) {
  console.log(
    `OpenAPI (${version}) and package.json (${packageJSON.version}) versions are mismatched!\nUpdating package.json version to ${version}...`
  );

  packageJSON.version = version;

  fs.writeFileSync("./package.json", JSON.stringify(packageJSON, null, 2));
}
