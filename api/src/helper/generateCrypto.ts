import crypto from "node:crypto";
import fs from "fs/promises";

function generateKeyAsync() {
  return new Promise((resolve, reject) => {
    crypto.generateKey("hmac", { length: 512 }, (err, key) => {
      if (err) reject(err);
      else resolve(key.export().toString("hex"));
    });
  });
}

export const key = async () => {
  const data = await fs.readFile(".env", { encoding: "utf8" });
  const genKey = await generateKeyAsync();
  const regex = /JWT_SECRET=[^\n]*/;
  let newEnvData;
  if (regex.test(data)) {
    newEnvData = data.replace(regex, `JWT_SECRET=${genKey}`);
  } else {
    newEnvData = data + `\nJWT_SECRET=${genKey}`;
  }
  await fs.writeFile(".env", newEnvData, "utf8");
};
