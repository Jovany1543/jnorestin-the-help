import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/post.css";

export const Post = () => {
<<<<<<< HEAD
	const { store, actions } = useContext(Context);
  console.log(store.posts)
let request =[
  {
   "candidates" :[{"name":"Lee Zee"},{"name":"Dan Bun"}],
   "date" : "06-02-2023",
   "description" : "fix my mower",
   "id": 1,
   "images": ["https://media.npr.org/assets/img/2011/06/21/flat-698474925749231d3fda07ba360d73772ef39545.jpg","https://media.npr.org/assets/img/2011/06/21/flat-698474925749231d3fda07ba360d73772ef39545.jpg","https://media.npr.org/assets/img/2011/06/21/flat-698474925749231d3fda07ba360d73772ef39545.jpg"],
   "location": "Huntsville AL",
	 "user_id": 2
  },
  {
    "candidates" :[{"name":"Lee Zee"},{"name":"Dan Bun"}],
    "date" : "06-02-2023",
    "description" : "fix my mower",
    "id": 1,
    "images": ["https://media.npr.org/assets/img/2011/06/21/flat-698474925749231d3fda07ba360d73772ef39545.jpg","https://media.npr.org/assets/img/2011/06/21/flat-698474925749231d3fda07ba360d73772ef39545.jpg","https://media.npr.org/assets/img/2011/06/21/flat-698474925749231d3fda07ba360d73772ef39545.jpg"],
    "location": "Huntsville AL",
    "user_id": 2
  },
]
	return (
    <div className="card-container">
    {request.map((item) => {
      return (
        <div className="card">
=======
  const { store, actions } = useContext(Context);
  console.log(store.posts)
  let request = [
    {
      "candidates": [{ "name": "Lee Zee" }, { "name": "Dan Bun" }],
      "date": "06-02-2023",
      "description": "fix my mower",
      "id": 1,
      "images": ["https://media.npr.org/assets/img/2011/06/21/flat-698474925749231d3fda07ba360d73772ef39545.jpg", "https://media.npr.org/assets/img/2011/06/21/flat-698474925749231d3fda07ba360d73772ef39545.jpg", "https://media.npr.org/assets/img/2011/06/21/flat-698474925749231d3fda07ba360d73772ef39545.jpg"],
      "location": "Huntsville AL",
      "user_id": 2
    },
    {
      "candidates": [{ "name": "Lee Zee" }, { "name": "Dan Bun" }],
      "date": "06-02-2023",
      "description": "fix my mower",
      "id": 1,
      "images": ["https://media.npr.org/assets/img/2011/06/21/flat-698474925749231d3fda07ba360d73772ef39545.jpg", "https://media.npr.org/assets/img/2011/06/21/flat-698474925749231d3fda07ba360d73772ef39545.jpg", "https://media.npr.org/assets/img/2011/06/21/flat-698474925749231d3fda07ba360d73772ef39545.jpg"],
      "location": "Huntsville AL",
      "user_id": 2
    },
  ]
  return (
    <div className="card-container">
      {request.map((item) => {
        return (
          <div className="card">
>>>>>>> cf09f69674b7ad27b9ccee79a908ce7e22e3da11
            <div className="card-body">
              <div className="user-info">
                <img src="User Profile Image" className="profile_image" />
                <h5 className="card-title"></h5>
              </div>
              <p className="card-text">{item.description}</p>
              <div className="card-images">
<<<<<<< HEAD
                {item.images.map((image,index) =>{
                  return (
                    <img src={image} key={index} className="cardImage"/>
=======
                {item.images.map((image, index) => {
                  return (
                    <img src={image} key={index} className="cardImage" />
>>>>>>> cf09f69674b7ad27b9ccee79a908ce7e22e3da11
                  )
                })}
              </div>
              <div className="post-info">
                <p className="date">{item.date}</p>
                <p className="location">{item.location}</p>
              </div>
<<<<<<< HEAD
            </div>
            <div>
              {item.candidates.map((cand,index) =>{
                return(
                  <div className="helper-info d-flex navbar">
                    <img src="helper profile image" className="helper_image mx-5" />
                    <h5 className="card-text2 mx-5">{cand.name}</h5>
                    <i class="fa-sharp fa-regular fa-envelope ms-5 me-2"></i>
                    <i class="fa-solid fa-circle-check mx-3"></i>
                  </div>
                )
              })}
            </div>
       </div>
      )
    })}
   </div>
	);
=======
            </div>
            <div>
              {item.candidates.map((cand, index) => {
                return (
                  <div className="helper-info d-flex navbar">
                    <img src="helper profile image" className="helper_image mx-5" />
                    <h5 className="card-text2 mx-5">{cand.name}</h5>
                    <i class="fa-sharp fa-regular fa-envelope ms-5 me-2"></i>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                      <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  );
>>>>>>> cf09f69674b7ad27b9ccee79a908ce7e22e3da11
};
