import { CircleCommon } from "./CircleCommon";
import { NextPage } from "./NextPage";

export const BodyView = () => {
    return (
        <div className='center-screen' style={{ marginTop: '265px', display: 'flex' }}>
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
            <img src='/assets/h1-podcastimg2.png' style={{ width: '28vw', height: '28vw' }} />
        </div>
    );
}