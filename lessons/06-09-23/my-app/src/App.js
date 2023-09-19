import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=51CHNtNlFR8"
          target="_blank"
          
          rel="noopener noreferrer"
        >
          Lahe video
        </a>
        <div class="Intro">
        <p>Roland Silt</p>
        <h2>Asjad mis mulle täiega meeldivad</h2>
        <ol>
          <li>Korvpall</li>
          <li>Kitarr</li>
          <li>Muusika</li>
          <li><a href="https://www.instagram.com/ma8kus/">Markus Laanisto graafiline disain</a></li>
          <li><a href="https://www.instagram.com/aaron.aasa/"> Aaron Aasa fotograafia</a></li>
          <li>Mimmud</li>
          <li>Lause "Mõtle korra."</li>
          <li>Asjadest aru saamine</li>
          <li>Hea õlu</li>
          <li>Matkamine</li>
          <li>Maakodus olemine</li>
          <li>vihmaga ujumine</li>
          <li>Dj-mine</li>
        </ol>
        </div>
        <input type="text" name="username" placeholder="Username"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <input type="text" name="Email" placeholder="Email"></input>
        <input type="submit" value="Submit"></input>
      </header>
    </div>
  );
}

export default App;
