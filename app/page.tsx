'use client';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="mx-auto flex min-h-screen w-full flex-col">
      {/* Header */}
      <div className=" flex w-full items-center justify-between p-4 sm:h-[148px] sm:gap-[58px] sm:p-0 sm:px-[260px]">
        <img
          className="h-6 sm:h-[60px] sm:w-[220px]"
          alt="logo"
          src="/logo.png"
        ></img>
        <div
          style={{ fontFamily: 'Arial Bold' }}
          className=" hidden items-center text-nowrap sm:flex sm:gap-[58px] sm:text-[20px]"
        >
          <p className=" cursor-pointer">ABOUT US</p>
          <p className=" cursor-pointer">CLIENT BILL OF RIGHTS</p>
          <p className=" cursor-pointer">PRIVACY POLICY</p>
          <p className=" cursor-pointer">CONTACT US</p>
        </div>
        <a
          href="https://intake.wellnessstreamhealth.com/pages/authentication/patient-register"
          target="_blank"
          style={{ fontFamily: 'Arial Bold' }}
          className="cursor-pointer text-nowrap rounded-full bg-[#16d793] px-6 py-2 text-center text-sm text-white shadow-md active:translate-y-[1px] sm:text-[20px]"
        >
          <p>START YOUR JOURNEY</p>
        </a>
      </div>
      {/* Hero */}
      <div
        style={{ backgroundImage: "url('./hero.png')" }}
        className="relative hidden h-screen w-full bg-contain bg-center bg-no-repeat sm:block"
      >
        <div className=" absolute left-[13.5%] top-[12%]">
          <h1
            style={{ fontFamily: 'Arial Black' }}
            className=" mb-[-2rem] text-[70px]"
          >
            Weight
          </h1>
          <h1 style={{ fontFamily: 'Arial Black' }} className=" text-[70px]">
            Management
          </h1>
        </div>
        <p className=" absolute left-[13.5%] top-[32%] max-w-[480px] text-[30px] leading-[32px] text-white">
          Assist you on achieving your weight loss goals.
        </p>
        <div className="absolute left-[21.5%] top-[46%] flex flex-col text-end text-white">
          <h1
            style={{ fontFamily: 'Arial Black' }}
            className=" mb-[-2rem] text-[70px]"
          >
            SEMA $250
          </h1>
          <h1 style={{ fontFamily: 'Arial Black' }} className=" text-[70px]">
            TIR $399
          </h1>
          <p className="mt-[-1rem] text-[30px] font-bold">
            4 WEEKS - ALL DOSING
          </p>
        </div>
        <a
          href="https://intake.wellnessstreamhealth.com/pages/authentication/patient-register"
          target="_blank"
          className="absolute left-0 top-[85%] z-10 h-[135px] w-[950px] bg-transparent"
        ></a>
        <p
          style={{ fontFamily: 'Arial Black' }}
          className="absolute left-[14.5%] top-[89.9%] text-[30px] font-bold"
        >
          GET START YOUR JOURNEY
        </p>
      </div>
      <div className=" relative w-full sm:hidden">
        <img
          src="/heroMobile1.png"
          className=" h-full w-full"
          alt="hero mobile 1"
        />
        <img
          src="/heroMobile2.png"
          className=" h-full w-full"
          alt="hero mobile 2"
        />
        <div className=" absolute left-[25%] top-[60%]">
          <h1 style={{ fontFamily: 'Arial Black' }} className=" text-3xl">
            Weight
          </h1>
          <h1 style={{ fontFamily: 'Arial Black' }} className=" text-3xl">
            Management
          </h1>
        </div>
        <p className=" absolute left-[25.5%] top-[70.5%] max-w-[480px] text-sm text-white">
          Assist you on achieving your weight loss goals.
        </p>
        <div className="absolute left-[40.5%] top-[82%] flex flex-col text-end text-white">
          <h1 style={{ fontFamily: 'Arial Black' }} className=" text-2xl ">
            SEMA $250
          </h1>
          <h1 style={{ fontFamily: 'Arial Black' }} className=" text-2xl">
            TIR $399
          </h1>
          <p className="text-lg font-bold">4 WEEKS - ALL DOSING</p>
        </div>
      </div>
      <a
        href="https://intake.wellnessstreamhealth.com/pages/authentication/patient-register"
        target="_blank"
      >
        <img
          src="/heroLink.png"
          className=" h-full w-full sm:hidden"
          alt=" hero link png"
        ></img>
      </a>
      {/* About Us */}
      <div className=" relative mt-32 hidden w-full sm:flex">
        <div className=" relative h-full w-full">
          <img src="/about1.png" alt="about us jpg" className="h-full w-full" />
        </div>
        <div className=" relative h-full w-full">
          <img src="/about2.png" alt="about us jpg" className="h-full w-full" />
          <div className=" absolute left-[9%] top-[14%] flex flex-col">
            <div className=" flex flex-col">
              <span
                style={{ fontFamily: 'Arial Black' }}
                className=" mb-[-1.5rem] text-[30px]"
              >
                About Us
              </span>
              <span
                style={{ fontFamily: 'Arial Black' }}
                className=" text-[70px]"
              >
                WHO WE ARE
              </span>
            </div>
            <div className=" ml-[90px] mt-[50px] flex flex-col gap-[60px]">
              <div className=" flex flex-col gap-8">
                <span
                  style={{ fontFamily: 'Arial Black' }}
                  className=" text-[30px] text-[#16d793]"
                >
                  Our Work
                </span>
                <span className=" max-w-[560px] font-semibold">
                  Our diverse backgrounds in medicine, nutrition, fitness,
                  psychology, and holistic health allow us to offer a
                  comprehensive approach for health management.
                </span>
              </div>
              <div className=" flex flex-col gap-8">
                <span
                  style={{ fontFamily: 'Arial Black' }}
                  className=" text-[30px] text-[#16d793]"
                >
                  Our Passion
                </span>
                <span className=" max-w-[560px] font-semibold">
                  We are a team of dedicated health professionals, wellness
                  enthusiasts, and experts in primary care, unlted by a shared
                  passion for healthy life.
                </span>
              </div>
              <div className=" mt-8 flex flex-col gap-8">
                <span
                  style={{ fontFamily: 'Arial Black' }}
                  className=" text-[30px] text-[#16d793]"
                >
                  Our Goal
                </span>
                <span className=" max-w-[560px] font-semibold">
                  Our mission Is to guide you on a transformative journey
                  towards a healthler, happler life.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full sm:hidden">
        <img src="/doctor1.png" alt="doctor1 png" className=" h-full w-full" />
        <img src="/doctor2.png" alt="doctor2 png" className=" h-full w-full" />
        <div className=" absolute left-[9%] top-[55%] flex flex-col">
          <div className=" flex flex-col">
            <span style={{ fontFamily: 'Arial Black' }} className="text-xl">
              About Us
            </span>
            <span style={{ fontFamily: 'Arial Black' }} className="text-3xl">
              WHO WE ARE
            </span>
          </div>
          <div className=" ml-[55px] mt-[32px] flex flex-col">
            <div className=" flex flex-col">
              <span
                style={{ fontFamily: 'Arial Black' }}
                className=" text-lg text-[#16d793]"
              >
                Our Work
              </span>
              <span className=" max-w-[280px] text-xs font-semibold">
                Our diverse backgrounds in medicine, nutrition, fitness,
                psychology, and holistic health allow us to offer a
                comprehensive approach for health management.
              </span>
            </div>
            <div className=" flex -translate-y-1 flex-col">
              <span
                style={{ fontFamily: 'Arial Black' }}
                className=" text-lg text-[#16d793]"
              >
                Our Passion
              </span>
              <span className=" max-w-[280px] text-xs font-semibold">
                We are a team of dedicated health professionals, wellness
                enthusiasts, and experts in primary care, unlted by a shared
                passion for healthy life.
              </span>
            </div>
            <div className=" flex translate-y-2 flex-col">
              <span
                style={{ fontFamily: 'Arial Black' }}
                className=" text-lg text-[#16d793]"
              >
                Our Goal
              </span>
              <span className=" max-w-[280px] text-xs font-semibold">
                Our mission Is to guide you on a transformative journey towards
                a healthler, happler life.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* How it works */}
      <div
        style={{ backgroundImage: "url('./howItWorks.jpg')" }}
        className="hidden h-screen w-full flex-col items-center px-[15rem] sm:flex"
      >
        <h1
          style={{ fontFamily: 'Arial Black' }}
          className=" mt-16 text-center text-[70px]"
        >
          How It Works
        </h1>
        <div className=" mt-[100px] flex gap-[70px]">
          <div className=" flex max-w-[300px] flex-col gap-[80px]">
            <span
              style={{ fontFamily: 'Arial Bold' }}
              className=" max-w-[12rem] text-[30px] font-bold leading-8 text-[#16d793]"
            >
              Medical Intake Form
            </span>
            <p className=" text-[18px] leading-[28px]">
              Fill out a short medical intake form online so that your
              healthcare provider can understand your medical history.
            </p>
          </div>
          <div className=" flex max-w-[300px] flex-col gap-[80px]">
            <span
              style={{ fontFamily: 'Arial Bold' }}
              className=" max-w-[12rem] text-[30px] font-bold leading-8 text-[#16d793]"
            >
              Medical Intake Form
            </span>
            <p className=" text-[18px] leading-[28px]">
              Schedule a telehealth appointment for a personalized treatment
              plan with our medical health specialist.
            </p>
          </div>
          <div className=" flex max-w-[300px] flex-col gap-[80px]">
            <span
              style={{ fontFamily: 'Arial Bold' }}
              className=" max-w-[12rem] text-[30px] font-bold leading-8 text-[#16d793]"
            >
              Medical Intake Form
            </span>
            <p className=" text-[18px] leading-[28px]">
              Get medications delivered to your door as refills are due through
              our licensed partner pharmacles.
            </p>
          </div>
          <div className=" flex max-w-[300px] flex-col gap-[80px]">
            <span
              style={{ fontFamily: 'Arial Bold' }}
              className=" max-w-[12rem] text-[30px] font-bold leading-8 text-[#16d793]"
            >
              Medical Intake Form
            </span>
            <p className=" text-[18px] leading-[28px]">
              Start a chat with your doctor or pharmacy for all your medical and
              medication-related inquiries.
            </p>
          </div>
        </div>
      </div>
      <div className=" relative w-full sm:hidden">
        <h1
          style={{ fontFamily: 'Arial Black' }}
          className=" my-8 text-center text-3xl"
        >
          How It Works
        </h1>
        <img src="/work1.png" alt="work1 png" className=" h-full w-full"></img>
        <img src="/work2.png" alt="work2 png" className=" h-full w-full"></img>
      </div>
      {/* Why choose us */}
      <div
        style={{ backgroundImage: "url('./whyChooseUs.png')" }}
        className="relative hidden h-screen w-full bg-contain bg-center bg-no-repeat sm:block"
      >
        <div className=" absolute left-[13%] top-[15.5%]">
          <h1
            style={{ fontFamily: 'Arial Black' }}
            className="mb-[-2rem] text-[70px]"
          >
            Why
          </h1>
          <h1 style={{ fontFamily: 'Arial Black' }} className="text-[70px]">
            Choose Us ?
          </h1>
        </div>
        <div className=" absolute left-[19%] top-[55%] flex flex-col gap-6 text-[30px]">
          <span>1.Innovative Solutions</span>
          <span>2.Extensive Experiences</span>
          <span>3.Trusted Professional</span>
          <span>4.Excellent Service</span>
        </div>
        <p className=" absolute left-[48.5%] top-[54%] max-w-[200px] font-semibold">
          I recently tried WS service and was thoroughly Impressed! The
          convenience of consulting with a healthcare professional from my home
          was unparalleled. Highly recommend for anyone needing medical advice
          without the hassle of visiting a clinic!
        </p>
        <p className=" absolute left-[64.5%] top-[25%] max-w-[300px] font-semibold">
          Wellness Stream service is a game changer! It's so easy to usee, and
          the doctor was attentive and knowledgeable, providing clear
          explanations and sound advice.
        </p>
        <p className=" absolute left-[64.5%] top-[64%] max-w-[200px] font-semibold">
          I was able to get a prescription filled the next day, which was
          incredibly convenient. It's comforting to know that quality healthcare
          is just a click away. I will definitely be using this service again.
        </p>
      </div>
      <div className=" relative w-full sm:hidden">
        <img src="/comment1.png" alt="comment png" className=" h-full w-full" />
        <img src="/comment2.png" alt="comment png" className=" h-full w-full" />
        <img src="/comment3.png" alt="comment png" className=" h-full w-full" />
      </div>
      {/* Map */}
      <div
        style={{ backgroundImage: "url('./map.jpg')" }}
        className=" relative mt-16 hidden h-screen w-full bg-contain bg-center bg-no-repeat sm:block"
      >
        <div className=" absolute left-[16.5%] top-0">
          <h1
            style={{ fontFamily: 'Arial Black' }}
            className=" mb-[-2rem] text-start text-[70px]"
          >
            CURRENTLY PROVIDING
          </h1>
          <h1
            style={{ fontFamily: 'Arial Black' }}
            className=" text-start text-[70px]"
          >
            SERVICES IN THEE FOLLOWING STATES
          </h1>
        </div>
        <div className=" absolute left-[16.5%] top-[24%] flex flex-col">
          <div className=" flex flex-col">
            <span
              style={{ fontFamily: 'Arial Black' }}
              className=" text-[170px] leading-[170px] tracking-tighter text-[#16d793]"
            >
              36
            </span>
            <span
              style={{ fontFamily: 'Arial Bold' }}
              className=" max-w-[280px] text-[30px] font-bold leading-[30px]"
            >
              Number of states providing services
            </span>
          </div>
          <div className=" mt-[125px] flex flex-col">
            <span
              style={{ fontFamily: 'Arial Bold' }}
              className=" text-[30px] font-bold text-[#16d793]"
            >
              500+
            </span>
            <span className=" text-[18px]">
              Number of towns served by support
            </span>
          </div>
          <div className=" mt-[57px] flex flex-col">
            <span
              style={{ fontFamily: 'Arial Bold' }}
              className=" text-[30px] font-bold text-[#16d793]"
            >
              500+
            </span>
            <span className=" text-[18px]">
              Number of medical institutions available
            </span>
          </div>
        </div>
      </div>
      <div className=" relative w-full sm:hidden">
        <div className=" mt-8 flex flex-col text-center">
          <h1 style={{ fontFamily: 'Arial Black' }} className=" text-3xl">
            CURRENTLY PROVIDING
          </h1>
          <h1 style={{ fontFamily: 'Arial Black' }} className=" text-3xl">
            SERVICES IN THEE FOLLOWING STATES
          </h1>
        </div>
        <img
          src="/mapMobile.png"
          alt="mapMobile png"
          className=" mt-8 h-full w-full"
        ></img>
        <div className=" ml-10 flex flex-col items-start gap-4">
          <div className=" mt-4 flex flex-col">
            <span
              style={{ fontFamily: 'Arial Black' }}
              className="  text-4xl tracking-tighter text-[#16d793]"
            >
              36
            </span>
            <span
              style={{ fontFamily: 'Arial Bold' }}
              className=" text-lg font-bold"
            >
              Number of states providing services
            </span>
          </div>
          <div className=" flex flex-col ">
            <span
              style={{ fontFamily: 'Arial Bold' }}
              className=" text-xl font-bold text-[#16d793]"
            >
              500+
            </span>
            <span className=" text-sm">Number of towns served by support</span>
          </div>
          <div className=" flex flex-col ">
            <span
              style={{ fontFamily: 'Arial Bold' }}
              className=" text-xl font-bold text-[#16d793]"
            >
              500+
            </span>
            <span className=" text-sm">
              Number of medical institutions available
            </span>
          </div>
        </div>
      </div>
      {/* Faq */}
      <div
        style={{ backgroundImage: "url('./footer.jpg')" }}
        className=" relative mt-8 flex h-screen w-full flex-col items-center bg-center bg-no-repeat sm:mt-32"
      >
        <h1
          style={{ fontFamily: 'Arial Black' }}
          className=" w-fit text-center text-3xl sm:mt-[4rem] sm:text-[70px]"
        >
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <div className="mt-[3rem] w-[69%]">
          <Accordion selectionMode="multiple">
            <AccordionItem
              indicator={({ isOpen }) =>
                isOpen ? (
                  <img src="/sub.png" className=" h-6"></img>
                ) : (
                  <img src="/plus.png" className=" h-6"></img>
                )
              }
              classNames={{
                title: ' text-lg sm:!text-[30px]',
                indicator: 'data-[open=true]:rotate-0'
              }}
              title="What's Wellness Stream?"
            >
              Wellness Stream Health Is a patient & engagement software
              platform.We work with practitioners who provide services
              utillizing our Patient Engagement Module.
            </AccordionItem>
            <AccordionItem
              indicator={({ isOpen }) =>
                isOpen ? (
                  <img src="/sub.png" className=" h-6"></img>
                ) : (
                  <img src="/plus.png" className=" h-6"></img>
                )
              }
              classNames={{
                title: ' text-lg sm:!text-[30px]',
                indicator: 'data-[open=true]:rotate-0'
              }}
              title="Is Wellness Stream suitable for all ages and fitness levels?"
            >
              Wellness Stream is for Adults only.
            </AccordionItem>
            <AccordionItem
              indicator={({ isOpen }) =>
                isOpen ? (
                  <img src="/sub.png" className=" h-6"></img>
                ) : (
                  <img src="/plus.png" className=" h-6"></img>
                )
              }
              classNames={{
                title: ' text-lg sm:!text-[30px]',
                indicator: 'data-[open=true]:rotate-0'
              }}
              title="How do I get started with Wellness Stream?"
            >
              Please complete the intake fromsby clicking the link below.
            </AccordionItem>
            <AccordionItem
              indicator={({ isOpen }) =>
                isOpen ? (
                  <img src="/sub.png" className=" h-6"></img>
                ) : (
                  <img src="/plus.png" className=" h-6"></img>
                )
              }
              classNames={{
                title: ' text-lg sm:!text-[30px]',
                indicator: 'data-[open=true]:rotate-0'
              }}
              title="How does the Wellness Stream work?"
            >
              Wellness Stream works by providing personalized assessments,
              customized wellness plans, one-on-one coaching, access to
              resources, and a supportive community. We guide you every step of
              the way toward a healthier lifestyle.
            </AccordionItem>
            <AccordionItem
              indicator={({ isOpen }) =>
                isOpen ? (
                  <img src="/sub.png" className=" h-6"></img>
                ) : (
                  <img src="/plus.png" className=" h-6"></img>
                )
              }
              classNames={{
                title: ' text-lg sm:!text-[30px]',
                indicator: 'data-[open=true]:rotate-0'
              }}
              title="Are the wellness coaches certfied?"
            >
              Absolutely, our wellness coaches are highly trained and certified
              professionals with expertise in various aspects of wellness,
              including nutrition, fitness, and mindfulness.
            </AccordionItem>
          </Accordion>
        </div>
        <img
          src="/contact.png"
          className="mt-8 hidden h-full w-full sm:block"
        ></img>
        {/* Contact png*/}
        <img
          src="/footerMobile1.png"
          alt="footerMobile png"
          className=" h-full w-full sm:hidden"
        />
        <img
          src="/footerMobile2.png"
          alt="footerMobile png"
          className=" h-full w-full sm:hidden"
        />
      </div>
    </main>
  );
}
