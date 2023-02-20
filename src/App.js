/**
* <DAJIR Yousra>
* Version 1.0
*/

import logo from './logo.svg';
import './css/App.css';
import Name from './components/Name';
import DateTime from './components/DateTime';
import Content from './components/Content';
import PeopleTable from './components/Liste';
/**
 * Composant : App a été crée automatiquement par la commande npx create-react-app
 * @returns  = au render ReactJS
 * Il est constitué par defaut par une balise parente
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <div className="Digi-main">
        <h1>Bonjour <Name /></h1>
        <h2>
          <Content />
          <PeopleTable />
        </h2>
        <h2>Aujourd'hui nous sommes : {DateTime()} </h2>
      </div>
    </div>
  );
}

export default App;
