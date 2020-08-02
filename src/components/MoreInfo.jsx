import React from  "react";
import { MorePersonInfo } from "./MorePersonInfo";
import { MoreSpeciesInfo } from "./MoreSpeciesInfo";
import { MorePlanetInfo } from "./MorePlanetInfo";

export const MoreInfo = React.memo(({info}) => {
  return info ? (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      backgroundColor: "blue",
      border: "1px solid blue",
      borderRadius: 10,
      color: "white",
      padding: "5px 5px 5px 5px" }}>
      {
        info.type === "Person" ? <MorePersonInfo person={info.data}/> : 
          info.type === "Species" ? 
            <MoreSpeciesInfo species={info.data}/> : 
              <MorePlanetInfo planet={info.data}/>}
    </div>
  ) : null;
});