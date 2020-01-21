import React from 'react';
import MaterialIcon from 'material-icons-react';

import "./styles.css"



function DevItem({ dev, deleteDev }) {
    
    async function userdelete(id){
        await deleteDev(id);
    }

    return(
        <li className="dev-item" key={dev._id}>
            <div style={{float: "right", cursor: "pointer"}} onClick={() => userdelete(dev._id)}>
                < MaterialIcon icon = "delete" />
            </div>
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                <strong>{ dev.name }</strong>
                <span>{ dev.techs.join(", ") }</span>
                </div>
            </header>
            <p>{ dev.bio }</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
        </li>
    );
}

export default DevItem;