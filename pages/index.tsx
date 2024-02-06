import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { fetchSingleAssetDetails, fetchallassetsdetails } from "@/API/Apifunctions/AssetsApimanage";
import { useQuery } from "react-query";
import { Box, Button, Grid, Modal, Pagination, Skeleton, Stack, TablePagination, Typography } from '@mui/material';
import Bannercard from './CommonParts/Bannercard';

import Link from 'next/link';
import { BarChart } from '@mui/x-charts';
import { useThemeContext } from '@/Mui_theme/ThemeContextProvider';

export default function Home() {

  const [selectedAssetId, setSelectedAssetId] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const { data: allassets, isLoading: assetsloading, isError: asseterror } = useQuery({
    queryFn: () => fetchallassetsdetails(),
    queryKey: ["allassets"]
  })

  const { data: singleasset, isLoading: singleassetloading, isError: singleasseterror } = useQuery({
    queryFn: () => fetchSingleAssetDetails(selectedAssetId),
    queryKey: ["singleassets", { selectedAssetId }],
    enabled: !!selectedAssetId,
  });


  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleTableRowClick = async (id: any) => {
    try {
      setSelectedAssetId(id);
      const result = await fetchSingleAssetDetails(id);
      if (result) {
        handleOpen();
      } else {
        console.log("error Found");
      }
    } catch (error) {
      console.log(error);

    }
  };
  // Table pagination
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
      <Typography variant="h4" className='singletext'>
        All Assets Details
      </Typography>

      <Box className="assetstable">
        {
          assetsloading ? (
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
                      <TableCell className="custom-cell header">Rank</TableCell>
                      <TableCell align="center" className="custom-cell header">Symbol</TableCell>
                      <TableCell align="center" className="custom-cell header">Name</TableCell>
                      <TableCell align="center" className="custom-cell header">Supply</TableCell>
                      <TableCell align="center" className="custom-cell header">Price USD</TableCell>
                      <TableCell align="center" className="custom-cell header">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allassets?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, key) => (
                      <TableRow key={key} className="custom-row">
                        <TableCell align="center" className="custom-cell" onClick={() => handleTableRowClick(item.id)}>{item.rank}</TableCell>
                        <TableCell align="center" className="custom-cell" onClick={() => handleTableRowClick(item.id)}>{item?.symbol}</TableCell>
                        <TableCell align="center" className="custom-cell" onClick={() => handleTableRowClick(item.id)}>{item?.name}</TableCell>
                        <TableCell align="center" className="custom-cell" onClick={() => handleTableRowClick(item.id)}>{item?.supply}</TableCell>
                        <TableCell align="center" className="custom-cell" onClick={() => handleTableRowClick(item.id)}>{item?.priceUsd}</TableCell>
                        <TableCell align="center" className="custom-cell">
                          <Box className="actionbtn">
                            <Link href={`/${item?.id}`} className='viewbtn'>View</Link>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )
        }
        <TablePagination
          rowsPerPageOptions={[5, 30, 50]}
          component="div"
          className='tablepagination'
          count={allassets?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      {/* Single Assets Details Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className="custom-modal">
          {singleassetloading ? (
            <p>Loading...</p>
          ) : singleasseterror ? (
            <p>Error loading asset details</p>
          ) : (
            singleasset && (
              <>
                <Box className="singledetails-container">
                  <div className="singledetails-left">
                    <Typography variant="h4" className='singletext'>
                      <b>Name:</b> {singleasset?.name}
                    </Typography>
                    <hr />
                    <Typography variant="h6" className='singletext'>
                      <b>Symbol:</b> {singleasset?.symbol}
                    </Typography>
                    <Typography variant="h6" className='singletext'>
                      <b>Supply:</b> {singleasset?.supply}
                    </Typography>
                    <Typography variant="h6" className='singletext'>
                      <b>Max Supply:</b> {singleasset?.maxSupply}
                    </Typography>
                  </div>
                  <div className="singledetails-left">
                    <Typography variant="h6" className='singletext'>
                      <b>MarketCap Usd:</b> {singleasset?.marketCapUsd}
                    </Typography>
                    <Typography variant="h6" className='singletext'>
                      <b>Volume Usd 24Hr:</b> {singleasset?.volumeUsd24Hr}
                    </Typography>
                    <Typography variant="h6" className='singletext'>
                      <b>Price USD:</b> {singleasset?.priceUsd}
                    </Typography>
                    <Typography variant="h6" className='singletext'>
                      <b>Change Percent-24Hr:</b> {singleasset?.changePercent24Hr}
                    </Typography>
                    <Typography variant="h6" className='singletext'>
                      <b> Vmap 24Hr:</b> {singleasset?.vwap24Hr}
                    </Typography>
                  </div>
                </Box>
                <center>
                  <Button onClick={handleClose} variant='outlined' color='secondary'>Close</Button>
                </center>
              </>
            )
          )}
        </Box>
      </Modal>
    </>
  );
}
