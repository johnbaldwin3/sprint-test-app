import React from 'react';


import Actor from "./actor";

export const ActorContainer = (props) => {
  let actor = props.data.map((actor) => {
    return (
      <Actor name={actor.name}
        birthName={actor.birthName}
        key={actor.id}
        birthday={actor.birthday}
        birthplace={actor.birthplace}
        credits={actor.credits}
        firstMovie={actor.firstMovie}
        
    )
  })
}
