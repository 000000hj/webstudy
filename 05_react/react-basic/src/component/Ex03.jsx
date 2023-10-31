import { Link } from "react-router-dom";

const Ex03=()=>{
  
  return(
  <div className="ex03">
    <h1>Ex03</h1>
    <br/>
    
    <h4>Path Variable</h4>
    <Link to={{
      pathname:'/pathVariable/name/홍길동/age/1'
    }}>링크1</Link>
        
        
  </div>
  );
  
  
}

export default Ex03;