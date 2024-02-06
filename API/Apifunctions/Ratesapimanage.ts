import { Rates } from "@/Typescripts/Interfaces/Ratesapi.interface";
import Axiosinstance from "../Axiosinstance/Axiosinstance"
import { endpoints } from "../Endpoints/endpoints"

export const fetchallrates = async (): Promise<Rates[]> => {
    try {
        const response = await Axiosinstance.get(endpoints.rates.allrates);
        return response?.data?.data || [];
    } catch (error) {
        console.error("Error fetching assets:", error);
        return [];
    }
};

export const fetchSingleratesDetails = async (id: any): Promise<Rates| null> => {
    try {
        const response = await Axiosinstance.get(endpoints.rates.singlerate(id));
        return response?.data?.data || null;
    } catch (error) {
        console.error(`Error fetching details for asset ${id}:`, error);
        return null;
    }
};
