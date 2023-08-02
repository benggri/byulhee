export default function handler(req, res) {
  res.status(200)
      .json([
        {index: 13 , title: '[FAQ] 13', date: '2023-08-01', contents: '자주 물어보는 질문입니다'},
        {index: 12 , title: '[FAQ] 12', date: '2023-07-31', contents: '자주 물어보는 질문입니다'},
        {index: 11 , title: '[FAQ] 11', date: '2023-07-20', contents: '자주 물어보는 질문입니다'},
        {index: 10 , title: '[FAQ] 10', date: '2023-07-14', contents: '자주 물어보는 질문입니다'},
        {index:  9 , title: '[FAQ] 09', date: '2023-07-10', contents: '자주 물어보는 질문입니다'},
        {index:  8 , title: '[FAQ] 08', date: '2023-07-08', contents: '자주 물어보는 질문입니다'},
        {index:  7 , title: '[FAQ] 07', date: '2023-07-01', contents: '자주 물어보는 질문입니다'},
        {index:  6 , title: '[FAQ] 06', date: '2023-06-30', contents: '자주 물어보는 질문입니다'},
        {index:  5 , title: '[FAQ] 05', date: '2023-06-24', contents: '자주 물어보는 질문입니다'},
        {index:  4 , title: '[FAQ] 04', date: '2023-06-16', contents: '자주 물어보는 질문입니다'},
        {index:  3 , title: '[FAQ] 03', date: '2023-06-08', contents: '자주 물어보는 질문입니다'},
        {index:  2 , title: '[FAQ] 02', date: '2023-06-01', contents: '자주 물어보는 질문입니다'},
        {index:  1 , title: '[FAQ] 01', date: '2023-05-31', contents: '자주 물어보는 질문입니다'},
      ]);
}