const { app, BrowserWindow, session } = require("electron");
const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");
const root = process.env.GROKBOT_RENDERER_ROOT;
const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".woff2": "font/woff2",
  ".svg": "image/svg+xml",
};
const server = http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    const file = path.resolve(
      root,
      "." + (pathname === "/" ? "/index.html" : pathname),
    );
    if (!file.startsWith(root + path.sep)) throw Error("outside root");
    const data = await fs.readFile(file);
    res.writeHead(200, {
      "Content-Type": types[path.extname(file)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end();
  }
});
app.whenReady().then(() =>
  server.listen(0, "127.0.0.1", () => {
    const url = `http://127.0.0.1:${server.address().port}/index.html`;
    session.defaultSession.webRequest.onBeforeRequest((details, callback) => {
      const protocol = new URL(details.url).protocol;
      callback({
        cancel:
          (protocol === "http:" || protocol === "https:") &&
          !details.url.startsWith(url.replace("/index.html", "/")),
      });
    });
    const w = new BrowserWindow({
      show: false,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        sandbox: true,
      },
    });
    w.loadURL(url);
    console.log("WEB_BUNDLE_URL=" + url);
  }),
);
app.on("window-all-closed", () => app.quit());
