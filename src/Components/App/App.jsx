import React, { Component } from 'react';
import "../app.scss";
import Api from '../../Utils/api';
import {connect} from 'react-redux';
import {fetchBikesNetwork} from '../../Actions/bikes';
import DisplayGroupedBikeNetworks from '../DisplayGroupedBikeNetworks/DisplayGroupedBikeNetworks';
import DropdownContainer from '../DropdownContainer/DropdownContainer';
import {group_by} from '../../Utils/const';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            groupBy: group_by[0].key
        }
    }

    componentDidMount(){
        this.props.fetchBikesNetwork();
    }

    dropDownChange(eventKey){
        this.setState({
            groupBy: eventKey
        })
    }


    render() {
       // const {cities} = this.props;
        return (
            <div>
                <DropdownContainer groupBy={this.state.groupBy} dropDownChange={this.dropDownChange.bind(this)}/>
                {/*TODO loader and error check*/}
                <DisplayGroupedBikeNetworks groupBy={this.state.groupBy} listOfItems={this.state.groupBy==='city'?this.props.cityList:this.props.countryList}/>
            </div>
        );
    }
}
function mapStateToProps({country, city}) {
    return {
        countryList: country.countryList,
        cityList: city.cityList
    }

}

function mapDispatchToProps(dispatch) {
    return {
        fetchBikesNetwork: () =>  dispatch(fetchBikesNetwork())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);