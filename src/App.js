import { BrowserRouter} from "react-router-dom";
import Left from "./com/Left";
import RightOrigin from "./com/RightOrigin";
import "./scss/App.scss";

function App() {
  return (
      <BrowserRouter>
      <div id="exCont">
          <div id="exLeft">
            <h2>학습지 상세 편집</h2>
            <Left/>
          </div>            
          <div id="exRight">            
            <h2>문항 교체/추가</h2>
            <RightOrigin/>
          </div>         
      </div>
      </BrowserRouter>      
  );
}

export default App;