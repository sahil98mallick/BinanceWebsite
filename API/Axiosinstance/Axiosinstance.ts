import axios from "axios";
import { baseURL } from "../Endpoints/endpoints";

const Axiosinstance = axios.create({
    baseURL: baseURL
})

export default Axiosinstance