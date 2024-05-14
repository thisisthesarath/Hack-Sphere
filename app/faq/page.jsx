import Navbar from "@/components/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TextAnimation from "@/components/TextAnimation";

import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";
import "./page.css";

export const metadata = {
  title: "FAQ | HackByte",
  description: "Frequently asked questions about HackByte.",
  keywords: "FAQ, HackByte, IIITDMJ, Hackathon",
  openGraph: {
    title: "FAQ | HackByte",
    description: "Frequently asked questions about HackByte.",
    url: "https://hackbyte.in/faq",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "HackByte - IIITDMJ Hackathon",
    type: "website",
    locale: "en_US",
  },
};

export default function FAQ() {
  const data = [
    {
      title: "How do I register ?",
      content: "Ready to dive in? July 2024 marks the start of pre-registration!",
    },
    {
      title: "How many team members do I need ?",
      content:
        "Your team must consist of 3 to 6 members.",
    },
    {
      title: "How much are the participation fees?",
      content:
        "Participation is absolutely free for first round. Isn't that great? So register ASAP!!",
    },
    {
      title: "Will the Hackathon be in person or online ?",
      content: "HackSphere will be conducted in complete offline/in-person mode.",
    },
    {
      title: "What is the venue for HackSphere' 24?",
      content:
        "SRCAS Coimbatore, explore our beautiful campus while thinking about innovating some crazy thing.",
    },
    {
      title: "What are the prerequisites to participate in this hackathon ?",
      content:
        "No prerequisites are required to participate in this hackathon. This event is open to participants of all skill levels.",
    },
    {
      title:
        "What should I bring?",
      content:
        "Every essential thing you need in order to complete your solution.",
    },
    {
      title:
        "Who can I contact for further information or assistance?",
      content:
        "You can mail to hacksphere@gmail.com or check our contact page for more contact details, we're waiting to respond you.",
    },
  ];

  return (
    <>
      <Navbar />
      <div
        className="bg-[#101010] flex flex-col min-h-screen
          p-4 md:pb-64 lg:px-0 md:pt-24 pt-16"
      >
        <div
          className="w-full h-full flex flex-col gap-24 px-4 pt-20 
            md:px-8 xl:px-20 2xl:px-40"
        >
          <div
            className="flex flex-col justify-between items-start sm:items-center
            gap-12 md:gap-0 md:flex-row md:items-start"
          >
            <div className="flex flex-col items-start gap-8">
              <TextAnimation text="Everything you need , right here!" />
              <p
                className="w-full text-[#C3C3C3] font-['Inter'] font-normal 
                  text-[1.25rem] sm:max-w-[32rem] lg:max-w-[40rem] xl:max-w-[50rem] 
                  2xl:max-w-[55rem] md:text-[1rem] xl:text-[1.5rem]"
              >
                Elevating your hacker journey is what we're all about! 
                Don't hesitate to contact us for assistance or to connect with like-minded individuals.
              </p>
            </div>
            <img
              className="w-44 h-44 md:hidden lg:block xl:h-60 xl:w-60 rotatingContainer"
              src="/getInTouchImage.svg"
              alt="Get in touch"
            />
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row self-center gap-12 md:gap-16 lg:gap-24 
            pt-16 pb-8 md:px-8 xl:px-20 md:pt-24 md:pb-0"
        >
          <div className="flex flex-col gap-5">
            <div
              className="max-w-[448px] text-white text-3xl md:text-4xl 
              font-medium leading-[44px]"
            >
              FAQs
            </div>
            <div className="max-w-[448px]">
              <span className="text-gray-200 text-lg font-normal font-['Inter'] leading-7">
              Unlock Product Insights and Billing Know-How! Can't find what you're after? Chat with our stellar team!{" "}
              </span>
              <span className="text-gray-200 text-lg font-normal font-['Inter'] leading-7">
                chat to our friendly team.
              </span>
            </div>
          </div>
          <div className="max-w-[700px]">
            {data.map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="py-4 md:p-8">
                  <AccordionTrigger
                    className="max-w-[592px] text-white text-2xl 
                    font-medium leading-7"
                  >
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent
                    className="max-w-[592px] text-gray-200 text-lg 
                      font-normal font-['Inter'] leading-7"
                  >
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black w-full h-full py-24 lg:py-40">
        <div
          className="flex flex-col justify-between gap-20 md:flex-row 
          px-4 md:px-8 xl:px-20 2xl:px-40"
        >
          <p
            className="max-w-3xl text-6xl md:text-[5.5rem] lg:text-[7rem] xl:text-[9rem] 
              text-white font-normal md:leading-[8rem] lg:leading-[10rem] 
              tracking-tighter md:tracking-[-0.2rem]"
          >
            Empower
            <br /> Your Digital
            <br /> Odyssey!
          </p>

          <FooterAnimation />
        </div>
      </div>
      <Footer />
    </>
  );
}
