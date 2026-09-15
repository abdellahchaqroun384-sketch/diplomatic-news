import { writeFileSync } from "node:fs";
import { fallbackStories } from "../client/src/data/editorial";
writeFileSync(new URL("./data.js", import.meta.url), `window.STORIES = ${JSON.stringify(fallbackStories)};`);
