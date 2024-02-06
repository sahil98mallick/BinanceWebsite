import React from 'react'
import Bannercard from '../CommonParts/Bannercard'
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchsingleexchangedetails } from '@/API/Apifunctions/Exchangeapimanage';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

const SingleExchangeDetails = () => {
    const router = useRouter();
    const { slug } = router?.query;

    const { data: singleexchange, isLoading: singleexchangeloading } = useQuery({
        queryKey: ["singleexchange", { slug }],
        queryFn: () => fetchsingleexchangedetails(slug),
        enabled: !!slug
    })

    console.log("Single Exchange", singleexchange);

    return (
        <>
            <Bannercard />
            <Box className="exchangeDetailspage">
                <Typography variant="h6" gutterBottom className='exchangetext'>
                    <b>Name:</b> {singleexchange?.name}
                </Typography>
                <Typography variant="h6" gutterBottom className='exchangetext'>
                    <b>Rank: </b>{singleexchange?.rank}
                </Typography>
                <Typography variant="h6" gutterBottom className='exchangetext'>
                    <b>Total Volume (%):</b> {singleexchange?.name}
                </Typography>
                <Typography variant="h6" gutterBottom className='exchangetext'>
                    <b>Volume USD:</b> {singleexchange?.volumeUsd}
                </Typography>
                <Typography variant="h6" gutterBottom className='exchangetext'>
                    <b>Trading Pairs:</b> {singleexchange?.tradingPairs}
                </Typography>
                <Typography variant="h6" gutterBottom className='exchangetext'>
                    <b>Exchange URL:</b> {singleexchange?.exchangeUrl}
                </Typography>
                <Typography variant="h6" gutterBottom className='exchangetext'>
                    <b>Updated:</b> {singleexchange?.updated}
                </Typography>
            </Box>
        </>
    )
}

export default SingleExchangeDetails