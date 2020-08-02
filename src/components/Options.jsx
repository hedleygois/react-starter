import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPeopleByName, selectPlanetByName, selectSpeciesByName, selectPlanets } from "../redux/selectors/Selector";
import { fetchPlanets, fetchSpecies, fetchPeople } from "../redux/actions/Actions";

export const Options = ({search, onSelect}) => {
  const dispatch = useDispatch();
  const filteredPeople = useSelector(state  => selectPeopleByName(state, search)).map(person => ({ data: person, type: "Person" }));
  const filteredPlanets = useSelector(state  => selectPlanetByName(state, search)).map(person => ({ data: person, type: "Planet" }));
  const filteredSpecies = useSelector(state  => selectSpeciesByName(state, search)).map(person => ({ data: person, type: "Species" }));


  useEffect(() => {
    dispatch(fetchPlanets());
    dispatch(fetchSpecies());
    dispatch(fetchPeople());
  }, [dispatch]);

  return search ? (
    <div style={{ width: 200, display: "flex", justifyContent: "center" }}>
      {[...filteredPeople, ...filteredPlanets, ...filteredSpecies].map(element => (
        <div style={{
          backgroundColor: "blue",
          border: "1px solid blue",
          borderRadius: 10,
          color: "white",
          padding: "5px 5px 5px 5px",
          margin: "10px 10px 10px 10px",
          cursor: "pointer"
          }}
          key={`${element.data.name}`}
          onClick={() => onSelect(element)}>
            <span>{element.data.name}</span> 
            <br />
            ({element.type})
        </div>
      ))}
    </div>
  ) : null;
}