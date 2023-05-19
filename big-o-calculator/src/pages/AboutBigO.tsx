/* eslint-disable react/no-unescaped-entities */
import { Link } from 'wouter'
import CodeDisplay from '../components/CodeDisplay'
import { codeExamples } from '../utilities/codeExamples'
import GithubIcon from '../components/icons/github-icon'
import LinkedinIcon from '../components/icons/linkedin-icon'

export default function AboutBigO () {
  return (
    <>
        <main className="w-full text-neutral-200 px-6 mt-9 max-w-3xl m-auto">
          <article className='block'>
            <section className="flex flex-col gap-8 mb-10 mt-4">
                <h1 className="text-6xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">Big O Notation</h1>
                <p>Big O notation is a tool used to evaluate the performance and efficiency of an algorithm.
                  It allows us to estimate how the algorithm's running time or memory usage will change as the size of the input grows.</p>
                <p>In simpler terms, Big O notation informs us about the speed of an algorithm as the amount of data it needs to process increases.
                  This knowledge helps us understand how the algorithm's performance will degrade as the problem size grows.</p>
                <p>Big O notation is typically represented by a function that describes the algorithm's worst-case time complexity.
                  The function is expressed in terms of the input size, denoted by "n". By analyzing this function, we can determine the algorithm's scalability and how it will perform on larger inputs.</p>

                  <div className="flex justify-center mb-7">
                    <div className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium bg-zinc-800 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                      <Link href='/' className="relative px-9 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-background rounded-md group-hover:bg-opacity-0">
                          Calculate Big O
                      </Link>
                    </div>
                  </div>
            </section>

            <section className="flex flex-col [&>p]:my-2 gap-2 mb-10">
              <h3 className="text-3xl text-pink_primary">Why do we need it?</h3>
              <p>We need Big O notation for several reasons:</p>
              <ul className="list-disc pl-5 gap-3 flex flex-col">
                <li>
                  Big O notation provides a standardized way to describe the performance of an algorithm in terms of the input size.</li>
                <li>
                  We can compare the performance of different algorithms and choose the one that is most appropriate for a given problem.</li>
                <li>
                  Identify areas where we can optimize an algorithm and improve its performance.
                </li>
              </ul>
            </section>

            <section className="flex flex-col [&>p]:my-2 gap-2 mb-10">
              <h3 className="text-3xl text-pink_primary">Complexity</h3>
              <p>Understanding time and space complexity is critical for designing and analyzing algorithms. In most cases, we want to design algorithms that are both time and space-efficient. However, there is often a trade-off between time and space complexity.
                An algorithm that is fast may require more memory, while an algorithm that uses less memory may be slower.</p>

              <section className="flex flex-col [&>p]:my-2 my-5">
                <h4 className="mb-2 text-xl text-pink_secondary">Time Complexity</h4>
                <p>Time complexity refers to the amount of time it takes for an algorithm to run.</p>
                <p>For example, if an algorithm has a time complexity of O(n), it means that the algorithm's running time will grow linearly with the input size. If the input size doubles, the algorithm's running time will also double.</p>
              </section>

              <section className="flex flex-col [&>p]:my-2">
                <h4 className="mb-2 text-xl text-pink_secondary">Space Complexity</h4>
                <p>Space complexity refers to the amount of memory an algorithm needs to execute.</p>
                <p>For example, an algorithm with a space complexity of O(n) means that the amount of memory required by the algorithm will grow linearly with the input size.</p>
              </section>
            </section>

            <section>
              <h3 className="mb-5 text-3xl text-pink_primary">Types of complexity</h3>
              <div className='flex flex-col sm:flex-row gap-4'>
                <figure >
                  <img src="public/bigO-chart.png" className="text-center text-white" alt="BigO chart" width={'520px'} height={'50px'}/>
                  <figcaption className="text-white"><a href="https://www.bigocheatsheet.com/" target="_blank" rel="noreferrer">Big O Complexity Chart</a></figcaption>
                </figure>
                <div className='flex flex-col gap-3'>
                    <span className='px-5 py-2 rounded-sm bg-green-400 text-black'>Excellent</span>
                    <span className='px-5 py-2 rounded-sm bg-green-500 text-black'>Good</span>
                    <span className='px-5 py-2 rounded-sm bg-yellow-500 text-black'>Fair</span>
                    <span className='px-5 py-2 rounded-sm bg-orange-500 text-black'>Bad</span>
                    <span className='px-5 py-2 rounded-sm bg-red-500 text-black'>Horrible</span>

                </div>
              </div>
              <section className="flex flex-col gap-2">
                <h4 className="mb-2 mt-4 text-xl text-pink_secondary">O(1) - Constant</h4>
                <p>Algorithms with constant complexity take the same amount of time to execute, regardless of the input size. These algorithms are highly efficient and are considered the best-case scenario.</p>
                <p>Examples of algorithms with O(1) time complexity include accessing an element in an array or a hash table, or adding a node to the beginning of a linked list.</p>
                <CodeDisplay code={codeExamples.constant} language='typescript'/>
              </section>
              <section className="flex flex-col gap-2">
                <h4 className="mb-2 mt-4 text-xl text-pink_secondary">O(log n) - Logarithmic</h4>
                <p>Algorithms with logarithmic complexity take less time to execute as the input size grows. This type of algorithm is highly efficient, and its performance grows at a slower rate than the input size. </p>
                <p>Examples of algorithms with O(log n) time complexity include binary search.</p>
                <CodeDisplay code={codeExamples.logarithmic} language='typescript'/>
              </section>
              <section className="flex flex-col gap-2">
                <h4 className="mb-2 mt-4 text-xl text-pink_secondary">O(n) - Linear</h4>
                <p>Algorithms with linear complexity take an amount of time proportional to the input size to execute. These algorithms are considered moderately efficient and are a common type of algorithm in computer science.</p>
                <p>Examples of algorithms with O(n) time complexity include linear search, bubble sort, and insertion sort.</p>
                <CodeDisplay code={codeExamples.linear} language='typescript'/>
              </section>
              <section className="flex flex-col gap-2">
                <h4 className="mb-2 mt-4 text-xl text-pink_secondary">O(n log n) - Log-Linear</h4>
                <p>Algorithms with log-linear complexity are often used in sorting algorithms and other complex tasks. </p>
                <p>Examples of algorithms with O(n log n) time complexity include quicksort, heapsort, and merge sort.</p>
                <CodeDisplay code={codeExamples.logLinear} language='typescript'/>
              </section>
              <section className="flex flex-col gap-2">
                <h4 className="mb-2 mt-4 text-xl text-pink_secondary">O(n^2) - Quadratic</h4>
                <p>Algorithms with quadratic complexity take a significantly longer amount of time to execute as the input size grows. These algorithms are considered inefficient, and their performance grows rapidly as the input size increases. </p>
                <p>Examples of algorithms with O(n^2) time complexity include bubble sort, selection sort, and insertion sort.</p>
                <CodeDisplay code={codeExamples.quadratic} language='typescript'/>
              </section>
              <section className="flex flex-col gap-2">
                <h4 className="mb-2 mt-4 text-xl text-pink_secondary">O(2^n) - Exponential</h4>
                <p>Algorithms with exponential complexity are considered highly inefficient and often impractical for most applications. These algorithms take a very long time to execute, and their performance grows exponentially as the input size increases. </p>
                <p>Examples of algorithms with O(2^n) time complexity include the traveling salesman problem and the knapsack problem.</p>
                <CodeDisplay code={codeExamples.exponential} language='typescript'/>
              </section>
              <section className="flex flex-col gap-2">
                <h4 className="mb-2 mt-4 text-xl text-pink_secondary">O(n!) - Factorial</h4>
                <p>Algorithms with factorial complexity are the least efficient and the slowest to execute. These algorithms take an incredibly long time to execute, and their performance grows at an astronomical rate as the input size increases. </p>
                <p>Examples of algorithms with O(n!) time complexity include brute-force solutions to problems such as the traveling salesman problem and the permutation problem.</p>
                <CodeDisplay code={codeExamples.factorial} language='typescript'/>
              </section>
            </section>
          </article>
        </main>
        <footer className='h-200'>
            <section className='flex text-white justify-center items-center gap-5 mt-10 mb-10'>
              <div className='bg-white h-0.5 w-full ml-20'/>
              <div className='flex gap-5'>
                <a href='https://github.com/DmelladoH/Big-O-Calculator'><GithubIcon /></a>
                <a href='https://www.linkedin.com/in/melladoh'><LinkedinIcon /></a>
              </div>
              <div className='bg-white h-0.5 w-full mr-20'/>
            </section>
        </footer>
      </>
  )
}
