import React, { Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'

const Home = () => {
  return (
    <section className='w-full h-screen relative'>
     <Canvas 
     className='w-full h-full bg-transparent'
     camera={{ near: 0.1, far: 1000}}
     >

      <Suspense fallback={<Loader/>}>
      <directionalLight/>
      <ambientLIGHT/>
      <pointLight/>
      <spotLight/>
      <hemisphericLight/>

      </Suspense>
     </Canvas>
  </section>
  )
}

export default Home