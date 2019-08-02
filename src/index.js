import React  from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';
import './global.css'

const container = document.getElementById('app');


ReactDOM.render(<Badges   />,container)


// firstName="Andrea" lastName="Esquerre" jobTitle="Frontend Engineer" twitter="@esquerreandrea" urlAvatar="https://www.gravatar.com/avatar?d=identicon"