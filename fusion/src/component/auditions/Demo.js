import axios from 'axios'
import {useEffect,useState} from 'react'
const Demo = async () => {
    const [state,setstate]=useState(null);
    useEffect(() => {
        const getdata=async()=>{
            const datas=await axios.get('url');
            const finals=datas.json();
            setstate(finals);
        }
        getdata();
       
    }, [])

    useEffect(() => {
        
        const getdatas= async()=>{
            const datas=await fetch('url');
            const datas2=datas.json();
            setstate(datas2);
        }
        getdatas();
    }, [])
    
}

export default Demo
