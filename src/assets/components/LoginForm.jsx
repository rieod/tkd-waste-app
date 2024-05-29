import { useState } from 'react';
import Input from './Input';
import { isUsername, isNotEmpty, hasMinLength } from '../util/validation';
import axios from 'axios';

export default function LoginForm() {
  // const username = useRef();
  // const password = useRef();

  // function hanldeSubmit(event){
  //   event.preventDefault();

  //   const enteredUsername = username.current.value;
  //   const enteredPassword = password.curretn.value;

  //   console.log(enteredUsername,enteredPassword);
  // }
  
  // const onFinish = value => {
  //   const {username, password} = value;
  //   axios.post('http//localhost:5173/validatepassword', {username, password})
  //   .then(res => {
  //     if(res.data.validation){
  //       alert('Your password is correct. Thankyou for your service!');
  //     } else('Your password is ot correct. Please Try again!');
  //   })
  // }
  
  const [enteredValues, setEnterdValues] = useState({
    username :'',
    password:''
  });

  const [didEdit, setDidEdit] = useState({
    username: false,
    password: false
  });

  const usernameIsInvalid = 
    didEdit.username &&
    !isUsername(enteredValues.username) &&
    !isNotEmpty(enteredValues.username);
  const passwordIsInvalid = 
    didEdit.password &&
    hasMinLength(enteredValues.password, 6) &&
    !isNotEmpty(enteredValues.password);

  function hanldeSubmit(value){
    // event.preventDefault();
    console.log(enteredValues);

    const {username, password} = value;
    axios.post('http//localhost:5173/DataManagement', {username, password})
    .then(res => {
      if(res.data.validation){
        alert('Your password is correct. Thankyou for your service!');
      } else('Your password is ot correct. Please Try again!');
    })
  }

  function handleInputChange(identifier, value){
    setEnterdValues(preValues => ({
      ...preValues,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]:false,
    }));
  }

  function handleInputBlur(identifier){
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]:true
    }));
  }

  return (
    <form onSubmit={hanldeSubmit}>
      <div className="control-column">
        <Input 
          label="username" 
          id="username" 
          type="username" 
          name="username" 
          placeholder="johndoe99"
          onBlur={() => handleInputBlur('username')}
          onChange={(event) => handleInputChange('username', event.target.value)}
          value={enteredValues.username}
          error = {usernameIsInvalid && 'Please enter a valid username!'}
        />

      <Input 
          label="password" 
          id="password" 
          type="password" 
          name="password" 
          placeholder="Enter your password"
          onBlur={() => handleInputBlur('password')}
          onChange={(event) => handleInputChange('password', event.target.value)}
          value={enteredValues.password}
          error = {passwordIsInvalid && 'Please enter a valid password!'}
        />

        {/* <div className="control no-margin">
          <label htmlFor="username">Username</label>
          <input 
          id="username"
          type="username"
          name="username"
          placeholder="johndoe@mail.com"
          // ref={username}
          onBlur={() => handleInputBlur(username)}
          onChange={(event) => handleInputChange('username', event.target.value)}
          value={enteredValues.username}
          />
          <div className='control-<error'>
            {usernameIsInvalid && <p>Please enter a valid username.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
          id="password"
          type="password"
          name="password"
          placeholder="******"
          // ref={password}
          onChange={(event) => handleInputChange('password', event.target.value)}
          value={enteredValues.password}
          />
        </div> */}

          <p>Forgot your username or password? <a href="#">Contact Us!</a></p>
      
      </div>
      <p className="form-actions">
        <button className="button">Login</button>
      </p>
    </form>
  );
}
