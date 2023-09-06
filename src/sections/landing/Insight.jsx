import Button from '../../components/Button'

function Insight() {
  return(
    <div className="bg-white p-4">
      <div className="h-8"></div>
      <div className="max-w-[1080px] w-full mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 py-4 items-center text-black">
            <div className="flex flex-col gap-10 w-full lg:w-[70%]">
              <div className="text-4xl">Discover amazing dApps</div>
              <div className="text-xl">Our marketplace is built on the Concordium blockchain, a layer-1 blockchain designed to balance privacy and accountability. Every participant on our platform has a verified blockchain-based identity credential, ensuring a secure and trusted environment for you to explore and interact with dApps.</div>
            </div>
            <div className="w-full lg:w-[30%]">
              <img src="Analytics.svg"/>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 py-4 items-center text-black">
            <div className="flex flex-col gap-10 w-full lg:w-[70%]">
              <div className="text-4xl">Evaluate with Insight</div>
              <div className="text-xl">Track the number of transactions each dApp is part of, the number of users each dApp has, and other key metrics. These analytics are displayed for each dApp, enabling you to make informed decisions on which dApps to engage with.</div>
            </div>
            <div className="w-full lg:w-[30%]">
              <img src="performance.svg"/>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 py-4 items-center text-black">
            <div className="flex flex-col gap-10 w-full lg:w-[70%]">
              <div className="text-4xl">Engage with Ease</div>
              <div className="text-xl">Our user-friendly interface allows you to interact with the dApps listed on our platform with ease. Our platform enables seamless transaction handling which is integrated with the Concordium Wallet for Web.</div>
            </div>
            <div className="w-full lg:w-[30%]">
              <img src="easy.png"/>
            </div>
          </div>
      </div>
    </div>
  )
};

export default Insight;
