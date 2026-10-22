import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppContent } from "./App";

export function render(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let failed = false;
    const output = new PassThrough();
    let html = "";
    output.on("data", chunk => { html += chunk.toString(); });
    output.on("end", () => { if (!failed) resolve(html); });
    output.on("error", reject);
    const stream = renderToPipeableStream(
      <StaticRouter location={path}><AppContent /></StaticRouter>,
      {
        onAllReady() { if (!failed) stream.pipe(output); },
        onShellError(error) { failed = true; reject(error); },
        onError(error) { failed = true; reject(error); },
      },
    );
  });
}
