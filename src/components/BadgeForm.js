import React from 'react'

class BadgeForm extends React.Component{

state = {form:{
    firstName: '',
    lastName: '',
    email:'',
    jobTitle:'',
    twitter: ''
}};

// handleChange= (e) =>{
//     // console.log(e.target.value)
//     this.setState({
//         [e.target.name]: e.target.value,

//     })
// }

handleClick = e =>{
    e.preventDefault();
    console.log("clicked")
    console.log(this.state)
}

 render(){
     return (
         <div>
             <h1>Nuevo Usuario</h1>
             <form action="">
                 <div className="form-group">
                     <label htmlFor="">First Name</label>
                     <input className="form-control" onChange={this.props.onChange} type="text" name="firstName" value={this.props.formValues.firstName}/>
                 </div>
                 <div className="form-group">
                     <label htmlFor="">Last Name</label>
                     <input className="form-control" onChange={this.props.onChange} type="text" name="lastName" value={this.props.formValues.lastName}/>
                 </div>
                 <div className="form-group">
                     <label htmlFor="">Email</label>
                     <input className="form-control" onChange={this.props.onChange} type="emailt" name="email" value={this.props.formValues.email}/>
                 </div>
                 <div className="form-group">
                     <label htmlFor="">Job Tittle</label>
                     <input className="form-control" onChange={this.props.onChange} type="text" name="jobTitle" value={this.props.formValues.jobTitle}/>
                 </div>
                 <div className="form-group">
                     <label htmlFor="">Twitter</label>
                     <input className="form-control" onChange={this.props.onChange} type="text" name="twitter" value={this.props.formValues.twitter}/>
                 </div>
                 
                 <button className="btn btn-primary" onClick={this.handleClick}>Save</button>
             </form>
         </div>
     )
 }
}

export default BadgeForm;