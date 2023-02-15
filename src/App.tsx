import { useState } from 'react'

import Button from '@mui/material/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center space-y-10'>
      <h1 className='text-xl font-bold text-blue-500'>Vite + React</h1>

      <Button variant='outlined' onClick={() => setCount(count => count + 1)}>
        count is {count}
      </Button>

      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>

      <p>Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
