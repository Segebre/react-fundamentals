// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.default.useRef(null);
  const [usernameInput, setUsernameInput] = React.default.useState('');
  const [error, setError] = React.useState('');
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input
  const handleSubmit = event => {
    event.preventDefault();

    const username = usernameInputRef.current.value || '';

    onSubmitUsername(username);
  };

  const handleUsernameInputChange = (event) => {
    const username = event.target.value.toLowerCase();
    setUsernameInput(username);
    
    const onlyLowerCase = /^[a-z]*$/;
    if(!username.match(onlyLowerCase)) {
      setError('Username must be lower case');
    } else {
      setError('');
    }
  }


  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input type="text" id="usernameInput" ref={usernameInputRef} value={usernameInput} onChange={handleUsernameInputChange} />
        <div role="alert" style={{height: 18}}>{error}</div>
      </div>
      <button type="submit" disabled={!!error}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
