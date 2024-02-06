import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Box>
                <Typography variant="body1" gutterBottom className='footer'>
                    <i>Copyright ©2024 Binance.</i> All rights reserved. <br />
                    Made by <b>Sahil Mallick</b>
                </Typography>
            </Box>
        </>
    )
}

export default Footer