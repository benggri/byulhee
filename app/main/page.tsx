'use client';
import {useRouter} from "next/navigation";
import Image from 'next/image';

export default function Main({
  id,
}: {id:string|undefined|null}
) {
  const router = useRouter();
  console.log(`id :: ${id} ::`);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-4">
        <p className="text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">Star&#39;s Home</p>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Here at Star&#39;s Home we focus on markets where art, drawing can unlock long-term value and drive economic growth.</p>
      </div>
      <div className="grid grid-cols-2 gap-2 p-2">
        <div className="col-span-2 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
          <div className="flex">
            <blockquote className="pl-3 inline-block align-middle text-md font-semibold text-gray-900 dark:text-white">
              <p>Hellow!</p>
            </blockquote>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
          <a href="#" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
            <svg className="w-2.5 h-2.5 mr-1.5" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M2 2h20v16h-5v2h-2v-2H9v2H7v-2H2V2zm5 18v2H5v-2h2zm10 0v2h2v-2h-2zm3-16H4v12h16V4zm-8 4h2v2h-2V8zm-2 4v-2h2v2h-2zm0 0v2H8v-2h2zm6 0h-2v-2h2v2zm0 0h2v2h-2v-2zM8 6H6v2h2V6z"/>
            </svg>
            Gallery
          </a>
          <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Star&#39;s gallery</h2>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
              This is a gallery where you can get a lot of inspiration from various painting works.
          </p>
          <a onClick={() => router.push('/gallery')} className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">
            Read more
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
          <a href="#" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
            <svg className="w-2.5 h-2.5 mr-1.5" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
            </svg>
            Diary
          </a>
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Star&#39;s diary</h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Get inspired by writing about my happy, anxious, altruistic and selfish feelings.
            </p>
            <a onClick={() => router.push('/diary')} className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">
              Read more
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
        </div>
      </div>
    </section>
  );
}