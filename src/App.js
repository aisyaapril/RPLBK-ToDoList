import React, { useState, useEffect } from 'react';
import './App.css';
import TodoApp from './TodoApp';
import Login from './Login';
import Register from './Register';

const UNSPLASH_ACCESS_KEY = 'ZWEpP5e7UlAqDnPiZyxGfGeEK4CmtWOkjTTdsUoP_MI';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem('user');
  });
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  const handleRegister = () => {
    setIsRegistering(false); // Setelah registrasi berhasil, kembali ke login
  };

  const [wallpaper, setWallpaper] = useState('');

  const fetchRandomWallpaper = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_ACCESS_KEY}&orientation=landscape&w=1920&h=1080`
      );
      const data = await response.json();
      setWallpaper(data.urls.full); // Set background image
    } catch (error) {
      console.error('Error fetching random wallpaper:', error);
    }
  };

  useEffect(() => {
    // Fetch an initial random wallpaper when the app loads
    fetchRandomWallpaper();
  }, []);

  return (
    <>
      {/* Wallpaper div */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${wallpaper})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1, // Pastikan berada di belakang semua elemen
        }}
      ></div>

      {/* Kontainer utama aplikasi */}
      <div className="app-container">
        {isLoggedIn ? (
          <div className="dashboard">
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
            <button onClick={fetchRandomWallpaper}>Random Wallpaper</button>
            <TodoApp />
          </div>
        ) : isRegistering ? (
          <Register
            onRegister={handleRegister}
            toggleLogin={() => setIsRegistering(false)}
          />
        ) : (
          <Login
            onLogin={handleLogin}
            toggleRegister={() => setIsRegistering(true)}
          />
        )}
        {!isLoggedIn && (
          <button
            className="toggle-btn"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? 'Back to Login' : 'Register'}
          </button>
        )}
      </div>
    </>
  );
}

export default App;