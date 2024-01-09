import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

type Props = {
    children: React.ReactNode;
    attribute: any
    className?: string;
    onChange?: (index: number) => void;
}


const CustomCarousel = ({ children, attribute, className, onChange }: Props) => {
    return (
        <Carousel
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            transitionTime={1000}
            interval={3000}
            emulateTouch={true}
            stopOnHover={true}
            {...attribute}
            className={className}
            onChange={onChange}

        >
            {children}
        </Carousel>
    )
}

export default CustomCarousel