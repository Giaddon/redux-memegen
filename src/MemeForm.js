import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import "./MemeForm.css";

/** Form component.
 * Takes user input, adds a new meme to the store on submit.
 *  States:
 *    formData: Object with values for each form input (top, bottom, image).
 */

function MemeForm() {
  const [ formData, setFormData ] = useState({top: "", bottom: "", image: ""});
  const dispatch = useDispatch();

  // controls the values of the form inputs
  function controlForm(evt) {
    const { name, value } = evt.target;

    setFormData(oldData => ({...oldData, [name]: value}));
  }

  // on form submit, add the form data to our store with a new unique id. 
  function submitForm(evt) {
    evt.preventDefault();
    const finalData = {...formData, id: uuid()}
    dispatch({type: "ADD", payload: finalData});
  }
  // look into label wrapping and accessability
  // Elie recommends htmlFor + input id
  return(
    <form className="MemeForm" onSubmit={submitForm} >
      <h1>Make a meme</h1>
      <label>Top Text:
        <input type="text" name="top" value={formData.top} onChange={controlForm} />
      </label>
      <label>Bottom Text:
        <input type="text" name="bottom" value={formData.bottom} onChange={controlForm} />
      </label>
      <label>Image URL:
        <input type="text" name="image" value={formData.image} onChange={controlForm} />
      </label>
      <button>I dream a meme</button>
    </form>
  )
}

export default MemeForm;