import {  Box, Stack} from '@mui/material';
import React, {useState, useEffect, useCallback} from 'react';
import { useTheme } from "@mui/material/styles";
import Header from './Header';
import Footer from './Footer';
import Message from './Message';
import {faker} from "@faker-js/faker";

const defaultData = [
    {
        type: "msg",
        message: "Hi 👋🏻, How are ya ?",
        incoming: true,
        outgoing: false,
    },
    // {
    //     type: "msg",
    //     message: "Hi 👋 Panda, not bad, u ?",
    //     incoming: false,
    //     outgoing: true,
    // },
    // {
    //     type: "msg",
    //     message: "Can you send me an abstarct image?",
    //     incoming: false,
    //     outgoing: true,
    // },
    // {
    //     type: "msg",
    //     message: "Ya sure, sending you a pic",
    //     incoming: true,
    //     outgoing: false,
    // },
    //
    // {
    //     type: "msg",
    //     subtype: "img",
    //     message: "Here You Go",
    //     img: faker.image.abstract(),
    //     incoming: true,
    //     outgoing: false,
    // },
    // {
    //     type: "msg",
    //     message: "Can you please send this in file format?",
    //     incoming: false,
    //     outgoing: true,
    // },
    //
    // {
    //     type: "msg",
    //     subtype: "doc",
    //     message: "Yes sure, here you go.",
    //     incoming: true,
    //     outgoing: false,
    // },
    // {
    //     type: "msg",
    //     subtype: "link",
    //     preview: faker.image.cats(),
    //     message: "Yep, I can also do that",
    //     incoming: true,
    //     outgoing: false,
    // },
    // {
    //     type: "msg",
    //     subtype: "reply",
    //     reply: "This is a reply",
    //     message: "Yep, I can also do that",
    //     incoming: false,
    //     outgoing: true,
    // },
];

const Conversation = () => {
    const theme = useTheme();
    const [data, setData] = useState(defaultData);
    const [submitInput, setSubmitInput] = useState("");
    const [response, setResponse] = useState("")

    const handleSubmit = useCallback((input) => {
      console.log("submit");
      setData([
        ...data,
        {
          type: "msg",
          message: input,
          incoming: false,
          outgoing: true,
        }
      ])
    });

    useEffect(() => {
      setData([
        ...data,
        {
          type: "msg",
          message: response,
          incoming: true,
          outgoing: false,
        }
      ])
    }, [response])
  
  return (
    <Stack height={'100%'} maxHeight={'100vh'} width={'auto'}>

        {/* Chat header */}
        <Header/>
        {/* Msg */}
        <Box className='scrollbar' width={"100%"} sx={{flexGrow:1, height:'100%', overflowY:'scroll'}}>
        <Message data={data} menu={true}/>
        </Box>
        {/* Chat footer */}
       <Footer handleSubmit={handleSubmit} />
    </Stack>
  )
}

export default Conversation