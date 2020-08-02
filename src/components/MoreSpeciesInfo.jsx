import React from "react";
import { useSelector } from "react-redux";
import { selectPeopleBySpecies } from "../redux/selectors/Selector";
import { MorePersonInfo } from "./MorePersonInfo";

export const MoreSpeciesInfo = ({species}) => {
  const people = useSelector(state => selectPeopleBySpecies(state, species.name));
  return people.length > 0 ? people.map(person => <MorePersonInfo person={person}/>) : "Sorry, no result for this species.";
}
