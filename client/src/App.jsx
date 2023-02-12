import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from "react-bootstrap/ThemeProvider";
import SignIn from './Component/Screen/Session/SignIn'
import SignUp from './Component/Screen/Session/SignUp' 
import CAlert from "./Component/HelperMsg/CAlert";
import LifeCycle from "./ClassBase/LifeCycle";
const App = () => {
  return <React.Fragment> 
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
    > 
      <SignIn/>
      <SignUp/>
    
  </ThemeProvider>
  </React.Fragment>
};

export default App;
