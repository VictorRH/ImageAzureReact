import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormsaveImage from './components/FormsaveImage';
import ImageComponent from './components/ImageComponent';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ImageComponent}/>
      </Switch>
    </Router>
  );
}

export default App;
