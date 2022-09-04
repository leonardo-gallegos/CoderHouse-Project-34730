import { BiChart } from "react-icons/bi";
import { BiBody } from "react-icons/bi";

export const Item = ( { name, species, status, image } ) => {
    return (
        <div>
            <div className="card w-72 min-h-full bg-base-100 rounded-md shadow-xl">
                <figure className="image-cover">
                    <img src={ image } alt="Character"/>
                </figure>
                <div className="card-body items-center text-center font-Poppins flex flex-col w-full h-full">
                    <h2 className="card-title">{ name }</h2>
                    <div className="mt-0 mb-4">
                        <p className="font-medium text-sm w-full flex flex-row justify-center"><BiChart size={20}/>&nbsp;Status: { status }</p>
                        <p className="font-medium text-sm w-full flex flex-row justify-center"><BiBody size={20}/>&nbsp;Species: { species }</p>
                    </div>
                    <div class="mt-auto card-actions grow-0">
                        <button class="btn normal-case">More details!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
