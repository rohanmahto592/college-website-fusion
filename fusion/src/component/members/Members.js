import React from 'react'
import { General } from '../../portfolio'
import { secretary } from '../../portfolio'
import {Grow,Grid} from '@material-ui/core'
import { joint_secretary } from '../../portfolio'
import './member.css'
const Members = () => {
    if(General.length)
    {
        return(
            <Grow in>
             <Grid className="containersss1"    container alignItems="stretch" spacing={5}>
               {
                 General.map((infos)=>{
                return(
                    
                    <Grid item xs={12} sm={6} md={6} lg={6} className="infoCardsss1">   
              
                      
                    <div className="card-containersss2">
        
        <img className="roundsss2" src={infos.image} alt="user" />
        <h3 className="h3sss2">{infos.name}</h3>
        <h6 className="h6sss2">{infos.title}</h6>
        <h6 className="h6sss2">{infos.phone}</h6>
        <p className="psss2">{infos.class}</p>
        <div className="buttonssss2">
            <button className="primarysss2">
                Linkedln
            </button>
            <button className="primarysss2">
                Gmail
            </button>
        </div>
        <div className="skillssss2">
            <h6 className="h6sss2">Skills</h6>
            <ul>
                {
                    infos.skills.map((data)=>{
                        return(
                            <li>{data}</li>
                        )
                    })
                }
                
                
            </ul>
        </div>
    </div>
               
        
            </Grid>
            
                )
                


                

                
            })
        }
        
        {
                 secretary.map((infos)=>{
                return(
                    <Grid item xs={12} sm={6} md={3} lg={3} className="infoCardsss12">        
                    <div className="card-containersss12">
        
        <img className="roundsss12" src={infos.image} alt="user" />
        <h3 className="h3sss2">{infos.name}</h3>
        <h6 className="h6sss2">{infos.title}</h6>
        <h6 className="h6sss2">{infos.phone}</h6>
        <p className="psss2">{infos.class}</p>
        <div className="buttonssss2">
            <button className="primarysss2">
            Linkedln
            </button>
            <button className="primarysss2">
                Gmail
            </button>
        </div>
        <div className="skillssss2">
            <h6 className="h6sss2">Skills</h6>
            <ul>
                {
                    infos.skills.map((data)=>{
                        return(
                            <li>{data}</li>
                        )
                    })
                }
                
                
            </ul>
        </div>
    </div>
               
        
            </Grid>
            
                )
                


                

                
            })
        }
        {
                 joint_secretary.map((infos)=>{
                return(
                    <Grid item xs={12} sm={6} md={3} lg={3} className="infoCardsss12">        
                    <div className="card-containersss12">
        
        <img className="roundsss12" src={infos.image} alt="user" />
        <h3 className="h3sss2">{infos.name}</h3>
        <h6 className="h6sss2">{infos.title}</h6>
        <h6 className="h6sss2">{infos.phone}</h6>
        <p className="psss2">{infos.class}</p>
        <div className="buttonssss2">
            <button  className="primarysss2">
            Linkedln
            </button>
            <button className="primarysss2">
                Gmail
            </button>
        </div>
        <div className="skillssss2">
            <h6 className="h6sss2">Skills</h6>
            <ul>
                {
                    infos.skills.map((data)=>{
                        return(
                            <li>{data}</li>
                        )
                    })
                }
                
                
            </ul>
        </div>
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

export default Members
