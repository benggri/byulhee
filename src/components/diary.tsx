import Image from 'next/image';
import DiaryModel from '../model/diary';

export default function DiaryComponent(
  props:DiaryModel
) {
  return (
    <div role="status" className={(props.title ? "" : " animate-pulse ")+"max-w-full p-4 border border-gray-200 rounded shadow md:p-6 dark:border-gray-700"}>
      {
        props.image ? 
        <div className="flex items-center justify-center h-48 w-full mb-4 bg-gray-300 rounded dark:bg-gray-700">
          <Image src={props.image} alt="Image" className="w-full h-full text-gray-200 dark:text-gray-600" width={0} height={0} style={{objectFit: "contain"}} priority />
        </div> 
        :
        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
          <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
          </svg>
        </div>
      }
      {
        props.title ? 
        <p className="h-5 max-h-5 dark:bg-gray-700 mb-4">{props.title}</p> :
        <div className="h-5 max-h-5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
      }
      {
        props.contents ? 
        <p className="h-10 max-h-10 text-sm dark:bg-gray-700 mb-2.5 break-words truncate">{props.contents}</p> :
        <div className="h-10 max-h-10 bg-gray-200 rounded-md dark:bg-gray-700 mb-2.5"></div>
      }
      <div className="flex items-center mt-4 space-x-3">
        <Image src="/star.svg" alt="Star Logo" className="dark:invert" width={26} height={26} priority />
        {
          props.date ?
          <div className="h-4 max-h-4 w-full text-xs dark:bg-gray-700">{props.date}</div> : 
          <div className="h-4 max-h-4 w-full bg-gray-200 rounded-full dark:bg-gray-700"></div>
        }
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}