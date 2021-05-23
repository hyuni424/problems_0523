import { useState } from "react";
import { Link } from "react-router-dom";
import useFeFetch from "../hooks/useFeFetch"
import "./../scss/LandR.scss"

export default function Left(){
    const problems = useFeFetch("http://localhost:3001/data");
    const [simBtn, setSimBtn] = useState(false);

    function clickBtn(){
        setSimBtn(!simBtn);
    }   
    
    return(
        <>
        <div className="exWrap">
            <div className="exArea">
                <ul>
                    {problems.map(fe=>(
                        <li key={fe.id}>
                            <div className="exTop">
                                <p className="exType">{fe.problemType}</p>
                                <h3>{fe.unitName}</h3>
                                <div className="exBtn">
                                    <Link to={`/sim/${fe.unitCode}`}>
                                        <p><button onClick={clickBtn} className={simBtn ? 'exClickBtn' : ''}>유사문항</button></p>
                                    </Link>                                   
                                    <p><button>삭제</button></p>
                                </div>
                            </div>
                            <div className="exBottom">
                                <p className="exNum">1</p>
                                <p><img src={fe.problemURL} alt={fe.unitName} /></p>
                            </div>            
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <p id="exCenter"></p>
        </>
    )
}