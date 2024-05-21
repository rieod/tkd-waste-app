export default function FilterBar(){
    return(
        <div className='filter-container'>
            <button className='filter'><span className="material-symbols-outlined">sort</span>Sort by</button>
            <button className='filter'><span className="material-symbols-outlined">filter_alt</span>Filter</button>
            <input type='text' id='searchInput' onKeyUp='searchFunction()' placeholder='Search'></input>
        </div>
    );
}