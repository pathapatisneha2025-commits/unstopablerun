import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate(); // ✅ for redirect
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // ✅ Redirect if user is already logged in
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      navigate('/'); // redirect to home if already logged in
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const endpoint = isLogin
      ? 'https://unstopablerundatabse.onrender.com/user/auth/login'
      : 'https://unstopablerundatabse.onrender.com/user/auth/register';

    const body = isLogin ? { email, password } : { name, email, password };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (res.ok) {
        // store user info in localStorage
        localStorage.setItem('user', JSON.stringify(data));

        alert(isLogin ? `Welcome back, ${data.name}!` : 'Registration successful!');

        // ✅ Redirect to home page after login/register
        navigate('/');
      } else {
        alert(data.message || 'Something went wrong!');
      }
    } catch (err) {
      console.error(err);
      alert('Server error');
    }
  };

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      maxWidth: '400px',
      margin: '5rem auto',
      padding: '2rem',
      border: '1px solid #eee',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
    }}>
      <h2 style={{ textAlign: 'center', fontWeight: 900, marginBottom: '1rem' }}>
        {isLogin ? 'Login' : 'Register'}
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', gap: '1rem' }}>
        <button onClick={() => setIsLogin(true)}
          style={{
            padding: '0.5rem 1rem', fontWeight: 700, border: 'none',
            borderBottom: isLogin ? '2px solid #ff5c00' : '1px solid #ccc',
            background: 'transparent', cursor: 'pointer'
          }}>Login</button>
        <button onClick={() => setIsLogin(false)}
          style={{
            padding: '0.5rem 1rem', fontWeight: 700, border: 'none',
            borderBottom: !isLogin ? '2px solid #ff5c00' : '1px solid #ccc',
            background: 'transparent', cursor: 'pointer'
          }}>Register</button>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {!isLogin && (
          <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)}
            required style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />
        )}

        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
          required style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />

        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
          required style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />

        {!isLogin && (
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
            required style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />
        )}

        <button type="submit"
          style={{
            padding: '0.75rem',
            borderRadius: '8px',
            border: 'none',
            background: '#ff5c00',
            color: '#fff',
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: '1rem',
            marginTop: '0.5rem'
          }}>
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>

      <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.875rem' }}>
        {isLogin ? (
          <>
            Don't have an account? <button onClick={() => setIsLogin(false)} style={{ color: '#ff5c00', fontWeight: 700, background: 'transparent', border: 'none', cursor: 'pointer' }}>Register</button>
          </>
        ) : (
          <>
            Already have an account? <button onClick={() => setIsLogin(true)} style={{ color: '#ff5c00', fontWeight: 700, background: 'transparent', border: 'none', cursor: 'pointer' }}>Login</button>
          </>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
