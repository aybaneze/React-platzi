import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Badges.css'
import confLogo from '../images/platziconf-logo.svg';
import BadgesList from '../components/BadgesList'

class Badges extends React.Component {

state = {
  nextPage: 1,
  data: {
    info:[],
    results: []
  }
}

  componentDidMount(){
    this.fetchCharacters()
  }

fetchCharacters= async () =>{
  const datos = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`);
 const data = await datos.json();
 console.log('hola')
 this.setState({
  nextPage: this.state.nextPage +1,
   data:{
     info: data.info,
     results: [].concat(this.state.data.results, data.results)
   }
 })
}

  render() {

    return (
      <div>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="conf logo" />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data.results}/>
            <button className="btn btn-primary" onClick={()=>this.fetchCharacters()}>Load more</button>
          </div>  
        </div>      
      </div>
      // <React.Fragment>
      //   <div className="Badges">
      //     <div className="Badges__hero">
      //       <div className="Badges__container">
      //         <img
      //           className="Badges_conf-logo"
      //           src={confLogo}
      //           alt="Conf Logo"
      //         />
      //       </div>
      //     </div>
      //   </div>

      //   <div className="Badges__container">
      //     <div className="Badges__buttons">
      //       <Link to="/badges/new" className="btn btn-primary">
      //         New Badge
      //       </Link>
      //     </div>

      //     <BadgesList badges={this.state.data} />
      //   </div>
      // </React.Fragment>
    )
  }
}

export default Badges;
