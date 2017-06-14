import React from 'react';


const Actor = (props) => {
  let actor = props.data.map((actor) => {
    return (
      <li className="actor_content" key={actor.id}>
        <img className="actor-image" src={actor.img} alt="actor" />
        <div className="actor-info">
          <h3>{actor.name}</h3>
          <h5>Birthname: {actor.birthName}</h5>
          <h5>Birthday: {actor.birthday}</h5>
          <h6>Birth Place: {actor.birthplace}</h6>
          <h6>{actor.credits}</h6>
          <h6>First Movie: {actor.firstMovie}</h6>
        </div>
        <div className="actor-bio">
          <p><strong>Biography:</strong> {actor.bio}</p>
        </div>
      </li>
    )
  });
  return (
    <div>
      <hr></hr>
      <ul className="actor_bio_ul">
        {actor}
      </ul>
    </div>
  )

};

export default Actor;
