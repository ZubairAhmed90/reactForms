import React from 'react'
import { useForm } from "react-hook-form"

const App = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
   <>
   <nav style={{backgroundColor:"blue" , background:"cover",padding:"2px" }}>
    <h1 style={{padding:"3px", marginLeft:"10px" }}>ZeeSoft Academy</h1>
   </nav>
     <h1 style={{justifyContent:"center" , textAlign:"center"}}>Admission Form</h1>
    <div style={{alignContent:"center", alignItems:"center", marginTop:"20px",padding:"30px"}}>
    <form onSubmit={handleSubmit(onSubmit)}>

     <div style={{display:"flex" ,justifyContent:"center", gap:"30%", justifyItems:"center"}}>
      
     <div> <label>First Name</label><br />
      <input style={{width: "200%",height:" 3rem",borderRadius:"30px"}} type='text' {...register("firstName", { required: true, maxLength: 20 })} /> <br /></div>
         
         
      <div><label>Father Name</label><br />
      <input type='text'  style={{width: "200%",height:" 3rem",borderRadius:"30px"}}{...register("firstName", { required: true, maxLength: 20 })} /> <br /> </div>
       
        </div>


        <div style={{display:"flex",justifyContent:"center", gap:"30%"}}> 
         
       <div><label>Email</label><br />
      <input type='Email' style={{width: "200%",height:" 3rem",borderRadius:"30px"}} {...register("Email", { required: true, maxLength: 20 })} /> <br /></div>

      <div><label>Phone No</label><br />
      <input type='number'  style={{width: "200%",height:" 3rem",borderRadius:"30px"}}{...register("Phone no", { required: true, maxLength: 20 })} /> <br /></div>
      </div>

      <div style={{display:"flex",justifyContent:"center", gap:"30%"}}>
        <div>
      <label>Cnic</label><br />
      <input  style={{width: "200%",height:" 3rem",borderRadius:"30px"}}{...register("Cnic", { pattern: /^[A-Za-z]+$/i })}  /> <br />
       </div>
       <div>
      <label>Date</label><br />
      <input type='date' style={{width: "300%",height:" 3rem",borderRadius:"30px"}}{...register("Date", { pattern: /^[A-Za-z]+$/i })}  /> <br />
         </div> </div>
        
        <div style={{display:"flex",justifyContent:"center", gap:"10%"  }}>

        <div>
       <label>Gender</label><br />
      <select  style={{width: "200%",height:" 3rem",borderRadius:"30px"}} {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
         </select></div>
        <div>
        <label>Do you have a Laptop ?</label><br />
        <select  style={{width: "200%",height:" 3rem",borderRadius:"30px"}}{...register("gender")}>
      <option value="yes">yes</option>
      <option value="no">no</option>
      </select></div>

      </div>
      
   
    </form>
    </div>
   
      
   
   </>
  )
}

export default App
