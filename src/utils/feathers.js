import io from "socket.io-client";
const feathers = require("@feathersjs/feathers");
const socketio = require("@feathersjs/socketio-client");
import auth from "@feathersjs/authentication-client";
import { CookieStorage } from 'cookie-storage'
import { APIURL } from "./constants";

const socket = io(APIURL);
const client = feathers();

client.configure(socketio(socket, { timeout: 10000 }));
client.configure(auth({ storage: new CookieStorage() }))

export default client;
