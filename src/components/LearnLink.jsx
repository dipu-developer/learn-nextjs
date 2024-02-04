import Link from 'next/link'
import React from 'react'

export default function LearnLink() {
    const id=2;
  return (
    
    <>
    <Link href='products'>Product</Link>
    <Link href={`/user/profile/${2}`}>Profile 2</Link>
    </>
  )
}
