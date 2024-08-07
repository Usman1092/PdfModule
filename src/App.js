import logo from './logo.svg';
import './App.css';
import PDFViewer from './components/PdfViewer';
import Appi from './components/App';


function App() {
  return (
    <div className="App ">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
     {/* <h1> Upload And Sign Your PDF</h1> */}
       <PDFViewer /> 
      {/* <Appi/> */}
   
    </div>
  );
}

export default App;
