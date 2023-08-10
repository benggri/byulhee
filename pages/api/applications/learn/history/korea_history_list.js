// 우리역사넷 : http://contents.history.go.kr/front/kc/main.do

export default function handler(req, res) {
  res.status(200)
      .json([
        {name: '고조선', year: ['기원전 2333', '기원전 108']},
        {name: '삼국시대', year: ['기원전 57', '668'], children: [{name: '고구려', year: ['기원전 37', '668']},{name: '신라', year: ['기원전 57', '676']},{name: '백제', year: ['기원전 18', '660']},]},
        {name: '통일신라시대', year: ['676','935']},
        {name: '후고구려', year: ['876','936']},
        {name: '후백제', year: ['892','936']},
        {name: '발해', year: ['699','926']},
        {name: '고려시대', year: ['918','1392']},
        {name: '조선시대', year: ['1392','1910']},
        {name: '일제강점기', year: ['1910','1945']},
        {name: '한국 정부 수립', year: ['1945','1948']},
        {name: '한국 전쟁', year: ['1950','1953']},
        {name: '현재', year: ['1954','']},
      ]);
}