import React,{useState} from 'react';


// export default (
//     { title1 }: { title1: any},
//     {midtitle}:{midtitle: any}
// ) =>(
// <div>
//     <h1>{title1}</h1>
//     <h2>{title1}</h2>
//     <h3>{midtitle}</h3>
// </div>
// ) ;

// const demo=({midtitle1, title1})=>{
const demo=(props:any)=>{
    const {title1,midtitle1}=props
    const [close, setClose] = useState(true)
    
return(
   close ?
    <div>
    <div >
        <h1>{title1} </h1>
        
        <h2>{midtitle1} </h2> 
        <span  onClick={() => setClose(false)}>点击我就消失</span>  
    </div>
    </div>:<div>
        <h1>{title1}</h1>  
        <h2>{midtitle1}</h2>   
    </div>
)
}


export default demo;