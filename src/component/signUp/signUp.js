import React from 'react';

import CustomButton from '../customButton/customButton';
import Frominput from '../../form-input/form-input';
import {auth,createUserProfileDocument} from '../../firebase/firebase'
import './signUp.style.scss'

class SignUp extends React.Component{

    constructor(){
        super()
        this.state={
            dispalyName:"",
            email:'',
            password:'',
            repassword:''
        }
    }
    handelSubmit=async e=>{
        e.preventDefault()
        const {dispalyName, email,password,repassword}=this.state;
        if(password !== repassword){
            alert('Password not match')
            return;
        }
        try{
            const {user}=await auth.createUserWithEmailAndPassword(email,password);
            await  createUserProfileDocument(user ,{dispalyName})
            this.setState({
                
                dispalyName:"",
                email:'',
                password:'',
                repassword:''
            })
        } catch(error){
            console.log(error,"error from SignUp")

        }
    };
    handelChange=(e)=>{
        const {name ,value} =e.target;
        this.setState({[name]:value})

    }
    render(){
        const {dispalyName,email,password,repassword}=this.state;
        return(
            <div className='sig-up'>
                <h1>I dont hane an Account</h1>
                <span>SignUp with your email and password</span>
                <form className="title" onSubmit={this.handelSubmit}>
            `             <Frominput
                    name="dispalyName"
                    type="string"
                    value={dispalyName}
                    onChange={this.handelChange}
                    label="displayName"
                    required
                />
                <Frominput
                    name="email"
                    type="email"
                    value={email}
                    onChange={this.handelChange}
                    label="email"
                    required
                    />
                   <Frominput
                    name="password"
                    type="password"
                    value={password}
                    onChange={this.handelChange}
                    label="password"
                    required
                    />
                    <Frominput
                    name="repassword"
                    type="text"
                    value={repassword}
                    onChange={this.handelChange}
                    label="repassword"
                    required
                   />
                <CustomButton type="submit" >SignUp</CustomButton>`
                </form>
             
            </div>
        )
    }
}
export default SignUp;