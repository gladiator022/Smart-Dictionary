import React,{ Component,Fragment } from 'react';
import Language from './components/language';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
class App extends Component {

    
  render(){
    
    return (
      <Fragment >
          <Language  />
      </Fragment>
    )
  }
}

export default App;
