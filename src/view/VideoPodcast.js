export const VideoPodcast = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
        }}>
            <img src='/assets/h1-video.png' style={{
                width: '100%',
            }} />
            <img src='/assets/ic_play.svg' style={{
                width: '70px',
                height: '70px',
                position: 'absolute'
            }} />
        </div>
    );
}