import React from 'react'
import Grid from '@material-ui/core/Grid'
import '../Styles/Home.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class Home extends React.Component {



    render() {
        const paper = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginTop: '60px'
        }
        return (
            <Grid container component="main" className="root">
                <Grid item xs={12} sm={12} md={12} className='homerightcomponent' elevation={6} square>
                    <Card className='homeitem1'>
                        <button className='btnhome'>
                            <i class='fa fa-home'>Welcome</i>
                        </button>
                    </Card>
                    <div style={paper}>
                        <h1 style={{ color: 'white', backgroundColor: 'skyblue', padding: '10px 10px' }}>
                            Web Chat Application
                        </h1>
                        <Link to="/signin" >
                            <button class='button1'> <span>Login</span></button>
                        </Link>
                    </div>

                </Grid>
            </Grid>
        )
    }
}

export default Home;