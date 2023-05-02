import React, { useState } from 'react';
import Form from '../Form/Form';
import { useSelector } from 'react-redux';

function App() {

  const airlineArray = useSelector((store) => store.airlineArray)


  return (
    <div>
      <h1>Redux Airport</h1>
      <Form />
      <table>
        <thead>
          <tr>
            <td>Airline Names</td>
          </tr>
        </thead>
        <tbody>
          {
            airlineArray.map((airline) => {
              return (
                <tr key={airline.id}>
                  <td>{airline.name}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
