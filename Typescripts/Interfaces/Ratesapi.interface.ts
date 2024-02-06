export interface Allrates extends Array<Rates> { }

export interface Rates {
    id: string
    symbol: string
    currencySymbol?: string
    type: string
    rateUsd: string
}