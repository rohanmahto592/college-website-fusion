import React from 'react'
import {Grid} from '@material-ui/core';
import lights10 from './lights10.jpeg';
import neuron from './neuron.jpeg';

import './home.css'
const Home = () => {
   
        
        return (
            <Grid rowSpacing={1}  container spacing={2} alignItems='stretch' columnSpacing={{xs:1,sm:1,md:2,lg:1}} >
                <Grid item xs={12}  lg={6} md={6}>

               
<div style={{display:'flex',flexDirection:'column'}}>
    
        <center>
        <img  className='imagefit' src={neuron}></img>
        </center>
   

</div>
</Grid>
                <Grid item xs={12} lg={6} md={6}>
                    
                    <div className="flexing" style={{boxSizing:'border-box'}}>
          <div style={{display:'flex',flexDirection:'column'}}>
          <h3 style={{color:'whitesmoke',display:'block'}}>Department Of Information Technology, <span style={{color:'#10a8c3',textShadow:'1px 1px  #10a8c3'}}>Fusion Society</span>
              </h3>
              <div  style={{boxShadow: '#10a8c3 0px 3px 8px', display:'flex' ,flexDirection:'column', width:'80%',marginLeft:'10%',marginTop:'4%',border:'none'}}>
                  <h5 className="h5style" style={{color:'whitesmoke',padding:'0.5rem'}}>
                  
                   <p style={{color:'#FFC300',fontSize:'30px',display:'inline'}}>*</p> The Departmental forms a Techno-Cultural Society named <span style={{color:'#10a8c3'}}>“Fusion”</span>.</h5>
                  <h5 className="h6style" style={{color:'whitesmoke',padding:'0.5rem',alignItems:'start'}}> <p style={{color:'#FFC300',fontSize:'30px',display:'inline'}}>*</p> It is leaded by 3rd year
                        students and assosciated with 2nd year students to enhance the technical knowledge, team work
                        and personality development as well.
                    </h5>
<h5 className="h7style" style={{color:'whitesmoke',padding:'0.5rem',alignItems:"start"}}> 
<p style={{color:'#FFC300',fontSize:'30px',display:'inline'}}>*</p> This student society is headed by HOD as a President and
supported by the faculty members as a Vice -President along with a team of students holding the
positions like General Secretary, Secretary and Joint Secretary.</h5>
<h5 className="h8style" style={{color:'whitesmoke',padding:'0.5rem',alignContent:"start"}}> <p style={{color:'#FFC300',fontSize:'30px',display:'inline'}}>*</p> Vice President, General
Secretary and Secretary are selected by President.</h5> <h5 className="h9style" style={{color:'whitesmoke',padding:'0.5rem',alignContent:"start"}}><p style={{color:'#FFC300',fontSize:'25px',display:'inline'}}>*</p> The remaining positions are selected through
proper auditions with the consent of the President, Vice-President, General Secretary of previous
year in the beginning of each academic session.
                  </h5>
              </div>
          </div>
           </div>
                    
                </Grid>

                
           </Grid>


      
    )

    
    
        
   
    
}

export default Home
