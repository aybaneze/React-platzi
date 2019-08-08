import React from 'react';
import './styles/badgeList.css'

class badgesList extends React.Component{
    render(){
        return ( 
            <div>
        <ul className="list-unstyled">
            {this.props.badges.map((badge)=>{
                  console.log(badge,'hola')
                return (
                 <li className="container-list-g" key={badge.id}>
                     <div className="row">
                        <div className="col-3 avatar-g">
                            <img src={badge.image} alt="avatar" />
                        </div>
                        <div className="col-7 info-g">
                            <p>
                            {badge.name}
                            </p>
                            <p>
                                @{badge.gender}
                            </p>
                            <p>
                                {badge.species}
                            </p>
                        </div>  
                     </div>
                    
                    
                 </li>
            )
          } ) }
    </ul>

    </div>
    )
    }
}

export default badgesList