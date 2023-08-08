let data = [
  {labels: [{index:  '1', terms:['1948-07-24', '1952-08-14']},
            {index:  '2', terms:['1952-08-15', '1956-08-14']},
            {index:  '3', terms:['1956-08-15', '1960-04-27']},
           ], 
   name  : '이승만', 
   tags  : [{type: 'info', value :'허정 외무부 장관이 권한대행(1960년 4월 27일~1960년 6월 15일)'},
            {type: 'info', value :'곽상훈 민의원 의장이 권한대행(1960년 6월 16일~1960년 6월 23일)'},
            {type: 'info', value :'허정 국무총리가 권한대행(1960년 6월 23일~1960년 8월 7일)'},
            {type: 'info', value :'백낙준 참의원 의장이 권한대행(1960년 8월 8일~1960년 8월 12일)'},
           ]
  },
  {labels: [{index:  '4', terms:['1960-08-12', '1962-03-22']},], 
   name  : '윤보선', 
   tags  : [{type: 'info', value : '박정희 국가재건최고회의 의장이 권한대행(1962년 3월 22일~1963년 12월 16일)'}]
  },
  {labels: [{index:  '5', terms:['1963-12-17', '1967-06-30']},
            {index:  '6', terms:['1967-07-01', '1971-06-30']},
            {index:  '7', terms:['1971-07-01', '1972-12-26']},
            {index:  '8', terms:['1972-12-27', '1978-12-26']},
            {index:  '9', terms:['1978-12-27', '1979-10-26']},
           ], 
   name  : '박정희', 
   tags  : [{type: 'info', value : '최규하 국무총리가 권한대행(1979년 10월 26일~1979년 12월 6일)'}]
  },
  {labels: [{index: '10', terms:['1979-12-06', '1980-08-16']}], 
   name  : '최규하',
   tags  : [{type: 'info', value : '박충훈 국무총리 서리가 권한대행(1980년 8월 16일~1980년 8월 27일)'}]
  },
  {labels: [{index: '11', terms:['1980-08-27', '1981-02-24']},
            {index: '12', terms:['1981-02-25', '1988-02-24']},
           ], 
   name  : '전두환', 
   tags  : []
  },
  {labels: [{index: '13', terms:['1988-02-25', '1993-02-24']}], 
   name  : '노태우',
   tags  : []
  },
  {labels: [{index: '14', terms:['1993-02-25', '1998-02-24']}], 
   name  : '김영삼',
   tags  : []
  },
  {labels: [{index: '15', terms:['1998-02-25', '2003-02-24']}], 
   name  : '김대중',
   tags  : []
  },
  {labels: [{index: '16', terms:['2003-02-25', '2008-02-24']}], 
   name  : '노무현', 
   tags  : [{type: 'info', value : '고건 국무총리가 권한대행(2004년 3월 12일~2004년 5월 14일)'}]
  },
  {labels: [{index: '17', terms:['2008-02-25', '2013-02-24']}], 
   name  : '이명박',
   tags  : []
  },
  {labels: [{index: '18', terms:['2013-02-25', '2017-03-10']}], 
   name  : '박근혜', 
   tags  : [{type: 'info', value : '황교안 국무총리가 권한대행(2016년 12월 9일~2017년 3월 10일)'}, {type: 'info', value : '황교안 국무총리가 권한대행(2017년 3월 10일~2017년 5월 10일)'}]
  },
  {labels: [{index: '19', terms:['2017-05-10', '2022-05-09']}], 
   name  : '문재인',
   tags  : []
  },
  {labels: [{index: '20', terms:['2022-05-10']              }], 
   name  : '윤석열',
   tags  : []
  },
];

export default function handler(req, res) {
  console.log(req.query);
  res.status(200)
     .json(data);
}
