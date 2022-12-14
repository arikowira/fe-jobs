import React, { useEffect, useState } from 'react';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import SBreadCrumb from '../../components/breadcrumb';
import SButton from '../../components/button';
import SNavbar from '../../components/navbar';
import Table from '../../components/jobsTable';
import SearchInput from '../../components/searchInput';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchJobs,
  setLocation,
  setSearch,
  setPage,
} from '../../redux/jobs/actions';

export default function DetailJobsPage() {
  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch, jobs.page, jobs.description]);

  return (
    <>
      <SNavbar />
      <Container className='mt-5'>
        <h1>Detail</h1>
      </Container>
    </>
  );
}
