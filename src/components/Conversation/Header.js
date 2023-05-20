import { Avatar, Box, Typography,IconButton, Divider,Stack, } from '@mui/material'
import { CaretDown, MagnifyingGlass, Phone,VideoCamera } from 'phosphor-react'
import React from 'react';
import { useTheme } from "@mui/material/styles";
import { faker } from '@faker-js/faker';
import StyledBadge from '../StyledBadge';
import { ToggleSidebar } from '../../redux/slices/app';
import { useDispatch } from 'react-redux';
import OurAvatar from '../../assets/Images/avatar.jpeg';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Box p={2} sx={{ width:'100%', backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper, boxShadow:'0px 0px 2px rgba(0,0,0,0.25)'}}>
    <Stack alignItems={'center'} direction='row' justifyContent={'space-between'}
    sx={{width:'100%', height:'100%'}}>
        <Stack onClick={()=>{
            dispatch(ToggleSidebar());
        }} direction={'row'} spacing={2}>
            <Box>
                <StyledBadge  overlap="circular"
                anchorOrigin={{ // position
                    vertical: "bottom",
                    horizontal: "right",
                }}
                variant="dot">
                    <Avatar alt={faker.name.fullName()} src={OurAvatar} sx={{ height: '70px', width: '70px' }}/>
                </StyledBadge>
            </Box>
            <Stack spacing={0.2}>
                    <Typography variant='subtitle2' fontSize="20px">
                        Mateusz Kalinka
                    </Typography>
                    <Typography variant='caption' fontSize="20px">
                        Online
                    </Typography>
                </Stack>
        </Stack>
    </Stack>
</Box>
  )
}

export default Header