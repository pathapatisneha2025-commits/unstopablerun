import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Toggle show/hide password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      navigate('/');
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
      // Ensure stored object always has id, name, and email
      const userData = {
        id: data.id,
        name: data.name || email, // fallback to email if name missing
        email: data.email,
      };

      localStorage.setItem('user', JSON.stringify(userData));
      alert(isLogin ? `Welcome back, ${userData.name}!` : 'Registration successful!');
      navigate('/');
    } else {
      alert(data.message || 'Something went wrong!');
    }
  } catch (err) {
    console.error(err);
    alert('Server error');
  }
};


  const inputStyle = {
    padding: '0.85rem 2.5rem 0.85rem 0.85rem', // leave space for eye icon
    borderRadius: '10px',
    border: '1px solid #d35400', 
    fontSize: '1rem',
    background: '#4e2a00', 
    color: '#fff',
    outline: 'none',
    transition: '0.3s',
    position: 'relative',
    width: '100%'
  };

  const eyeStyle = {
    position: 'absolute',
    right: '0.8rem',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    fontSize: '1.1rem',
    color: '#ffcc99'
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Inter, sans-serif'
    }}>
      
      <div style={{
        maxWidth: '420px',
        width: '100%',
        padding: '3rem 2.5rem',
        backgroundColor: '#613600',
        borderRadius: '24px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        color: '#fff',
        textAlign: 'center'
      }}>
        
        <img src="/companylogo.png" alt="RUNN" style={{ height: '80px', marginBottom: '1.5rem', filter: 'brightness(1.2)' }} />

        <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '2rem', letterSpacing: '1px' }}>
          {isLogin ? 'WELCOME BACK' : 'JOIN THE TEAM'}
        </h2>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', gap: '1.5rem' }}>
          <button onClick={() => setIsLogin(true)}
            style={{
              padding: '0.5rem 0', width: '80px', fontWeight: 800, border: 'none',
              borderBottom: isLogin ? '4px solid #ff9f43' : '2px solid transparent',
              color: isLogin ? '#ff9f43' : '#b38b5c',
              background: 'transparent', cursor: 'pointer', transition: '0.3s'
            }}>LOGIN</button>
          <button onClick={() => setIsLogin(false)}
            style={{
              padding: '0.5rem 0', width: '80px', fontWeight: 800, border: 'none',
              borderBottom: !isLogin ? '4px solid #ff9f43' : '2px solid transparent',
              color: !isLogin ? '#ff9f43' : '#b38b5c',
              background: 'transparent', cursor: 'pointer', transition: '0.3s'
            }}>REGISTER</button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {!isLogin && (
            <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)}
              required style={inputStyle} />
          )}

          <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)}
            required style={inputStyle} />

          {/* Password with eye toggle */}
          <div style={{ position: 'relative' }}>
            <input 
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={inputStyle}
            />
            <span style={eyeStyle} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          {!isLogin && (
            <div style={{ position: 'relative' }}>
              <input 
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
                style={inputStyle}
              />
              <span style={eyeStyle} onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? '🙈' : '👁️'}
              </span>
            </div>
          )}

          <button type="submit"
            style={{
              padding: '1rem',
              borderRadius: '12px',
              border: 'none',
              background: '#ff9f43',
              color: '#4e2a00',
              fontWeight: 900,
              cursor: 'pointer',
              fontSize: '1.1rem',
              marginTop: '1rem',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.backgroundColor = '#ffbb77';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = '#ff9f43';
            }}
          >
            {isLogin ? 'LET\'S RUN' : 'GET STARTED'}
          </button>
        </form>

        <div style={{ marginTop: '2rem', fontSize: '0.95rem', color: '#ffcc99' }}>
          {isLogin ? (
            <span>New here? <b onClick={() => setIsLogin(false)} style={{ color: '#fff', cursor: 'pointer', textDecoration: 'underline' }}>Create Account</b></span>
          ) : (
            <span>Already a member? <b onClick={() => setIsLogin(true)} style={{ color: '#fff', cursor: 'pointer', textDecoration: 'underline' }}>Login</b></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
