import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [error, setError] = useState('');

   const navigate = useNavigate();
   const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
   if (user) {
      navigate('/shop')
   }

   const handleEmailBlur = event => {
      setEmail(event.target.value);
   }
   const handlePasswordBlur = event => {
      setPassword(event.target.value);
   }
   const handleConfirmPasswordBlur = event => {
      setConfirmPassword(event.target.value);
   }
   const handleCreateUser = event => {
      event.preventDefault();
      if (password !== confirmPassword) {
         setError('Your two password did not match');
         return;
      }
      if (password.length < 6) {
         setError('Password must be 6 characters or longer')
         return;
      }
      createUserWithEmailAndPassword(email, password);

   }
   return (
      <div className='form-contanier'>
         <div>
            <h1 className='form-title'>SignUp</h1>
            <form onSubmit={handleCreateUser}>
               <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
               </div>
               <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
               </div>
               <div className="input-group">
                  <label htmlFor="Confirm-password">Confirm Password</label>
                  <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" required />
               </div>
               <p style={{ color: 'red' }}>{error}</p>
               <input className="form-submit" type="submit" value="Login" />
            </form>
            <p>
               Alredy Have an Account? <Link className='form-link' to='/login' >Login</Link>
            </p>
            <div className="or-style">
               <div>
                  _________________
               </div>
               <p>Or</p>
               <div>
                  _________________
               </div>
            </div>
            <button>Continue With Google</button>
         </div>
      </div>
   );
};

export default SignUp;