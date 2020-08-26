import React from 'react';
import Country from './country.js';
import './country.css';
import { withRouter } from "react-router";
import image from './index.svg'
class Data extends React.Component{
    constructor(props){
       super(props)
        this.state={
            dataEl:[],
            darkmode:false
        }
        this.tempCountries=[];
    }
   async componentDidMount(){

       let response=await fetch('http://restcountries.eu/rest/v2/all');
       let jsonData=await response.json();
       this.tempCountries=jsonData;
       this.setState({
           dataEl:jsonData
       })
       this.atleastOneCountry=false

   }
   region=(event)=>{
       if(event.target.value==="all"){
        this.setState({
            dataEl:this.tempCountries
        })
       }
       else{
        this.setState({
            dataEl:this.tempCountries.filter((region)=>region.region===event.target.value)
        })
       }
   }
   nameSearch=(event)=>{
       if(event.keyCode===13){
           let  matched=[];
           let stri=event.target.value.toLowerCase();
           for(let i=0;i<this.tempCountries.length;i++){
               let matchedCountries=this.tempCountries[i].name.toLowerCase().includes(stri);
               if(matchedCountries){
                   
                    matched.push(this.tempCountries[i])
               }
           }
           this.atleastOneCountry=true;
        this.setState({
            dataEl:matched
        })
       }
   }
   getCountryInfo=(countryData)=>{
    const {history}=this.props;
    this.props.history.push(`/countriesId/:${countryData.alpha3Code}`);
    this.props.history.location.state=countryData;
   }
    render(){
        console.log(this.props.history);
        if(this.state.dataEl.length===0)
        {
            if(!this.atleastOneCountry)
            {
            return(
                <div className="loading">
                    <img src={image} alt="Loading"></img>
                </div>
            )
            }
            else{
                return(
                    <div className="body-background">
                        <div className="search-bar">  
                            <input type="text" placeholder="search for a country..." onKeyDown={this.nameSearch}></input>
                            <select id="region" onChange={this.region} name="region">
                                <option value="all">All</option>
                                <option value="Asia">Asia</option>
                                <option value="Africa">Africa</option>
                                <option value="Americas">Americas</option>
                                <option value="Europe">Europe</option>
                                <option value="Oceania">Oceania</option>
                            </select>
                        </div>
                    </div>
                
               )
            }
        }
        else{
            return(
                <div className="body-background">
                    <div className="search-bar">  
                        <input type="text" placeholder="search for a country..." onKeyDown={this.nameSearch}></input>
                        <select id="region" onChange={this.region} name="region">
                            <option value="all">All</option>
                            <option value="Asia">Asia</option>
                            <option value="Africa">Africa</option>
                            <option value="Americas">Americas</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </div>
                    <div className="display-property">{this.state.dataEl.map((data,index)=> <Country countryInfo={this.getCountryInfo} country={data} key={data.name}/> )}</div>        
                </div>
            
           )
        }
        
    }
}
export default withRouter(Data);
