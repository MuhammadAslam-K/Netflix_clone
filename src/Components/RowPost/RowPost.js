import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import './RowPost.css'
import { imageUrl, API_KEY } from '../../constants/constants'
import Youtube from 'react-youtube'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, seturlId] = useState('')
  
  useEffect(() => {
    axios.get(props.url).then(response => {
      console.log(response.data)
      setMovies(response.data.results)
      
    }).catch(error => {
      //  alert('network error')
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }
  const handlemovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if (response.data.results.length !== 0) {
        seturlId(response.data.results[0])
      }else{
        console.log ('Array Empty')
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) =>
        <div>
          <img onClick={() => handlemovie(obj.id)} className={props.isSmall ? 'small_poster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
          <h5>{ obj.title }</h5>
          </div>
        )}

      </div>
  { urlId &&   <Youtube videoId={urlId.key} opts={opts} />   }
    </div>
  )
}

export default RowPost