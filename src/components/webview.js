import React from "react";
import { useParams } from "react-router";
import data from '../data/dummy';
import { Card, CardContent, Typography, Grid, CssBaseline } from '@material-ui/core';
import CountUp from 'react-countup';
import './webview.css'



    



const Webview = () => {
    const { id } = useParams();
    const arr = data.find(de =>
        de.id === 1
    )

 

    return (
        <div class="main">
            <h7 id="reg">Overview</h7>
            <h3 id="reg">{arr.name}</h3>
            <CssBaseline/>

            <div className='container mid middle'>
            <Grid container  justify="center">
                <Grid xs={12} md={3} component={Card}>
                    <CardContent className='reco'>
                        <Typography color="textSecondary" >Registration</Typography>
                         
                        <Typography variant="h5"><CountUp start={0} end='1000' duration={2.5} separator=',' /></Typography>
                        
                        
                    </CardContent>
                </Grid>
                <Grid xs={12} md={3} component={Card}>
                    <CardContent className='inf'>
                        <Typography color="textSecondary">Views</Typography>
                        
                        <Typography variant="h5"><CountUp start={0} end='1000' duration={2.5} separator=',' /></Typography>
                        
                    </CardContent> </Grid>
                <Grid xs={12} md={3} component={Card}>
                    <CardContent className='dea'>
                        <Typography color="textSecondary">Shares</Typography>
                        
                        <Typography variant="h5"><CountUp start={0} end='1000' duration={2.5} separator=',' /></Typography>
                      
                        
                    </CardContent></Grid>

            </Grid></div>
    
           
           <div class="datatab">
               <h6 id="reg">Registered Users</h6>

            <table id="example" class="display" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contacy Number</th>
                <th>Whatsapp Number</th>
                <th>Registered At</th>
            </tr>
        </thead>
 
        <tfoot>
        <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contacy Number</th>
                <th>Whatsapp Number</th>
                <th>Registered At</th>
            </tr>
        </tfoot>
 
        <tbody>
            <tr>
                <td>1</td>
                <td>Hingins bothams</td>
                <td>Edinburgh@abc.in</td>
                <td>6187653456</td>
                <td>2345676543</td>
                <td>2020/07/21</td>
            </tr>
            <tr>
                 <td>2</td>
                <td>Ed mark</td>
                <td>markh@abc.in</td>
                <td>7355543450</td>
                <td>6342643632</td>
                <td>2019/07/25</td>  
            </tr>
            <tr>
                <td>3</td>
                <td> Rick M</td>
                <td>rickm@abc.in</td>
                <td>9539154723</td>
                <td>7296482748</td>
                <td>2020/04/25</td>  
                
            </tr>
            
        </tbody>
    </table>
    </div>
        </div>
    )
}

export default Webview;