import Image from "next/image";
import { HoverEffect } from "./ui/card-hover-effect";
import { SparklesCore } from "./ui/sparkles";


export function About() {
  return (
    <div id="About" className="pt-[50px] max-w-5xl mx-auto px-8 border-t border-[#1d1d1d]">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
        About Me
      </h2>
      <p className="max-w-7xl pl-4 mx-auto text-xl md:text-1xl font-small text-neutral-800 dark:text-neutral-100">
        Get to know who I am and what I do.
      </p>
      
      {/* Personal Info Section */}
      <div className="flex justify-center items-center py-4">
  {/* Main container */}
  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
    {/* Image */}
    <Image
      src="/proo.jpg"
      width={250}
      height={250}
      className="rounded-full object-contain"
      alt="model"
    />
    {/* Information Section */}
    <div className="text-white flex flex-col justify-center">
      <div className="flex items-center mb-2">
        <span className="font-medium">Full Name: </span>
        <span className="font-light text-gray-300 pl-2">Zahri Ahmed</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="font-medium">Age: </span>
        <span className="font-light text-gray-300 pl-2">24 ans</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="font-medium">E-mail: </span>
        <span className="font-light text-gray-300 pl-2">Zahriahmeed@gmail.com</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="font-medium">Phone Number: </span>
        <span className="font-light text-gray-300 pl-2">+212-633030125</span>
      </div>
    </div>
  </div>
</div>

  
      {/* Hover Effect Section */}
      <HoverEffect items={projects} />
    </div>
  );
  
  
}
export const projects = [
  {
    title: "System Administrator Insights",
    description:
      "I have experience in deploying and managing Linux and Windows servers, as well as automating tasks using Bash and PowerShell. I also work with containerization tools such as Docker and Kubernetes to provide flexible and scalable solutions, and I collaborate with cloud platforms like AWS and Azure to create efficient solutions.",
      link: "#",
  },
  {
    title: "Virtualization Technicienne",
    description:
      "I am a Systems and Network Administration student passionate about digital infrastructure and virtualization. With experience in deploying and managing virtual machines using VMware and Proxmox, and containerizing applications with Docker and Kubernetes, I aim to optimize IT infrastructure.",
      link: "#",
    },
  {
    title: "Graphic Designer",
    description:
      "I bring ideas to life through compelling visual communication. I create visually striking designs for various platforms, including digital and print media. I specialize in creating flyers, logos, and posters that effectively convey messages and capture attention.",
      link: "#",
  },
  {
    title: "Network Security Analyst",
    description:
      "I am a Network Security Analyst with a focus on safeguarding organizations' networks and systems against cyber threats. I specialize in implementing firewalls, VPNs, and IDS/IPS solutions to ensure the security and integrity of network infrastructures.",
    link: "#",
  }
];
