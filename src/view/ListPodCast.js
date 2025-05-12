import { useEffect, useRef, useState } from "react";
import { NextPage } from "./NextPage";
import { DotIndicator } from "./DotIndicator";


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
        {
            image: '/assets/podcast_3.png',
            episodeQuantity: 9,
            srkpSelect: 'to hide behind safe'
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
    
        let animationFrameId;
    
        const handleScroll = () => {
            if (animationFrameId) return;
    
            animationFrameId = requestAnimationFrame(() => {
                const items = container.querySelectorAll('.podcast-item');
                const containerRect = container.getBoundingClientRect();
                const containerCenter = containerRect.left + containerRect.width / 2;
    
                const isAtStart = container.scrollLeft <= 10;
                const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
    
                if (isAtStart) {
                    if (activeIndex !== 0) setActiveIndex(0);
                } else if (isAtEnd) {
                    if (activeIndex !== items.length - 1) setActiveIndex(items.length - 1);
                } else {
                    let closestItem = null;
                    let minDistance = Infinity;
    
                    items.forEach((item, index) => {
                        const itemRect = item.getBoundingClientRect();
                        const itemCenter = itemRect.left + itemRect.width / 2;
                        const distance = Math.abs(containerCenter - itemCenter);
    
                        if (distance < minDistance) {
                            minDistance = distance;
                            closestItem = index;
                        }
                    });
    
                    if (closestItem !== null && closestItem !== activeIndex) {
                        setActiveIndex(closestItem);
                    }
                }
    
                animationFrameId = null;
            });
        };
    
        container.addEventListener('scroll', handleScroll);
        return () => {
            container.removeEventListener('scroll', handleScroll);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [activeIndex]);

    const scrollToItem = (index) => {
        const items = containerRef.current.querySelectorAll('.podcast-item');
        if (items[index]) {
            items[index].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }
    };

    return (
        <div style={{ backgroundColor: '#F8F8F8', width: '100%', paddingBottom: '150px' }}>
            <p className='lato' style={{ fontSize: '40px', textAlign: 'center', marginTop: '89px' }}>Top podcasts:</p>
            <p className='opensans' style={{ fontSize: '15px', textAlign: 'center', fontWeight: 'normal', marginTop: '20px' }}>Discover the selection of the most popular podcasts.</p>
            <div
                ref={containerRef}
                style={{
                    display: 'flex',
                    overflowX: 'auto',
                    gap: '60px',
                    marginTop: '65px',
                    scrollSnapType: 'x mandatory',
                    scrollBehavior: 'smooth',
                    WebkitOverflowScrolling: 'touch',
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    }
                }}
            >
                {Array.from({ length: podcasts.length }).map((_, index) => (
                    <div
                        key={index}
                        data-index={index}
                        className="podcast-item"
                        style={{
                            marginLeft: index === 0 ? "59px" : "0px",
                            marginRight: index === podcasts.length - 1 ? "59px" : "0px",
                        }}
                    >
                        <div style={{ position: 'relative' }}>
                            <img src={podcasts[index].image} style={{
                                width: '300px',
                                height: '300px',
                                borderTopLeftRadius: '10px',
                                borderBottomLeftRadius: '10px',
                            }} />
                            <img src='/assets/ic_earphone.svg' style={{
                                width: '25px',
                                height: '25px',
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
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '30px', marginRight: '59px' }}>
                            <p className='opensans' style={{ fontSize: '14px', color: '#8E8B8C', textAlign: 'start' }}>Episode {podcasts[index].episodeQuantity} • Technology</p>
                            <p className='lato' style={{ fontSize: '20px', marginTop: '5px' }}>SRKP selects: {podcasts[index].srkpSelect}</p>
                            <NextPage marginTop={'20px'} />
                        </div>
                    </div>
                ))}
            </div>
            <DotIndicator activeIndex={activeIndex} onDotClick={scrollToItem} totalDots={podcasts.length} />
        </div>
    );
}