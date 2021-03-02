import { Avatar, Button, Container, CssBaseline, makeStyles, Snackbar, TextField, Typography } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import { Alert } from '@material-ui/lab';
import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import { UserContext } from './UserContext';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Profile() {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [password, setPassword] = useState('')

    const [open, setOpen] = useState(false)

    const [userId, setUserId] = useContext(UserContext)

    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    useEffect(() => {
        
        console.log('renders once')

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                userId: userId
            })
        }

        fetch('http://localhost:9000/profile', requestOptions)
            .then(res => res.json())
            .then(res => {
                console.log(res.data.firstname)
                setFirstname(res.data.firstname)
                setLastname(res.data.lastname)
                setPassword(res.data.password)
            })
            .catch(err => console.log(err))

    }, [])

    const submitForm = (e) => {
        e.preventDefault()
        console.log('submittedd')

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: userId,
                firstname: firstname,
                lastname: lastname,
                password: password
            })
        }

        fetch('http://localhost:9000/profile/update', requestOptions)
            .then(res => res.json())
            .then(res => {
                setOpen(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {userId == null ? <Redirect to = "/login" /> : false}
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <PersonIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Update Profile
        </Typography>
                    <form className={classes.form} noValidate>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="firstname"
                            label="First Name"
                            name="firstname"
                            autoComplete="email"
                            autoFocus
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="lastname"
                            label="Last Name"
                            name="lastname"
                            autoComplete="email"
                            autoFocus
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={(e) => submitForm(e)}
                        >
                            Save
          </Button>
                    </form>

                    <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        open={open}
                        autoHideDuration={3000}
                        onClose={handleClose}>

                        <Alert onClose={handleClose} severity="success">
                            Profile Updated Sucessfully
                    </Alert>
                    </Snackbar>

                </div>

            </Container>
        </div>
    )
}
