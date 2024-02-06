import { Market } from "@/Typescripts/Interfaces/Marketapi.interface";
import Axiosinstance from "../Axiosinstance/Axiosinstance";
import { endpoints } from "../Endpoints/endpoints";

export const fetchallmarketdetails = async (): Promise<Market[]> => {
    try {
        const response = await Axiosinstance.get(endpoints.markets.allmarkets);
        return response?.data?.data || [];
    } catch (error) {
        console.error("Error fetching assets:", error);
        return [];
    }
};