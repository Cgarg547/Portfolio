import React, { Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import HomeInfo from '../components/HomeInfo'
import { useState } from 'react'
import { soundoff, soundon } from '../assets/icons'
import sakura from '../assets/sakura.mp3'
import { useEffect, useRef } from 'react'
import { Island, Sky, Plane, Bird } from '../models'

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play(); 
    }

    return () => {
      audioRef.current.pause();
    };
  
    }, [isPlayingMusic]);


  const adjustIslandForScreenSize = () => {
    let screenScale , screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4]; // Adjusted position for smaller screens 
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4]; // Default position for larger screens 
    }

    return { screenScale, screenPosition};
  };

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition; // Default position for larger screens 
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0]; // Adjusted position for smaller screens
    } else {
      screenScale = [3,3,3];
      screenPosition = [0, -4, -4]; // Default position for larger screens
    }

    return { screenScale, screenPosition };
  };

  const { islandScale, islandPosition} = adjustIslandForScreenSize();
  const { biplaneScale, biplanePosition } = adjustBiplaneForScreenSize();

  return (
  <section className='w-full h-screen relative'>
    <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
      {currentStage && <HomeInfo currentStage={currentStage} />}
    </div>

     <Canvas 
     className={`w-full h-full bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
     camera={{ near: 0.1, far: 1000}}>

      <Suspense fallback={<Loader/>}>
      <directionalLight positon={[1,1,1]} intensity={2}/>
      <ambientLight intensity={0.5}/>
      <spotLight position={[0,50,10]} angle={0.15} penumbra={1} intensity={2}/>
      <pointLight position={[10,5,10]} intensity={2}/>
      <hemisphericLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/> 

       <Bird/>
       <Sky isRotating={isRotating}/>
       <Island 
        scale={islandScale} 
        position={islandPosition} 
        rotation={0.1, 4.7077, 0}
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        setCurrentStage={setCurrentStage}
        />
       <Plane 
       scale={biplaneScale}
       position={biplanePosition}
       isRotating={isRotating}
       rotation={0,20.1,0}
       />
      </Suspense>
     </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img 
        src={!isPlayingMusic ? soundoff : soundon} 
        alt="jukebox" 
        className='w-10 h-10 cursor-pointer object-contain' 
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}/>
      </div>
  </section>
  )
}

export default Home;