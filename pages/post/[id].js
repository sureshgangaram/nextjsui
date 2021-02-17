import { useRouter } from 'next/router'

const Post = (entity) => {
   return (<div>
    <h1>{entity.id}</h1>
    <span>{entity.name}</span>
    <span>{entity.description}</span>
  </div>)
}


 

  export const getServerSideProps = async ({query}) => {
    const id = query.id  
    
    const url = 'http://localhost:8080/person/'+id;
    console.log("id:::" + url); 
    const res = await fetch(url);
    console.log("Logs:::" + res);
    const data = await res.json();

    console.log('Logs:::  ${data.name}');
    
    return {props:{entity:data}};
}



export default Post;