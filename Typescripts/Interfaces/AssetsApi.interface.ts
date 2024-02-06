export interface Allassets extends Array<Asset> { }

export interface Asset {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    supply: string;
    maxSupply?: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: string;
    changePercent24Hr: string;
    vwap24Hr: string;
    explorer: string;
    time: String;
    exchangeId: String;
    quoteId: String;
    baseSymbol: String;
    quoteSymbol: String;
    baseId: String;
    volumePercent: String;

}