"use client";

import Image from "next/image";
import { useRef } from "react";

export default function OOP2() {
  // Refs for each section
  const introductionRef = useRef<HTMLDivElement>(null!);
  const mutatorAccessorRef = useRef<HTMLDivElement>(null!);
  const superSubclassRef = useRef<HTMLDivElement>(null!);
  const isAHasARef = useRef<HTMLDivElement>(null!);
  const commonMistakesRef = useRef<HTMLDivElement>(null!);

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
                  onClick={() => scrollToSection(mutatorAccessorRef)}
                  className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                >
                  2. Mutator and Accessor Methods
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(superSubclassRef)}
                  className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                >
                  3. Super-Subclass Relationship
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(isAHasARef)}
                  className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                >
                  4. IS-A(n) and HAS-A(n) Relationships
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
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center min-h-screen">
          <h1 className="text-white text-[50px] font-bold pt-3 pb-3">OOP 2</h1>

          {/* Introduction Section */}
          <div
            ref={introductionRef}
            className="bg-[#121212] rounded-lg p-5 mb-5"
          >
            <div className="w-[60vh] text-white">
              <h1 className="text-2xl font-bold mb-4">Introduction</h1>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                OOP 2 gets into more of the details of OOP 1, while building on
                the fundamentals that have been introduced in OOP 1. It talks
                about relationships between classes and more of the proper ways
                to design classes.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                In OOP2, you learn about how to create class hierarchies using
                inheritance, implementing polymorphism, and finding
                relationships between objects. Overall, these concepts can help
                you make more flexible and scalable applications by modeling
                even more complicated real-world relationships.
              </p>
            </div>
          </div>

          {/* Mutator and Accessor Methods Section */}
          <div
            ref={mutatorAccessorRef}
            className="bg-[#121212] rounded-lg p-5 mb-5"
          >
            <div className="w-[60vh] text-white">
              <h1 className="text-2xl font-bold mb-4">
                Mutator and Accessor Methods
              </h1>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Mutator and accessor methods are used to protect data. By making
                variables private and using getter and setter methods, you
                prevent direct access to internal data. This protects the
                integrity of the object by making sure that variables can’t be
                modified unintentionally or maliciously.
              </p>

              <h2 className="text-xl font-semibold mb-2">
                Accessor Methods (Getters)
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Accessor methods, also known as getter methods, retrieves
                information from a private attribute.
              </p>
              <Image
                src="/getters.png"
                alt="Getter Example"
                width={800}
                height={300}
                className="w-full object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">
                Mutator Methods (Setters)
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Mutator methods, also known as setter methods, modify attributes
                of the object. They are often called setter methods because they
                are often used to “set” attributes within an object.{" "}
              </p>
              <Image
                src="/setters.png"
                alt="Setter Example"
                width={800}
                height={300}
                className="w-full object-cover rounded-md mb-4"
              />
            </div>
          </div>

          {/* Super-Subclass Relationship Section */}
          <div
            ref={superSubclassRef}
            className="bg-[#121212] rounded-lg p-5 mb-5"
          >
            <div className="w-[60vh] text-white">
              <h1 className="text-2xl font-bold mb-4">
                Super-Subclass Relationship
              </h1>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                A superclass and subclass are related in that the subclass
                inherits public fields and methods from its superclass. The
                syntax is defined with: <br></br>
                [subclass name] extends [superclass name]”
                <br></br> <br></br>
                For example, here is a demonstration with a fruit and a banana,
                with the banana class extending the fruit class:
              </p>
              <Image
                src="/super-subclasses.png"
                alt="Setter Example"
                width={800}
                height={300}
                className="w-full object-cover rounded-md mb-4"
              />
            </div>
          </div>

          {/* IS-A(n) and HAS-A(n) Relationships Section */}
          <div ref={isAHasARef} className="bg-[#121212] rounded-lg p-5 mb-5">
            <div className="w-[60vh] text-white">
              <h1 className="text-2xl font-bold mb-4">
                IS-A(n) and HAS-A(n) Relationships
              </h1>

              <h2 className="text-xl font-semibold mb-2">
                IS-A Relationship (Inheritance)
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                IS-A relationships describe inheritance. For example, if I had
                two classes: Laptop and Computer, I could make Laptop a subclass
                of Computer since a laptop “is-a” computer. Therefore, the
                Laptop class has an “IS-A(n)” relationship with the Computer
                class. Implementation:
              </p>
              <Image
                src="/is-A.png"
                alt="IS-A Relationship"
                width={800}
                height={300}
                className="w-full object-cover rounded-md mb-4"
              />

              <h2 className="text-xl font-semibold mb-2">
                HAS-A Relationship (Composition)
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                HAS-A relationships describe composition. It’s where one class
                is composed of another. For example, if I had two classes:
                School and Classroom, I could say that School and Classroom have
                a “HAS-A” relationship since schools have classrooms.{" "}
              </p>
              <Image
                src="/has-A.png"
                alt="HAS-A Relationship"
                width={800}
                height={300}
                className="w-full object-cover rounded-md mb-4"
              />
            </div>
          </div>

          {/* Common Mistakes Section */}
          <div
            ref={commonMistakesRef}
            className="bg-[#121212] rounded-lg p-5 mb-5"
          >
            <div className="w-[60vh] text-white">
              <h1 className="text-2xl font-bold mb-4">Common Mistakes</h1>

              <h2 className="text-xl font-semibold mb-2">
                Not Validating Data in Mutator Methods
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                It's good practice to first check if inputted data is valid
                before performing actions in mutator methods. For example,
                values like distance, height, or age cannot be negative since
                that wouldn't make sense. Always validate inputs to maintain
                object integrity and prevent invalid states.
              </p>

              <h2 className="text-xl font-semibold mb-2">
                Inconsistent Naming Conventions for Accessor/Mutator Methods
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                It's good practice to use consistent naming conventions to avoid
                confusion and maintain simplicity within the program. For
                example, accessor methods should start with "get" and mutator
                methods should start with "set". Maintaining this convention
                makes your code more readable and predictable to other
                developers.
              </p>

              <h2 className="text-xl font-semibold mb-2">
                Forgetting to Call super() in Subclass Constructors
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Although Java implicitly calls the super constructor when an
                object of a subclass is created, it's still proper to explicitly
                call the super constructor when initializing subclass objects.
                This makes the code's intentions clearer and helps when you need
                to pass specific arguments to the superclass constructor.
              </p>

              <h2 className="text-xl font-semibold mb-2">
                Confusing IS-A and HAS-A Relationships
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Misapplying these relationships can lead to poor design.
                Remember: IS-A is for specialization (inheritance), HAS-A is for
                composition (object as field). Choosing the wrong relationship
                type can make your code harder to maintain and extend in the
                future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
