import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const podcasts = [
  {
    image: '/assets/podcast_1.png',
    episodeQuantity: 7,
    srkpSelect: 'open your mind easy'
  },
  {
    image: '/assets/podcast_2.png',
    episodeQuantity: 8,
    srkpSelect: 'keep your watch'
  },
  {
    image: '/assets/podcast_3.png',
    episodeQuantity: 9,
    srkpSelect: 'to hide behind safe'
  },
]

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

      <Top />

      <BodyView />

      <div style={{ width: '100%', height: '140px' }}></div>

      <ListPodCast />
    </div >
  );
}

function Navigation() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>Home</li>
        <li>Pages</li>
        <li>Podcast</li>
        <li>Blog</li>
        <li>Shop</li>
      </ul>
    </nav>
  );
}

function Top() {
  return (
    <div style={
      {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/image_main.png'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '120vh',
        position: 'relative'
      }
    }>
      <Navigation />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src='/assets/ic_logo_cover.svg' style={{ width: '131px', height: '19px', marginLeft: '47px', marginTop: '46px' }}></img>
        <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', marginTop: '25px' }}>
          <img src='/assets/ic_search.svg' style={{ width: '15px', height: '21px' }} />
          <p className='lato' style={{ fontSize: '15px', paddingLeft: '6px' }}>Search</p>
          <div className='dropdown'>
            <img src='/assets/ic_menu.svg' style={{ width: '25px', height: '25px', paddingLeft: '37px', paddingRight: '46px' }}></img>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
      </div>

      <p className='lato' style={{
        fontSize: '80px',
        marginTop: '120px',
        marginLeft: '130px',
        display: 'flex',
      }}>New episode <br /> available now</p>
      <p className='opensans' style={{
        fontSize: '19px',
        fontWeight: 'normal',
        display: 'flex',
        marginLeft: '130px',
        marginTop: '14px',
      }}>Available on Apple Soundcast and Spotify.</p>

      <div style={{ display: 'flex', marginLeft: '130px', marginTop: '50px' }}>
        <img src='/assets/h1-rev-img1.png' style={{ width: '185px', height: '54px' }} />
        <img src='/assets/h1-rev-img2.png' style={{ width: '174px', height: '54px', marginLeft: '23px' }} />
      </div>

      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '-125px', // Di chuyển 1 nửa chiều cao của box ra ngoài ảnh
          transform: 'translateX(-50%)',
          width: '1000px',
          height: '250px',
          backgroundColor: 'white',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          borderRadius: '10px',
          display: 'flex',
        }}
      >
        <img src='/assets/h4-newimg3-650x650.png' style={{ width: '250px', height: '250px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }} />
      </div>
    </div>
  );
}

function BodyView() {
  return (
    <div style={{ width: '1000px', marginTop: '265px', display: 'flex', marginLeft: '50%', transform: 'translateX(-50%)' }}>
      <div style={{ width: '100%', height: '250px' }}>
        <p className='lato' style={{
          fontSize: '40px',
          textAlign: 'start'
        }}>Best places to <br /> find design <br /> inspiration</p>
        <div style={{ display: 'flex' }}>
          <CircleCommon />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '21px' }}>
            <p className='lato' style={{ fontSize: '16px', fontWeight: '600', marginTop: '5px', marginBottom: '5px' }}>Episode 1</p>
            <p className='opensans' style={{ fontSize: '12px', fontWeight: 'normal', color: '#8E8B8C' }}>Category • 0:13</p>
          </div>
        </div>
        <p className='opensans' style={{ fontSize: '15px', fontWeight: 'normal', textAlign: 'start', marginTop: '21px', marginRight: '100px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          <br />
          <br />
          Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <NextPage marginTop={'31px'} />
      </div>
      <img src='/assets/h1-podcastimg2.png' style={{ width: '496px', height: '490px' }} />
    </div>
  );
}

function NextPage({ marginTop }) {
  return (
    <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', marginTop: { marginTop } }}>
      <p className='lato' style={{ fontSize: '15px' }}>Episode page</p>
      <img src='/assets/ic_arrow.svg' style={{ width: '17px', height: '12px', marginLeft: '10px', marginTop: '2px' }} />
    </div>
  );
}

function CircleCommon() {
  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '1px solid #CECECE',
        backgroundColor: 'white', // tuỳ chọn
      }} />
  );
}

function ListPodCast() {
  return (
    <div style={{ backgroundColor: '#F8F8F8', width: '100%', paddingBottom: '182px' }}>
      <p className='lato' style={{ fontSize: '40px', textAlign: 'center', marginTop: '89px' }}>Top podcasts:</p>
      <p className='opensans' style={{ fontSize: '15px', textAlign: 'center', fontWeight: 'normal', marginTop: '20px' }}>Discover the selection of the most popular podcasts.</p>
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '60px',
        marginTop: '65px'
      }}>
        {Array.from({ length: podcasts.length }).map((_, index) => (
          <div key={index} style={{
            flex: '0 0 auto',
            width: '600px',
            height: '300px',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
          }}>
            <div style={{ position: 'relative' }}>
              <img src={podcasts[index].image} style={{
                width: '300px',
                height: '300px',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px',
              }} />
              <img src='/assets/ic_earphone.svg' style={{
                width: '25px',
                height: '25px',
                paddingTop: '8px',
                paddingBottom: '8px',
                paddingLeft: '8px',
                paddingRight: '8px',
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'white',
                borderRadius: '10px'
              }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '30px', marginRight: '59px' }}>
              <p className='opensans' style={{ fontSize: '14px', color: '#8E8B8C', textAlign: 'start' }}>Episode {podcasts[index].episodeQuantity} • Technology</p>
              <p className='lato' style={{ fontSize: '20px', marginTop: '5px' }}>SRKP selects: {podcasts[index].srkpSelect}</p>
              <NextPage marginTop={'20px'} />
            </div>
          </div>
        ))}
      </div>
      <DotIndicator />
    </div>
  );
}

function DotIndicator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalDots = 5;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
      {Array.from({ length: totalDots }).map((_, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)}
          style={{
            width: activeIndex === index ? '20px' : '6px',
            height: activeIndex === index ? '20px' : '6px',
            borderRadius: '50%',
            backgroundColor: activeIndex === index ? 'transparent' : 'black',
            border: activeIndex === index ? '1px solid #8E8B8C' : null,
            margin: '0 6px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {activeIndex === index && (
            <div style={{
              width: '6px',
              height: '6px',
              backgroundColor: 'black',
              borderRadius: '50%'
            }} />
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
