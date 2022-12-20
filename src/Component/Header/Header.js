import React from 'react';
import './Header.css';
import TextField from '@mui/material/TextField';
import { ThemeProvider,useTheme,createTheme} from '@mui/material/styles';



const Header = ({input,setInput}) => {
  const darkTheme = createTheme({
    palette: {
              primary:{
                main:'#fff'
              },
      mode: 'dark',
    },
  });
  return (
    <div className="header"> 
    <span className="title">Word Finder</span>
    <div className='inputs'>
      
      <ThemeProvider theme={darkTheme}>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      </ThemeProvider>
</div>
</div>

  )
}

export default Header