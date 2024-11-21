import React, { useState } from 'react';
import './App.css'; // Importing the CSS file for styling

const App = () => {
  // Data for profiles (name, image, phone number, email, address)
  const data = [
    { name: "John Doe", image: "https://randomuser.me/api/portraits/men/1.jpg", phone: "+1 (555) 123-4567", email: "johndoe@example.com", address: "123 Main St, Springfield" },
    { name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/1.jpg", phone: "+1 (555) 987-6543", email: "janesmith@example.com", address: "456 Oak St, Springfield" },
    { name: "Sarah Connor", image: "https://randomuser.me/api/portraits/women/2.jpg", phone: "+1 (555) 234-5678", email: "sarahconnor@example.com", address: "789 Elm St, Springfield" },
    { name: "Michael Scott", image: "https://randomuser.me/api/portraits/men/2.jpg", phone: "+1 (555) 345-6789", email: "michaelscott@example.com", address: "101 Pine St, Scranton" },
    { name: "Dwight Schrute", image: "https://randomuser.me/api/portraits/men/3.jpg", phone: "+1 (555) 456-7890", email: "dwight@example.com", address: "102 Maple St, Scranton" },
    { name: "Jim Halpert", image: "https://randomuser.me/api/portraits/men/4.jpg", phone: "+1 (555) 567-8901", email: "jimhalpert@example.com", address: "103 Birch St, Scranton" },
    { name: "Pam Beesly", image: "https://randomuser.me/api/portraits/women/3.jpg", phone: "+1 (555) 678-9012", email: "pambeesly@example.com", address: "104 Cedar St, Scranton" },
    { name: "Ryan Howard", image: "https://randomuser.me/api/portraits/men/5.jpg", phone: "+1 (555) 789-0123", email: "ryanhoward@example.com", address: "105 Elm St, Scranton" },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // Handling search input changes
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    setFilteredData(
      data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.phone.toLowerCase().includes(query.toLowerCase()) ||
        item.email.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="container">
      <h1 className="title">Contact Search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        className="searchInput"
        placeholder="Search for a contact..."
      />
      <div className="listContainer">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index} className="card">
              <img className="profileImage" src={item.image} alt={item.name} />
              <h2 className="cardTitle">{item.name}</h2>
              <p className="cardPhone">{item.phone}</p>
              <p className="cardEmail">{item.email}</p>
            </div>
          ))
        ) : (
          <p className="noResults">No contacts found</p>
        )}
      </div>
    </div>
  );
};

export default App;
