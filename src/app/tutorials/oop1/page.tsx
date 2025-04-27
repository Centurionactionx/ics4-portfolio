"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { useRef } from "react";

export default function OOP1() {
  // Change how we create the refs
  const introductionRef = useRef<HTMLDivElement>(null!); // Note the ! operator
  const umlsRef = useRef<HTMLDivElement>(null!);
  const instanceStaticRef = useRef<HTMLDivElement>(null!);
  const constructorsRef = useRef<HTMLDivElement>(null!);
  const sourcesRef = useRef<HTMLDivElement>(null!);
  const commonMistakesRef = useRef<HTMLDivElement>(null!);

  // Update the scroll function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-black pt-16">
      <div className="flex items-center justify-center">
        {/* Contents Menu */}
        <div className="w-64 fixed left-0 top-20 h-screen p-4 overflow-y-auto">
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
                  onClick={() => scrollToSection(umlsRef)}
                  className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                >
                  2. UMLs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(instanceStaticRef)}
                  className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                >
                  3. Instance vs Static Methods
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(constructorsRef)}
                  className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                >
                  4. Constructors
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(commonMistakesRef)}
                  className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                >
                  5. Common Mistakes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(sourcesRef)}
                  className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                >
                  6. References
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center min-h-screen">
          <h1 className="text-white text-[50px] font-bold pt-3 pb-3">OOP 1</h1>

          {/* Introduction Section */}
          <div
            ref={introductionRef as React.RefObject<HTMLDivElement>}
            className="section-container"
          >
            <div className="section-content">
              <h1 className="section-title">Introduction</h1>
              <h2 className="text-xl font-semibold mb-2">
                Definition: What is OOP?
              </h2>
              <p className="section-paragraph">
                Object Oriented Programming (OOP) is a concept that organizes
                software and coding around data, models, or objects instead of
                functions and logic. We learn about OOP as it's very applicable
                to real world use cases and can model everyday life. One key
                concept is using classes & objects. Classes are like a
                blueprint, while objects are instances of those blueprints.
                Objects fill in attributes that the class has defined and enable
                predefined methods to become useful.
              </p>
            </div>
          </div>

          {/* UMLs Section */}
          <div ref={umlsRef} className="section-container">
            <div className="section-content">
              <h1 className="section-title">UMLs</h1>
              <p className="section-paragraph">
                Unified Modeling Languages (UMLs) are a great way of visually
                representing classes. They are like plans that we make before
                starting to program, since it's a good way to organize what
                attributes and methods are going to be used in the class.
              </p>
              <p className="section-paragraph">
                UMLs can be mapped in a neat and organized way to show
                relationships between different classes. It gives a sense of the
                logical flow in a program.
              </p>
              <Image
                src="/uml.png"
                alt="Header Artwork"
                width={800}
                height={300}
                className="example-code"
              />
            </div>
          </div>

          {/* Instance vs Static Methods Section */}
          <div ref={instanceStaticRef} className="section-container">
            <div className="section-content">
              <h1 className="section-title">Instance vs Static Methods</h1>
              <p className="text-white section-paragraph">
                Instance methods are methods that belong to an object. Since
                they belong to an object, it requires an object of the class to
                be instantiated in order for the method to be used. This is
                different from static methods. Example implementation:
              </p>
              <Image
                src="/banana1.png"
                alt="Header Artwork"
                width={800}
                height={300}
                className="example-code"
              />

              <p className="text-white section-paragraph">
                Static methods are methods that belong to the class. They don't
                require an object of the class to be created in order to be
                used. Example implementation:
              </p>
              <Image
                src="/banana2.png"
                alt="Header Artwork"
                width={800}
                height={300}
                className="example-code"
              />
            </div>
          </div>

          {/* Constructors Section */}
          <div ref={constructorsRef} className="section-container">
            <div className="section-content">
              <h2 className="text-xl font-semibold mb-2">Constructors</h2>
              <p className="section-paragraph">
                Constructors are a special type of method that is used for
                initialization of an object and is automatically called whenever
                an object is created. A default constructor is automatically
                created by the compiler if no constructors are defined in the
                class. Constructors do not have a return type, not even void.
                Constructors are able to be overloaded and even chained.
              </p>
            </div>
          </div>

          {/* Common Mistakes Section */}
          <div ref={commonMistakesRef} className="section-container">
            <div className="section-content">
              <h1 className="section-title">Common Mistakes</h1>
              <h2 className="text-xl font-semibold mb-2">
                Misunderstanding static vs. instance methods
              </h2>
              <p className="section-paragraph">
                Sometimes, you might try to access instance variables from
                static methods which is not possible. Similarly, you also cannot
                reference "this" in static methods, nor can you call instance
                methods from static methods. This is because static methods
                belong to the class itself, not to any specific instance. They
                are called using the class name: ClassName.methodName(). On the
                other hand, instance methods belong to instances (or objects) of
                the class and are called using an object reference:
                objectName.methodName(). Additionally, you cannot call static
                methods using object references, since they are not tied to any
                particular instance and should be accessed through the class
                name instead.
              </p>
              <h2 className="text-xl font-semibold mb-2">
                Improper Access Modifiers Usage
              </h2>
              <p className="section-paragraph">
                Oftentimes fields are made public, which does not comply with
                encapsulation principles. It's great practice to make all fields
                private and to create accessor/mutator methods in order to
                access/modify such fields.
              </p>
              <h2 className="text-xl font-semibold mb-2">
                Not using overloaded constructors/overloaded methods
              </h2>
              <p className="section-paragraph">
                Sometimes, you would want different methods for different use
                cases, and it's completely fine to create different methods of
                the same name but with different arguments. This way, it allows
                for more flexibility within your application.
              </p>
            </div>
          </div>

          {/* Sources Section */}
          <div ref={sourcesRef} className="section-container">
            <div className="section-content">
              <h1 className="section-title">References</h1>

              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300 pb-5">
                <li>
                  <span className="font-semibold">OOP Foundations:</span>
                  <a
                    href="https://drive.google.com/file/d/1YRnTjd33LB4C8L6Uj8pMxe3E0V72A10M/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline ml-1"
                  >
                    OOP 1 Learning Material (Google Classroom)
                  </a>
                  ,
                  <a
                    href="https://drive.google.com/file/d/1zlHPg0cPh0kOcAfHx-5h3PzWNsHlOMg-/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline ml-1"
                  >
                    Additional OOP 1 Material (Google Classroom)
                  </a>
                  ,
                  <a
                    href="https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline ml-1"
                  >
                    TechTarget - OOP Definition
                  </a>
                </li>

                <li>
                  <span className="font-semibold">UML Diagrams:</span>
                  <a
                    href="https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-uml/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline ml-1"
                  >
                    Visual Paradigm - UML Guide
                  </a>
                  ,
                  <a
                    href="https://slickplan.com/blog/how-to-make-a-uml-diagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline ml-1"
                  >
                    Slickplan - UML Diagram Tutorial
                  </a>
                </li>

                <li>
                  <span className="font-semibold">Methods & Constructors:</span>
                  <a
                    href="https://education.launchcode.org/java-web-development/chapters/classes-part2/instance-and-static-methods.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline ml-1"
                  >
                    LaunchCode - Instance vs Static Methods
                  </a>
                  ,
                  <a
                    href="https://www.w3schools.com/java/java_constructors.asp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline ml-1"
                  >
                    W3Schools - Java Constructors
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
