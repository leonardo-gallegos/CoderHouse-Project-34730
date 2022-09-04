import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import { ItemList } from "./ItemList"

function ItemListContainer( { firstGreeting, secondGreeting } ) {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((res) => res.json())
            .then((data) => {
                console.log( data.results );
                setCharacters ( data.results)
            })
    }, [])
    

    return (
        
        <div className="mt-4 flex flex-col justify-items-center justify-center items-center">
            <div className="mt-4 font-Poppins font-bold text-3xl text-center"> { firstGreeting}  </div>
            <div className="flex flex-row flex-wrap gap-6 justify-center content-center mt-4 mb-8">
                <div className="mt-2"><ItemCount initial={ 1 } stock={ 33 }/></div>
                <div className="mt-2"><ItemCount initial={ 1 } stock={ 22 }/></div>
                <div className="mt-2"><ItemCount initial={ 1 } stock={ 11 }/></div>
            </div>
                
            

            <div className="mt-4 font-Poppins font-bold text-3xl text-center"> { secondGreeting } </div>
            <ItemList characters={ characters }/>
            
        </div>
    )
}

export default ItemListContainer