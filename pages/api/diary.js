export default function handler(req, res) {
    res.status(200)
       .json([
         {image: '/images/camera.svg'  , title: '[Diary]2023-08-01', date: '2023-08-01', author: 'star', contents: '날씨가 자꾸 더워만 지네요'},
         {image: '/images/map.svg'     , title: '[Diary]2023-07-31', date: '2023-07-31', author: 'star', contents: '7월의 마지막 날 즐거운 하루가 되었으면 좋겠다 많이 더운 여름이 시작된 것 같습니다'},
         {image: '/images/person.svg'  , title: '[Diary]2023-07-20', date: '2023-07-20', author: 'star', contents: '지구는 자꾸 뜨거워 진다는데 이게 무슨일이람'},
         {image: '/images/picture.svg' , title: '[Diary]2023-07-14', date: '2023-07-14', author: 'star', contents: '더워도 오늘은 더 행복하게 보내야지'},
         {image: '/images/weather.svg' , title: '[Diary]2023-07-10', date: '2023-07-10', author: 'star', contents: '어머나 좋은 일이 가득하다'},
         {image: '/images/camera.svg'  , title: '[Diary]2023-07-08', date: '2023-07-08', author: 'star', contents: '세상에 행복한 일만 가득했으면 좋겠다'},
         {image: '/images/map.svg'     , title: '[Diary]2023-07-01', date: '2023-07-01', author: 'star', contents: '에어컨 없이는 못 살겠다'},
         {image: '/images/person.svg'  , title: '[Diary]2023-06-30', date: '2023-06-30', author: 'star', contents: '6월의 마지막 날 매일 매일이 즐거운데 뭔가 하나 빠진 기분이 들어서 불안해요'},
         {image: '/images/picture.svg' , title: '[Diary]2023-06-24', date: '2023-06-24', author: 'star', contents: '벌써 올해도 반이 지나가네요 시간이 정말 빠르네요'},
         {image: '/images/weather.svg' , title: '[Diary]2023-06-16', date: '2023-06-16', author: 'star', contents: '정신없이 육아하다보면 정말 정신 못차릴 때가 많아요'},
         {image: '/images/camera.svg'  , title: '[Diary]2023-06-08', date: '2023-06-08', author: 'star', contents: '나는 행복한 사람인가봐요 매일매일 행복해요'},
         {image: '/images/map.svg'     , title: '[Diary]2023-06-01', date: '2023-06-01', author: 'star', contents: '사랑하는 우리 가족 항상 행복했으면 좋겠어요'},
         {image: '/images/person.svg'  , title: '[Diary]2023-05-31', date: '2023-05-31', author: 'star', contents: '가정의 달이 지나갔네요 다들 가정에 충실한 이번 달이 되었나요?'},
       ]);
}