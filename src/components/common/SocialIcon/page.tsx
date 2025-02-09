import React from 'react';

const SocialButton = ({ svgIcon }: { svgIcon: any }) => {
    return (
        <button className="h-16 w-16 flex justify-center items-center rounded-full bg-transparent relative text-[17px] font-semibold no-underline cursor-pointer border border-[#24292E] outline-none overflow-hidden transition-colors duration-300 delay-100 ease-out text-center before:absolute before:top-0 before:left-[-5em] before:right-0 before:bottom-0 before:m-auto before:content-[''] before:rounded-full before:block before:w-[20em] before:h-[20em] before:text-center before:transition-shadow before:duration-500 before:ease-out before:-z-10 text-white hover:border-[#24292E] hover:before:shadow-[inset_0_0_0_10em_#24292E]"
        >
            {
                svgIcon
            }
        </button>
    );
}

export default SocialButton;
