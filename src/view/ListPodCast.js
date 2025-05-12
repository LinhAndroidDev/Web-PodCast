import { DotIndicator } from "./DotIndicator";
import { ImagePodCast } from "./ImagePodCast";
import { InformationPodCast } from "./InformationPodCast";
import { NextPage } from "./NextPage";

export const ListPodCast = () => {
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

    return (
        <div style={{ backgroundColor: '#F8F8F8', width: '100%', paddingBottom: '107px' }}>
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
                        marginLeft: index === 0 ? "59px" : "0px",
                        marginRight: index === podcasts.length - 1 ? "59px" : "0px",
                        marginBottom: '10px',
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'center',
                    }}>
                        <ImagePodCast image={podcasts[index].image} width={'300px'} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '30px', marginRight: '59px' }}>
                            <InformationPodCast quantity={podcasts[index].quantity} srkpSelect={podcasts[index].srkpSelect} />
                            <NextPage marginTop={'20px'} />
                        </div>
                    </div>
                ))}
            </div>
            <DotIndicator />
        </div>
    );
}