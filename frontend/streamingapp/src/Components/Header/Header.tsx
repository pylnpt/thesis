import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

// import '../Modal/Modal.tsx' 
import './Header.scss'


const Header  = () => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'black',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
      };
    
    const [openRegistration, setOpenRegistration] = useState(false);
    const [openSignIn, setOpenSignIn] = useState(false);
    
    const handleOpen = (buttonName : string) => {
      buttonName == "register" ? setOpenRegistration(true) : setOpenSignIn(true);
    };
    const handleClose = (buttonName : string) => {
        buttonName == "register" ? setOpenRegistration(false) : setOpenSignIn(false);
    };
    const register = () => {

    }

    const signIn = () => {
        
    }
    
    return (
        <>
            <header>
                <title>Streaming App</title>
            </header>
            <Router>
              <nav>
                <a className='nav-button' href="#" onClick={() => handleOpen("settings")}>Stream elkezdése</a>
                <a className='nav-button' href="#" onClick={() => handleOpen("profile")}>Profil</a>
                <a className='nav-button' href="#" onClick={() => handleOpen("signIn")}>Bejelentkezés</a>
                <a className='nav-button' href="#" onClick={() => handleOpen("register")}>Regisztráció</a>
                {/* <Link to="#"></Link> */}
                <div id="indicator"></div>
              </nav>

              <Modal
                open={openRegistration}
                onClose={() => handleClose("register")}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description">
                    <Box  sx={{ ...style, width: 400 }}>
                      <h2 id="parent-modal-title">Regisztráció</h2>
                      <hr/>
                        <List sx={{ pt: 0 }}>
                            <ListItem disableGutters>
                              <ListItemButton>
                                <ListItemAvatar>
                                  <Avatar alt="Google logo" src="../../assets/images/google-logo.jpg"/>
                                </ListItemAvatar>
                                <ListItemText primary="Google regisztráció"/>
                              </ListItemButton>
                            </ListItem>
                            
                            <ListItem disableGutters>
                                <a>Már regisztráltál?</a>
                                <ListItemButton 
                                    onClick={() => {
                                        handleClose("register");
                                        handleOpen("");}}>
                                    <ListItemText primary="Bejelentkezés"/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Modal>       

                <Modal
                    open={openSignIn}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description">
                        <Box  sx={{ ...style, width: 400 }}>
                          <h2 id="parent-modal-title">Bejelentkezés</h2>
                          <hr/>
                          <ListItem disableGutters>
                              <ListItemButton onClick={() => {}}>
                                <ListItemAvatar>
                                  <Avatar alt="Google logo" src="../../assets/images/google-logo.jpg"/>
                                </ListItemAvatar>
                                <ListItemText primary="Google bejelentkezés"/>
                              </ListItemButton>
                            </ListItem>
                            
                            <ListItem disableGutters>
                                <a>Nincs még fiókod?</a>
                                <ListItemButton
                                    onClick={() => {
                                        handleClose("");
                                        handleOpen("register");}}>
                                    <ListItemText primary="Regisztráció"/>
                                </ListItemButton>
                            </ListItem>
                        </Box>
                </Modal>

                <Routes>
                    {/* <Route path="/" component={HomePage} /> */}
                    <Route path="/about"/>
                </Routes>
            </Router>
        </>
      )
} 

export default Header;