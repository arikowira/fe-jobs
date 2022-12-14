import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import NavAccess from './navAccess';
import { useNavigate } from 'react-router-dom';
// import {
//   accessCategories,
//   accessTalents,
//   accessEvents,
//   accessParticipant,
//   accessPayments,
//   accessOrders,
// } from '../../src/utils/access';

function SNavbar() {
  const navigate = useNavigate();
  // const [role, setRole] = useState(null);

  // useEffect(() => {
  //   const fetchData = () => {
  //     let { role } = localStorage.getItem('auth')
  //       ? JSON.parse(localStorage.getItem('auth'))
  //       : {};

  //     setRole(role);
  //   };
  //   fetchData();
  // }, []);

  // const handleLogout = () => {
  //   localStorage.clear();
  //   window.location.href = '/signin';
  // };

  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>Jobs Seeker</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link
            onClick={() => navigate('/')}
            // role={role}
            // roles={accessCategories.lihat}/
          >
            Jobs
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SNavbar;
