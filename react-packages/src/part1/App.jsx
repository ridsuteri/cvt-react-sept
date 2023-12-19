import styles from  './App.module.css'
// import axios from 'axios';
import styled from 'styled-components';

function App() {
  const callApi = ()=>{
    // axios.get('https://randomUrl')
    // fetch('https://randomUrl')
  }
  const Btn = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0 1em;
  padding: 0.25em 1em;
  `
  return (
    <>
      hello world
      <button className={styles.btn}>I am a btn</button>
      <Btn>I am styled btn </Btn>
    </>
  )
}

export default App
