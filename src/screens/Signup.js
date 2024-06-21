import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const response= await fetch("http://localhost:4000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        });
        const json=await response.json();
        console.log(json);
        
    }
    const onChange=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6 position-relative">
          
          <div className="card p-4 shadow-lg rounded custom-card">
            <h2 className="text-center mb-4 custom-title">Sign Up for Food Delivery</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label custom-label">Name</label>
                <input
                  type="text"
                  className="form-control custom-input"
                  name="name"
                  value={credentials.name}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label custom-label">Email address</label>
                <input
                  type="email"
                  className="form-control custom-input"
                  name="email"
                  value={credentials.email}
                  onChange={onChange}
                  required
                />
                <div className="form-text" style={{ color: '#6c757d' }}>We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label custom-label">Password</label>
                <input
                  type="password"
                  className="form-control custom-input"
                  name="password"
                  value={credentials.password}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label custom-label">Address</label>
                <input
                  type="text"
                  className="form-control custom-input"
                  name="geolocation"
                  value={credentials.geolocation}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-success btn-lg">Sign Up</button>
              </div>
              <div className="text-center mt-3">
                <p style={{ color: '#495057' }}>Already have an account? <Link to="/login" className="text-danger">Login here</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
