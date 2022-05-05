import React, {useState, useEffect} from 'react';
import api from '../configApi/api';


function UpdatingNewGenre(props) {

  const [movieGenre, setMovieGenre] = useState()

  const[selectedOption, setSelectedOption] = useState("")

  const filter = (args={}) => {
    api.get(`movies/?genre=${args.genre || ''}`)
      .then(res => setMovieGenre(res.data.data))
  }

  useEffect(() => {
    filter()
  }, [])


  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    // console.log(`Option selected:`, selectedOption, name, value, selectedOption.target.value);
    filter({ genre: event.target.value })
    // return setSelectedOption
  };


  return (
      <>
      <div className="form-floating mb-3 justify-content-center ">
          <select className="form-select w-50" id="floatingSelect" aria-label="Floating label select example" onChange={handleChange} name="genre" value={selectedOption}>
            <option value="">--Select one--</option>
            {/* <option value={props.genre}>
              <MovieCard
            </option> */}
            {/* <option value="fantasy"> Fantasy</option>
            <option value="romcom"> Romcom</option>
            <option value="drama"> Drama</option>
            <option value="patriotic"> Patriotic</option>
            <option value="action"> Action</option>
            <option value="chill"> Chill</option>
            <option value="equality"> Equality</option> */}
          </select>
          <label htmlFor="floatingSelect" >Filter (By Genre):</label>
          </div>



          {/* <h5 className="card-text">Name: {props.name}</h5>
            <p className="card-text">Release Date: {props.releaseDate}</p>
            <p className="card-text">Genre: {props.genre} </p>
            <p className="card-text">Description: {props.description} </p>
            <p className="card-text">Quantity: {props.quantity} </p>
            <p className="card-text">Price: {props.price} </p>
                         */}


      </>
  )
}

export default UpdatingNewGenre