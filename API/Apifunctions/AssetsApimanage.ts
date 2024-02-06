import { Asset } from "@/Typescripts/Interfaces/AssetsApi.interface";
import Axiosinstance from "../Axiosinstance/Axiosinstance";
import { endpoints } from "../Endpoints/endpoints";

export const fetchallassetsdetails = async (): Promise<Asset[]> => {
    try {
        const response = await Axiosinstance.get(endpoints.assets.allassets);
        return response?.data?.data || [];
    } catch (error) {
        console.error("Error fetching assets:", error);
        return [];
    }
};

export const fetchSingleAssetDetails = async (id: any): Promise<Asset | null> => {
    try {
        const response = await Axiosinstance.get(endpoints.assets.singleAsset(id));
        return response?.data?.data || null;
    } catch (error) {
        console.error(`Error fetching details for asset ${id}:`, error);
        return null;
    }
};


export const fetchassetshistory = async (id: any): Promise<Asset[]| null> => {
    try {
        const response = await Axiosinstance.get(endpoints.assets.assetshistory(id));
        return response?.data?.data || null;
    } catch (error) {
        console.error(`Error fetching details for asset ${id}:`, error);
        return null;
    }
};

export const fetchassetsmarket = async (id: any): Promise<Asset[]| null> => {
    try {
        const response = await Axiosinstance.get(endpoints.assets.assetsmarket(id));
        return response?.data?.data || null;
    } catch (error) {
        console.error(`Error fetching details for asset ${id}:`, error);
        return null;
    }
};



