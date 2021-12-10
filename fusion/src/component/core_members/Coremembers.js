import React from 'react'
import { memberdetails } from '../../portfolio';
import {Grid,Grow} from '@material-ui/core';
import './coremember.css';
const Coremembers = () => {
    if(memberdetails.length)
            {
                return(
                    <Grow in>
                    <Grid className="containersss2"  justifyContent="space-around"   container alignItems="center" spacing={6}>
                    {
                    memberdetails.map((infos)=>{
                        return(
                            
                            
                            <Grid item xs={12} sm={6} md={6} lg={4} className="infoCardsss2">
                               
                                    <div class="row">
                            {/* <div class="col-12 col-sm-6 col-md-4 col-lg-3"> */}
                            <div class="our-team">
                                <div class="picture">
                                <img class="img-fluid" src={infos.image}/>
                                </div>
                                <div class="team-content">
                                <h3 class="name">{infos.name}</h3>
                                <h4 class="title">{infos.title}</h4>
                                </div>
                                <ul class="social">
                                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
                                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
                                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-instagram" aria-hidden="true"></a></li>
                                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
                                </ul>
                            </div>
                            </div>
                            {/* </div> */}
                            {/* </div> */}
                            </Grid>
                        )
                            


                        

                        
                    })
                }
                

            </Grid>
            </Grow>
                )
            }
        }
            
       

                       

export default Coremembers;
