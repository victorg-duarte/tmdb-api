import React, { useEffect, useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { TrailerVideo } from './styles'

const api = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const language = ['en-US', 'pt-BR' ]

export const Trailer = ({ idMovie }) => {
  const path = `movie/${idMovie}/videos`
  const [modal, setModal] = useState(false)
  const [idVideo, setIdVideo] = useState('')

  async function getVideo() {
    try {
      for (const lang of language) {
        const response = await fetch(`${api}${path}?${apiKey}&language=${lang}`)
        const data = await response.json()
        const key = data.results.map(video => video.key)
        if (key.length > 0) {
          setIdVideo(key[0])
          break
        }
      }
    } catch (error) {
      console.error('error: getVideo')
    }
  }

  function playPauseTrailer(state) {
    if (state) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      setModal(state)
      $('.video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    } else {
      setModal(state)
      $('.video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    }
  }

  useEffect(() => {
    getVideo()
  }, [idMovie]);

  useEffect(() => {
    document.body.style.overflowY = modal ? 'hidden' : 'auto';
  }, [modal]);

  return (
    <>
      <TrailerVideo showModal={modal}>
        <IoMdCloseCircle id='pauseViideo' onClick={() => playPauseTrailer(false)} />
        <div id='youtube-video'>
          {idVideo ?
            <iframe
              className="video"
              src={`https://www.youtube.com/embed/${idVideo}?enablejsapi=1&version=3&playerapiid=ytplayer`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
            :
            <p style={{ textAlign: 'center' }}>Trailer não foi encontrado!</p>
          }
        </div>
      </TrailerVideo>
      <a className='btn-movie' onClick={() => playPauseTrailer(true)}>Watch trailer</a>
    </>
  )
}