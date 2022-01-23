import React from 'react';

function Category(props) {
  return (
    <div>
      <div className="flex flex-col">
  <div className="flex justify-between items-center p-4">
    <nav className="flex flex-col space-y-4">
      <span className="text-4xl text-blx-900">Furniture </span>
      <ul className="flex text-xl hover:text-blx-900 space-x-5">
        <li className="hover:text-blx-900 hover:border-b-2 border-blx-900 text-gray-400">All</li>
        <li className="hover:text-blx-900 hover:border-b-2 border-blx-900 text-gray-400">Sofas and daybeds</li>
        <li className="hover:text-blx-900 hover:border-b-2 border-blx-900 text-gray-400">Chairs Tables</li>
        <li className="hover:text-blx-900 hover:border-b-2 border-blx-900 text-gray-400">Storage and shelves</li>
        <li className="hover:text-blx-900 hover:border-b-2 border-blx-900 text-gray-400">Poufs</li>
      </ul>
      <div className="flex space-x-10">
        <button className="flex rounded-3xl bg-blc-200 p-3 justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>Leather</span>
        </button>
        <button className="flex rounded-3xl bg-blc-200 p-3 justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>$100 - $1000</span>
        </button>
      </div>
    </nav>

    <div className="flex mt-4 justify-end">
      <div className="flex rounded-full bg-blx-900 w-60 h-60 justify-center items-center bg-opacity-10">
        <div className="flex rounded-full bg-blx-900 w-40 h-40 justify-center items-center bg-opacity-10">
          <div className="flex rounded-full bg-blx-900 items-center w-20 h-20 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="flex m-3 gap-8 flex-wrap">
    <div className="flex flex-col space-y-2 relative">
      <div className="w-64 h-72 bg-gray-100 rounded-3xl">
        <div className="absolute top-0 flex">
          <span className="rounded-tl-3xl rounded-br-3xl px-2 z-20 bg-blc-200 text-yellow-100 flex justify-center items-center">NEW</span>
          <span className="rounded-br-3xl px-2 pl-7 relative right-5 bg-red-400 text-yellow-100 flex justify-end items-center">NEW</span>
        </div>
      </div>

      <div className="text-xl text-gray-300">Insert Coffee Table</div>

      <div className="text-xl text-blx-900">$879,00</div>

      <div className="flex items-center justify-between">
        <button className="bg-blue-100 text-blue-500 rounded-xl p-1">TABLES</button>
        <div className="flex space-x-2">
          <div className="rounded-full w-4 h-4 bg-gray-300 cursor-pointer"></div>
          <div className="rounded-full w-4 h-4 bg-gray-400 cursor-pointer"></div>
          <div className="rounded-full w-4 h-4 bg-gray-500 cursor-pointer"></div>
          <div className="rounded-full w-4 h-4 bg-gray-600 cursor-pointer"></div>
        </div>
      </div>
      <div className="rounded-3xl bg-gray-300 p-4 flex justify-center items-center">
        <button className="flex justify-center items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="text-blx-900">Add to cart</span>
        </button>
      </div>
    </div>

    <div className="w-64 h-72 bg-gray-100 rounded-2xl"></div>
    <div className="w-64 h-72 bg-gray-100 rounded-2xl"></div>

    <div className="w-136 bg-gray-100 rounded-2xl flex flex-col space-y-2 relative pb-10">
      <div className="flex absolute top-0 left-0">
        <span className="rounded-br-3xl rounded-tl-3xl px-2 right-5 bg-red-400 text-yellow-100">ONLY 3 LEFT</span>
      </div>

      <div className="h-72"></div>
      <div className="text-xl text-gray-300 pl-10">Insert Coffee Table</div>

      <div className="text-xl text-blx-900 pl-10">$879,00</div>

      <div className="flex items-center justify-between px-10">
        <button className="bg-blue-100 text-blue-500 rounded-xl p-1">TABLES</button>
        <div className="flex space-x-2">
          <div className="rounded-full w-4 h-4 bg-gray-300 cursor-pointer"></div>
          <div className="rounded-full w-4 h-4 bg-gray-400 cursor-pointer"></div>
          <div className="rounded-full w-4 h-4 bg-gray-500 cursor-pointer"></div>
          <div className="rounded-full w-4 h-4 bg-gray-600 cursor-pointer"></div>
        </div>
      </div>
    </div>

    <div className="w-64 h-72 bg-gray-100 rounded-2xl"></div>
  </div>
  <div className="flex justify-center space-x-5 mt-14">
    <div className="flex rounded-full bg-blx-900 w-10 h-10 justify-center items-start">
      <span className="text-white text-3xl">1</span>
    </div>
    <div className="w-10 h-10 justify-center">
      <span className="text-blx-900 text-3xl">2</span>
    </div>
    <div className="w-10 h-10 justify-center">
      <span className="text-blx-900 text-3xl">3</span>
    </div>
  </div>
</div>

      
    </div>
  );
}

export default Category;