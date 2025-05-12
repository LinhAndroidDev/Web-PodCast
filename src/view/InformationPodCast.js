export const InformationPodCast = ({ quantity, srkpSelect }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <p className='opensans' style={{
                fontSize: '14px',
                color: '#8E8B8C',
                textAlign: 'start'
            }}>Episode {quantity} • Technology</p>
            <p className='lato' style={{ fontSize: '20px', marginTop: '5px' }}>SRKP selects: {srkpSelect}</p>
            <div style={{ width: '100%', height: '2px', backgroundColor: 'black' }} />
        </div>
    );
}