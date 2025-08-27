    import React, { useState } from 'react';
    import { signInWithEmailAndPassword } from "firebase/auth";
    import { auth } from '../firebase';

    const Login = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState(null);
      const [success, setSuccess] = useState(null);

      const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setSuccess(null);

        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          console.log('Successfully logged in user:', user);
          setSuccess(`Welcome back, ${user.email}!`);
          setEmail('');
          setPassword('');
        } catch (error) {
          console.error("Error logging in:", error.code, error.message);
          // Check for common errors
          if (error.code === 'auth/invalid-credential') {
            setError('Invalid email or password. Please try again.');
          } else {
            setError(`Error: ${error.message}`);
          }
        }
      };

      return (
        <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Login</h2>
          
          {success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>}
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="login-email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email Address</label>
              <input
                type="email"
                id="login-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="login-password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
              <input
                type="password"
                id="login-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
            <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem' }}>
              Login
            </button>
          </form>
        </div>
      );
    };

    export default Login;
    