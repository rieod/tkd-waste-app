// const data = [
//     { storeName: "Fried Chicken Store", storeLocation: "Surabaya, East Java, Indonesia"},
//     { storeName: "Warung Tegal Purnama", storeLocation: "Surakarta, Central Java, Indonesia" },
//     { storeName: "Chinese Resto", storeLocation: "Cimahi, West Java, Indonesia"},
// ]

export default function SegmentInfo(){
    return(
        <div className='segment-info'>
                <p>Monday, 1 January 2024</p>
                <h2>UID - 55684156521</h2>
                    <ul>
                        <li>
                            <span className="material-icons">store</span>
                            Store Name
                        </li>
                        <li>
                            <span className="material-icons">place</span>
                            Surabaya, East Java, Indonesia
                        </li>
                    </ul>   
            </div>
    );
}