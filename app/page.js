import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-green-100 justify-between  ">
       <div className='w-full drop-shadow-sm items-center justify-between top-0 fixed h-12 px-40   bg-black flex flex-row'>
       <Image className='hover:cursor-pointer' src={'/logo1.svg'} width={200} height={200} alt='' />
      
      <div className='flex flex-row gap-4 items-center z-10'> 
          <p className='text-white hover:cursor-pointer hover:scale-110 '>Dapp news</p>
          <p className='hover:cursor-pointer hover:scale-110'>Blog</p>
          <div className='hover:cursor-pointer w-36 h-8 bg-white items-center flex'>
              <p className=' self-center text-black text-md p-2 font-semi-bold  '> Exolore Dapps</p>
            </div>
      </div>  

       </div>
        <div className='h-auto w-full bg-[#060D13]'  > 
        
        <div className=' px-40 pt-20 flex flex-row h-auto items-center justify-between '> 
        <div className='flex flex-col gap-10 '>
        <p className='text-white font-normal  w-[800px] text-8xl'>Discover, Analyse, and Engage</p>
            <p className='text-white text-lg w-[633px]'>Welcome to the Concordium dApp Marketplace, a platform where you can discover and engage with decentralized applications (dApps) built on the Concordium blockchain. Our platform not only provides a comprehensive list of these dApps, but also offers valuable analytics on their performance to give you a clear picture of their utility and effectiveness.</p>
       
            <div className='hover:cursor-pointer w-80 h-24 bg-white  p-10 items-center flex'>
              <p className='text-black text-3xl self-center font-semi-bold'> Exolore Dapps</p>
            </div>
          <div className=''>

          </div>
        </div>
        <Image className=' scale-125' src={'/dapps.gif'} width={600} height={600} alt='' />
        
        </div>

        </div>
      {/* Descriptions */}
        <div  className='bg-white w-full'>
          <div className=' px-40 flex flex-row items-center justify-between delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0 ' data-taos-offset="300">  
              <div className='flex flex-col w-auto'>
                  <p className='text-black font-bold text-3xl pb-10'>Discover amazing dApps</p>
                  <p className='text-black w-[642px] font-semi-bold text-xl'>Our marketplace is built on the Concordium blockchain, a layer-1 blockchain designed to balance privacy and accountability. Every participant on our platform has a verified blockchain-based identity credential, ensuring a secure and trusted environment for you to explore and interact with dApps.</p>
              </div>
              <div className='p-8'>
              <Image src={'/Analytics.svg'} width={400} height={400} alt='' />
              </div>
          </div>
          <div className=' px-40 flex flex-row justify-between delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0 '>
              <div className='flex flex-col w-auto'>
                  <p className='text-black font-bold text-3xl pb-10'>Evaluate with Insight</p>
                  <p className='text-black w-[642px] font-semi-bold text-xl'>Track the number of transactions each dApp is part of, the number of users each dApp has, and other key metrics. These analytics are displayed for each dApp, enabling you to make informed decisions on which dApps to engage with.</p>
              </div>
              <div className='p-8'>
              <Image src={'/performance.svg'} width={400} height={400} alt='' />
              </div>
          </div>
          <div className=' px-40 flex flex-row justify-between delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0 '>
              <div className='flex flex-col w-auto'>
                  <p className='text-black font-bold text-3xl pb-10'>Engage with Ease</p>
                  <p className='text-black w-[642px] font-semi-bold text-xl'>Our user-friendly interface allows you to interact with the dApps listed on our platform with ease. Our platform enables seamless transaction handling which is integrated with the Concordium Wallet for Web.</p>
              </div>
              <div className='p-8'>
              <Image src={'/easy.png'} width={300} height={300} alt='' />
              </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 py-20 items-center bg-gray-500 w-full h-auto'>
                  <p className='text-white text-3xl p-2'>Are you a developer?</p>  
                  <p className='text-white text-xl p-2 w-[600px] text-center self-center'>Submit your Dapp to the Cordium dapps plartfom and benefit from a growing community of dapps</p>  
                  <div className='hover:cursor-pointer w-auto h-12 bg-[#060D13] p-5 items-center flex'>
              <p className='text-white text-xl font-semi-bold'> Submit Dapp</p>
            </div>
      <div className='flex flex-row gap-4 items-center'>
          
         
       </div>
        </div>
        <div className='flex flex-col gap-4 py-20 items-center bg-[#060D13] w-full h-auto'>
                  <p className='text-white text-3xl p-2'>Join our Community</p>  
      <div className='flex flex-row gap-4 items-center'>
          <input className='h-12 w-80 placeholder:text-gray-500 placeholder:p-4' placeholder='Email address' />
          <div className='hover:cursor-pointer w-auto h-12 bg-white p-5 items-center flex'>
              <p className='text-black text-xl font-semi-bold'> Join Now</p>
            </div>
       </div>
        </div>
        <div className='flex flex-col gap-4 items-center justify-center bg-black w-full h-56'>
      
          <div className='px-40 flex flex-row justify-between w-full'> 
          <Image src={'/logo1.svg'} width={200} height={200} alt='' />
            <div className='flex flex-row items-center gap-4'>
            <a href='https://x.com/cordiumdapps'>
            <Image  src={'/xtwitter.svg'} width={25} height={25} alt='' />
            </a>  
            <a href='https://discord.gg/JyW6Hm7x'>
            <Image  src={'/discord.svg'} width={25} height={25} alt='' />
            </a>
          <a href='https://github.com/Cordium-Dapps'>
          <Image src={'/github.svg'} width={25} height={25} alt='' />
          </a>
          <a href='https://t.me/cordiumdapps'>
          <Image src={'/telegram.svg'} width={25} height={25} alt='' />
          </a>
            </div>
          </div>
          <div className='h-0.5 w-full mt-20 bg-gray-500 opacity-25'>
</div>
<div className='flex flex-row justify-between w-full px-40 flex-start'>
    <p className='text-white text-lg'>© Copyright 2023, All Rights Reserved</p>
    <div className='flex  gap-4 flex-row text-white text-lg'>
      <a href=''>Privacy policy </a>
      <a href='https://www.canva.com/design/DAFs2kk8ZOc/cKoa8E1rze7k6HHVMVJYFw/edit?utm_content=DAFs2kk8ZOc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'>Whitepaper </a>
      <a href=''>Terms and Conditions</a>
    </div>
</div>
        </div>
    </main>
  )
}
