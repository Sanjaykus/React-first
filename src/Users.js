import React from "react";
class Users extends React.Component{
  render()
  {
    return(
     <div>
      <h1>user {this.props.name}</h1>
     </div>
    );
  }

}
export default Users;
     



















//      return(
//        <div>
//        <h1>user component</h1>
//        <button onClick={props.Data}>call data</button>


//        </div>     );
// }
// export default Users;








//   const[user,setUser]=useState("");
//   const[password,setPassword]=useState("");
//   const[userErr,setUserErr]=useState(false);
//   const[passErr,setPassErr]=useState(false);
//   function logInHandle(e){
//     if(user.length<3||password.length<3){
//       alert('type correct value')
//     }
//     else{
//       e.preventDefault()
//     }
//   }
//     function userHanler(e){
//       let item=e.target.value;
//       if(item.length<3){
//         setUser(true)
//       }
//       else{
//         setUserErr(false)
//       }
//       setUser(item)
//     }
//     function passwordHanler(e){
//       let item=e.target.value;
//       if(item.length<3){
//         setPassErr(true)
//       }
//       else{
//         setPassErr(false)
//       }
//       setPassword(item)
//     }
//   return (
//        <div className="App">
//         <h1>login</h1>
//        <form onSubmit={logInHandle}>
//         <input type="text" placeholder="enter name" onChange={userHanler}/>
//         { userErr?<span> user not valid </span>:""}
//         <br /> <br />
//         <input type="password" placeholder="enter password" onChange={passwordHanler}/>
//         { passErr?<span> password not valid </span>:""}
//         <br /> <br />
//         <button type="submit">submit</button>
      
//        </form>
//        </div>
//     );

// }
//   export default Users;