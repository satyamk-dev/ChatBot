import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { GoogleGenAI } from "@google/genai";
import { TypeAnimation } from 'react-type-animation';


export default function Input() {

    const [value, setValue] = useState("");
    const [msg, setMsg] = useState("");
    const [question, setQuestion] = useState("");


    const apiKey = import.meta.env.VITE_API_KEY;



    const handleInput = async () => {
        if (!value.trim()) return; // Prevent empty requests

        setQuestion(value);
        setMsg("Thinking...");



        const ai = new GoogleGenAI({ apiKey });
        try {




            async function main() {
                const response = await ai.models.generateContent({
                    model: "gemini-2.0-flash",
                    contents: value,
                });
                setMsg(response.text);

                setValue("");

            }

            await main();
        } catch (error) {
            console.error("Error generating content:", error);
        }
    };


    return (
        <>



            <div className=" flex justify-center items-center flex-col bg-neutral-800 h-full max-w-[100%] text-gray-200">

                <div className='h-fit max-w-[80%] md:max-w-[60%]' >


                    {question && (
                        <div className='w-fit h-fit bg-neutral-700 rounded-2xl p-2 '>  <h4 >{question}</h4></div>
                    )}
                    <hr className="border-2 border-gray-900 my-2 w-full" />

                    <p className='text-sm md:text-md lg:text-lg'>{msg}</p> <br /><br />




                </div>



            </div>




            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '40ch' } }}
                noValidate
                autoComplete="off"
            >
                <div className='flex justify-center items-center'>

                    <div className=' bg-neutral-900 border border-white rounded-xl  max-w-[80%] md:max-w-[50%] '>
                        <div className=' flex justify-around items-baseline '>



                            <TextField
                                value={value}
                                onChange={(e) => { setValue(e.target.value) }}
                                id="filled-multiline-flexible"
                                label="Ask Anything"
                                multiline
                                maxRows={4}
                                variant="filled"
                                sx={{ '& .MuiInputBase-input': { color: '#fff', }, '& .MuiInputLabel-root': { color: '#fff' } }}


                            />

                            <Button
                                variant="contained"
                                onClick={handleInput}
                                sx={{
                                    bgcolor: 'fuchsia',
                                    color: '#fff',
                                    borderRadius: '50px',
                                    Width: '30px',
                                    height: '30px',
                                    '&:hover': {
                                        bgcolor: '#d400a7'
                                    }
                                }}
                            >
                                <SendIcon sx={{ fontSize: '16px' }} />

                            </ Button>




                        </div>


                    </div>

                </div>


            </Box>



        </>
    );
}


