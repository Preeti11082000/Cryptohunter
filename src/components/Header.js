import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography, createTheme} from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom'; 
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles((theme) => ({
    title: {
      flex: 1,
      color: "gold",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
  }));

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const { currency , setCurrency } = CryptoState()
    console.log(currency)
    const darktheme = createTheme(
        {
            palette:{
                primary:{
                    main:"#fff"
                },
                type:"dark"
            }
        }
    )
    return (
        <ThemeProvider theme={darktheme}>
        <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                    <Typography 
                      variant='h6'
                        onClick={() => navigate("/")} // Use navigate function
                        className={classes.title}
                    >
                        Crypto Hunter
                    </Typography>
                    <Select variant='outlined' style={{
                        width: 100,
                        height: 40,
                        marginRight: 15
                    }}
                    value={currency}
                    onChange={(e)=> setCurrency(e.target.value)}
                    >
                        <MenuItem value={"USD"}>USD</MenuItem>
                        <MenuItem value={"INR"}>INR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
        </ThemeProvider>
    )
}

export default Header;
