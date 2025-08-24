import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage/HomePage.Components';
import ShopPage from './pages/shop/ShopPage.Component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import {onSnapshot,doc} from "firebase/firestore"


class App extends React.Component  {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    }
  }
  //  here unsubscribe
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (snapShot) => {
          this.setState({ currentUser: { id: snapShot.id, ...snapShot.data() } });
        })
      }
      this.setState({ currentUser: userAuth });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
          
        </Routes>
      </div>
    )
  }
}
export default App