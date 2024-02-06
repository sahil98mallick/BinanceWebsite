export const baseURL = "https://api.coincap.io/v2/"

export const endpoints = {
    assets: {
        allassets: "assets",
        singleAsset: (id: any) => `assets/${id}`,
        assetshistory: (id: any) => `assets/${id}/history?interval=d1`,
        assetsmarket: (id: any) => `assets/${id}/markets`,
    },
    rates: {
        allrates: "rates",
        singlerate: (id: any) => `rates/${id}`,
    },
    markets: {
        allmarkets: "markets"
    },
    exchanges: {
        allexchanges: "exchanges",
        singleexchange: (id: any) => `exchanges/${id}`,
    }
}