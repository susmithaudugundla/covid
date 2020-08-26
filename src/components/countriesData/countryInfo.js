/*global covid19*/
import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { withRouter } from 'react-router-dom';
import country from './country';
import './country.css';
import image from './index.svg'

class CovidGraph extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      covidData:covid19.data(),
      countryDetails:this.props.history.location.state
    }
    this.loadingData=false;
  }
  async componentDidMount(){
    let countryId=this.props.history.location.state;
    this.loadingData=true;
    this.setState({
      covidData:this.state.covidData.filter(x=>x.country_iso3===countryId.alpha3Code).groupByDate()
    });
  }
  
  render() {
    if(this.loadingData){
      return (
        <div className="country-info">
          <button onClick={this.props.history.goBack}>Back</button>
        <div className="covid-details">
          
          <div className="w-five img-center">
          <img src={this.state.countryDetails.flag} alt="Country-flag"></img>
          </div>
          <div className="w-four">
            <div className="covid-details margin-0">
            <div className="w-four">
            <h4>{this.state.countryDetails.name}</h4>
          <p><span className="bold">Native Name : </span> {this.state.countryDetails.nativeName}</p>
          <p><span className="bold">Population : </span> {this.state.countryDetails.population}</p>
          <p><span className="bold">Region : </span> {this.state.countryDetails.region}</p>
          <p><span className="bold">Sub Region : </span> {this.state.countryDetails.subregion}</p>
          <p><span className="bold">Capital : </span> {this.state.countryDetails.capital}</p>
          
            </div>
            <div className="w-four">
            <p><span className="bold">Top Level Domain : </span> {this.state.countryDetails.topLevelDomain[0]}</p>
          <p><span className="bold">Currencies : </span> {this.state.countryDetails.currencies[0].name}</p>
          <p><span className="bold">Languages : </span> {this.state.countryDetails.languages.map(language=>language.name)}</p>
            </div>
            </div>
            

          
          <h3>Covid-19 Report</h3>
          <LineChart
          width={500}
          height={300}
          data={this.state.covidData}
          margin={{
          top: 5, right: 30, left: 20, bottom: 5,
          }}
      >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="deaths" stroke="#f0190a" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="recovered" stroke="#05a608" />
          <Line type="monotone" dataKey="confirmed" stroke="#1753d4" />
      </LineChart>
          </div>
      
      </div>
      </div>
        );
    }
    else{
      return(
        <div className="loading">
            <img src={image} alt="Loading"></img>
        </div>
    )
    }
    
    }
}
export default withRouter(CovidGraph);

/*import React, { PureComponent } from 'react';

import { withRouter } from 'react-router-dom';

class Example extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.countryId);
    }
}
export default withRouter(Example);*/
