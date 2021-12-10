import React from 'react'
import './decorumstyle.css'
import { info } from '../../portfolio'
import {Grid,Grow} from '@material-ui/core'
const About = () => {
    if(info.length)
            {
                return(
                    <Grow in>
            < Grid   justifyContent="space-evenly" container alignItems="stretch" spacing={3}>
                {
                    info.map((infos)=>{
                        return(
                            
                            <div className="bodysss">
            <div class="containersss">
                <div class="cardsss">
                    <div class="boxsss">
                        <div class="contentsss">
                       <h2 className="headss">{infos.heading}</h2>
                        <h3 className="subheadss">{infos.title}</h3>
                        {infos.p1?<p> <span style={{color:'darkgoldenrod',fontWeight:'bolder'}}>1.</span>{infos.p1}</p>:''}
                        {infos.p2?<p><span style={{color:'darkgoldenrod',fontWeight:'bolder'}}>2.</span> {infos.p2}</p>:''}
                        {infos.p3?<p><span style={{color:'darkgoldenrod',fontWeight:'bolder'}}>3.</span> {infos.p3}</p>:''}

                        
                        
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
       

                        )
                    })
                }

            </Grid>
            </Grow>
                )
            }
        }
            
            
                

           
        

export default About
