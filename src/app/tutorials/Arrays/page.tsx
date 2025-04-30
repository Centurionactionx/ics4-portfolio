"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { useRef } from "react";

export default function Arrays() {
  // Refs for each section
  const introductionRef = useRef<HTMLDivElement>(null!);
  const oneDArraysRef = useRef<HTMLDivElement>(null!);
  const twoDArraysRef = useRef<HTMLDivElement>(null!);
  const examplesRef = useRef<HTMLDivElement>(null!);
  const mistakesRef = useRef<HTMLDivElement>(null!);
  const referencesRef = useRef<HTMLDivElement>(null!);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-black pt-16">
      <div className="flex items-center justify-center">
        <div className="background-gradient">

          <div className="menu-container">
            <div className="bg-[#121212] rounded-lg p-4">
              <h2 className="text-white font-bold mb-4">Contents</h2>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection(introductionRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    1. Introduction
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(oneDArraysRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    2. 1D Arrays
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(twoDArraysRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    3. 2D Arrays
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(examplesRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    4. Examples
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(mistakesRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    5. Common Mistakes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(referencesRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    6. References
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-white text-[50px] font-bold pt-3 pb-3">
              Arrays
            </h1>

            {/* Introduction Section */}
            <div ref={introductionRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">Introduction and Definitions</h1>
                <p className="section-paragraph">
                  Arrays are one of the most important and most commonly used
                  data structures in programming. They allow us to store lists
                  of related values in an organized fashion.
                </p>
              </div>
            </div>

            {/* 1D Arrays Section */}
            <div ref={oneDArraysRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">1D Arrays</h1>
                <p className="section-paragraph">
                  1D arrays are arrays that have a single row of elements. As
                  the name suggests, the array only stores data in one
                  dimension. To declare an array, the syntax involves the array
                  type, immediately followed by square brackets, then the
                  array's name proceeding with a space.
                </p>

                <p className="section-paragraph">
                  After declaring the array, you can immediately assign values
                  to the array or declare an empty array of a set size. For
                  example, an empty array of integers named "ints" with 10
                  indexes would be created with:
                </p>

                <pre className="code-block">
                  <code>int[] ints = new int[10];</code>
                </pre>

                <p className="section-paragraph">
                  Java arrays' sizes cannot be changed after declaration. To
                  retrieve information from an array, it is done by saying the
                  array's name, immediately followed by a number inside square
                  brackets indicating the index of which you would like to
                  retrieve. Indexes in an array start at 0 since the decimal
                  system starts at 0. So the "first" element in an array would
                  be at index 0.
                </p>

                <p className="section-paragraph">For example:</p>

                <pre className="code-block text-wrap">
                  <code>
                    {`String[] weekdays = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"};`}
                  </code>
                </pre>

                <p className="section-paragraph">
                  In this array, to access Wednesday: <code>weekdays[2]</code>
                </p>
              </div>
            </div>

            {/* 2D Arrays Section */}
            <div ref={twoDArraysRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">2D Arrays</h1>
                <p className="section-paragraph">
                  2D arrays are arrays that have "rows" and "columns". They are
                  often described as a grid, with two dimensions to store data.
                  You can better visualize 2D arrays as just an array of arrays.
                  Each array inside the 2D array serves as each row. Each index
                  of each row serves as the column of the 2D array.
                </p>

                <p className="section-paragraph">
                  The syntax for initialization of a 2D array is as follows: the
                  array type, immediately followed by two sets of square
                  brackets, then the array's name. To assign a 2D array,
                  everything that comes after the assignment operator should be
                  "new [type of array][][]". Notice how there are two sets of
                  square brackets being used for 2D arrays. The first set
                  represents the number of arrays inside the 2D array, also
                  known as the number of rows. The second set represents the
                  number of indexes in each subsequent row, also known as the
                  number of columns in the 2D array.
                </p>

                <p className="section-paragraph">For example:</p>

                <pre className="code-block">
                  <code>int[][] ints = new int[4][3];</code>
                </pre>

                <p className="section-paragraph">
                  This creates a 2D array of integers with 4 rows and 3 columns
                  named ints.
                </p>
              </div>
            </div>

            {/* Examples Section */}
            <div ref={examplesRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">Examples</h1>

                <h2 className="text-xl font-semibold mb-2">
                  Fibonacci sequence implementation using arrays:
                </h2>
                <Image
                  src="/fibonacci.png"
                  alt="Fibonacci Example"
                  width={800}
                  height={300}
                  className="example-code"
                />

                <h2 className="text-xl font-semibold mb-2">
                  Reversing an array:
                </h2>
                <Image
                  src="/reverse.png"
                  alt="Reverse Example"
                  width={800}
                  height={300}
                  className="example-code"
                />
              </div>
            </div>

            {/* Common Mistakes Section */}
            <div ref={mistakesRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">Common Mistakes</h1>

                <h2 className="text-xl font-semibold mb-2">
                  IndexOutOfBoundsException errors
                </h2>
                <p className="section-paragraph">
                  It's a common mistake to access an array index that doesn't
                  exist. Commonly done through trying to access array.length
                  instead of array.length-1. Always remember that Java arrays
                  start at index 0, but length returns the count of elements of
                  the array.
                </p>

                <pre className="code-block">
                  <code>
                    {`int[] numbers = new int[3]; // indices: 0, 1, 2
numbers[3] = 10; // Throws ArrayIndexOutOfBoundsException`}
                  </code>
                </pre>

                <h2 className="text-xl font-semibold mb-2">
                  Using == to compare arrays
                </h2>
                <p className="section-paragraph">
                  If you would like to compare if two java arrays have the same
                  elements, it cannot be done using "==". This compares the
                  array's memory address, not content. Two different arrays with
                  identical elements are still different objects. Instead, use
                  Arrays.equals for content comparison:
                </p>

                <pre className="code-block">
                  <code>
                    {`if (Arrays.equals(a, b)) { // TRUE (checks values)
  System.out.println("Equal");
}`}
                  </code>
                </pre>
              </div>
            </div>

            {/* References Section */}
            <div ref={referencesRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">References</h1>

                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300 pb-5">
                  <li>
                    <a
                      href="https://www.w3schools.com/java/java_arrays.asp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      W3Schools - Java Arrays
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=MgRMA_qZxZ4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      YouTube: 1D Arrays Tutorial
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.freecodecamp.org/news/javascript-2d-arrays/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      freeCodeCamp: 2D Arrays Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=5v29UW14WPQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      YouTube: 2D Arrays Tutorial
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1rHdqNbysTjNvlfb6h3c-QXNwjzn9FPEt/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Google Classroom: Arrays Learning Material 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1Q-oOXtAciGTgGmtz4dvhm-jAg8TT3nbX/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Google Classroom: Arrays Learning Material 2
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
