import React from 'react'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div style={{boxShadow:"2px 1px 2px aliceblue",display:'flex',justifyContent:'center',flexDirection:'column'}}>
           <Link to={'/'} style={{fontSize:"8vw",color:"navy",textAlign:"center",textDecoration:"none"}}>Quiz App</Link>
           <hr />
        </div>
    );
}

export default Header;