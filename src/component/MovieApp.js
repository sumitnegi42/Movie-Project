import React from 'react';

function MovieApp(props){
    const headerStyle = {
        display: "flex",
        justifyContent:"space-between",
        flexWrap: "wrap",
        padding:"10px"
      }
    return(
     <div  style={headerStyle}>
        
        {
         props.send.map((data, i)=>{
           return(
            <div key={i} style={{margin:20}}>
                 <img src={data.img.src} alt={data.alt} style={{width:200, height:300}}/>
                 <h3>
                    #{data.id} 
                 </h3>
                <h3>
                    {data.title}
                    ({data.year})
                </h3>
                <li>
                    {data.distributor}
                </li>
                <li>
                {data.amount}
                </li>
            </div>
           )
         })   
        }
       
     </div>

    );
}
export default MovieApp;