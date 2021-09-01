import React, { useState } from 'react';


export default function Main(props) {
  const [playing, setPlaying] = useState(false)
  const [syn, setSyn] = useState()

  const playAudio = (url) => {
    const audio = new Audio(url)
    audio.play()
    setPlaying(true)
    audio.addEventListener('ended', () => setPlaying(false));
  }
  
  return (
    <React.Fragment>
      {props.loading || !props.data?.word? <div className="loader"></div> : 
        (<main className="main">
        <div className="main-overview">
          <h1>{props.data?.word}</h1>
          <div className="main-voice" onClick={() => playAudio(props.data?.phonetics[0].audio)}>
            {playing ? <i className="far fa-pause-circle"></i> :
            <i className="far fa-play-circle"></i>}
            <p>{props.data?.phonetics[0].text}</p>
          </div>
        </div>
        <div className="main-body">
          {props.data?.meanings.map(word => (
            <div className="main-body__item">
            <div className="main-item__name">
              <p>{word.partOfSpeech}</p>
            </div>
            <div className="main-item__definitions">
              {word.definitions.map(def => (
                <div className="main-item__definition">
                <h3><i className="fas fa-angle-right"></i> {def.definition}</h3>
                {!def.example? <div></div> : <p>"{def.example}"</p>}
                {def.synonyms.length === 0 ? <div></div> : (<div className="synonyms-wrap">
                  <p> synonyms:</p>
                  <div className="synonyms">
                    {def.synonyms.map(syn => <p onClick={()=>props.fetchData(syn)}>{syn}, </p>)}
                  </div>
                </div>)}
              </div>
              ))}
            </div>
          </div>
          ))}
        </div>
      </main>)
    }
    </React.Fragment>
  )
}