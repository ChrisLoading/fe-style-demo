// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import ProfileCard from './ProfileCard.jsx';
import ProfileCardCssModule from './ProfileCardCssModule.jsx';
import ProfileCardCssInJs from './ProfileCardCssInJs.jsx';
import ProfileCardTailwind from './ProfileCardTailwind.jsx';

// Default App component
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

function App() {
  return (
    // Practiced a little bit of tailwind CSS at the div level
    <div className='p-8 flex flex-col gap-8'>
      {/* Used different Profile Card components to test 4 ways of styling in React */}
      <ProfileCard /> 
      <ProfileCardCssModule />
      <ProfileCardCssInJs />  
      <ProfileCardTailwind />
    </div>
  )
}

export default App
