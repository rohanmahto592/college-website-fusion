import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from './component/navbar/NavBar';
import Home from './component/Home_page/Home';
import Decorum from './component/decorum/Decorum';
import Coremembers from './component/core_members/Coremembers';
import Members from './component/members/Members';
import Contact from './component/contact/Contact';
import Technical from './component/technical/Technical';
import Gallery from './component/gallery/Gallery';
import Management from './component/managment/Management';
import Audition from './component/auditions/Audition';
import {useState,useEffect} from 'react'
// import Members from './component/members/Members';
import { Switch, Route, Redirect } from "react-router-dom";
import { SpinnerDotted } from 'spinners-react';

function App() {
  const [loading,setLoading]=useState(null);
   useEffect(() => {
     setLoading(true);
     setTimeout(()=>{
       setLoading(false)

     },4000)
   
    
  }, [])
  return (

    <div className="App" style={{backgroundColor:'black'}}>
      <NavBar/>
      {
        loading?
        <SpinnerDotted style={{marginTop:'25vh'}}
        size={'25vw'}
        color={'#61dafb'}
        loading={loading}
        

        
        
        />

        
        :
        
       
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/decorum" component={Decorum} />
        <Route exact path="/core_members" component={Coremembers} />
        <Route exact path="/members" component={Members} />
        <Route exact path="/contactme" component={Contact} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/technical" component={Technical} />
        <Route exact path="/management" component={Management} />
        <Route exact path="/audition" component={Audition} />
        <Redirect to="/home" />
      </Switch>
      }
      
    </div>
  );
}

export default App;
