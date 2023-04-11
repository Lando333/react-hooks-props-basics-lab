import React from "react";

function Links(props) {
    const links = props.links
    
    console.log(links.github)
    return (
        <div>
            <h3>Links</h3>
            <a href={links.github}> {links.github} </a> 
            <a href={links.linkedin}> {links.linkedin} </a>
        </div>
    )
}

export default Links;