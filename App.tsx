import React, { useState } from 'react';
import './style.css';

export default App;

function App() {
  const [records, setRecords] = useState([]);
  const [filter, setFilter] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newRecord = {
      Name: formData.get('Name'),
      Country: formData.get('Country'),
      'Favorite Phone Brand': formData.get('Favorite Phone Brand'),
      'Phone Number': formData.get('Phone Number'),
    };
    setRecords([...records, newRecord]);
  };

  const handleFilter = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const filteredRecords = records.filter((record) => {
    return (
      (!filter.Country || record.Country === filter.Country) &&
      (!filter['Favorite Phone Brand'] ||
        record['Favorite Phone Brand'] === filter['Favorite Phone Brand'])
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="Name" placeholder="Name" />
        <input type="text" name="Country" placeholder="Country" />
        <input
          type="text"
          name="Favorite Phone Brand"
          placeholder="FavoritePhoneBrand"
        />
        <input type="text" name="Phone Number" placeholder="Phone Number" />
        <button type="submit">Add Record</button>
      </form>
      <br />
      <div>
        <input
          type="text"
          name="Country"
          placeholder="Filter by Country"
          onChange={handleFilter}
        />
        <input
          type="text"
          name="Favorite Phone Brand"
          placeholder="Filter by Favorite Phone Brand"
          onChange={handleFilter}
        />
      </div>
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>FavoritePhoneBrand</th>
            <th>PhoneNumber</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map((record, index) => (
            <tr key={index}>
              <td>{record.Name}</td>
              <td>{record.Country}</td>
              <td>{record['Favorite Phone Brand']}</td>
              <td>{record['Phone Number']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
