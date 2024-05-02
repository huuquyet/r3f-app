'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Loading from './loading'

const MagicCube = dynamic(
  () => import('@/components/canvas/MagicCube').then((mod) => mod.MagicCube),
  {
    ssr: false,
  }
)
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Loading />,
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), {
  ssr: false,
})

export default function Page() {
  return (
    <>
      <div className="mx-auto flex w-full flex-col flex-wrap items-center md:flex-row">
        {/* jumbo */}
        <div className="flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left z-[1]">
          <p className="w-full uppercase text-sky-500">React Three Fiber</p>
          <h1 className="my-4 text-5xl font-bold leading-tight text-slate-500">Magic Cube</h1>
        </div>

        <View
          orbit
          className="absolute top-0 flex h-screen w-full flex-col items-center justify-center"
        >
          <Suspense fallback={null}>
            <MagicCube />
            <Common color="black" />
          </Suspense>
        </View>
      </div>
    </>
  )
}
