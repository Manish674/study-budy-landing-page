import Image from "next/image";
import Link from "next/link";

const FeatureCard = ({ heading, para }) => {
  return (
    <div className="min-w-[100%]">
      <div className="flex justify-center">
        <Image
          src="/images/VC.jpg"
          className="rounded-full"
          width={300}
          height={300}
        />
      </div>
      <div className="text-center mt-2">
        <h3 className="text-2xl font-normal">{heading}</h3>
        {para}
      </div>
    </div>
  );
};
export default function Home() {
  const featureData = [
    {
      heading: "StudyChat: Virtual Study Hangouts",
      para: (
        <p className="text-sm">
          Connect, collaborate, and excel with seamless video calls.{" "}
          <bold>Study together</bold>, anytime, anywhere
        </p>
      ),
    },
    {
      heading: "TaskTrack: Organize and Conquer",
      para: (
        <p className="text-sm">
          Your ultimate sidekick for student success. Organize, conquer, and
          stay on top of your academic tasks effortlessly
        </p>
      ),
    },
    // {
    //   heading: "StudyFlow: The Mastery Tool",
    //   para: (
    //     <p>
    //       Boost your focus and productivity with StudyFlow. Master time
    //       management and achieve study success effortlessly
    //     </p>
    //   ),
    // },
  ];

  return (
    <div>
      <div>
        <div className="lg:flex lg:h-screen items-center justify-around">
          <div className=" w-[50%] mt-16 flex flex-col items-center justify-center">
            <div className="">
              <h1 className="font-semibold text-center text-3xl">
                StudyBuddy: Connect, Collaborate, Excel <br /> The Ultimate
                Virtual Study Platform
              </h1>
              <p className="p-4 text-[#635f68] text-center">
                Welcome to StudyHub, virtual study platform designed to enhance
                your academic journey. Connect with fellow students through
                immersive video calls, collaborate seamlessly on projects, and
                unlock your full potential with our suite of productivity
                features.{" "}
              </p>
            </div>
            <Link href={'#join-waitlist'}>
              <button className="mt-4 bg-[#1a73e8] p-4 rounded-lg text-white font-medium">
                Join waitlist
              </button>
            </Link>
          </div>
          <hr className="my-8 w-3/4 mx-auto lg:hidden" />
          <div className="lg:w-[40%] flex w-[90%] mx-auto lg:mx-0">
            <div className=" my-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.605"
                height="15.555"
                fill="#635f68"
              >
                <path d="M10.605 12.727 5.656 7.776l4.949-4.948L7.777 0 0 7.776l7.777 7.779 2.828-2.828z" />
              </svg>
            </div>

            <div className="flex flex-nowrap overflow-hidden">
              {featureData.map((el, i) => (
                <FeatureCard key={i} heading={el.heading} para={el.para} />
              ))}
            </div>

            <div className=" my-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.605"
                height="15.555"
                fill="#635f68"
              >
                <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
              </svg>
            </div>
          </div>
        </div>
        <div
          id="join-waitlist"
          className="max-w-[600px] mx-auto lg:h-screen lg:flex items-center"
        >
          <div className="lg:w-full">
            <h2 className="font-semibold text-center text-4xl">
              Join the waitlist
            </h2>
            <form className="mt-8 flex flex-col space-y-4 w-[80%] mx-auto">
              <input
                autoComplete="off"
                name="name"
                placeholder="name"
                className="p-2 border border-[#ebebed] outline-none"
              />
              <input
                autoComplete="off"
                name="email"
                placeholder="email"
                className="p-2 border border-[#ebebed] outline-none"
              />
              <textarea
                name="thoughts"
                placeholder="Thoughts? Share below (optional)"
                className="p-2 border border-[#ebebed] outline-none h-[152px]"
              />
              <button className="bg-[#e92761] text-white p-4 rounded-lg  ">
                Join waitlist
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
