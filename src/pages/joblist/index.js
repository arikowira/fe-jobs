import React, { useEffect, useState } from 'react';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
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

export default function JobsPage() {
  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch, jobs.page, jobs.description]);

  return (
    <>
      <SNavbar />
      <Container className='mt-5'>
        <SearchInput
          label='Cari Lokasi'
          query={jobs.description}
          handleChange={(e) => dispatch(setSearch(e.target.value))}
        />
        <Table
          status={jobs.status}
          thead={['Tipe', 'Perusahaan', 'Lokasi', 'Aksi']}
          data={jobs.data}
          tbody={['type', 'company', 'location']}
          editUrl
          pages={2}
          handlePageClick={({ selected }) => dispatch(setPage(selected + 1))}
        />
      </Container>
    </>
  );
}
