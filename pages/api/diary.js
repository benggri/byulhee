export default function handler(req, res) {
    res.status(200)
       .json([
         {title: '2023-08-01 title', date: '2023-08-01', author: 'star', contents: '날씨가 자꾸 더워만 지네요'},
         {title: '2023-07-31 title', date: '2023-07-31', author: 'star', contents: '7월이 마지막 날 즐거운 하루가 되었으면 좋겠다 많이 더운 여름이 시작된 것 같습니다'},
         {title: '2023-07-20 title', date: '2023-07-20', author: 'star', contents: '지구는 자꾸 뜨거워 진다는데 이게 무슨일이람'},
         {title: '2023-07-14 title', date: '2023-07-14', author: 'star', contents: '더워도 오늘은 더 행복하게 보내야지'},
         {title: '2023-07-10 title', date: '2023-07-10', author: 'star', contents: '어머나 좋은 일이 가득하다'},
         {title: '2023-07-08 title', date: '2023-07-08', author: 'star', contents: '세상에 행복한 일만 가득했으면 좋겠다'},
         {title: '2023-07-01 title', date: '2023-07-01', author: 'star', contents: '에어컨 없이는 못 살겠다'},
       ]);
}