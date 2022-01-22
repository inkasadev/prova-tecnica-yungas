import { createServer } from "miragejs";
import { database } from "../src/services/database";
import "../src/theme.css";

createServer(database);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
