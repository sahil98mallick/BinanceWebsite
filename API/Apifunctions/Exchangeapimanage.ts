import { Exchange } from "@/Typescripts/Interfaces/Exchangeapi.interface";
import Axiosinstance from "../Axiosinstance/Axiosinstance"
import { endpoints } from "../Endpoints/endpoints"

export const fetchallexchanges = async (): Promise<Exchange[]> => {
    try {
        const response = await Axiosinstance.get(endpoints.exchanges.allexchanges);
        return response?.data?.data || [];
    } catch (error) {
        console.error("Error fetching assets:", error);
        return [];
    }
};

export const fetchsingleexchangedetails = async (id: any): Promise<Exchange | null> => {
    try {
        const response = await Axiosinstance.get(endpoints.exchanges.singleexchange(id));
        return response?.data?.data || null;
    } catch (error) {
        console.error(`Error fetching details for Exchanges ${id}:`, error);
        return null;
    }
};
