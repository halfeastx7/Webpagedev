//import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './ReactTask1/Home'
// import About from './ReactTask1/About'
// import Contact from './ReactTask1/Contact'
// import Navbar from './ReactTask1/Navbar'
// import Footer from './ReactTask1/Footer'
// import Services from './ReactTask1/Services'

//function App() {
//return (
// <div>
//   <Router>
//     <Navbar />
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='/abt' element={<About />} />
//       <Route path='/serv' element={<Services />} />
//       <Route path='/cn' element={< Contact />} />
//     </Routes>
//     <Footer />
//   </Router>
// </div>
//}export default App;

//-----------------------------------------------------------------------

//import React, { useState } from 'react'

//function App() {
// const[press , setPress] = useState(0)
// return (
//   <div>
//     <h1 style={{color: "red", textAlign: "center"}}>You click the button {press} times</h1>
//     <button onClick={() => setPress(press + 1)}>Click me</button>
//     </div>
// )
//}export default App;

//-----------------------------------------------------------------------

import React, { useState, useEffect } from 'react';

function ToggleButton() {
  // Declare a state variable named 'isOn' and a function to update it named 'setIsOn'
  const [isOn, setIsOn] = useState(false);

  // Function to toggle the state
  const toggle = () => {
    setIsOn(!isOn);
  };

  // useEffect hook to change the body's background color when isOn changes
  useEffect(() => {
    document.body.style.backgroundColor = isOn ? 'lightgreen' : 'lightcoral';

    // Cleanup function to reset the background color when the component unmounts
    return () => { document.body.style.backgroundColor = ''; };
  },
    [isOn]);
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggle} style={{ padding: '10px', fontSize: '16px' }}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
  );
}

export default ToggleButton;



