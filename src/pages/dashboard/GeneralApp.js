import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";

const GeneralApp = () => {
  const theme = useTheme();
  const {sidebar} = useSelector((store)=> store.app);// access our store inside component
  return (
    <Stack direction='row' sx={{ width: '100%' }}>
      {/* Chats */}
      <Box sx={{ height: '100%', width: sidebar.open ? 'calc(100vw - 100px)': 'calc(100vw - 420px)',
       backgroundColor: theme.palette.mode === 'light' ? '#F0F4FA' : theme.palette.background.default }}>
      {/* Conversation */}
      <Conversation/>
      </Box>
    </Stack>
  );
};

export default GeneralApp;
