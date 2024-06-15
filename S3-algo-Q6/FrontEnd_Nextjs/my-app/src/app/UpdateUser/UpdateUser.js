"use client"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import axios from "axios";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function UpdateUser() {
    const [name, setname] = useState("")
    const [userName, setuserName] = useState("")
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")
    const [id, setid] = useState("")
    const handleChangeName = (e) => {
        setname(e.target.value)
    }
    const handleChangeId = (e) => {
        setid(e.target.value)
    }

    const handleChangeUserName = (e) => {
        setuserName(e.target.value)

    }

    const handleChangeAddress = (e) => {
        setaddress(e.target.value)

    }

    const handleChangeEmailAddress = (e) => {
        setemail(e.target.value)
    }

    const handleSubmit = async () => {
        let data = {
            "name": name,
            "username": userName,
            "email": email,
            "address": address,
        }
        try {
            let response = await axios.put(
                `/api/updateUser/${id}`,
                data
            );
            if(reponse){
                window.location.reload()
            }
        } catch (e) {

        }

    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <PersonIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Update User
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Name"
                                    onChange={handleChangeName}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="User Name"
                                    name="username"
                                    onChange={handleChangeUserName}
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="id"
                                    label="Id"
                                    name="Id"
                                    onChange={handleChangeId}
                                    autoComplete="ID"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    onChange={handleChangeEmailAddress}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="Addrress"
                                    label="Address"
                                    onChange={handleChangeAddress}
                                    id="address"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                        >
                            Update
                        </Button>
                        <Grid container justifyContent="flex-end">

                        </Grid>
                    </Box>
                </>
            </Container>
        </ThemeProvider>
    );
}