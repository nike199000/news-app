import React from 'react';
import "./app.scss";
// import {useDispatch,useSelector } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import News from "./../components/mainPageNews/mainPageNewsContainer";







const  App = () => {
  
  // const dispatch = useDispatch(); 
  // const news  = useSelector(store => store.news)
  
  
  // const plusOne = useCallback(
  //   () => dispatch(plus())
  // )
  // const minusOne = useCallback(
  //   () => dispatch(minus())
  // )
  


  
 
  return (
    
    <div>
      
      <Router>
          <Route  path="/" component={News} ></Route>
      </Router>
    </div>
  );
}

export default App;

// const putStateToProps =(state) => {
  
//     return{
//       ...state
//   }
// }

// const putDispatchToProps =  {
//   plus,
//   minus,
// }




// export default connect(
//   putStateToProps,
//   putDispatchToProps
// )(App);
