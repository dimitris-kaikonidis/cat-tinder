import { cat_secret } from "./secrets.json";
import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.thecatapi.com/v1",
    headers: {
        "x-api-key": cat_secret,
    },
});

export default instance;
