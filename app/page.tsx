import Image from 'next/image'

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-2 p-2">
      <div className="max-w-1/2 row-span-2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#" target="_blank">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">1st 카드</h5>
        </a>
        <p className="p-3 font-normal text-gray-700 dark:text-gray-400">첫번째 카드</p>
        <a href="https://flowbite.com/docs/components/card/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
      <div className="max-w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="https://flowbite.com/docs/components/card/" target="_blank">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2nd 카드</h5>
        </a>
        <p className="p-3 font-normal text-gray-700 dark:text-gray-400">두번째 카드</p>
        <a href="https://flowbite.com/docs/components/card/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
      <div className="max-w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="https://flowbite.com/docs/components/card/" target="_blank">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">3rd 카드</h5>
        </a>
        <p className="p-3 font-normal text-gray-700 dark:text-gray-400">세번째 카드</p>
        <a href="https://flowbite.com/docs/components/card/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
      <div className="max-w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="https://flowbite.com/docs/components/card/" target="_blank">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">4th 카드</h5>
        </a>
        <p className="p-3 font-normal text-gray-700 dark:text-gray-400">네번째 카드</p>
        <a href="https://flowbite.com/docs/components/card/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
      <div className="max-w-1/2 row-span-2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="https://flowbite.com/docs/components/card/" target="_blank">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">5th 카드</h5>
        </a>
        <p className="p-3 font-normal text-gray-700 dark:text-gray-400">다섯번째 카드</p>
        <a href="https://flowbite.com/docs/components/card/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
      <div className="max-w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="https://flowbite.com/docs/components/card/" target="_blank">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">6th 카드</h5>
        </a>
        <p className="p-3 font-normal text-gray-700 dark:text-gray-400">여섯번째 카드</p>
        <a href="https://flowbite.com/docs/components/card/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
