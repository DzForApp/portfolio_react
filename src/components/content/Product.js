export default function Product({ variant }) {
  switch (variant) {
    case "big":
      return (
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
      )
    default:
      return (
        <div className={`flex flex-col w-64`}>
          <div className="space-y-1">
            <div className="relative h-72 bg-gray-200 rounded-4xl bg-cover" >
              <img className="rounded-4xl w-full h-full" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjBMx0xcKWPu0lUrRbs4-LzBDezIIDu0Vyg&usqp=CAU`}alt="" />
              <div className="absolute flex top-0">
                <span className="relative z-50 bg-green-500 px-3 rounded-tl-4xl rounded-br-4xl text-gray-100">New</span>
                <span className="relative z-40 bg-red-500 px-2 rounded-br-4xl -translate-x-6 pl-7 pr-3 text-gray-100">Hot</span>
              </div>
            </div>
            <h6 className="text-lg text-gray-500">Modern Sofa</h6>
            <h6 className="text-xl text-gray-900">$1899,00</h6>
            <div className="flex items-center justify-between">
              <span className="bg-blue-100 px-2 py-1 rounded-xl text-blue-600 text-xs uppercase"> chairs </span>
              <ul className="flex space-x-1">
                <li className="w-3 h-3 rounded-full bg-gray-300" />
                <li className="w-3 h-3 rounded-full bg-gray-400" />
                <li className="w-3 h-3 rounded-full bg-gray-600" />
                <li className="w-3 h-3 rounded-full bg-gray-800" />
              </ul>
            </div>
          </div>
          <button className="flex justify-center items-center space-x-2 w-full bg-gray-200 rounded-2xl py-4 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Add to cart</span>
          </button>
        </div>
      )
  }
  
}
