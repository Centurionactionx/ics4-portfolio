"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { useRef } from "react";

export default function SearchingSorting() {
  // Refs for each section
  const introductionRef = useRef<HTMLDivElement>(null!);
  const useCasesRef = useRef<HTMLDivElement>(null!);
  const searchingRef = useRef<HTMLDivElement>(null!);
  const sortingRef = useRef<HTMLDivElement>(null!);
  const examplesRef = useRef<HTMLDivElement>(null!);
  const mistakesRef = useRef<HTMLDivElement>(null!);
  const referencesRef = useRef<HTMLDivElement>(null!);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-black pt-16">
      <div className="flex items-center justify-center">
        {/* Contents Menu */}
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
                  onClick={() => scrollToSection(useCasesRef)}
                  className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                >
                  2. Use Cases
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(searchingRef)}>
                  3. Searching Algorithms
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(sortingRef)}>
                  4. Sorting Algorithms
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
                  onClick={() => scrollToSection(referencesRef)}
                  className="text-white hover:text-gray-300 text-left w-full cursor-pointer"
                >
                  7. References
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center min-h-screen">
          <h1 className="text-white text-[50px] font-bold pt-3 pb-3">
            Searching & Sorting Algorithms
          </h1>

          {/* Introduction Section */}
          <div ref={introductionRef} className="section-container">
            <div className="section-content">
              <h1 className="section-title">Introduction</h1>
              <p className="section-paragraph">
                Searching and Sorting are important concepts that all
                programmers should at least be familiar with. Almost any data
                management application uses searching and sorting algorithms for
                quick and efficient data retrieval and organization. Searching
                finds specific information, and sorting organizes data for
                better accessibility. It is up to the programmer to choose which
                algorithm to use depending on factors like data size and
                structure.
              </p>
            </div>
          </div>

          <div ref={useCasesRef} className="section-container">
            <div className="section-content">
              <h1 className="section-title">Use Cases</h1>

              <h2 className="text-xl font-semibold mb-2">
                Searching Algorithms in Practice
              </h2>
              <p className="section-paragraph">
                Searching algorithms are very important in modern data retrieval
                systems. In large-scale databases containing millions of
                records, efficient searching makes the quality of life much
                better for all users. These algorithms are used in everything
                from online shopping searches to research databases, letting
                users locate specific information in large datasets quickly. The
                choice between sequential and binary search often depends on
                whether the data is sorted, with binary search offering
                dramatically faster results for organized datasets.
              </p>

              <p className="section-paragraph">
                Sorting algorithms do much more than simply organize data. Their
                job seems simply, but they actually have much bigger impacts
                such as allowing for efficient data processing. By arranging
                information in a logical order, they also make it easier for
                searching algorithms to do their job.
              </p>
            </div>
          </div>

          {/* Searching Algorithms Section */}
          <div ref={searchingRef} className="section-container">
            <div className="section-content">
              <h1 className="section-title">Searching Algorithms</h1>

              {/* Sequential Search */}
              <h2 className="text-xl font-semibold mb-2">Sequential Search</h2>
              <p className="section-paragraph">
                Sequential search checks through each element in order until the
                corresponding target is found. It runs in O(n) time complexity,
                making it inefficient for large datasets.
              </p>

              <pre className="code-block">
                <code>{`// Sequential Search for Banana in a fruit basket
public int SequentialSearch(String[] fruits, String targetBananaType) {
    for (int i = 0; i < fruits.length; i++) {
        if (fruits[i].equals(targetBananaType)) {
            return i; // Return index where found
        }
    }
    return -1; // Banana not found
}`}</code>
              </pre>

              {/* Binary Search */}
              <h2 className="text-xl font-semibold mb-2">Binary Search</h2>
              <p className="section-paragraph">
                Binary search requires a sorted array. It repeatedly divides the
                array in half to lessen the search range and more efficiently
                search for the target than sequential search.
              </p>
              <p className="section-paragraph">
                However, Binary search first requires the dataset to be sorted
                in order to be able to work.
              </p>

              <pre className="code-block">
                <code>{`// Binary Search for Banana in sorted basket
public int BinarySearch(String[] sortedFruits, String targetBananaType) {
    int left = 0;
    int right = sortedFruits.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        int comparison = targetBananaType.compareTo(sortedFruits[mid]);
        
        if (comparison == 0) {
            return mid; // Banana found at index mid
        }
        if (comparison < 0) {
            right = mid - 1; // Search left half
        } else {
            left = mid + 1; // Search right half
        }
    }
    return -1; // Return -1 if banana not found
}
`}</code>
              </pre>
            </div>
          </div>

          {/* Sorting Algorithms Section */}
          <div ref={sortingRef} className="section-container">
            <div className="section-content">
              <h1 className="section-title">Sorting Algorithms</h1>

              {/* Selection Sort */}
              <h2 className="text-xl font-semibold mb-2">Selection Sort</h2>
              <p className="section-paragraph">
                Selection sort is an algorithm that divides the array into a
                sorted and unsorted region. It iterates through the data and
                selects the smallest (or largest) element from the unsorted part
                and swaps it with the first unsorted element, thus making that
                element also part of the sorted array. Selection sort is not a
                stable sorting algorithm.
              </p>
              <p className="section-paragraph">
                It works on O(n²) time complexity, making it inefficient for
                large datasets. However, it is useful for small datasets since
                minimal swaps are necessary.
              </p>

              {/* Insertion Sort */}
              <h2 className="text-xl font-semibold mb-2">Insertion Sort</h2>
              <p className="section-paragraph">
                Insertion sort works by repeatedly swapping each element into
                its correct position. It starts with the second element of the
                data set to assume that the first one has been sorted. Then, it
                compares it with the previous element, shifting itself to the
                left one if it's smaller than the previous (or larger).
              </p>
              <p className="section-paragraph">
                It works at O(n²) time complexity. It is useful for small
                datasets since minimal swaps are necessary.
              </p>

              {/* Merge Sort */}
              <h2 className="text-xl font-semibold mb-2">Merge Sort</h2>
              <p className="section-paragraph">
                Merge sort is a recursive divide-and-conquer algorithm that
                recursively splits the dataset into halves until they can't be
                split any further. Then, when the halves are being merged back
                together, they are sorted during the merging process. It's a
                stable sorting algorithm, keeping the order of equal elements.
              </p>
              <p className="section-paragraph">
                It is very fast, operating at an average of O(n log n) time
                complexity.
              </p>

              {/* Quick Sort */}
              <h2 className="text-xl font-semibold mb-2">Quick Sort</h2>
              <p className="section-paragraph">
                Quicksort is another recursive divide-and-conquer algorithm. It
                first selects a pivot element and partitions the array around
                it. Then, it rearranges the elements so that the elements
                smaller than the pivot are to the left and elements larger than
                the pivot are to the right. It is oftentimes considered the
                fastest sorting algorithm to be developed to this day. However,
                quick sort is not a stable sorting algorithm.
              </p>
              <p className="section-paragraph">
                It runs on a time complexity of O(n log n).
              </p>
            </div>
          </div>

          {/* Examples Section */}
          <div ref={examplesRef} className="section-container">
            <div className="section-content">
              <h1 className="section-title">Example Implementations</h1>

              <h2 className="text-xl font-semibold mb-2">Sequential Search</h2>
              <Image
                src="/sequential-search.png"
                alt="Sequential Search Example"
                width={600}
                height={300}
                className="example-code"
              />

              <h2 className="text-xl font-semibold mb-2">Binary Search</h2>
              <Image
                src="/binary-search.png"
                alt="Binary Search Example"
                width={600}
                height={300}
                className="example-code"
              />

              <h2 className="text-xl font-semibold mb-2">Bubble Sort</h2>
              <Image
                src="/bubble-sort.png"
                alt="Bubble Sort Example"
                width={600}
                height={300}
                className="example-code"
              />

              <h2 className="text-xl font-semibold mb-2">Selection Sort</h2>
              <Image
                src="/selection-sort.png"
                alt="Selection Sort Example"
                width={600}
                height={300}
                className="example-code"
              />
            </div>
          </div>

          {/* Common Mistakes Section */}
          <div ref={mistakesRef} className="section-container">
            <div className="section-content">
              <h1 className="section-title">Common Mistakes</h1>

              <h2 className="text-xl font-semibold mb-2">Stability</h2>
              <p className="section-paragraph">
                It's common to forget that not all sorting algorithms are stable
                sorting algorithms. Quicksort and Selection Sort are not stable,
                so keep that in mind when deciding which algorithm to use.
              </p>

              <h2 className="text-xl font-semibold mb-2">
                Efficiency and Use-case Complexity
              </h2>
              <p className="section-paragraph">
                Sometimes, you might forget which sorting algorithm is necessary
                for what kind of datasets you're working with. For larger
                datasets, it's better to use sorting algorithms that run on O(n
                log n) time complexity since they handle larger datasets at the
                same speed as smaller ones. However, they might not be necessary
                for smaller datasets as complexity to code is something to
                consider.
              </p>
            </div>
          </div>

          {/* References Section */}
          <div ref={referencesRef} className="section-container">
            <div className="section-content">
              <h1 className="section-title">References</h1>

              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300 pb-5">
                <li>
                  <a
                    href="https://bradfieldcs.com/algos/searching/the-sequential-search/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Sequential Search - Bradfield CS
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.w3schools.com/dsa/dsa_algo_binarysearch.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    W3Schools - Binary Search
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.w3schools.com/dsa/dsa_algo_selectionsort.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    W3Schools - Selection Sort
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.w3schools.com/dsa/dsa_algo_insertionsort.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    W3Schools - Insertion Sort
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.w3schools.com/dsa/dsa_algo_mergesort.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    W3Schools - Merge Sort
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.w3schools.com/dsa/dsa_algo_quicksort.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    W3Schools - Quick Sort
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1s0TkBqtKrnjcsUyWNOP7-Fvp3zKvWYYw/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Google Classroom - Sorting Lesson
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
