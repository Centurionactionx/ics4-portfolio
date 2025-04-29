// pages/Bibliography.tsx
import ReferencesList from "../../components/ReferencesList";

export default function Bibliography() {
  const references = [
    {
      name: "OOP 1 Learning - Google Drive (File 1)",
      url: "https://drive.google.com/file/d/1YRnTjd33LB4C8L6Uj8pMxe3E0V72A10M/view",
    },
    {
      name: "OOP 1 Learning - Google Drive (File 2)",
      url: "https://drive.google.com/file/d/1zlHPg0cPh0kOcAfHx-5h3PzWNsHlOMg-/view",
    },
    {
      name: "TechTarget - Object-Oriented Programming (OOP)",
      url: "https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP",
    },
    {
      name: "Visual Paradigm - What is UML?",
      url: "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-uml/",
    },
    {
      name: "LaunchCode Education - Instance and Static Methods",
      url: "https://education.launchcode.org/java-web-development/chapters/classes-part2/instance-and-static-methods.html",
    },
    {
      name: "W3Schools - Java Constructors",
      url: "https://www.w3schools.com/java/java_constructors.asp",
    },
    {
      name: "Slickplan - How to Make a UML Diagram",
      url: "https://slickplan.com/blog/how-to-make-a-uml-diagram",
    },
    {
      name: "OOP 2 Reading - Google Drive",
      url: "https://drive.google.com/file/d/1PVsQknhs6GRXmlJHQuGkTpzFWlNzCpXO/view",
    },
    {
      name: "Saylor Academy - Object-Oriented Programming",
      url: "https://learn.saylor.org/mod/page/view.php?id=29153",
    },
    {
      name: "Whitman College - Java Subclasses",
      url: "https://www.whitman.edu/mathematics/java_tutorial/java/javaOO/subclasses.html",
    },
    {
      name: "StackOverflow - IS-A vs HAS-A Relationship",
      url: "https://stackoverflow.com/questions/36162714/what-is-the-difference-between-is-a-relationship-and-has-a-relationship-in",
    },
    {
      name: "Inheritance, Interfaces, and Polymorphism - Google Drive",
      url: "https://drive.google.com/file/d/14M8uXmlNZlOISfPyGy4UW0y-xEVKYgMH/view",
    },
    {
      name: "Scaler - This and Super Keywords in Java",
      url: "https://www.scaler.com/topics/java/this-and-super-keyword-in-java/",
    },
    {
      name: "Baeldung - Static vs Dynamic Binding",
      url: "https://www.baeldung.com/java-static-dynamic-binding",
    },
    {
      name: "DataCamp - Java Polymorphism",
      url: "https://www.datacamp.com/doc/java/polymorphism",
    },
    {
      name: "W3Schools - Java Polymorphism",
      url: "https://www.w3schools.com/java/java_polymorphism.asp",
    },
    {
      name: "W3Schools - Java Abstract Classes",
      url: "https://www.w3schools.com/java/java_abstract.asp",
    },
    {
      name: "W3Schools - Java Interfaces",
      url: "https://www.w3schools.com/java/java_interface.asp",
    },
    {
      name: "DigitalOcean - Abstract Class vs Interface",
      url: "https://www.digitalocean.com/community/tutorials/difference-between-abstract-class-and-interface-in-java",
    },
    {
      name: "W3Schools - Java Arrays",
      url: "https://www.w3schools.com/java/java_arrays.asp",
    },
    {
      name: "YouTube - Java 2D Arrays Tutorial (Video 1)",
      url: "https://www.youtube.com/watch?v=MgRMA_qZxZ4",
    },
    {
      name: "FreeCodeCamp - JavaScript 2D Arrays",
      url: "https://www.freecodecamp.org/news/javascript-2d-arrays/",
    },
    {
      name: "YouTube - Java 2D Arrays Tutorial (Video 2)",
      url: "https://www.youtube.com/watch?v=5v29UW14WPQ",
    },
    {
      name: "Arrays Learning - Google Drive (File 1)",
      url: "https://drive.google.com/file/d/1rHdqNbysTjNvlfb6h3c-QXNwjzn9FPEt/view",
    },
    {
      name: "Arrays Learning - Google Drive (File 2)",
      url: "https://drive.google.com/file/d/1Q-oOXtAciGTgGmtz4dvhm-jAg8TT3nbX/view",
    },
    {
      name: "W3Schools - Java ArrayList",
      url: "https://www.w3schools.com/java/java_arraylist.asp",
    },
    {
      name: "Oracle Docs - Java ArrayList",
      url: "https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html",
    },
    {
      name: "Medium - Common Mistakes in Java (1)",
      url: "https://medium.com/@codingsam/common-mistakes-in-java-c138499e3a8e",
    },
    {
      name: "Medium - Common Mistakes in Java (2)",
      url: "https://medium.com/@codingsam/common-mistakes-in-java-c138499e3a8e",
    },
    {
      name: "ArrayList Learning - Google Drive",
      url: "https://drive.google.com/file/d/1sWnDu2mpqf36EELEJJ5LHSgS_4mpSwhs/view",
    },
    {
      name: "Bradfield CS - Sequential Search",
      url: "https://bradfieldcs.com/algos/searching/the-sequential-search/",
    },
    {
      name: "W3Schools - Binary Search",
      url: "https://www.w3schools.com/dsa/dsa_algo_binarysearch.php",
    },
    {
      name: "W3Schools - Selection Sort",
      url: "https://www.w3schools.com/dsa/dsa_algo_selectionsort.php",
    },
    {
      name: "W3Schools - Insertion Sort",
      url: "https://www.w3schools.com/dsa/dsa_algo_insertionsort.php",
    },
    {
      name: "W3Schools - Merge Sort",
      url: "https://www.w3schools.com/dsa/dsa_algo_mergesort.php",
    },
    {
      name: "W3Schools - Quick Sort",
      url: "https://www.w3schools.com/dsa/dsa_algo_quicksort.php",
    },
    {
      name: "Sorting Lesson - Google Drive",
      url: "https://drive.google.com/file/d/1s0TkBqtKrnjcsUyWNOP7-Fvp3zKvWYYw/view",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen pt-16">
      <h1 className="text-white text-[50px] font-bold pt-3 pb-3">
        Bibliography
      </h1>
      <div className="section-container pb-5 ">
        <div className="section-content">
          <h1 className="section-title">Bibliography</h1>
          <ReferencesList references={references} />
        </div>
      </div>
    </div>
  );
}
