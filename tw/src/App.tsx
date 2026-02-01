import { useTw } from './useTw';

import './App.css';

function App() {
  return (
    <>
        <div>{useTw({ text: 'test', speed: 1000 })}</div>
    </>
  )
}

export default App
