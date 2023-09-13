import PostCards from '@/component/postCard/PostCards'
import { sum } from '@/component/sum'
import Image from 'next/image'

export default function Home() {
  const total = sum(2 , 3)
  console.log(total)
  return (
   <div>
<h1>{total}</h1>
<PostCards />
   </div>
  )
}
