import { createServer } from "miragejs";
import { database } from "./database";

export const server = createServer(database);
