'use client';
import axios from 'axios';
import {useEffect, useState} from 'react';
import DiaryComponent from '../../src/components/diary';
import DiaryModel from '../../src/model/diary';

export default function Diary() {
  const [diaryData, setDiaryData] = useState<DiaryModel[]>([]);
  const [skeleton , setSkeleton] = useState<Array<any>>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('/api/diary')
         .then((res) => {
           console.log(res);
           if (res.data.length % 2 > 0) {
            setSkeleton(Array(2 - (res.data.length % 2)).fill({}));
           } else {
            setSkeleton([]);
           }
           setDiaryData(res.data);
         });
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-4">
        <p className="text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">Star&#39;s Dairy</p>
      </div>
      <div className="py-4 mx-auto max-w-screen-xl text-left lg:py-4">
        <p className="text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-2xl dark:text-white mb-2">2023</p>
        <div className="grid grid-cols-2 gap-3">
          {diaryData.map((data:DiaryModel, index:Number) => <DiaryComponent key={data.date+""+index} index={data.index} image={data.image} date={data.date} title={data.title} contents={data.contents} author={data.author}></DiaryComponent>)}
          {skeleton.map((data:any, index:Number) => <DiaryComponent key={""+index} index={undefined} image={undefined} date={undefined} title={undefined} contents={undefined} author={undefined}></DiaryComponent>)}
        </div>
      </div>
    </section>
  );
}