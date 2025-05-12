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
