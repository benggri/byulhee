export default function handler(req, res) {
  res.status(200)
      .json([
        {name: '고조선', year: ['기원전 2333년']},
        {name: '삼국시대', year: ['기원전 57년','기원후 668년']},
        {name: '통일신라시대', year: ['676','935']},
        {name: '발해', year: ['699','926']},
        {name: '고려시대', year: ['918','1392']},
        {name: '조선시대', year: ['1392','1910']},
        {name: '일제강점기', year: ['1910','1945']},
        {name: '한국 정부 수립', year: ['1945','1948']},
        {name: '한국 전쟁', year: ['1950','1953']},
        {name: '현재', year: ['1954','now']},
      ]);
}
