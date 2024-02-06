import { Box, Container } from '@mui/material'
import React from 'react'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import StarsIcon from '@mui/icons-material/Stars';
import SoapIcon from '@mui/icons-material/Soap';
import { BannerCardWrapper } from '@/styles/StyleComponents/BannerCardWrapper';
import { useQuery } from 'react-query';
import { fetchallassetsdetails } from '@/API/Apifunctions/AssetsApimanage';
import { fetchallmarketdetails } from '@/API/Apifunctions/Marketapimanage';
import { fetchallrates } from '@/API/Apifunctions/Ratesapimanage';
import { fetchallexchanges } from '@/API/Apifunctions/Exchangeapimanage';

const Bannercard = () => {
    const { data: allassets, isLoading: assetsLoading, isError: assetsError } = useQuery({
        queryFn: () => fetchallassetsdetails(),
        queryKey: ["AllAssets"]
    })

    const { data: allrates, isLoading: ratesloading, isError: rateserror } = useQuery({
        queryFn: () => fetchallrates(),
        queryKey: "allrates"
    })

    const { data: allmarkets, isLoading: marketloading, isError: marketerror } = useQuery({
        queryFn: () => fetchallmarketdetails(),
        queryKey: ["allmarkets"]
    })
    const { data: allexchanges, isLoading: exchangeloading, isError: exchangeerror } = useQuery({
        queryFn: () => fetchallexchanges(),
        queryKey: ["allexchanges"]
    })
    return (
        <>
            <Container maxWidth="xl">
                <Box className="bannnercard">
                    <Box className="card">
                        <CurrencyExchangeIcon className='bannericons' style={{ color: "orange" }} />
                        <Box className="cardtitle">
                            Assets
                        </Box>
                        <Box className="cardamt">
                            {allassets?.length}
                        </Box>
                    </Box>
                    <Box className="card">
                        <SoapIcon className='bannericons' style={{ color: "purple" }} />
                        <Box className="cardtitle">
                            Exchanges
                        </Box>
                        <Box className="cardamt">
                            {allexchanges?.length}
                        </Box>
                    </Box>
                    <Box className="card">
                        <StarsIcon className='bannericons' style={{ color: "#BF0750" }} />
                        <Box className="cardtitle">
                            Rates
                        </Box>
                        <Box className="cardamt">
                            {allrates?.length}
                        </Box>
                    </Box>
                    <Box className="card">
                        <LocalConvenienceStoreIcon className='bannericons' style={{ color: "#0445B0" }} />
                        <Box className="cardtitle">
                            Markets
                        </Box>
                        <Box className="cardamt">
                            {allmarkets?.length}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Bannercard