import Image from "next/image";
/* eslint-disable react/no-unescaped-entities */


export default function Home() {
  return (
    <main className="min-h-screen bg-black pt-16">
      <div className="background-gradient">
        <div className="flex flex-col items-center min-h-screen">
          <div className="bg-[#121212] m-2.5 rounded-lg w-[80vh] p-6 flex flex-col items-center mt-4">
            <div className="w-full flex flex-col items-center">
              <Image
                src="/me.png"
                alt="Header Artwork"
                width={800}
                height={300}
                className="example-code"
              />
              <div className="grid grid-cols-2 gap-2.5 w-full">
                <div className="justify-self-start text-white text-left">
                  <h1 className="mb-0.5 text-2xl font-bold">Homepage</h1>
                  <p className="mt-0.5">Joseph Wang</p>
                </div>
                <div className="justify-self-end">
                  <Image
                    src="/like.png"
                    alt="Like"
                    width={50}
                    height={50}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="bg-white h-2.5 rounded-lg w-full my-4" />

              <div className="grid grid-cols-3 gap-2.5 w-full mt-2.5">
                <div className="flex justify-end">
                  <Image
                    src="/shuffle.png"
                    alt="Shuffle"
                    width={60}
                    height={60}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex justify-center items-center space-x-1">
                  <Image
                    src="/back.png"
                    alt="Back"
                    width={60}
                    height={60}
                    className="object-contain"
                    priority
                  />
                  <Image
                    src="/play.png"
                    alt="Play"
                    width={60}
                    height={60}
                    className="object-contain"
                    priority
                  />
                  <Image
                    src="/next.png"
                    alt="Next"
                    width={60}
                    height={60}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex justify-start">
                  <Image
                    src="/repeat.png"
                    alt="Repeat"
                    width={60}
                    height={60}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="section-container">
            <div className="section-content">
              <h2 className="section-title">Introduction</h2>
              <p className="section-paragraph">
                Welcome. This is my ICS4UO portfolio. This is where you can find
                my projects, hobbies, and all sorts of information about myself.
                Here, you will find tutorials through topics learned throughout
                the ICS4UO course. I hope after reading through my portfolio,
                you can gain a better understanding of myself, and my approach
                to solving and explaining different concepts.
              </p>

              <h2 className="section-title">About Me</h2>
              <p className="section-paragraph">
                My name is Joseph Wang, a Grade 10 student currently at William
                Lyon Mackenzie Collegiate Institute. My friends describe me as a
                mostly funny, sometimes quiet person. I have an interest in
                math, engineering, and various different sports. I particularly
                enjoy doing hands-on engineering projects, like robotics and
                engineering events in the science club. Outside of school, I
                play competitive Ultimate Frisbee, tutor students in math, and
                enjoy mountain biking if I’m not injured. After reading through
                the tutorials, you might discover that I have a liking for
                bananas.
              </p>

              <h2 className="section-title">Future Aspirations</h2>
              <p className="section-paragraph">
                My goal is to become an aerospace engineer. I like to work on
                hands-on engineering projects and I have a fascination for
                aerospace in general. I'd like to be able to work with a company
                that speciailzes in aerospace defense contracting. On top of
                that, I aspire to represent Canada on the world stage in
                Ultimate Frisbee. 
              </p>

              <h2 className="section-title">Personal Message</h2>
              <p className="section-paragraph">
                One of the biggest messages that I carry with me is the thought
                that everything is not as serious as it might seem. It could be
                when someone bumped you on a bus, or made an offensive joke towards
                your clothing during the day. At the end of the day, little things
                like that don't matter as much as you might overthink it does. 
                There's no point in worring about little things in life as it 
                only takes away your time from the more important ones. You should
                focus on the big picture and the things that really matter. If you
                can't focus on the important things, then you're not really living
                your life to the fullest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
