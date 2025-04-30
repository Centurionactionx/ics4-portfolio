"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RecursionPage() {
  const introRef = useRef<HTMLDivElement>(null!);
  const baseCaseRef = useRef<HTMLDivElement>(null!);
  const examplesRef = useRef<HTMLDivElement>(null!);
  const mistakesRef = useRef<HTMLDivElement>(null!);
  const sourcesRef = useRef<HTMLDivElement>(null!);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-black pt-16">
      <div className="flex items-center justify-center">
        <div className="background-gradient">
          <div className="menu-container">
            <div className="bg-[#121212] rounded-lg p-4">
              <h2 className="text-white font-bold mb-4">Recursion Contents</h2>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection(introRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    1. Introduction
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(baseCaseRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    2. Base Cases
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(examplesRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    3. Examples
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(mistakesRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    4. Common Mistakes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(sourcesRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    5. References
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-white text-[50px] font-bold pt-3 pb-3">
              Recursion
            </h1>

            <div ref={introRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">Introduction</h1>
                <p className="section-paragraph">
                  Recursion is a programming technique where a function calls
                  itself to solve smaller instances of the same problem. It's
                  like a job with many irresponbiel and lazy workers. Each
                  worker passes on a given task to another worker below their
                  level. Eventually, it reaches the lowest level with no one
                  else to pass the task on to. Then, the task finally gets done.
                </p>
                <p className="section-paragraph">
                  In programming, recursive solutions often mirror mathematical
                  induction, with a base case and recursive case. They're
                  particularly useful for problems that can be divided into
                  similar subproblems, like tree traversals or
                  divide-and-conquer algorithms.
                </p>
                <figure>
                  <Image
                    src="/recursion1.png"
                    alt="Recursion example"
                    width={800}
                    height={300}
                    className="example-code mb-1"
                  />
                  <figcaption className="caption">
                    Example of a recursion diagram showing recursive calls. On
                    the right are the recursive returns through each call. From
                    Google Classroom Recursion Learning Material.
                  </figcaption>
                </figure>
              </div>
            </div>

            <div ref={baseCaseRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">The Importance of Base Cases</h1>
                <p className="section-paragraph">
                  Every recursive function must have a base case - the condition
                  that stops the recursion. Without it, the function would call
                  itself indefinitely until the stack overflows (hence the term
                  "stack overflow" error). Most IDEs will warn you if you don't have a base case. But it is important not to rely on the IDE to catch errors.
                </p>
                <p className="section-paragraph">
                  Consider peeling a banana - the base case is when there's no
                  peel left to remove:
                </p>
                <Image
                  src="/recursion5.png"
                  alt="Recursion Example"
                  width={800}
                  height={300}
                  className="example-code"
                />
              </div>
            </div>

            <div ref={examplesRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">Recursive Examples</h1>

                <h2 className="text-xl font-semibold mb-2">
                  1. Banana Counting
                </h2>
                <Image
                  src="/recursion2.png"
                  alt="Recursion Example"
                  width={800}
                  height={300}
                  className="example-code"
                />

                <h2 className="text-xl font-semibold mb-2 mt-4">
                  2. Banana Plant Growth
                </h2>
                <Image
                  src="/recursion3.png"
                  alt="Recursion Example"
                  width={800}
                  height={300}
                  className="example-code"
                />

                <h2 className="text-xl font-semibold mb-2 mt-4">
                  3. Binary Search Implementation
                </h2>
                <Image
                  src="/recursion4.png"
                  alt="Recursion Example"
                  width={800}
                  height={300}
                  className="example-code"
                />
              </div>
            </div>

            <div ref={mistakesRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">Common Recursion Mistakes</h1>

                <h2 className="text-xl font-semibold mb-2">
                  1. Missing Base Case
                </h2>
                <p className="section-paragraph">
                  Forgetting to include a base case leads to infinite recursion
                  and stack overflow error.
                </p>
                <pre className="code-block bg-red-900 bg-opacity-30">
                  <code>{`public static void peelBananaForever(int peelLayers) {
    peelLayers -= 1;
    peelBananaForever(peelLayers); // Infinite recursion because no base case is defined
}`}</code>
                </pre>

                <h2 className="text-xl font-semibold mb-2 mt-4">
                  2. Not Approaching Base Case
                </h2>
                <p className="section-paragraph">
                  Each recursive call should move closer to the base case. If it
                  doesn't, then it will just keep calling itself and cause a
                  stack overflow error.
                </p>
                <pre className="code-block bg-red-900 bg-opacity-30">
                  <code>{`public static String peelBananaWrong(int peelLayers) {
  if (peelLayers == 0) {
      return "Done";
  }
  return peelBananaWrong(peelLayers); // Not reducing peel layers, leading to an loop!
}`}</code>
                </pre>

                <h2 className="text-xl font-semibold mb-2 mt-4">
                  3. Stack Overflow
                </h2>
                <p className="section-paragraph">
                  Stack overflow is the result of the aforementioned issues. It
                  happens when base cases are not defined, or not approached
                  through every recursive call. This is easily fixed by defining
                  a base case and approaching it through every recursive call.
                </p>
              </div>
            </div>

            <div ref={sourcesRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">References</h1>

                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300 pb-5">
                  <li>
                    <span className="font-semibold">Binary Search:</span>
                    <a
                      href="https://www.geeksforgeeks.org/binary-search/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline ml-1"
                    >
                      GeeksforGeeks - Binary Search
                    </a>
                  </li>

                  <li>
                    <span className="font-semibold">Google Classroom:</span>
                    <a
                      href="https://drive.google.com/file/d/1eDBmng8DCPYTFfV16nlJJlMJOADK5fTR/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline ml-1"
                    >
                      Recursion Learning Material
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
