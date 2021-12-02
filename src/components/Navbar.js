import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
    const navbar = {
        borderBottom: "1px var(--border) solid", 
        width: "100%", 
        position: "fixed",
        top: 0, 
        left: 0,
        background: "var(--background-alt)",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "16px",
        maxHeight: "40px"
    }

    return (
        <div style={navbar}>
            <Link style={{display:"block", margin: "1rem"}} to='/students'>
                Students List
            </Link>
            <Link style={{display:"block", margin: "1rem 0"}} to='/addStudent'>
                Add Student 
            </Link>
        </div>
    )
}

export default Navbar