import React, { useState } from 'react';


export default function Header(props) {
  const [inputData, setInputData] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchData(e.target.elements.name.value)
  }

  return (
    <React.Fragment>
      <header className="main-header">
        <h2>dICo</h2>
        <form className="main-header__search" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Search a word..."></input>
          <button type="submit"><i className="fas fa-search"></i></button>
        </form>
      </header>
    </React.Fragment>
  )
}
