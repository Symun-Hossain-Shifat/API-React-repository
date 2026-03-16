
import { Suspense } from 'react';
import './App.css'
import Container from './components/container'

function App() {
  const datapromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json());

  return (
    <>
     
      <Suspense fallback = {<p>Data Is Loading...</p>}>
     <Container datapromise = {datapromise}></Container>
      </Suspense>
      
    </>
  )
}

export default App
