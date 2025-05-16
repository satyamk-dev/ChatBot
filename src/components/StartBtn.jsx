import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
Link

export default function StartBtn() {
    return (
        <Box sx={{ '& button': { m: 1 } }}>

            <div className=' flex justify-center items-center gap-2' >


                <div>

                    <Button component={Link} to='/aipage' variant="outlined" size="medium" sx={{ color: 'white', '& hover': { color: 'blue' } }}>
                        Start
                    </Button>

                </div>
                <div>

                    <Button href="https://github.com/satyamk-dev" target="_blank" rel="noopener noreferrer" variant="outlined" size="medium" >
                        <span className=' text-fuchsia-600'>GeniusAI.</span>Code
                    </Button>

                </div>
            </div>



        </Box >
    );
}
