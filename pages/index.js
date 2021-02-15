import Link from 'next/link';
function HomePage(){
    return (
        <>  
             <h3>Person Details</h3>
               <h4> 
                    <a href="#" onClick={() => getDetails(1)}> Philip</a>                  
                </h4> 
                <h4>                
                   <Link href="/">
                        <a> Mark</a>
                    </Link>
                </h4> 
                
        </>
        )
    
}

 async function getDetails(e)  {
    const resp = await fetch("http://localhost:8080/person/" + e);
    const json = await resp.json;
    console.log("Logs:::" + json.toString());
    return { props :
                 {persons: json}
      
    }
}

export default HomePage