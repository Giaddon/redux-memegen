import React from 'react';
import './App.css';
import MemeForm from "./MemeForm";
import { useSelector } from "react-redux"
import Meme from "./Meme";

/** Main app component. 
 * Connects to store to render memes. 
 * */

function App() {
  const memes = useSelector(st => st);
  
  // Create memeList for use in return 
  const memeList = memes.map(m => <Meme 
                                    key={m.id} 
                                    id={m.id} 
                                    top={m.top} 
                                    bottom={m.bottom} 
                                    image={m.image} 
                                  />)

  return (
    <div className="App">
      <MemeForm />
      {memeList}
    </div>
  );
}

export default App;
