import Card from './Card';
import Header from './Header';

function App() {
  
  return (
    <>
    <Header/>
    <Card name={'Delhi'} rank= {1} />
    <Card name={'Mumbai'} rank={2} />
    <Card name={'Chandigarh'} rank={3} />
    </>
  )
}

export default App
