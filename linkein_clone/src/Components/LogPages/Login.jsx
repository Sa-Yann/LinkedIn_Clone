import React, {useState} from 'react';
import './Login.css';
import {auth} from './../../firebase';

function Login() {
    // I wonanknow if there is a name in the name field or not so I create a state
    const [name, setName] =  useState('');
    // same thing for mail password and picture
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');
    const [profilePic, setProfilePic] =  useState('');



    const loginToApp = (e) => {
        e.preventDefault();

    };
    const register = () => {
        
        if(!name) {
            return alert('You Nedd to insert a full name!!!');
        }
    };


    return (
        <div className="login">
            {/* <h4>I'm the LoginPage</h4> */}
            <img 
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c528.png" 
            alt="linkedIn_logo" 
            />
            <form>
                <input
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="FullName required For Registraion"
                type="text" />
                <input 
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
                placeholder="Profile Pic / Url (optional)"
                type="text" />
                <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@gmail.com"
                type="email" />
                <input 
                onChange={(e) => setPassword(e.target.value)}
                value={password} 
                placeholder="password"
                type="password" />
                <button type="submit"> Sign In</button>   
            </form>
            <p>
                Not a member?:{" "}
                <span 
                    onClick={register} 
                    className="login__register"
                >Register Now
                </span>
            </p>

        </div>
    )
}

export default Login
