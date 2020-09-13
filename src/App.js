import React, { Component } from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Homepage from './pages/homepage';
import Checkout from './component/checkout/checkout';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.sellector';
import {setCurrentUser} from './redux/user/user.action';

import './App.css';
import {connect} from 'react-redux';
import Shop from './component/shop/shop.component';

import Header from './component/header/header.component';
import SignInandsignout from './component/signInandSignout/signInandsignout';
import {auth , createUserProfileDocument} from './firebase/firebase';

class App extends Component {
 
  unsubscribeFromAuth = null;
  componentDidMount(){
    const {setCurrentUser}=this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
       const userRef= await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            })
            console.log(this.state)
        })
      }
      setCurrentUser(userAuth)
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render() {
    return (
       
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route  path='/shop' component={Shop}/>
          <Route exact path='/checkout' component={Checkout}/>

          <Route exact  render={
                ()=>this.props.currentUser ? 
                (<Redirect to="./" />):(<SignInandsignout/>) 
          }
          />
        </Switch>
      </div>
    )
  }
}
const mapStateToProps =createStructuredSelector({
  currentUser:selectCurrentUser
})
const mapDispatchToProps =dispatch=>({
  setCurrentUser: user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App) ;

