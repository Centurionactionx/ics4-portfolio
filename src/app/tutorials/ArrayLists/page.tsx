"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { useRef } from "react";

export default function ArrayLists() {
  // Refs for each section
  const introductionRef = useRef<HTMLDivElement>(null!);
  const declarationRef = useRef<HTMLDivElement>(null!);
  const methodsRef = useRef<HTMLDivElement>(null!);
  const operationsRef = useRef<HTMLDivElement>(null!);
  const examplesRef = useRef<HTMLDivElement>(null!);
  const mistakesRef = useRef<HTMLDivElement>(null!);
  const boxingRef = useRef<HTMLDivElement>(null!);
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
                    onClick={() => scrollToSection(declarationRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    2. Declaration
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(methodsRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    3. Methods
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(operationsRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    4. Operations
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(examplesRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    5. Examples
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(mistakesRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    6. Common Mistakes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(boxingRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    7. Autoboxing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(referencesRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    8. References
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-white text-[50px] font-bold pt-3 pb-3">
              ArrayLists
            </h1>

            {/* Introduction Section */}
            <div ref={introductionRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">Introduction</h1>
                <h2 className="text-xl font-semibold mb-2">Definition</h2>
                <p className="section-paragraph">
                  ArrayLists are like Arrays but with dynamic sizes. They are
                  different from traditional arrays because they can grow or
                  shrink as needed. They are more flexible for situations where
                  an amount of data might change over time. ArrayLists bring
                  many useful built in methods such as add(), remove(), size(),
                  get(), and contains() for manipulating and querying the list.
                  Different from traditional arrays, ArrayLists can only store
                  objects, not primitive types. For primitive types like int or
                  double, you must use their corresponding wrapper classes
                  (Integer, Double, etc.).
                </p>
              </div>
            </div>

            {/* Declaration Section */}
            <div ref={declarationRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">
                  Declaration and Initialization
                </h1>
                <p className="section-paragraph">
                  In order to be declared, it requires importing the
                  java.util.ArrayList class.
                </p>
                <p className="section-paragraph">
                  Once imported, ArrayLists can be declared and initialized with
                  the following syntax:
                </p>

                <pre className="code-block">
                  <code>
                    ArrayList&lt;[type]&gt; name = new
                    ArrayList&lt;[type]&gt;();
                  </code>
                </pre>

                <p className="section-paragraph">For example:</p>

                <pre className="code-block">
                  <code>
                    ArrayList&lt;String&gt; names = new
                    ArrayList&lt;String&gt;();
                  </code>
                </pre>
              </div>
            </div>

            {/* Methods Section */}
            <div ref={methodsRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">ArrayList Methods</h1>
                <p className="section-paragraph">
                  ArrayList specific methods include:
                </p>

                <ul className="list-disc pl-5 mb-6 text-sm text-gray-300">
                  <li className="mb-2">
                    <code>add()</code> - Adds an element to the ArrayList
                  </li>
                  <li className="mb-2">
                    <code>remove()</code> - Removes an element by index or value
                  </li>
                  <li className="mb-2">
                    <code>get()</code> - Retrieves an element by index
                  </li>
                  <li className="mb-2">
                    <code>set()</code> - Replaces an element at a specific index
                  </li>
                  <li className="mb-2">
                    <code>size()</code> - Returns the number of elements
                  </li>
                  <li className="mb-2">
                    <code>contains()</code> - Checks if an element exists
                  </li>
                </ul>

                <p className="section-paragraph">
                  These can mostly be found in the Java quick reference sheet.
                  The syntax for using these ArrayList methods is:
                </p>

                <pre className="code-block">
                  <code>
                    ArrayList&lt;Type&gt; name = new ArrayList&lt;Type&gt;();
                    {"\n"}
                    name.add(value);{"\n"}
                    name.get(index);{"\n"}
                    name.set(index, value);{"\n"}
                    name.remove(index);
                  </code>
                </pre>
              </div>
            </div>

            {/* Operations Section */}
            <div ref={operationsRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">
                  Accessing and Modifying Elements
                </h1>

                <h2 className="text-xl font-semibold mb-2">
                  Accessing Elements
                </h2>
                <p className="section-paragraph">
                  To access elements in an ArrayList, you can use the{" "}
                  <code>get()</code> or <code>contains()</code> methods.
                </p>

                <h2 className="text-xl font-semibold mb-2">
                  Modifying Elements
                </h2>
                <p className="section-paragraph">
                  To modify elements in an ArrayList, you can use the{" "}
                  <code>remove()</code> and <code>set()</code> methods.
                </p>

                <p className="section-paragraph">
                  <code>remove()</code> will return the element at the desired
                  index, remove it from the ArrayList, and shift all the
                  elements proceeding it forwards by 1, thus reducing their
                  indices by 1.
                </p>

                <p className="section-paragraph">
                  <code>set()</code> just sets the element at the desired index
                  to the desired new element.
                </p>
              </div>
            </div>

            {/* Examples Section */}
            <div ref={examplesRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">Examples</h1>

                <h2 className="text-xl font-semibold mb-2">Shopping Cart</h2>
                <p className="section-paragraph">
                  Impulse buyers might walk into a Costco just for the hot dog
                  but leave with $200 worth of items. In this scenario, the
                  intended list of purchases only includes one item. However,
                  using an ArrayList would be better because the purchase
                  quantity is actually unknown.
                </p>

                <Image
                  src="/shopping.png"
                  alt="Shopping Cart Example"
                  width={800}
                  height={300}
                  className="example-code"
                />
              </div>
            </div>

            {/* Autoboxing Section */}
            <div ref={boxingRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">Autoboxing and Autounboxing</h1>
                <p className="section-paragraph">
                  Java automatically converts primitives to their wrapper
                  classes (autoboxing) and vice versa (unboxing).
                </p>

                <pre className="code-block">
                  <code>
                    {`ArrayList<Integer> numbers = new ArrayList<>();  
numbers.add(5); // Autoboxing (int -> Integer)  
int num = numbers.get(0); // Unboxing (Integer -> int)`}
                  </code>
                </pre>

                <p className="section-paragraph">
                  This situation can lead to a <code>NullPointerException</code>{" "}
                  error if the ArrayList contains null and is unboxed.
                </p>
              </div>
            </div>

            {/* Common Mistakes Section */}
            <div ref={mistakesRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">Common Mistakes</h1>

                <h2 className="text-xl font-semibold mb-2">
                  IndexOutOfBoundsException
                </h2>
                <p className="section-paragraph">
                  When using <code>ArrayList.size()</code> and referring to that
                  size to access an index inside the ArrayList. Remember that
                  indices are 0-based while size returns the count. This is
                  particularly common when iterating through collections or
                  trying to access the last element.
                </p>

                <pre className="code-block">
                  <code>{`// Banana basket example - WRONG
ArrayList<Banana> bananaBasket = new ArrayList<>();
bananaBasket.add(new Banana("Cavendish"));
bananaBasket.add(new Banana("Plantain"));

// Trying to access index 2 (size is 2) - CRASH!
Banana b = bananaBasket.get(bananaBasket.size());  // IndexOutOfBoundsException

// CORRECT way to get last banana
Banana lastBanana = bananaBasket.get(bananaBasket.size() - 1);`}</code>
                </pre>

                <h2 className="text-xl font-semibold mb-2">
                  Ignoring Autoboxing
                </h2>
                <p className="section-paragraph">
                  Forgetting that primitive types have to be fully typed out.
                  For example, <code>int</code> → <code>Integer </code>
                  when declaring <code>ArrayList&lt;Integer&gt;</code>. Java
                  automatically converts between primitives and their wrapper
                  classes (autoboxing/unboxing), but you still need to declare
                  collections with the wrapper types.
                </p>

                <pre className="code-block">
                  <code>{`// Banana ripeness tracking - Common mistakes

// WRONG: Can't use primitive type
// ArrayList<int> daysSincePicked = new ArrayList<>(); 

// CORRECT: Using Integer wrapper
ArrayList<Integer> daysSincePicked = new ArrayList<>();
daysSincePicked.add(3);   // Autoboxing int → Integer
daysSincePicked.add(5);

// Using in calculations (unboxing)
int totalDays = daysSincePicked.get(0) + daysSincePicked.get(1);

// NUANCE: Watch for NullPointerException
daysSincePicked.add(null);
int days = daysSincePicked.get(2);  // NullPointerException!`}</code>
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
                      href="https://www.w3schools.com/java/java_arraylist.asp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      W3Schools - Java ArrayLists
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Oracle Java Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://medium.com/@codingsam/common-mistakes-in-java-c138499e3a8e"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Common Java Mistakes
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1sWnDu2mpqf36EELEJJ5LHSgS_4mpSwhs/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Google Classroom: ArrayList Learning
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
