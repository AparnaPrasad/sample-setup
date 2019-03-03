import Dropdown from "react-bootstrap/Dropdown";
import React from "react";

export default function DropdownContainer(props){
    return (<Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            {props.groupBy}
        </Dropdown.Toggle>

        <Dropdown.Menu> /*TODO get constant from constant file and loop*/
            <Dropdown.Item eventKey="country" onSelect={(eventKey)=>{props.dropDownChange(eventKey)}}>Country</Dropdown.Item>
            <Dropdown.Item eventKey="city" onSelect={(eventKey)=>{props.dropDownChange(eventKey)}}>City</Dropdown.Item>
            <Dropdown.Item eventKey="both" onSelect={(eventKey)=>{props.dropDownChange(eventKey)}}>Both</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>)
}