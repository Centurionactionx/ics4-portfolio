"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { useRef } from "react";

export default function OOP2() {
  // Refs for each section
  const introductionRef = useRef<HTMLDivElement>(null!);
  const mutatorAccessorRef = useRef<HTMLDivElement>(null!);
  const superSubclassRef = useRef<HTMLDivElement>(null!);
  const isAHasARef = useRef<HTMLDivElement>(null!);
  const commonMistakesRef = useRef<HTMLDivElement>(null!);
  const sourcesRef = useRef<HTMLDivElement>(null!);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-black pt-16">
      <div className="flex items-center justify-center">
        <div className="background-gradient">
          <div className="w-64 fixed left-0 top-37 h-screen p-4 overflow-y-auto">
            <div className="bg-[#121212] rounded-lg p-4">
              <h2 className="text-white font-bold mb-4">Contents</h2>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection(introductionRef)}
                    className="hover-button"
                  >
                    1. Introduction
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(mutatorAccessorRef)}
                    className="hover-button"
                  >
                    2. Mutator and Accessor Methods
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(superSubclassRef)}
                    className="hover-button"
                  >
                    3. Super-Subclass Relationship
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(isAHasARef)}
                    className="hover-button"
                  >
                    4. IS-A(n) and HAS-A(n) Relationships
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(commonMistakesRef)}
                    className="hover-button"
                  >
                    5. Common Mistakes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(sourcesRef)}
                    className="hover-button"
                  >
                    6. References
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-white text-[50px] font-bold pt-3 pb-3">
              OOP 2
            </h1>

            <div ref={introductionRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">Introduction</h1>
                <p className="section-paragraph">
                  OOP 2 gets into more of the details of OOP 1, while building
                  on the fundamentals that have been introduced in OOP 1. It
                  talks about relationships between classes and more of the
                  proper ways to design classes.
                </p>
                <p className="section-paragraph">
                  In OOP2, you learn about how to create class hierarchies using
                  inheritance, implementing polymorphism, and finding
                  relationships between objects. Overall, these concepts can
                  help you make more flexible and scalable applications by
                  modeling even more complicated real-world relationships.
                </p>
              </div>
            </div>

            <div ref={mutatorAccessorRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">Mutator and Accessor Methods</h1>
                <p className="section-paragraph">
                  Mutator and accessor methods are used to protect data. By
                  making variables private and using getter and setter methods,
                  you prevent direct access to internal data. This protects the
                  integrity of the object by making sure that variables can’t be
                  modified unintentionally or maliciously.
                </p>

                <h2 className="text-xl font-semibold mb-2">
                  Accessor Methods (Getters)
                </h2>
                <p className="section-paragraph">
                  Accessor methods, also known as getter methods, retrieves
                  information from a private attribute.
                </p>
                <Image
                  src="/getters.png"
                  alt="Getter Example"
                  width={800}
                  height={300}
                  className="example-code"
                />
                <h2 className="text-xl font-semibold mb-2">
                  Mutator Methods (Setters)
                </h2>
                <p className="section-paragraph">
                  Mutator methods, also known as setter methods, modify
                  attributes of the object. They are often called setter methods
                  because they are often used to “set” attributes within an
                  object.{" "}
                </p>
                <Image
                  src="/setters.png"
                  alt="Setter Example"
                  width={800}
                  height={300}
                  className="example-code"
                />
              </div>
            </div>

            <div ref={superSubclassRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">Super-Subclass Relationship</h1>
                <p className="section-paragraph">
                  A superclass and subclass are related in that the subclass
                  inherits public fields and methods from its superclass. A
                  subclass can use inherited methods and fields as they
                  originally were. Or, they can override inherited methods to
                  adjust for its needs. They can also add new fields and methods
                  that are specific to itself. A subclass object can be assigned
                  to a reference variable of its parent class. This is because
                  every subclass is also an instance of its superclass because
                  of inheritance. This is also known as upcasting, which gets
                  into polymorphism. However, the reverse is not allowed: you
                  cannot assign a superclass object to a subclass reference
                  variable without an explicit cast, and even then, it will
                  cause a runtime error if the object is not actually an
                  instance of the subclass The syntax is defined with: <br></br>
                  [subclass name] extends [superclass name]”
                  <br></br> <br></br>
                  For example, here is a demonstration with a fruit and a
                  banana, with the banana class extending the fruit class:
                </p>
                <Image
                  src="/super-subclasses.png"
                  alt="Setter Example"
                  width={800}
                  height={300}
                  className="example-code"
                />
              </div>
            </div>

            <div ref={isAHasARef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">
                  IS-A(n) and HAS-A(n) Relationships
                </h1>

                <h2 className="text-xl font-semibold mb-2">
                  IS-A Relationship (Inheritance)
                </h2>
                <p className="section-paragraph">
                  IS-A relationships describe inheritance. For example, if I had
                  two classes: Laptop and Computer, I could make Laptop a
                  subclass of Computer since a laptop “is-a” computer.
                  Therefore, the Laptop class has an “IS-A(n)” relationship with
                  the Computer class. Implementation:
                </p>
                <Image
                  src="/is-A.png"
                  alt="IS-A Relationship"
                  width={800}
                  height={300}
                  className="example-code"
                />

                <h2 className="text-xl font-semibold mb-2">
                  HAS-A Relationship (Composition)
                </h2>
                <p className="section-paragraph">
                  HAS-A relationships describe composition. It’s where one class
                  is composed of another. For example, if I had two classes:
                  School and Classroom, I could say that School and Classroom
                  have a “HAS-A” relationship since schools have classrooms.{" "}
                </p>
                <Image
                  src="/has-A.png"
                  alt="HAS-A Relationship"
                  width={800}
                  height={300}
                  className="example-code"
                />
              </div>
            </div>

            <div ref={commonMistakesRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">Common Mistakes</h1>

                <h2 className="text-xl font-semibold mb-2">
                  Not Validating Data in Mutator Methods
                </h2>
                <p className="section-paragraph">
                  It's good practice to first check if inputted data is valid
                  before performing actions in mutator methods. For example,
                  values like distance, height, or age cannot be negative since
                  that wouldn't make sense. Always validate inputs to maintain
                  object integrity and prevent invalid states.
                </p>

                <pre className="code-block">
                  <code>{`// Banana.java - With Validation
public class Banana {
  private int daysOld;
  
  public void setDaysOld(int days) {
    if (days < 0) {
      throw new IllegalArgumentException("Days cannot be negative");
    }
    this.daysOld = days;
  }
}`}</code>
                </pre>

                <h2 className="text-xl font-semibold mb-2">
                  Inconsistent Naming Conventions for Accessor/Mutator Methods
                </h2>
                <p className="section-paragraph">
                  It's good practice to use consistent naming conventions to
                  avoid confusion and maintain simplicity within the program.
                  For example, accessor methods should start with "get" and
                  mutator methods should start with "set". Maintaining this
                  convention makes your code more readable and predictable to
                  other developers.
                </p>

                <pre className="code-block">
                  <code>{`// Banana.java - Proper Naming
public class Banana {
  private String variety;
  
  // Good naming
  public String getVariety() { return variety; }
  public void setVariety(String v) { variety = v; }
  
  // Avoid inconsistent names like:
  // public String bananaType() { ... }  // Not standard
}`}</code>
                </pre>

                <h2 className="text-xl font-semibold mb-2">
                  Forgetting to Call super() in Subclass Constructors
                </h2>
                <p className="section-paragraph">
                  Although Java implicitly calls the super constructor when an
                  object of a subclass is created, it's still proper to
                  explicitly call the super constructor when initializing
                  subclass objects. This makes the code's intentions clearer and
                  helps when you need to pass specific arguments to the
                  superclass constructor.
                </p>

                <pre className="code-block">
                  <code>{`// Banana hierarchy
public class Fruit {
  private String origin;
  
  public Fruit(String origin) {
    this.origin = origin;
  }
}

public class Banana extends Fruit {
  private boolean isRipe;
  
  public Banana(String origin, boolean ripe) {
    super(origin);  // Explicit super call
    this.isRipe = ripe;
  }
}`}</code>
                </pre>

                <h2 className="text-xl font-semibold mb-2">
                  Confusing IS-A and HAS-A Relationships
                </h2>
                <p className="section-paragraph">
                  Misapplying these relationships can lead to poor design.
                  Remember: IS-A is for specialization (inheritance), HAS-A is
                  for composition (object as field). Choosing the wrong
                  relationship type can make your code harder to maintain and
                  extend in the future.
                </p>

                <pre className="code-block">
                  <code>{`// IS-A relationship (Inheritance)
public class CavendishBanana extends Banana {
  // Special banana variety
}

// HAS-A relationship (Composition)
public class BananaBasket {
  private List<Banana> bananas;  // Basket HAS-A list of bananas
}`}</code>
                </pre>
              </div>
            </div>

            <div ref={sourcesRef} className="section-container">
              <div className="section-content">
                <h1 className="section-title">References</h1>

                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300 pb-5">
                  <li>
                    <span className="font-semibold">Core OOP Concepts:</span>
                    <a
                      href="https://drive.google.com/file/d/1PVsQknhs6GRXmlJHQuGkTpzFWlNzCpXO/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline ml-1"
                    >
                      OOP 2 Teaching Material (Google Classroom)
                    </a>
                  </li>

                  <li>
                    <span className="font-semibold">Inheritance Basics:</span>
                    <a
                      href="https://learn.saylor.org/mod/page/view.php?id=29153"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline ml-1"
                    >
                      Saylor Academy - Inheritance Concepts
                    </a>
                  </li>

                  <li>
                    <span className="font-semibold">Subclasses:</span>
                    <a
                      href="https://www.whitman.edu/mathematics/java_tutorial/java/javaOO/subclasses.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline ml-1"
                    >
                      Whitman College - Subclasses Tutorial
                    </a>
                  </li>

                  <li>
                    <span className="font-semibold">IS-A vs HAS-A:</span>
                    <a
                      href="https://stackoverflow.com/questions/36162714/what-is-the-difference-between-is-a-relationship-and-has-a-relationship-in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline ml-1"
                    >
                      StackOverflow - IS-A vs HAS-A Relationships
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
