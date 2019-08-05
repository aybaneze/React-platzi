import React from 'react';
import './styles/badgeList.css'

class badgesList extends React.Component{
    render(){
        return ( 
        <ul className="list-unstyled">
            {this.props.badges.map((badge)=>{
                return (
                 <li className="container-list-g" key={badge.id}>
                     <div className="row">
                        <div className="col-3 avatar-g">
                            <img src={badge.avatarUrl} alt="avatar" />
                        </div>
                        <div className="col-7 info-g">
                            <p>
                            {badge.firstName}{badge.lastName}
                            </p>
                            <p>
                                @{badge.twitter}
                            </p>
                            <p>
                                {badge.jobTitle}
                            </p>
                        </div>  
                     </div>
                    
                    
                 </li>
            )
          } ) }
    </ul>)
    }
}

export default badgesList