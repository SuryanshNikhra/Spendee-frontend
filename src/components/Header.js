// NavbarComponent.js
import React, { useCallback, useEffect, useState } from 'react';
import { Navbar, Nav, Button, Image, Container } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './style.css';

const Header = () => {
  const navigate = useNavigate();

  const handleShowLogin = () => {
    navigate('/login');
  };

  const [user, setUser] = useState();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      setUser(user);
    }
  }, []);

  const handleShowLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: '#000',
              },
            },
            fpsLimit: 60,
            particles: {
              number: {
                value: 200,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: '#ffcc00',
              },
              shape: {
                type: 'circle',
              },
              opacity: {
                value: 0.5,
                random: true,
              },
              size: {
                value: 3,
                random: { enable: true, minimumValue: 1 },
              },
              links: {
                enable: false,
              },
              move: {
                enable: true,
                speed: 2,
              },
              life: {
                duration: {
                  sync: false,
                  value: 3,
                },
                count: 0,
                delay: {
                  random: {
                    enable: true,
                    minimumValue: 0.5,
                  },
                  value: 1,
                },
              },
            },
            detectRetina: true,
          }}
          style={{
            position: 'absolute',
            zIndex: -1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        <Navbar className="navbarCSS" collapseOnSelect expand="lg" style={{ position: 'relative', zIndex: 2 }}>
          <Container fluid>
            <Navbar.Brand href="/" className="text-white navTitle">
              Expense Management System
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              style={{
                backgroundColor: 'transparent',
                borderColor: 'transparent',
              }}
            >
              <span
                className="navbar-toggler-icon"
                style={{
                  background: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`,
                }}
              ></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto d-flex align-items-center">
                {user ? (
                  <>
                    <Link to="/setAvatar">
                      <Image
                        src={user.avatarImage}
                        roundedCircle
                        width="40"
                        height="40"
                        className="mr-2"
                        alt="User Avatar"
                        style={{ cursor: 'pointer' }}
                      />
                    </Link>
                    <span className="text-white mr-3">{user.name}</span>
                    <Button variant="primary" onClick={handleShowLogout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <Button variant="primary" onClick={handleShowLogin}>
                    Login
                  </Button>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
