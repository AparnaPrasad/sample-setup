import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import ListOfBikeNetworks from '../ListOfBikeNetworks/ListOfBikeNetworks';
import {group_by} from '../../Utils/const';

class DisplayGroupedBikeNetworks extends Component {

    render(){

        return (<div>
            {this.props.listOfItems.map((item, index)=>{
                return <div key={index}>
                    <h1>{item}</h1>
                    {this.props.groupBy!=='both'?<ListOfBikeNetworks items={this.props.bikeList.filter((bike)=>{
                       return bike.location[this.props.groupBy]===item
                    })} />: <DisplayGroupedBikeNetworks groupBy={'city'} bikeList={this.props.bikeList} listOfItems={this.props.countryWiseCity[item]}/>}
                    </div>
            })}
        </div>)

    }

}

function mapStateToProps({bikes, city, country}) {
    return {
        bikeList:bikes.bikeList,
        cityList: city.cityList,
        countryList: country.countryList,
        countryWiseCity: country.countryWiseCity
    }
}

export default connect(mapStateToProps)(DisplayGroupedBikeNetworks);