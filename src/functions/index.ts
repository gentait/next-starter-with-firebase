import * as functions from "firebase-functions";
import next from "next";
import * as path from "path";

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  conf: { distDir: `${path.relative(process.cwd(), __dirname)}/next` },
});
const handle = app.getRequestHandler();

exports.next = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
});
