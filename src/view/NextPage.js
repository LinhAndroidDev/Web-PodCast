export const NextPage = ({ marginTop, title = 'Episode page' }) => {
    return (
        <div style={{
            display: 'flex',
            justifyItems: 'center',
            alignItems: 'center',
            marginTop: marginTop
        }}>
            <p className='lato' style={{ fontSize: '15px' }}>{title}</p>
            <img src='/assets/ic_arrow.svg' style={{
                width: '17px',
                height: '12px',
                marginLeft: '10px',
                marginTop: '2px'
            }} />
        </div>
    );
}