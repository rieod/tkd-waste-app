import ActionButton from './ActionButton';

import axios from "axios";
import { useEffect, useState } from "react";

export default function SegmentTable(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5173/users');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(res => {setData(res.data)});
    // }, []);

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
            {data.map((val,key) => {
                return (
                    <tbody>
                        <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.username}</td>
                            <td>{val.password}</td>
                            <td><ActionButton /></td>
                        </tr>
                    </tbody>
                );
            })}
            
        </table>
    );
}