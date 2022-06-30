import './../styles/Filter.css';

export default function Filter({setFetchCategory}){
   
    return(
        <div className="container-filter">
            <ul>
                <li onClick={() => setFetchCategory('4208')}>Jeans</li>
                <li onClick={() => setFetchCategory('2112')}>Veste</li>
                <li>T-shirt</li>
                <li>Shorts</li>
                <li>lots</li>
            </ul>
        </div>
    )

}