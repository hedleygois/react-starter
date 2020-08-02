import React from "react";
import { useSelector } from "react-redux";
import { selectPeopleByPlanet } from "../redux/selectors/Selector";
import { MorePersonInfo } from "./MorePersonInfo";

export const MorePlanetInfo = ({planet}) => {
  const people = useSelector(state => selectPeopleByPlanet(state, planet.name))
  return people.length > 0 ? people.map(person => <MorePersonInfo person={person}/>) : "Sorry, no results for this planet."
}