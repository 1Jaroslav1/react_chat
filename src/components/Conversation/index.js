import {  Box, Stack} from '@mui/material';
import React, {useState, useEffect, useCallback} from 'react';
import { useTheme } from "@mui/material/styles";
import Header from './Header';
import Footer from './Footer';
import Message from './Message';
import {faker} from "@faker-js/faker";
import axios from 'axios';

const apiKey = "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";

const defaultData = [];

const Conversation = () => {
    const theme = useTheme();
    const [data, setData] = useState(defaultData);
    const [submitInput, setSubmitInput] = useState("");
    const [response, setResponse] = useState("")

    const sendMessage = async (message) => {
      const client = axios.create({
        headers: {
          Authorization: "Bearer " + apiKey,
        },
      });

      const params = {
        prompt: message,
        model: "text-davinci-003",
        max_tokens: 256,
        n: 1,
        temperature: 0.5,
      };

      client
        .post("https://api.openai.com/v1/completions", params)
        .then((result) => {
          setResponse(result.data.choices[0].text);
        })
        .catch((err) => {
          console.log(err);
        });
    };

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
      sendMessage(input);
    });

    useEffect(() => {
      if (response) {
        setData([
          ...data,
          {
            type: "msg",
            message: response,
            incoming: true,
            outgoing: false,
          }
        ])
      }
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