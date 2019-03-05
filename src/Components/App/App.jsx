import React, { Component } from 'react';
import './app.scss';
import Loader from 'react-loader-spinner';
import Api from '../../Utils/api';
import { connect } from 'react-redux';
import { fetchBikesNetwork } from '../../Actions/bikes';
import DisplayGroupedBikeNetworks from '../DisplayGroupedBikeNetworks/DisplayGroupedBikeNetworks';
import DropdownContainer from '../DropdownContainer/DropdownContainer';
import { group_by } from '../../Utils/const';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            groupBy: group_by[0].key
        }
    }

    componentDidMount(){
        const { fetchBikesNetwork } = this.props;
        fetchBikesNetwork();
    }

    getBikeNetworkComponent() {
        if (this.props.loading) {
            return (<Loader
                type='Ball-Triangle'
                color='#00BFFF'
                height='100'
                width='100'
            />);
        }
        return this.props.error ? <div>Error displaying data</div> : <DisplayGroupedBikeNetworks groupBy={this.state.groupBy} listOfItems={ this.state.groupBy === 'city' ? this.props.cityList : this.props.countryList }/>;

    }

    dropDownChange(eventKey) {
        this.setState({
            groupBy: eventKey,
        });
    }

    render() {
       return (
            <div>
                <DropdownContainer
                    groupBy={ this.state.groupBy }
                    dropDownChange={ this.dropDownChange.bind(this) }/>
                { /* TODO loader and error check */ }
                {this.getBikeNetworkComponent()}
            </div>
        );
    }
}
function mapStateToProps({ country, city, bikes }) {
    return {
        countryList: country.countryList,
        cityList: city.cityList,
        loading: bikes.loading,
        error: bikes.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchBikesNetwork: () => dispatch(fetchBikesNetwork()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
