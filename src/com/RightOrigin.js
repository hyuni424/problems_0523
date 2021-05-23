import { Route } from "react-router"
import "./../scss/RightOrigin.scss"
import Right from "./Right"

export default function RightOrigin(){
    return(
        <>
        <Route exact path="/">
            <div id="rOriginWrap">
                <p id="rOriginArea">
                    <button>유사문항</button> 버튼을 누르면<br/>
                    해당 문제의 유사 문항을 볼 수 있습니다.
                </p>            
            </div>
        </Route>
        <Route path="/sim/:sim">
            <Right/>
        </Route>
        </>
    )
}