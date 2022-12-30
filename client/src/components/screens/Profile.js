import React,{useEffect,useState,useContext}  from "react";
import { UserContext } from "../../App";

const Profile=()=>{
    const [mypics,setPics] = useState([])
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
        fetch("/mypost",{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setPics(result.mypost)
        })
    },[])
    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}>

            <div  style={{  //for upper div(dp and name)
                display:"flex",
                justifyContent:"space-around",
                margin:"20px 0px",
            }}>
 
 {/* dp part */}
                <div>  
                    <img style={{width:"160px",height:"160px",borderRadius:"80px", margin:"0px 0px"}} 
                        src="https://images.newindianexpress.com/uploads/user/imagelibrary/2022/8/21/w600X390/Hrithik_Roshan_PTI.jpg"
                    />

                    {/* name part */}
                </div>  
                <div> 
                    <h4>{state?state.name:"loading"}</h4>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}> 
                    <h5>100 post </h5>
                    <h5>100 follower </h5>
                    <h5>100 following</h5>
                    </div>
                </div>
            </div>
   

   {/* for pic uploaded part */}
            <div className="gallery">
            {
                mypics.map(item=>{
                return(
                <img key={item._id} className="item" src={item.photo} alt={item.title} />
                )
                })
            }
        </div>


        </div>
    )
}

export default Profile;