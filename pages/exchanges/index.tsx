import React from 'react'
import Bannercard from '../CommonParts/Bannercard'
import { Box, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { fetchallexchanges } from '@/API/Apifunctions/Exchangeapimanage'
import Link from 'next/link'

const index = () => {
    const { data: allexchanges, isLoading: exchangeloading, isError: exchangeerror } = useQuery({
        queryFn: () => fetchallexchanges(),
        queryKey: ["allexchanges"]
    })
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
            <Box className="exchanges-page">
                <center><Typography variant='h4' className='singletext'>All Exchange Details</Typography></center>
                {
                    exchangeloading ? (
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
                                            <TableCell align="center" className="custom-cell header">Name</TableCell>
                                            <TableCell align="center" className="custom-cell header">Total Volume</TableCell>
                                            <TableCell align="center" className="custom-cell header">Trading Pairs</TableCell>
                                            <TableCell align="center" className="custom-cell header">Socket</TableCell>
                                            <TableCell align="center" className="custom-cell header">URL</TableCell>
                                            <TableCell align="center" className="custom-cell header">Updated</TableCell>
                                            <TableCell align="center" className="custom-cell header">
                                                Action
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            allexchanges?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((exchange, exkey) => {
                                                return (
                                                    <>
                                                        <TableRow key={exkey} className="custom-row">
                                                            <TableCell align="center" className="custom-cell">{exchange.exchangeId}</TableCell>
                                                            <TableCell align="center" className="custom-cell">{exchange?.rank}</TableCell>
                                                            <TableCell align="center" className="custom-cell">{exchange?.name}</TableCell>
                                                            <TableCell align="center" className="custom-cell">{exchange?.percentTotalVolume?.slice(0, 7) || "Not Available"}</TableCell>
                                                            <TableCell align="center" className="custom-cell">{exchange?.tradingPairs}</TableCell>
                                                            <TableCell align="center" className="custom-cell">{exchange?.socket == true ? "True" : "False"}</TableCell>
                                                            <TableCell align="center" className="custom-cell"><Link href={exchange?.exchangeUrl} style={{ textDecoration: "none", color: "blue" }}>URL</Link></TableCell>
                                                            <TableCell align="center" className="custom-cell">{exchange?.updated}</TableCell>
                                                            <TableCell align="center" className="custom-cell">
                                                                <Link href={`/exchanges/${exchange?.exchangeId}`}>View</Link></TableCell>
                                                        </TableRow>
                                                    </>
                                                )
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={allexchanges?.length || 0}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                className='tablepagination'
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </>
                    )
                }
            </Box>
        </>
    )
}

export default index