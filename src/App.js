import logo from './logo.svg';
import './App.css';
import { Top } from './view/Top';
import { BodyView } from './view/BodyView';
import { ListPodCast } from './view/ListPodCast';
import { ListImportantEpisodes } from './view/ListImportantEpisodes';
import { VideoPodcast } from './view/VideoPodcast';
import { FooterView } from './view/FooterView';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
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

      <Top/>

      <BodyView />

      <div style={{ width: '100%', height: '140px' }}></div>

      <ListPodCast />

      <ListImportantEpisodes />

      <div style={{ width: '100%', height: '140px' }}></div>

      <VideoPodcast />

      <div style={{ width: '100%', height: '140px' }}></div>

      <FooterView />
    </div >
  );
}

export default App;
