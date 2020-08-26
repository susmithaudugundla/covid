import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Data from './components/countriesData/data.js';
import CovidGraph from './components/countriesData/countryInfo.js';

export default function App() {
  return (
    <Router> 
      <div>   
        <Switch>
        	<Route exact path={`/countriesId/:countryId`}>
        		<CovidGraph/>
  			</Route>
        	<Route path="/">
            	<Data />
        	</Route>
        </Switch>
      </div>
    </Router>
  );
}
