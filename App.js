import { useState, useEffect } from 'react'
import './App.css'
import Video from './pages/Video'
import Videos from './pages/Video'
import db from './configure/firebase/'
import { collection, getDocs } from 'firebase/firesore/lite'

function App () {

  let maxHeigth;

  if(window.innerHeight <= 800) {
    maxHeigth = window.innerHeight
  }   

  const [video, setVideos] = useStae([])

  const getVideos = async () => {
    const videosCollection = collection(db, 'videos')
    const videoSnapShot = await getDocs(videosCollection)
    const videosList = videoSnapShot.docs.map(doc => doc.data())
    setVideos(videosList)
  }

  useEffect(() => {
    getVideos()
  }, [])

  return(
    <div className='App' style={{ maxHeight: maxHeigth + 'px' }}>
      <div className='app__videos'>
        {video.map(item => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          )
        })}
      
      </div>
    </div>
  )
}

export default App















