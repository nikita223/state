import './App.css';
function Div(props){

   if(props.count > 0){
      return <div> <Div count = {props.count - 1} /> </div> 
   }
   return 
}


export default Div;