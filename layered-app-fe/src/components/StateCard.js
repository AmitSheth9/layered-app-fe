import React, { Component } from 'react'

export default class StateCard extends Component {
    render() {
        return (
            <div>
                {this.props.stArr.map(st => <div key={st.id} className = 'state' >
                 
                 <p className='title'>State: {st.state.toUpperCase()}</p>
                 <p>2016 Population: {st.sixteen_pop}</p>
                 <p>2019 Population: {st.nineteen_pop}</p>
                 <p className = 'pop diff'>Population Difference: {st.pop_difference}</p>
                 <p className = 'pct_diff'>Percentage Change: {st.pct_difference}</p>
                 <p>ID: {st.idapi}</p>
                 </div>)}
                 
                 </div>

        );
    }
}
