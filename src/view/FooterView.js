import React from 'react';

export const FooterView = () => {
    return (
        <div style={{
            display: 'flex',
            backgroundColor: 'black',
            paddingTop: '134px',
            paddingBottom: '130px',
            paddingLeft: '120px'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
                <img src='/assets/ic_logo_cover_white.svg' style={{ width: '120px' }} />
                <p className='opensans' style={{
                    fontSize: '13px',
                    fontWeight: 'normal',
                    color: '#969696',
                    marginTop: '11px'
                }}>The great connection.</p>
            </div >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                marginLeft: '182px'
            }}>
                <p className='lato' style={{ fontSize: '23px', color: 'white' }}>We collaborate with ambitious brands and people; <br /> let’s build something great together.</p>
                <div style={{ display: 'flex', marginTop: '70px' }}>
                    <DetailContact title={'Start a conversation:'} information={'podcast@example.com \n+2 969 866 7033'} other={'Terms & Conditions'} />
                    <DetailContact title={'Find us here:'} information={'Brooklyn, NY 11201 \nUnited States'} other={'Privacy Policy'} />
                    <DetailContact title={'Follow us on:'} information={''} other={'© 2021 Qode Interactive. All Rights Reserved'} hasFollow={true} />
                </div>
            </div>
        </div>
    );
}

function DetailContact({ title, information, other, hasFollow = false }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '117px' }}>
            <p className="lato" style={{ fontSize: '16px', color: '#969696' }}>{title}</p>
            {
                !hasFollow ?
                    <p className="opensans" style={{ fontSize: '15px', color: '#CCCCCC', fontWeight: 'normal', marginTop: '23px' }}>
                        {information.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    : <FollowView />
            }
            <p className="opensans" style={{ fontSize: '12px', color: '#CCCCCC', fontWeight: 'normal', marginTop: hasFollow ? '83px' : '60px' }}>{other}</p>
        </div>
    );
}

function FollowView() {
    return (
        <div style={{ display: 'flex', justifyContent: 'start', marginTop: '23px' }}>
            <img src='/assets/ic_facebook.svg' style={{
                width: '21px',
                height: '21px',
                marginRight: '20px',
            }} />
            <img src='/assets/ic_twice.svg' style={{
                width: '21px',
                height: '21px',
                marginRight: '20px',
            }} />
            <img src='/assets/ic_instagram.svg' style={{
                width: '21px',
                height: '21px',
                marginRight: '20px',
            }} />
            <img src='/assets/ic_youtube.svg' style={{
                width: '21px',
                height: '21px',
                marginRight: '20px',
            }} />
        </div>
    );
}