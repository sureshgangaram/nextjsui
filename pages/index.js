import Link from 'next/link';
function HomePage(){
    return (
        <>  
            <div>
             <h3>Person Details</h3>
               <h4> 
                   <Link as= "/post/{id}" href="/post/1">
                    <a> Philip</a> 
                    </Link>                 
                </h4> 
                <h4>                
                <Link as= "" href="/post/2">
                    <a> Mark</a> 
                    </Link> 
                </h4> 
                <h4>                
                <Link as= "" href="/post/3">
                    <a> Adrew</a> 
                    </Link> 
                </h4> 
            </div> 
            <div>
             <h3>Planet Details</h3>
               <h4> 
                   <Link as= "" href="/post/4">
                    <a> Sun</a> 
                    </Link>                 
                </h4> 
                <h4>                
                <Link as= "" href="/post/5">
                    <a> Mercury</a> 
                </Link> 
                </h4> 
                <h4>                
                <Link as= "" href="/post/6">
                    <a> Venus</a> 
                </Link> 
                </h4> 
                <h4>                
                <Link as= "" href="/post/7">
                    <a> Mars</a> 
                </Link> 
                </h4> 
                <h4>                
                <Link as= "" href="/post/8">
                    <a> Earth</a> 
                </Link> 
                </h4> 
                <h4>                
                <Link as= "" href="/post/9">
                    <a>Neptune</a> 
                </Link> 
                </h4> 
                <h4>                
                <Link as= "" href="/post/10">
                    <a>Saturn</a> 
                </Link> 
                </h4> 
                <h4>                
                <Link as= "" href="/post/11">
                    <a>Jupiter</a> 
                </Link> 
                </h4> 
                <h4>                
                <Link as= "" href="/post/12">
                    <a>Uranus</a> 
                </Link> 
                </h4> 
            </div>   
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