import React from 'react'
import LoadingIframe from 'react-loading-iframe';

const Skeleton = () => {
    return (
        <div className="min-h-[700px] flex justify-center items-center w-full">
            <div class="w-12 h-12 rounded-full animate-spin border-4 border-solid border-purple-500 border-t-transparent">
            </div>
        </div>
    );
};

export default function Calendly() {

    return (
        <>
            <h1 className="text-center italic pb-4"><span className="border-b">Agendar una hora</span></h1>
            {/* <iframe src="https://calendly.com/pablo-espinoza" className="w-full min-h-[700px] rounded"></iframe> */}
            <LoadingIframe
                skeleton={<Skeleton />}
                src="https://calendly.com/pablo-espinoza"
                className="w-full min-h-[700px] rounded"
            />
        </>
    )
}
