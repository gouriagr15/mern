import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './Login.css'
export default function Login() {
  
    const [credentials, setCredentials] = useState({ email: "", password: "" })
  let navigate=useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const response= await fetch("http://localhost:4000/api/loginuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({  email: credentials.email, password: credentials.password})
        });
        const json= await response.json();
        console.log(json);
        if(!json.success){
            alert("Enter Valid Credentials")
         }
         if(json.success){
          localStorage.setItem("userEmail",credentials.email);
          localStorage.setItem("authToken",json.authToken);
          navigate("/");
         }
    }
    const onChange=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    return (
      <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6 position-relative">
          <div className="background-image"></div>
          <div className="card shadow-lg p-4 custom-card">
            <h2 className="text-center mb-4 custom-title">Food Delivery Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label custom-label">Email address</label>
                <input
                  type="email"
                  className="form-control custom-input"
                  name="email"
                  value={credentials.email}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label custom-label">Password</label>
                <input
                  type="password"
                  className="form-control custom-input"
                  name="password"
                  value={credentials.password}
                  id="exampleInputPassword1"
                  onChange={onChange}
                  required
                />
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-success btn-lg custom-button">Login</button>
              </div>

              <div className="text-center mt-3">
                <p className="custom-text">Don't have an account? <Link to="/createuser" className="text-primary">Sign up here</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  )
}
