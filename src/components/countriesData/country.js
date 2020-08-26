import React from 'react';
import { css } from 'emotion';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import './country.css';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';


class Country extends React.Component{
    constructor(props){
        super(props);
        this.individual=props.country;
        this.getCountryInfo=props.countryInfo;
    }
    change=()=>{
          this.getCountryInfo(this.individual);
    }
    render(){
            return(
                    <div className="card" onClick={this.change}>
                        <img src={this.individual.flag} alt="Country-flag"></img>
                        <h4>{this.individual.name}</h4>
                        <div><p className="bold">population: <span className="span-bold">{this.individual.population}</span></p></div>
                        <div><p className="bold">Region: <span className="span-bold">{this.individual.region}</span></p></div>
                        <div><p className="bold">Capital: <span className="span-bold">{this.individual.capital}</span></p></div>
                    </div>
             
            )
    }
}
export default withRouter(Country);