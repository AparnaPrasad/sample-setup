import React from "react";

export default function ListBikes(props){

    return props.items.map((item, index)=>{
        return <div key={index}>
            <div onClick={()=>{props.setShow(true)}}>
                {item.name} -- {item.id}
            </div>
        </div>
    })
}