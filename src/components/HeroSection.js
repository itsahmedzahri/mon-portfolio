import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaFacebook,FaWhatsapp  } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { LinkPreview } from './ui/link-preview';
 // Ensure you have this package installed

const HeroSection = () => {
  return (
    <div id="Home" className="pb-[50px] w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px]">
      <div className="max-w-[600px] w-[90%] mx-auto py-[30px]">
        <Image
          src="/Lo.png"
          width={100}
          height={1000}
          className="max-h-[100px] h-full object-contain object-bottom"
          alt="LoGO"
        />

<div className="flex flex-col justify-center h-[80%]">
  <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
    <span className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-[20px] sm:text-[22px] md:text-[24px] font-sans py-[-10px] -translate-y-[-22px] md:py-[-10px] relative z-20 tracking-tight">
      Hey, my name is
    </span><br />
    ZAHRI <br /> AHMED<br />
    <TypeAnimation
      sequence={[
        'Welcome To My Portfolio',
        1000,
        '',
        1000,
        'Network Administrator',
        1000,
        'IT Systems',
        1000,
        'IT Support',
        1000,
        'Designer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: '50px', 
        display: 'inline-block', 
        color: '',
      }}
      className="pt-5 bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight"
      repeat={Infinity}
    />
  </h2>

  <a
    href="#Contact"
    className="pl-[5px] text-white border-b border-l border-[#525252] hover:p-[10px] hover:bg-[#5070ff2f] transition-all ease-in-out mr-auto py-[10px] font-[600] text-base sm:text-lg md:text-xl"
  >
    Hire me &rarr;
  </a>
</div>

      </div><div className="w-full h-full flex items-end bg-[#0d0d0e] rounded-b-[90px] relative">
  <Image
    src="/123456.png"
    width={800}
    height={1300}
    className="w-full max-h-[100vh] object-contain object-bottom"
    alt="model"
  />
  {/* Social Media Links */}
  <div className="absolute top-5 left-[-20] flex flex-col items-start space-y-4 z-10">
    <a
      href="https://www.instagram.com/itsahmedzahri/"
      target="_blank"
      rel="noopener noreferrer"
      className="h-[50px] w-[50px] flex justify-center items-center z-3 bg-[#0d0d0e] rounded-full border border-white"
    >
      <FaInstagram className="text-white h-[30px] w-[30px]" />
    </a>
    <a
      href="https://www.linkedin.com/in/ahmedzahri/"
      target="_blank"
      rel="noopener noreferrer"
      className="h-[50px] w-[50px] flex justify-center items-center z-3 bg-[#0d0d0e] rounded-full border border-white"
    >
      <FaLinkedin className="text-white h-[30px] w-[30px]" />
    </a>
    
    <a
      href="https://wa.me/+212633030125"
      target="_blank"
      rel="noopener noreferrer"
      className="h-[50px] w-[50px] flex justify-center items-center z-3 bg-[#0d0d0e] rounded-full border border-white"
    >
      <FaWhatsapp className="text-white h-[30px] w-[30px]" />
    </a>
    <a
      href="https://web.facebook.com/bahi2019"
      target="_blank"
      rel="noopener noreferrer"
      className="h-[50px] w-[50px] flex justify-center items-center z-3 bg-[#0d0d0e] rounded-full border border-white"
    >
      <FaFacebook className="text-white h-[30px] w-[30px]" />
    </a>
  </div>
</div>

<div className="w-[90%] mx-auto py-[30px] flex flex-col items-center">
  <div className="pt-[11px] w-[90%] mx-auto py-[30px] flex flex-col items-center text-black">
    <a
      href="/Zahriahmed.pdf" target="_blank" rel="noopener noreferrer"
      className="bg-white max-w-[130px] w-full h-[40px] flex justify-center items-center border border-l border-[#333333] text-black font-[600] rounded-[30px] mx-auto "
    >
      Download CV
    </a>
  </div>
  <div className="pt-[1px] w-[90%] mx-auto py-[30px] flex flex-col items-center">
    <a
      href="#Contact"
      className="max-w-[130px] w-full h-[40px] flex justify-center items-center border border-l border-[#333333] text-white font-[600] rounded-[30px] mx-auto pb-[2px]"
    >
      Hire Me
    </a>
  </div>

  <p className="max-w-3xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 mt-[20px] text-center">
    Passionate about network infrastructure, I transform the complexity of systems into secure and high-performance solutions. Whether its designing, optimizing, or securing network architectures, I ensure reliable and efficient connectivity. To me, every protocol, configuration, and command line is an opportunity for innovation—where performance and security come together to shape the networks of the future.
  </p>
</div>

    </div>
  );
};

export default HeroSection;