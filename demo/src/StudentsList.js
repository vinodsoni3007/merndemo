import { Avatar, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Tooltip, Typography } from '@material-ui/core';
import StudentImage from './static/images/studentimage.jpg';
import React, { useEffect, useState } from 'react'
import PersonAddIcon from '@material-ui/icons/PersonAdd';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '50px',


    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    inline: {
        display: 'inline',
    },
}));

export default function StudentsList() {

    const classes = useStyles();
    const [jsonData, setJsonData] = useState([])

    useEffect(() => {

        console.log('renders once')

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        fetch('http://localhost:9000/profile/studentlist', requestOptions)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setJsonData(res)


            })
            .catch(err => console.log(err))

    }, [])

    return (
        <div className={classes.root}>

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}
            >

                {
                    jsonData.map((data) => {
                        return (
                            <Grid item xs={8} key={data._id}>
                                <List >
                                    <ListItem alignItems="center">

                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src={StudentImage} />

                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={data.firstname + " " + data.lastname}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        className={classes.inline}
                                                        color="textPrimary"
                                                    >
                                                        Software Engineer
                                            </Typography>
                                                    {" Technology Stack : React JS Node JS Java Spring Boot Angular Docker ELK "}

                                                </React.Fragment>
                                            }
                                        />


                                        <Tooltip title="Add Student">
                                            <IconButton style={{color : "#1167b1"}}>
                                                <PersonAddIcon style={{ marginLeft: '20%' }} />
                                            </IconButton>
                                        </Tooltip>
                                    </ListItem>

                                </List>

                                <Divider />
                            </Grid>
                        )
                    })
                }

            </Grid>


        </div>
    )
}
