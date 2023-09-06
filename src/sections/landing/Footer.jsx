function Footer() {
    return(
<footer className="bg-gray-900">
    <div className="mx-auto max-w-screen-xl px-8 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-between">
            <div className="text-white text-6xl"><p><b>Cordium</b> dApps</p></div>
            <div className="flex flex-row gap-10 items-center">
                <a href='https://x.com/cordiumdapps'>
                    <img  src={'/xtwitter.svg'} className="w-[25px] h-[25px]" />
                </a>  
                <a href='https://discord.gg/JyW6Hm7x'>
                    <img  src={'/discord.svg'} className="w-[25px] h-[25px]" />
                </a>
                <a href='https://github.com/Cordium-Dapps'>
                    <img src={'/github.svg'} className="w-[25px] h-[25px]" />
                </a>
                <a href='https://t.me/cordiumdapps'>
                    <img src={'/telegram.svg'} className="w-[25px] h-[25px]" />
                </a>
            </div>       
        </div>
    </div>
    <div className="px-2 pb-8 border-t  pt-4 border-gray-800">
      <div className="sm:flex sm:justify-around text-center">
        <p className="text-lg text-gray-500 dark:text-gray-400">
          &copy; Copyright 2023  All rights reserved.
        </p>

        <ul className="mt-8 flex flex-wrap justify-start gap-4 text-lg sm:mt-0 lg:justify-end">
          <li>
            <a
              href="#"
              className=" transition hover:opacity-75 text-gray-200"
            >
              Privacy policy
            </a>
          </li>

          <li>
            <a
              href="#"
              className=" transition hover:opacity-75 text-gray-200"
            >
              Whitepaper
            </a>
          </li>

          <li>
            <a
              href="#"
              className=" transition hover:opacity-75 text-gray-200"
            >
              Terms and Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
</footer>
    )
}

export default Footer;