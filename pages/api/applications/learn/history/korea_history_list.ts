// 우리역사넷 : http://contents.history.go.kr/front/kc/main.do
import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  res.status(200)
      .json([
        {name: '고조선', year: [-2333, -108]},
        {name: '삼국시대', year: [-57, 668], children: [{name: '고구려', year: [-37, 668]},{name: '신라', year: [-57, 676]},{name: '백제', year: [-18, 660]},]},
        {name: '통일신라시대', year: [676, 935]},
        // {name: '후고구려', year: [876, 936]},
        // {name: '후백제', year: [892, 936]},
        {name: '발해', year: [699, 926]},
        {name: '고려시대', year: [918, 1392]},
        {name: '조선시대', year: [1392, 1910]},
        {name: '일제강점기', year: [1910, 1945]},
        {name: '한국 정부 수립', year: [1945, 1948]},
        {name: '한국 전쟁', year: [1950, 1953]},
        {name: '현재', year: [1954, new Date().getFullYear()]},
      ]);
}