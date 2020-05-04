/** Meme generator outline 
 * 
 * Meme - object w/3 values: top, bottom, image
 *  {id: "0", top: "I'm a", bottom: "Meme!", img: "http/cool.img"}
 * 
 * store [{meme}, {meme}, ...]
 */

const INITIAL_STATE = [{id: 0, 
                        top: "Will code",
                        bottom: "For memes.",
                        image: "https://miro.medium.com/max/719/1*TMAo0Qpl4j9TaE3sDyBTLg.jpeg"
                      }]

function memeReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload]
  
    case "REMOVE":
      return state.filter(meme => meme.id !== action.payload)
    
    default:
      return state;
  }
}

export default memeReducer;