import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Certaficat() {
  const testimonials = [
    {
      quote:
        "This document certifies that the student has acquired fundamental networking skills and can apply his or her knowledge to configure and troubleshoot basic network infrastructures.",
      name: "CCNA v7 - Introduction aux réseaux",
      designation: "Cisco Networking Academy",
      src: "/resaux.jpg",
    },
     {
      quote:
        "This certificate confirms that the student has acquired essential skills in switching, routing, and wireless networking, and is able to apply them in configuring and troubleshooting network infrastructures.",
      name: "CCNA: Switching, Routing, and Wireless Essentials",
      designation: "Cisco Networking Academy",
      src: "/SR.jpg",
    },
     {
      quote:
        "This certificate confirms that the student has acquired knowledge in enterprise networking, security, and automation, and is able to apply it in real networking environments.",
      name: "CCNA: Enterprise Networking, Security & Automation",
      designation: "Cisco Networking Academy",
      src: "/SEC.jpg",
    },
    {
      quote:
        "This certificate confirms that the student has mastered the essential basics of the Python language and can apply them to solve programming problems.",
      name: "PCAP: Programming Essentials in Python",
      designation: "Python Institute",
      src: "/Pythone.jpg",
    },
    {
      quote:
        "This certificate attests that the recipient has successfully followed and completed the SQL program offered by 365 Data Science.",
      name: "SQL",
      designation: "365 Data Science",
      src: "/Sql.jpg",
    },
    {
      quote:
        "This certificate attests that the recipient has successfully completed and completed the Introduction to Excel program offered by 365 Data Science.",
      name: "Introduction to Excel",
      designation: "365 Data Science",
      src: "/Excel.jpg",
    },
    {
      quote:
        "This certificate attests that the recipient has successfully completed and followed the Introduction to ChatGPT and Generative AI program offered by 365 Data Science.",
      name: "Intro to ChatGPT and Generative AI",
      designation: "365 Data Science",
      src: "/C-AI.jpg",
    },
    {
      quote:
        "The certificate is designed with a clean and professional style, including an official 365 DataScience seal at the bottom of the document.",
      name: "Intro to AI",
      designation: "365 Data Science",
      src: "/AI.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}