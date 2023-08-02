import Main from './main/page';
import { cookies } from 'next/headers';

export default function Home() {
  const cookieStore = cookies();
  const id = cookieStore.get('id');
  return (
    <Main id={id?.value}></Main>
  );
}
