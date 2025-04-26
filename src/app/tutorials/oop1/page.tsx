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
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center min-h-screen">
          <h1 className="text-white text-[50px] font-bold pt-3 pb-3">OOP 1</h1>

          {/* Introduction Section */}
          <div
            ref={introductionRef as React.RefObject<HTMLDivElement>}
            className="bg-[#121212] rounded-lg p-5 mb-5"
          >
            <div className="w-[60vh] text-white">
              <h1 className="text-2xl font-bold mb-4">Introduction</h1>
              <h2 className="text-xl font-semibold mb-2">
                Definition: What is OOP?
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Object Oriented Programming (OOP) is a concept that organizes
                software and coding around data, models, or objects instead of
                functions and logic. We learn about OOP as it's very applicable
                to real world use cases and can model everyday life. One key
                concept is using classes & objects. Classes are like a
                blueprint, while objects are instances of those blueprints.
                Objects fill in attributes that the class has defined and enable
                predefined methods to become useful.
              </p>
              <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
              <h3 className="text-lg font-semibold mb-2">
                Misunderstanding static vs. instance methods
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
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
              <h3 className="text-lg font-semibold mb-2">
                Improper Access Modifiers Usage
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Oftentimes fields are made public, which does not comply with
                encapsulation principles. It's great practice to make all fields
                private and to create accessor/mutator methods in order to
                access/modify such fields.
              </p>
              <h3 className="text-lg font-semibold mb-2">
                Not using overloaded constructors/overloaded methods
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Sometimes, you would want different methods for different use
                cases, and it's completely fine to create different methods of
                the same name but with different arguments. This way, it allows
                for more flexibility within your application.
              </p>
            </div>
          </div>

          {/* UMLs Section */}
          <div ref={umlsRef} className="bg-[#121212] rounded-lg p-5 mb-5">
            <div className="w-[60vh] text-white">
              <h1 className="text-2xl font-bold mb-4">UMLs</h1>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Unified Modeling Languages (UMLs) are a great way of visually
                representing classes. They are like plans that we make before
                starting to program, since it's a good way to organize what
                attributes and methods are going to be used in the class.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                UMLs can be mapped in a neat and organized way to show
                relationships between different classes. It gives a sense of the
                logical flow in a program.
              </p>
              <Image
                src="/uml.png"
                alt="Header Artwork"
                width={800}
                height={300}
                className="w-full object-cover rounded-md mb-4"
              />
            </div>
          </div>

          {/* Instance vs Static Methods Section */}
          <div
            ref={instanceStaticRef}
            className="bg-[#121212] rounded-lg p-5 mb-5"
          >
            <div className="w-[60vh] text-white">
              <h1 className="text-2xl font-bold mb-4">
                Instance vs Static Methods
              </h1>
              <p className="text-white text-sm text-gray-300 leading-relaxed mb-6">
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
                className="w-full object-cover rounded-md mb-4"
              />

              <p className="text-white text-sm text-gray-300 leading-relaxed mb-6">
                Static methods are methods that belong to the class. They don't
                require an object of the class to be created in order to be
                used. Example implementation:
              </p>
              <Image
                src="/banana2.png"
                alt="Header Artwork"
                width={800}
                height={300}
                className="w-full object-cover rounded-md mb-4"
              />
            </div>
          </div>

          {/* Constructors Section */}
          <div
            ref={constructorsRef}
            className="bg-[#121212] rounded-lg p-5 mb-5"
          >
            <div className="w-[60vh] text-white">
              <h2 className="text-xl font-semibold mb-2">Constructors</h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Constructors are a special type of method that is used for
                initialization of an object and is automatically called whenever
                an object is created. A default constructor is automatically
                created by the compiler if no constructors are defined in the
                class. Constructors do not have a return type, not even void.
                Constructors are able to be overloaded and even chained.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
