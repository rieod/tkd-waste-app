// import ActionButton from './ActionButton';

import axios from "axios";
import { useEffect, useState } from "react";

// const data = [
//     { name: "Anom", category: "Fruit & Vegies", description: "Lorem ipsum dolor sit amet consectetur." },
//     { name: "Megha", category: "Meat", description: "Lorem ipsum dolor sit amet consectetur." },
//     { name: "Subham", category: "Dairy", description: "Lorem ipsum dolor sit amet consectetur." },
// ]

export default function SegmentTable(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:5173/credentials')
        .then(setData(data));
    },[]);

    return(
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Description</th>
                <th></th>
            </tr>
            </thead>
            {data.map((val,key)=>{
                return (
                    <tbody>
                        <tr key={key}>
                            <td>{val.username}</td>
                            <td>{val.password}</td>
                            {/* <td>{val.instances}</td> */}
                            {/* <td><ActionButton /></td> */}
                        </tr>
                    </tbody>
                );
            })}
            
        </table>
    );
}