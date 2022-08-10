import './App.css';
import Calculator from './components/calculator';
import Header from './components/header';
import Footer from './components/footer';

const App = ()=>{
  return (
    <div className="App">
      <div className="App-header">
        <Header content="Calculator 2" />
        <Calculator />
        <Footer title="Footer 2" ali= "halloo welt"/>
      </div>
    </div>
  );
}

export default App;

