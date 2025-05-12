import { ImagePodCast } from "./ImagePodCast";
import { InformationPodCast } from "./InformationPodCast";
import { NextPage } from "./NextPage";

export const ListImportantEpisodes = () => {
    const importantEpisodes = [
        {
            image: '/assets/h4-newimg3-650x650.png',
            episodeQuantity: 1,
            srkpSelect: 'how the new ages work'
        },
        {
            image: '/assets/episodes_1.png',
            episodeQuantity: 2,
            srkpSelect: 'a new mindset today'
        },
        {
            image: '/assets/episodes_2.png',
            episodeQuantity: 3,
            srkpSelect: 'the latest trends now'
        },
        {
            image: '/assets/episodes_3.png',
            episodeQuantity: 4,
            srkpSelect: 'organize your day'
        },
        {
            image: '/assets/episodes_4.png',
            episodeQuantity: 5,
            srkpSelect: 'how to plan your work'
        },
        {
            image: '/assets/episodes_5.png',
            episodeQuantity: 6,
            srkpSelect: 'trying the best phones'
        },
    ]

    return (
        <div className='center-screen' style={{
            backgroundColor: 'white',
            paddingTop: '124px',
        }}>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <p className='lato' style={{ fontSize: '40px' }}>Essential episodes:</p>
                <NextPage title='View all episodes' />
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '70px',
                marginTop: '50px'
            }}>
                {importantEpisodes.map((episode, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <ImagePodCast image={episode.image} size="100%" borderLeft={false} />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            marginLeft: '30px',
                            marginRight: '59px',
                            marginTop: '34px'
                        }}>
                            <InformationPodCast quantity={importantEpisodes[index].quantity} srkpSelect={importantEpisodes[index].srkpSelect} />
                            <div style={{
                                display: 'flex',
                                justifyItems: 'center',
                                alignItems: 'center',
                                marginTop: '26px',
                                marginBottom: '36px'
                            }}>
                                <p className='lato' style={{
                                    fontSize: '14px',
                                    fontWeight: 'normal',
                                    color: '#8E8B8C'
                                }}>Share</p>
                                <img src='/assets/ic_share.svg' style={{
                                    width: '15px',
                                    height: '15px',
                                    marginLeft: '5px',
                                    marginTop: '2px'
                                }} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}