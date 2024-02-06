import React from 'react'
import Bannercard from '../CommonParts/Bannercard'
import { Box, Button, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { fetchallmarketdetails } from '@/API/Apifunctions/Marketapimanage'
import { GetStaticProps } from 'next'

const index = ({ allmarkets }: { allmarkets: any }) => {
    // const { data: allmarkets, isLoading: marketloading, isError: marketerror } = useQuery({
    //     queryFn: () => fetchallmarketdetails(),
    //     queryKey: ["allmarkets"]
    // })
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <Bannercard />
            <Box className="market-page">
                <center><Typography variant='h4' className='singletext'>All Market Details</Typography></center>
                <Box className="markettable">
                    {
                        !allmarkets ? (
                            <>
                                <Skeleton variant="rounded" width={"100%"} height={40} animation="wave" />
                                <Skeleton variant="text" width={"100%"} height={60} animation="wave" />
                                <Skeleton variant="rounded" width={"100%"} height={40} animation="wave" />
                                <Skeleton variant="rounded" width={"100%"} height={40} animation="wave" />
                                <Skeleton variant="text" width={"100%"} height={60} animation="wave" />
                                <Skeleton variant="rounded" width={"100%"} height={40} animation="wave" />
                            </>
                        ) : (
                            <>
                                <TableContainer className="custom-table-container">
                                    <Table className="custom-table">
                                        <TableHead className='tableheader'>
                                            <TableRow>
                                                <TableCell className="custom-cell header">ExchangeID</TableCell>
                                                <TableCell align="center" className="custom-cell header">Rank</TableCell>
                                                <TableCell align="center" className="custom-cell header">Base-Symbol</TableCell>
                                                <TableCell align="center" className="custom-cell header">Base-ID</TableCell>
                                                <TableCell align="center" className="custom-cell header">Symbol</TableCell>
                                                <TableCell align="center" className="custom-cell header">QuoteID</TableCell>
                                                <TableCell align="center" className="custom-cell header">PriceQuote</TableCell>
                                                <TableCell align="center" className="custom-cell header">PriceUsd</TableCell>
                                                <TableCell align="center" className="custom-cell header">EX. Volume(%)</TableCell>
                                                <TableCell align="center" className="custom-cell header">Trades Count</TableCell>
                                                <TableCell align="center" className="custom-cell header">Updated</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                allmarkets?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item: any, mkey: any) => {
                                                    return (
                                                        <>
                                                            <TableRow key={mkey} className="custom-row">
                                                                <TableCell align="center" className="custom-cell">{item.exchangeId}</TableCell>
                                                                <TableCell align="center" className="custom-cell">{item?.rank}</TableCell>
                                                                <TableCell align="center" className="custom-cell">{item?.baseSymbol}</TableCell>
                                                                <TableCell align="center" className="custom-cell">{item?.baseId}</TableCell>
                                                                <TableCell align="center" className="custom-cell">{item?.quoteSymbol}</TableCell>
                                                                <TableCell align="center" className="custom-cell">{item?.quoteId}</TableCell>
                                                                <TableCell align="center" className="custom-cell">{item?.priceQuote?.slice(0, 7)}</TableCell>
                                                                <TableCell align="center" className="custom-cell">{item?.priceUsd?.slice(0, 7)}</TableCell>
                                                                <TableCell align="center" className="custom-cell">{item?.percentExchangeVolume?.slice(0, 10) || "Not Available"}</TableCell>
                                                                <TableCell align="center" className="custom-cell">{item?.tradesCount24Hr}</TableCell>
                                                                <TableCell align="center" className="custom-cell">{item?.updated}</TableCell>
                                                            </TableRow>
                                                        </>
                                                    )
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </>
                        )
                    }

                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        className='tablepagination'
                        count={allmarkets?.length || 0}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Box>
            </Box>
        </>
    )
}

export default index


export const getStaticProps: GetStaticProps = async () => {
    const allmarkets = await fetchallmarketdetails();
    return {
        props: {
            allmarkets,
        },
        revalidate: 60,
    };
}