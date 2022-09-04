import { Item } from "./Item"

export const ItemList = ( { characters } ) => {
    return (
        <div className="flex flex-row flex-wrap gap-6 justify-center content-center mt-4 mb-8">
            {/*
            { characters.map( char => <Item key={ char.id } { ...char }/> ) }
            */}
            { characters.map( char =>
                <Item key={ char.id } name={ char.name } species={ char.species } status={ char.status } image={ char.image }/>
            )}
        </div>
    )
}