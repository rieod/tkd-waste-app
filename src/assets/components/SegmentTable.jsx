import ActionButton from './ActionButton';

const data = [
    { name: "Anom", category: "Fruit & Vegies", description: "Lorem ipsum dolor sit amet consectetur." },
    { name: "Megha", category: "Meat", description: "Lorem ipsum dolor sit amet consectetur." },
    { name: "Subham", category: "Dairy", description: "Lorem ipsum dolor sit amet consectetur." },
]

export default function SegmentTable(){
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
                            <td>{val.name}</td>
                            <td>{val.category}</td>
                            <td>{val.description}</td>
                            <td><ActionButton /></td>
                        </tr>
                    </tbody>
                );
            })}
            
        </table>
    );
}