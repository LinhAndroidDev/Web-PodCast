export const ImagePodCast = ({ image, size = '300px', borderLeft = true }) => {
    return (
        <div style={{ position: 'relative' }}>
            <img src={image} style={{
                width: size,
                height: size,
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: borderLeft ? '10px' : '0px',
                borderTopRightRadius: borderLeft ? '0px' : '10px'
            }} />
            <img src='/assets/ic_earphone.svg' style={{
                width: '23px',
                height: '23px',
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
    );
}