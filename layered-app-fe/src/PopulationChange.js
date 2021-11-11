import React, { Component } from 'react'
import StateCard from './components/StateCard';
//import { postStatesDifferential } from './fetch-utils';
import { getStatesDifferential } from './fetch-utils';
import './styles/statediff.css'

export default class PopulationChange extends Component {
    
    state = {
        states: [],
        class: true,
        year: true
    }
    componentDidMount = async () => {
        const states = await getStatesDifferential();
        this.setState({ states });
    }
    handlePctClick = () => {
        
        this.setState({ states: this.state.states.sort(({pct_difference: previousPD}, {pct_difference: currentPD }) => currentPD - previousPD) });
        this.setState({ class: true});
       
    }
    handlePopClick = () => {
        this.setState({ states: this.state.states.sort(({pop_difference: previousPD}, {pop_difference: currentPD }) => currentPD - previousPD) });
        this.setState({ class: false})
    }
    handle2019 = () => {
        this.setState({ states: this.state.states.sort(({nineteen_pop: previousPD}, {nineteen_pop: currentPD}) => currentPD-previousPD) });
        
    }
    
    render() {
        console.log(this.state);
        return (
            <div> Sort By:
            <button onClick={this.handlePopClick}> Population Change </button>
            <button onClick={this.handlePctClick}>Percentage Change</button>
            <button onClick={this.handle2019}> 2019 Total Population</button>
            <div>
            
             {this.state.states.map(st => <div key={st.id} className = 'state' >
                 
                 <p className='title'>State: {st.state.toUpperCase()}</p>
                 <p>2016 Population: {st.sixteen_pop}</p>
                 <p>2019 Population: {st.nineteen_pop}</p>
                 <p className = {this.state.class ? "pop_diff" : "pct_diff" }>Population Difference: {st.pop_difference}</p>
                 <p className = {this.state.class ? "pct_diff" : "pop_diff"}>Percentage Change: {st.pct_difference}</p>
                 <p>ID: {st.idapi}</p>
                 </div>
                  )}
            </div>
        
            </div>
        );
    }
}
