
export const opacityVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            type: "spring",
            duration: 0.5,
            delay: 0.9
        }
    },
};

export const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            duration: 0.5,
            delay: 0.9
        }
    },
};
