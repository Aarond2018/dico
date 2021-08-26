import React from 'react';


export default function Main(props) {
  const playAudio = (url) => {
    const audio = new Audio(url)
    audio.play()
    console.log("yeaa")
  }
  
  return (
    <React.Fragment>
      {!props.data?.word ? <p>loading...</p> : 
        <main className="main">
        <div className="main-overview">
          <h1>{props.data?.word}</h1>
          <div className="main-voice" onClick={() => playAudio(props.data?.phonetics[0].audio)}>
            <i className="far fa-play-circle"></i>
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
                <h3>{def.definition}</h3>
                <p>"{def.example}"</p>
                <div className="synonyms-wrap">
                  <p>{def.synonyms ? "synonyms:" : ""}</p>
                  <div className="synonyms">
                    {def.synonyms? def.synonyms.map(syn => (
                      <p>{syn}, </p>
                    )): ""}
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
          ))}
        </div>
      </main>
    }
    </React.Fragment>
  )
}


{/* <main className="main">
      <div className="main-overview">
        <h1>{props.data.word}</h1>
        <div className="main-voice">
          <i className="far fa-play-circle"></i>
          <p>{props.data.phonetics[0].text}</p>
        </div>
      </div>
      <div className="main-body">
        {props.data[0].meanings.map(word => (
          <div className="main-body__item">
          <div className="main-item__name">
            <p>{word.partOfSpeech}</p>
          </div>
          <div className="main-item__definitions">
            {word.definitions.map(def => (
              <div className="main-item__definition">
              <h3>{def.definition}</h3>
              <p>"{def.example}"</p>
              <div className="synonyms-wrap">
                <p>{def.synonyms ? "synonyms:" : ""}</p>
                <div className="synonyms">
                  {def.synonyms? def.synonyms.map(syn => (
                    <p>{syn}, </p>
                  )):""}
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
        ))}
      </div>
    </main> */}