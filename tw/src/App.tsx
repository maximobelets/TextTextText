import { useTypewriter } from './useTypewriter';

import './App.css';

function App() {
  return (
    <>
        <div>{useTypewriter({ text: 'test', speed: 1000 })}</div>
    </>
  )
}

export default App
