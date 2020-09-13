import React, { Component } from 'react';
import './sigin.style.scss';
import Frominput from '../../form-input/form-input';
import {auth ,GoogleSigin} from '../../firebase/firebase'
import CustomButton from '../customButton/customButton'

class Sigin extends Component {
    constructor(){
        super()
        this.state={
            email:"",
            password:""
        }
    }
    handelSubmit=async e=>{
        e.preventDefault()
        const {email , password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password)
       
            this.setState({email:"", password:""})
        }catch(error){
            console.log(error,"error in sigin")
        }

}


    handelChange=(e)=>{
        const {value,name}=e.target
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className="sigin">
                <h1 className="title">I have alrady an Account </h1>
                <span>sign in with your and password</span>
                <form onSubmit={this.handelSubmit}>
                    <Frominput
                        name="email"
                        type="email"
                        handelChang={this.handelChange}
                        label="email"
                        value={this.state.email}
                        required
                    />
                       <Frominput 
                        name="password"
                        type="password"
                        handelChang={this.handelChange}
                        label="Password"
                        value={this.state.password}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit" value="onSubmit">
                            LOGIN
                        </CustomButton>      
                        <CustomButton onClick={GoogleSigin} isGooglesignin>
                            LOGIN WITH GOOGLE
                        </CustomButton> 
                    </div>
                   
                </form>
            </div>
        )
    }
}
export default  Sigin;
