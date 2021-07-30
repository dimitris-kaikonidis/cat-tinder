import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.thecatapi.com/v1",
    headers: {
        "x-api-key": process.env.CAT_SECRET || require("./secrets.json").CAT_SECRET,
    },
});

export default instance;
