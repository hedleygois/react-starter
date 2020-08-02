import React from  "react";
import { useSelector } from "react-redux";
import { selectPlanetByUrl, selectSpeciesByUrl } from "../redux/selectors/Selector";

export const MorePersonInfo = ({person}) => {
  const planet = useSelector(state => selectPlanetByUrl(state, person.homeworld));
  // Can someone have more than one race? Doesn't makes sense so I'm assuming only one here
  const race = useSelector(state => selectSpeciesByUrl(state, person.species[0]));

  return  (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>Name: <span>{person.name}</span></div>
      <div>Planet: <span>{planet && planet.name ? planet.name : "Unknown"}</span></div>
      <div>Gender: <span>{person.gender}</span></div>
      <div>Species: <span>{race && race.name ? race.name : "Unknown"}</span></div>
    </div>
  )
}