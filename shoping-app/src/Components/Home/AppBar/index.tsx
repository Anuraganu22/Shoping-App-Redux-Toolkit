import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import SearchBox from '../../Common/SearchBox';

type Props = {}
const TopBar = (props: Props) => {
    return (
        <div>
            <div className='appbar'>
                <Box>
                    <AppBar>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                            // sx={{ mr: 2 }}
                            >
                                <Typography>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="https://image.shutterstock.com/image-vector/logo-word-drawn-shoes-form-260nw-1843636252.jpg"
                                        sx={{ width: 56, height: 56 }}
                                    />
                                </Typography>
                            </IconButton>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                            // sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                                MY-SHOE
                            </Typography>
                            <SearchBox />
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        </div>
    )
}

export default TopBar