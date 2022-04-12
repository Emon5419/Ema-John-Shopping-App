import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Login = () => {
   const [signInWithEmailAndPassword,
      user,
      loading,
      error,] = useSignInWithEmailAndPassword(auth);
   const navigate = useNavigate();

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleEmailBlur = event => {
      setEmail(event.target.value);
   };
   const handlePasswordBlur = event => {
      setPassword(event.target.value);
   };
   if (user) {
      navigate("/shop");
   }

   const handleUserSignIn = event => {
      event.preventDefault();
      signInWithEmailAndPassword(email, password);
   };


   return (
      <div className='form-contanier'>
         <div>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleUserSignIn}>
               <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
               </div>
               <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
               </div>
               <p style={{ color: 'red' }}>{error?.message}</p>
               {
                  loading && <p>Loading...</p>
               }
               <input className="form-submit" type="submit" value="Login" />
            </form>
            <p>
               New to Ema-John? <Link className='form-link' to='/signup' >Create an account</Link>
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

export default Login;