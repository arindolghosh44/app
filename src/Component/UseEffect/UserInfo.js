import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function UserInfo() {
    let [user, setUser] = useState([]);
    let[data,setdata]=useState([]);
    const filterData=(event)=>{

        if(event.target.value==='male'){
            setUser(

                    data.filter((ele,idx)=>{
                        return ele.gender==='male'
                    })

            )
        }
        else if(event.target.value==='female'){


            setUser(

                data.filter((ele,idx)=>{
                    return ele.gender==='female'
                })

        )
        }


        else{
            setUser(data);
        }

    }
    useEffect(()=>{
        axios.get("https://randomuser.me/api/?results=20")
        .then((res)=>{
           console.log(res.data.results);
           setUser(res.data.results);
           setdata(res.data.results);
        })
        .catch((error)=>{
           console.log(error);
           alert("Something wrong with tuhin");
        })
    },[])
  /*  const getData=()=>{
     axios.get("https://randomuser.me/api/?results=20")
     .then((res)=>{
        console.log(res.data.results);
        setUser(res.data.results);
        setdata(res.data.results);
     })
     .catch((error)=>{
        console.log(error);
        alert("Something wrong with tuhin");
     })
    }*/
  return (
    <div>
   <h2>User Infromation</h2>
  
   
   
   {
  user.length>0?<div>
<table cellPadding={10} style={{margin:"10px auto",backgroundColor:"green"}} border={10}  >
<thead className='bg-primary text-primary text-center' style={{color:"blue", margin:"30px",backgroundColor:"orange"}} >
<tr>

    <td>ID</td>
    <td>Name</td>
    <td>Image</td>
    <td>Email</td>
    <td>Gender</td>
    <td>City</td>
</tr>


</thead>
<tbody>


{

    user.map((element,ind)=>{

        return (
            <tr>
             <td>

                {
                    ind+1
                }
             </td>
<td>{element.name.first}</td>
<td><img src={element.picture.medium} height={80} width={80}/></td>
<td>{element.email}</td>

    <td>{element.gender}</td>


<td>{element.location.city}</td>
            </tr>
        )



    })






}





</tbody>



</table>

  </div>
  :<h2 style={{color:"red"}}>No user Infromation</h2>
    








   }

    </div>
  )
}

export default UserInfo