//
//

import React from 'react';

import '../styles/Login.scss';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';

function Login() {
  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://i.pcmag.com/imagery/reviews/07td46ju7p6lLVb0QGwc5VF-6.1569479844.fit_scale.size_1028x578.jpg'
          alt=''
        />
        <h1>Sign In</h1>
        <p>cleverprogrammer.slack.com</p>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
