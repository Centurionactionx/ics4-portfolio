"use client";
/* eslint-disable react/no-unescaped-entities */


import Image from "next/image";
import { useRef } from "react";

export default function OOP3() {
  // Refs for each section
  const introductionRef = useRef<HTMLDivElement>(null!);
  const thisSuperRef = useRef<HTMLDivElement>(null!);
  const bindingRef = useRef<HTMLDivElement>(null!);
  const polymorphismRef = useRef<HTMLDivElement>(null!);
  const abstractRef = useRef<HTMLDivElement>(null!);
  const interfacesRef = useRef<HTMLDivElement>(null!);
  const comparisonRef = useRef<HTMLDivElement>(null!);
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
                    onClick={() => scrollToSection(thisSuperRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    2. this() and super()
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(bindingRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    3. Static vs Dynamic Binding
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(polymorphismRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    4. Polymorphism
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(abstractRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    5. Abstract Classes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(interfacesRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    6. Interfaces
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(comparisonRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    7. Interfaces vs Abstract classes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(mistakesRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    8. Common Mistakes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(sourcesRef)}
                    className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                  >
                    9. References
                  </button>
                </li>
              </ul>
            </div>
          </div>


          <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-white text-[50px] font-bold pt-3 pb-3">
              OOP 3
            </h1>

            {/* Introduction Section */}
            <div ref={introductionRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">Introduction and Definitions</h1>
                <p className="section-paragraph">
                  OOP 3 explores more of the advanced concepts and techniques in
                  object-oriented programming. The concepts improve code
                  flexibility, but more importantly, scalability. OOP 1
                  introduces basic concepts of classes and objects, OOP 2
                  introduces inheritance and expands on relationships between
                  classes, OOP 3 teaches complex mechanics that allow for more
                  control over object behavior, inheritance, and polymorphism.
                </p>
              </div>
            </div>

            {/* this() and super() Section */}
            <div ref={thisSuperRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">this() and super() Functions</h1>
                <p className="section-paragraph">
                  this() is used to call the current class’s constructor or
                  instance variable. It’s used to prevent confusion between
                  potential duplicate items.
                </p>
                <Image
                  src="/this.png"
                  alt="this() Example"
                  width={800}
                  height={300}
                  className="example-code"
                />
                <p className="section-paragraph">
                  super() is used to call the superclass’s constructor, methods,
                  or uncommonly, its variables. It’s used to extend classes
                  properly and initialize anything that has been inherited
                </p>
                <Image
                  src="/super.png"
                  alt="super() Example"
                  width={800}
                  height={300}
                  className="example-code"
                />
              </div>
            </div>

            {/* Static vs Dynamic Binding Section */}
            <div ref={bindingRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">Static vs Dynamic Binding</h1>
                <p className="section-paragraph">
                  Static binding is something that happens at compile time. It’s
                  when a method is called based on the type of the reference
                  variable instead of the actual object.
                </p>
                <Image
                  src="/static.png"
                  alt="Static Binding Example"
                  width={800}
                  height={300}
                  className="example-code"
                />
                <p className="section-paragraph">
                  Dynamic binding is something that happens at run time. It’s
                  when methods are actually called with the actual object type
                  instead of the reference variable type. This allows for
                  polymorphism.
                </p>
                <Image
                  src="/dynamic.png"
                  alt="Dynamic Binding Example"
                  width={800}
                  height={300}
                  className="example-code"
                />
              </div>
            </div>

            {/* Polymorphism Section */}
            <div ref={polymorphismRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">Polymorphism</h1>
                <p className="section-paragraph">
                  Polymorphism is the use of one symbol to represent multiple
                  different types of objects. For example, you can use
                  polymorphism when you want to assign a subclass to a reference
                  variable of the superclass’s type. For example, if you had a
                  class called Aircraft and a subclass of Aircraft called
                  PassengerPlane, you can create an object of PassengerPlane and
                  assign it to a reference variable of type Aircraft.
                  Polymorphism allows for code flexibility and reusability. Even
                  though it might not seem like it at first, polymorphism
                  simplifies code by treating different objects uniformly.
                </p>
                <p className="section-paragraph">Example implementation:</p>
                <Image
                  src="/polymorphism.png"
                  alt="Polymorphism Example"
                  width={800}
                  height={300}
                  className="example-code"
                />
              </div>
            </div>

            {/* Abstract Classes Section */}
            <div ref={abstractRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">Abstract Classes</h1>
                <p className="section-paragraph">
                  Abstract classes are classes that are like blueprints for
                  other classes. Objects of abstract classes cannot be
                  instantiated directly but can be subclasses. Abstract classes
                  are declared with the abstract keyword. Abstract classes are
                  used when you want to share code with classes that are closely
                  related with each other. This is because similarly related
                  subclasses need common methods or fields, which would be made
                  easier with abstract classes serving as blueprints for
                  subclasses.
                </p>
                <p className="section-paragraph">
                  Example implementation with payment gateways of different
                  companies:
                </p>
                <Image
                  src="/abstract1.png"
                  alt="Abstract Example"
                  width={800}
                  height={300}
                  className="example-code"
                />
              </div>
            </div>

            {/* Interfaces Section */}
            <div ref={interfacesRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">Interfaces</h1>
                <p className="section-paragraph">
                  Interfaces define a set of requirements that implementing
                  classes must fulfill. They define what a class can do, without
                  defining how it can do it. That is something that can be
                  overridden inside the class to customize the method’s
                  behaviors. Interfaces are used when you want to define methods
                  without actually implementing them yet. They can also be used
                  when classes are similar to each other, since they need to
                  share common behaviour which is easily implemented with
                  interfaces.
                </p>
                <p className="section-paragraph">
                  Example implementation using interface SmartDevice:
                </p>
                <Image
                  src="/interface1.png"
                  alt="Interface Example"
                  width={800}
                  height={300}
                  className="example-code"
                />
                <Image
                  src="/interface2.png"
                  alt="Interface Example"
                  width={800}
                  height={300}
                  className="example-code"
                />
              </div>
            </div>

            <div ref={comparisonRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">
                  Interfaces vs Abstract Classes
                </h1>

                <div className="overflow-x-auto mb-5">
                  <table className="min-w-full border border-gray-700">
                    <thead>
                      <tr className="bg-[#1a1a1a]">
                        <th className="px-4 py-2 text-left border-b border-gray-700">
                          Feature
                        </th>
                        <th className="px-4 py-2 text-left border-b border-gray-700">
                          Abstract Classes
                        </th>
                        <th className="px-4 py-2 text-left border-b border-gray-700">
                          Interfaces
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Row 1 */}
                      <tr className="border-b border-gray-700">
                        <th className="px-4 py-2 text-left">
                          Multiple inheritance
                        </th>
                        <td className="px-4 py-2">No</td>
                        <td className="px-4 py-2">Yes</td>
                      </tr>

                      {/* Row 2 */}
                      <tr className="border-b border-gray-700">
                        <th className="px-4 py-2 text-left">
                          Instance variables{" "}
                        </th>
                        <td className="px-4 py-2">Yes</td>
                        <td className="px-4 py-2">No (constants only)</td>
                      </tr>

                      {/* Row 3 */}
                      <tr className="border-b border-gray-700">
                        <th className="px-4 py-2 text-left">Has Constructor</th>
                        <td className="px-4 py-2">Yes</td>
                        <td className="px-4 py-2">No</td>
                      </tr>

                      {/* Row 4 */}
                      <tr className="border-b border-gray-700">
                        <th className="px-4 py-2 text-left">
                          Method implementation
                        </th>
                        <td className="px-4 py-2">
                          Can have both abstract and concrete methods
                        </td>
                        <td className="px-4 py-2">
                          Abstract methods (and default/static in Java 8+)
                        </td>
                      </tr>

                      {/* Row 5 */}
                      <tr className="border-b border-gray-700">
                        <th className="px-4 py-2 text-left">
                          Access modifiers
                        </th>
                        <td className="px-4 py-2">Any</td>
                        <td className="px-4 py-2">Public only (methods)</td>
                      </tr>

                      {/* Row 6 */}
                      <tr className="border-b border-gray-700">
                        <th className="px-4 py-2 text-left">Inheritance</th>
                        <td className="px-4 py-2">
                          A class can extend only one abstract class
                        </td>
                        <td className="px-4 py-2">
                          A class can implement multiple interfaces
                        </td>
                      </tr>

                      {/* Row 7 */}
                      <tr className="border-b border-gray-700">
                        <th className="px-4 py-2 text-left">Purpose</th>
                        <td className="px-4 py-2">
                          "Is-a" relationship, partial implementation
                        </td>
                        <td className="px-4 py-2">
                          "Can-do" relationship, capability
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="section-paragraph">
                  The choice between interfaces and abstract classes depends on
                  your design needs.
                </p>
              </div>
            </div>

            {/* Common Mistakes Section */}
            <div ref={mistakesRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">Common Mistakes</h1>
                <h2 className="text-xl font-semibold mb-2">
                  Not calling super() or this() first in a subclass's
                  constructors
                </h2>
                <p className="section-paragraph">
                  super() or this() has to be the first statement in a
                  subclass's constructor. People often rush into initializing
                  fields and attributes inside the subclass before calling the
                  parent constructor. It's also a common mistake to forget this
                  on tests and FRQ questions.
                </p>

                <pre className="code-block">
                  <code>{`// Banana inheritance example
public class Fruit {
  protected String origin;
  
  public Fruit(String origin) {
    this.origin = origin;
  }
}

public class Banana extends Fruit {
  private boolean isRipe;
  
  // Correct constructor
  public Banana(String origin, boolean ripe) {
    super(origin);  // MUST be first statement
    this.isRipe = ripe;
  }
  
  // INCORRECT constructor
  public Banana(String origin, boolean ripe) {
    this.isRipe = ripe;  // ERROR: super() must be first
    super(origin);
  }
}`}</code>
                </pre>
                <h2 className="text-xl font-semibold mb-2">
                  Confusing static and dynamic binding
                </h2>
                <p className="section-paragraph">
                  Static binding at compile time figures out which methods are
                  available to use based on the reference variable's type. But
                  dynamic binding determines which to use based on the actual
                  object's type. The solution to this problem is often to
                  downcast or upcast to the appropriate type.
                </p>

                <pre className="code-block">
                  <code>{`// Banana binding example
public class Banana {
  public void peel() {
    System.out.println("Peeling a generic banana");
  }
}

public class CavendishBanana extends Banana {
  @Override
  public void peel() {
    System.out.println("Peeling a Cavendish banana");
  }
  
  public void specialPeel() {
    System.out.println("Special Cavendish peel");
  }
}

// Test class
public class BananaTest {
  public static void main(String[] args) {
    Banana banana = new CavendishBanana();
    banana.peel();  // Dynamic binding - calls CavendishBanana's peel()
    
    // banana.specialPeel();  // Compile error - static binding sees Banana type
    ((CavendishBanana)banana).specialPeel();  // Solution: downcast
  }
}`}</code>
                </pre>
              </div>
            </div>

            {/* Sources Section */}
            {/* Sources Section */}
            <div ref={sourcesRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">References</h1>

                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300 pb-5">
                  <li>
                    <span className="font-semibold">Core OOP Concepts:</span>
                    <a
                      href="https://drive.google.com/file/d/14M8uXmlNZlOISfPyGy4UW0y-xEVKYgMH/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline ml-1"
                    >
                      Inheritance, Interfaces, and Polymorphism Teaching
                      Material
                    </a>
                  </li>

                  <li>
                    <span className="font-semibold">this/super Keywords:</span>
                    <a
                      href="https://www.scaler.com/topics/java/this-and-super-keyword-in-java/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline ml-1"
                    >
                      Scaler - this() and super() in Java
                    </a>
                  </li>

                  <li>
                    <span className="font-semibold">Binding:</span>
                    <a
                      href="https://www.baeldung.com/java-static-dynamic-binding"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline ml-1"
                    >
                      Baeldung - Static vs Dynamic Binding
                    </a>
                  </li>

                  <li>
                    <span className="font-semibold">Polymorphism:</span>
                    <a
                      href="https://www.datacamp.com/doc/java/polymorphism"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline ml-1"
                    >
                      DataCamp - Java Polymorphism
                    </a>
                    ,
                    <a
                      href="https://www.w3schools.com/java/java_polymorphism.asp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline ml-1"
                    >
                      W3Schools - Java Polymorphism
                    </a>
                  </li>

                  <li>
                    <span className="font-semibold">Abstract Classes:</span>
                    <a
                      href="https://www.w3schools.com/java/java_abstract.asp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline ml-1"
                    >
                      W3Schools - Abstract Classes
                    </a>
                  </li>

                  <li>
                    <span className="font-semibold">Interfaces:</span>
                    <a
                      href="https://www.w3schools.com/java/java_interface.asp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline ml-1"
                    >
                      W3Schools - Interfaces
                    </a>
                    ,
                    <a
                      href="https://www.digitalocean.com/community/tutorials/difference-between-abstract-class-and-interface-in-java"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline ml-1"
                    >
                      DigitalOcean - Abstract Class vs Interface
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
