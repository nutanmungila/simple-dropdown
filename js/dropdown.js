'use strict';
import React from 'react';
class Dropdown extends React.Component{

	render(){
		return(
			<div>
			<select>
				  <option value="volvoooo">Volvo</option>
				  <option value="saabbbb">Saab</option>
				  <option value="opel">Opel</option>
				  <option value="audi">Audi</option>
			</select>
			</div>
			);

	}

}
export default Dropdown;

React.render(<Dropdown/>,document.getElementById("div1"));