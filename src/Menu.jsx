import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        // Replace this URL with the one obtained from Firebase Storage
        const response = await axios.get('https://firebasestorage.googleapis.com/v0/b/arora-brew.appspot.com/o/menu.json?alt=media');
        setMenuItems(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading menu.</div>;

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ₹{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;