// Write your Character component here
import React from "react";

export default function Character({ name, age, borderColor }) {
      return (
            <div style={{border: `3px solid ${borderColor}` }}>
                  <h2>Character Component</h2>
                  <h2>{name}</h2>
                  <h3>{age}</h3>
            </div>
      );
            // `<h2>${character.name}</h2>`)
}