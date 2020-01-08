import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';


 class App extends React.Component
  {
    constructor(props) 
     {
       super(props);
       console.log(this.props);
       this.state =
       {
       fname: '',
       lname:'',
       email:'',
       message:'',
      }
    }  
handleFormSubmit(event) 
{
  event.preventdefault();
}
    

    render()
    {
        return (
         <div className='App'>
         <p>Contact Me</p>
         <div>
         <form >

      
            <label>First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."
                  value={this.state.fname}
             onChange={e => this.setState({ fname: e.target.value })}
             />
            <label>Last Name</label>
            <input type=" text" id="lname" name="lastname" placeholder="Your last name.."
                value={this.state.lname}
            onChange={e => this.setState({ lname: e.target.value })}
             />
            <label>Email</label>
            <input type=" email" id="email" name="email" placeholder="Your email"
               value={this.state.email}
               onChange={e => this.setState({ email: e.target.value })}
           />
           <label>Message</label>
           <textarea id="message" name="message" placeholder="Write something.."
           onChange={e => this.setState({ message: e.target.value })}
           value={this.state.message}>
          </textarea>

           <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
           </form>
        </div>
      </div>
      );
    }
 }
 
export default App;


