import React from 'react'
 import { techImages } from '../../portfolio'
import {Grow,Grid} from '@material-ui/core'
import { audutions } from '../../portfolio'
import './audition.css'
const Audition = () => {
    if(audutions.length)
            {
                return(
                    <Grow in>
                    <Grid className="containersss2"  justifyContent="space-around"   container alignItems="center" spacing={6}>
                      
                    {
                  audutions.map((infos)=>{
                        return(
                            
                            
                            <Grid item xs={12} sm={6} md={3} lg={3} className="infoCardsss23">
                               
                               <div class="container2907">
                                    <img className="image2907" src={infos.img} alt=""/>
                                </div>
                            </Grid>

                        )
                            


                        

                        
                    })
                }
                

            </Grid>
            </Grow>
                )
            }
        }

export default Audition



