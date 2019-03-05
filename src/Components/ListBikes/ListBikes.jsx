import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';
import {table_fields} from '../../Utils/const';
import './listBikes.scss';

export default function ListBikes(props){
    const [data, setData] = useState([]);
    const table_fields_keys = Object.keys(table_fields);
    console.log(table_fields_keys);
    useEffect(() => {
        /*const result = await axios(
        'http://hn.algolia.com/api/v1/search?query=redux',
        );*/

        /*Api.get('/').then(response => {
            setData(response.data);
        })*/

        //console.log("use effect called");

    });

    return (<div>
    <Table striped bordered hover>
        <thead>
            <tr className='table-header'>
                {table_fields_keys.map((field, index)=>(
                      <th key={index}>{field}</th>
                ))}            
            </tr>
        </thead>
        <tbody> 
            {props.items.map((item, index)=>{
                return <tr key={index} onClick={()=>{props.setShow(true)}}>
                    {table_fields_keys.map((field, index)=>(
                      <td key={index}>{(field === table_fields.city || field===table_fields.country) ? (item.location?item.location[field]:undefined): item[field] }</td>
                    ))}
                </tr>
            })}
        </tbody>
        </Table>
    </div>);
}

