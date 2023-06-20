export default function Home() {
    return (
        <>
            <div className="text-center py-2 px-4">
                <h1 className="text-4xl lg:text-9xl font-bold">Coming Soon</h1>
                <p className="text-md md:text-lg mt-10 max-w-5xl m-auto">
                    Excited to share that a new website is in the works! In the meantime, please feel free to get in touch using the contact details below.
                    Can't wait to share this remarkable new venture with you soon!
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-4 md:gap-12">
                    <a href="mailto:hello@rva-services.com" className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                            />
                        </svg>
                        hello@rva-services.com
                    </a>
                    <a href="tel:+31651024090" className="flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                            />
                        </svg>
                        +31 6 51 02 40 90
                    </a>
                </div>
            </div>
        </>
    );
}
