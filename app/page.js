import Image from "next/image";

const FeatureCard = () => {
  return (
    <div className="">
      <div className="flex flex-nowrap transform translatex-x-[-100%]">
        <Image
          src="/images/VC.jpg"
          className="rounded-full"
          width={300}
          height={300}
        />
        <Image src="/images/todo.jpg" width={300} height={300} />
        <Image src="/images/pomodoro-timer.jpg" width={300} height={300} />
      </div>
      <div className="text-center mt-2">
        <h3 className="text-2xl font-normal">Virtual Study Hangouts</h3>
        <p className="text-sm">
          Connect, collaborate, and excel with seamless video calls. Study
          together, anytime, anywhere
        </p>
      </div>
    </div>
  );
};
export default function Home() {
  return (
    <div>
      <div className="">
        <div className="mt-16 flex flex-col items-center justify-center">
          <div className="">
            <h1 className="font-semibold text-center text-4xl">
              Connect, Collaborate, and Excel: StudyBuddy <br /> The Ultimate
              Virtual Study Platform
            </h1>
            <p className="p-4 text-[rgb(95,99,104)] text-center">
              Welcome to StudyHub, virtual study platform designed to enhance
              your academic journey. Connect with fellow students through
              immersive video calls, collaborate seamlessly on projects, and
              unlock your full potential with our suite of productivity
              features.{" "}
            </p>
          </div>
          <button className="mt-4 bg-[#1a73e8] p-4 rounded-lg text-white font-medium">
            Join waitlist
          </button>
        </div>
        <hr className="my-8 w-3/4 mx-auto" />
        <div className="w-[80%] mx-auto flex overflow-hidden">
          <FeatureCard />
        </div>
      </div>
    </div>
  );
}
