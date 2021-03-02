import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const footerStyle = {

    display : 'flex',
    
    paddingBottom : '10px',
    bottom: 0, 
    width : '100%',
    flexDirection : 'column',
    justifyContent : 'space-between',
    marginTop : '50px'
   
}

export default function Footer() {
    return (
        <div style={footerStyle}>

            <AppBar position="static" color="primary" >
                <Toolbar>
                    <Container>
                        <Typography variant="h6" align="center" style={{flexGrow : 1}}>
                            Developed By   Hitesh Moorjani
                        </Typography>
                    </Container>
                </Toolbar>
            </AppBar>

        </div>
    )
}
