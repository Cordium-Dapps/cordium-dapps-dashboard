import Button from '../../components/Button'


function Hero() {
  return(
    <div className="bg-[#060D13] p-2">
    <div className="h-20"></div>
    <div className="max-w-[1080px] w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center text-white">
        <div className="flex flex-col font-primary my-4 w-full lg:w-1/2">
            <div className="my-2 text-6xl text-center lg:text-6xl">Discover, Analyse, and Engage</div>
                <div className="flex flex-col gap-2 mt-12 mb-20 mx-10 text-lg text-start">
                    <div>Welcome to the Concordium dApp Marketplace, a platform where you can discover and engage with decentralized applications (dApps) built on the Concordium blockchain. Our platform not only provides a comprehensive list of these dApps, but also offers valuable analytics on their performance to give you a clear picture of their utility and effectiveness.</div>
                </div>
                <div className="flex justify-center" data-aos="fade-up" data-aos-duration="1000">
                <Button contents="Explorer dApps" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                    <img src="dapps.gif"/>
            </div>
        </div>
    </div>
    </div>
  )
};

export default Hero;
