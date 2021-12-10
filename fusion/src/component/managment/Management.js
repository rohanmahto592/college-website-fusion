import React from 'react'
 import { management } from '../../portfolio'
import {Grow,Grid} from '@material-ui/core'
import './management.css'
const Management= () => {
    if(management.length)
            {
                return(
                    <Grow in>
                    <Grid className="containersss2"  justifyContent="space-around"   container alignItems="center" spacing={6}>
                      
                    {
                  management.map((infos)=>{
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

export default Management;



