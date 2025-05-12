export const DotIndicator = ({activeIndex, onDotClick, totalDots}) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            {Array.from({ length: totalDots }).map((_, index) => (
                <div
                    key={index}
                    onClick={() => onDotClick(index)}
                    style={{
                        width: activeIndex === index ? '20px' : '6px',
                        height: activeIndex === index ? '20px' : '6px',
                        borderRadius: '50%',
                        backgroundColor: activeIndex === index ? 'transparent' : 'black',
                        border: activeIndex === index ? '1px solid #8E8B8C' : null,
                        margin: '0 6px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
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