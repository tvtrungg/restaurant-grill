"use client"
import { AppProgressBar } from 'next-nprogress-bar';

type Props = {
    children: React.ReactNode
}

const ProgressBar = ({ children }: Props) => {
    return (
        <>
            {children}
            <AppProgressBar
                height="4px"
                color="#cb9c01"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
}

export default ProgressBar