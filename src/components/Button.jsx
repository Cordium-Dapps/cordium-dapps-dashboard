import React from 'react';
function Button({contents}){
    return(
        <div className="b mx-auto h-20 w-64 flex justify-center items-center">
            <div className="flex flex-col justify-center i h-14 md:h-16 w-48 lg:w-52 bg-blue-400
                            items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-90 
                            hover:border-white hover:bg-transparent hover:border transition duration-300 ease-out">
                <a className="font-primary text-center text-white text-2xl hover:text-xl z-10 pointer-events-none">{contents}</a>
            </div>
        </div>
    )
}

export default Button;