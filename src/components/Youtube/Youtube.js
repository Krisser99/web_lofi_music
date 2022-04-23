import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import './Youtube.scss'

function Youtube() {

  const [urlYoutube, setUrlYoutube] = useState('')
  const [submited, setSubmited] = useState(false)
  const [showYoutube, setShowYoutube] = useState(false)

  const handleSubmitLink = (e) => {
    e.preventDefault()
    setSubmited(!submited)
  }

  return (
    <>
      <div className="youtube">
        <button onClick={() => setShowYoutube(!showYoutube)} className='show-in'>Youtube</button>
        {showYoutube &&
          <>
            {submited &&
              <div className="screen">
                <ReactPlayer
                  url={urlYoutube}
                  width={'250px'}
                  height={'200px'}
                  controls={true}
                  loop={true}
                />
                <button onClick={() => setSubmited(false)}>Choose another video</button>
              </div>
            }
            {
              !submited &&
              <form onSubmit={handleSubmitLink} className="postUrl">
                <input type="text" value={urlYoutube} onChange={e => setUrlYoutube(e.target.value)} />
                <button type='submit'>Submit</button>
              </form>
            }
          </>}
      </div>
    </>
  )
}

export default Youtube