import { Navigation } from "./Navigation";

export const Top = () => {
    const handleClick = () => {
        alert('Button clicked!');
        // Hoặc thực hiện một hành động gì đó ở đây
    };
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
                            <a href="#" role="button" onClick={handleClick}>Link 1</a>
                            <a href="#" role="button" onClick={handleClick}>Link 2</a>
                            <a href="#" role="button" onClick={handleClick}>Link 3</a>
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
                className='center-screen'
                style={{
                    position: 'absolute',
                    bottom: '-125px', // Di chuyển 1 nửa chiều cao của box ra ngoài ảnh
                    height: '250px',
                    backgroundColor: 'white',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    borderRadius: '10px',
                    display: 'flex',
                    boxSizing: 'border-box'
                }}
            >
                <img src='/assets/h4-newimg3-650x650.png' style={{ width: '250px', height: '250px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }} />
            </div>
        </div>
    );
}