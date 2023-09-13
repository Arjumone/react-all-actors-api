import { useEffect, useState } from "react";
import Actor from "../Actor/Actor";


const Actors = ({handleSalary}) => {
    const [actors,setActors]=useState([])
    useEffect(()=>{
        fetch("actors.json")
        .then(res=>res.json())
        .then(data=>setActors(data))
    },[])
    return (
        <div>
            <h1 className="text-4xl">All Players are here</h1>
            <div>
                {
                    actors.map(actor=><Actor key={actor.id} actor={actor} handleSalary={handleSalary}></Actor>)
                }
            </div>
        </div>
    );
};

export default Actors;