import React, {useEffect,useState} from 'react'
const persondetail = ({persons}) => {
    const [person] = useState(persondetail);
}
export default function PersonDetails({persondata}){

    return  persondata.map(data => {
   return (
       <>
         <h1>Person Details</h1>
          <table>
            <tr><td>First Name</td><td>{data.firstName}</td></tr>
              <tr><td>Last Name</td><td>{data.lastName}</td></tr>
              <tr><td>Age</td><td>{data.age}</td></tr>
          </table>
   </> )} );
   

}

 async function getServerSideProps(context){
    const resp = await fetch("http://localhost:8080/person/2");
    const json = await resp.json;
    console.log("Logs:::" + json.toString());
    resp.setHeader("location",'/person/persondetail');
    return { props :
                 {persons: json}
      
    }
  };

  async function getDetails(e){
   comsole.log("event::" + e);
  }
  