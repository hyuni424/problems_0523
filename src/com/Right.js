import { useState } from "react";
import useFeFetch from "../hooks/useFeFetch"
import "./../scss/LandR.scss"

export default function Right({sim : s}){
    const [sim, setSim] = useState(s);
    const similars = useFeFetch(`http://localhost:3002/data`); 
    
    function updateBtn(){
        fetch(`http://localhost:3001/data?unitCode=${sim}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...sim,
                id : similars.id,
                unitCode : similars.unitCode,
            }),
        }).then(res => {
            if (res.ok) {
                setSim({id:similars.id});
            }
        });        
    }
    
    
    return(
        <div className="exWrap">
            <div className="exArea">
                <p className="exRight1">title</p>
                <ul>
                    {similars.map(fe=>(
                        <li key={fe.id}>
                            <div className="exTop">
                                <p className="exType">{fe.problemType}</p>
                                <h3>{fe.unitName}</h3>
                                <div className="exBtn">
                                    <p><button onClick={updateBtn}>추가</button></p>
                                    <p><button>교체</button></p>
                                </div>
                            </div>
                            <div className="exBottom">
                                <p className="exNum">2</p>
                                <p><img src={fe.problemURL} alt={fe.unitName} /></p>
                            </div>            
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}