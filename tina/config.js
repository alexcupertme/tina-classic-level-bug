import { ClassicLevel } from "classic-level";
import { LocalAuthProvider, defineConfig } from "tinacms";
import page from "./collections/page";
import post from "./collections/post";
export const config = defineConfig({
  authProvider: new LocalAuthProvider(),
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  schema: {
    collections: [page, post],
  },
});

export default config;

const db = new ClassicLevel('tina-cache');