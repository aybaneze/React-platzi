import React from 'react';
import confLogo from '../images/badge-header.svg'

import "./styles/Badge.css"

class Badge extends React.Component{
render(){
    return(
       <div className="Badge">
           <div className="Badge_header">
               <img src={confLogo} alt="logo conferencia"></img>
           </div>
           <div className="Badge_section-name">
               <img src={this.props.urlAvatar} className="Badge_avatar" alt= "Avatar"></img>
               <h1>
                   {this.props.firstName}
                   <br></br>
                   {this.props.lastName}
               </h1>
           </div>
           <div className="Badge_section-info">
               <h3>
                   {this.props.jobTitle}
               </h3>
               <div>
                   {this.props.twitter}
               </div>
           </div>
           <div className="Badge_footer">
               <p>
                   #Platzi
               </p>
           </div>
       </div>
    )
}

}


export default Badge;