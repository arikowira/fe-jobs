import React, { useEffect } from 'react';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import SNavbar from '../../components/navbar';
import Table from '../../components/jobsTable';
import SearchInput from '../../components/searchInput';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchJobs,
  setLocation,
  setDescription,
  setPage,
  setFull_time,
} from '../../redux/jobs/actions';

export default function JobsPage() {
  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.jobs);
  useEffect(() => {
    dispatch(fetchJobs(jobs.page));
  }, [jobs.page]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchJobs());
  };

  return (
    <>
      <SNavbar />
      <Container className='mt-5'>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <SearchInput
                label='Deskripsi'
                placeholder={'Cari Berdasarkan Deskripsi'}
                value={jobs.description}
                handleChange={(e) => dispatch(setDescription(e.target.value))}
              />
            </Col>
            <Col>
              <SearchInput
                label='Lokasi'
                placeholder={'Cari Berdasarkan Lokasi'}
                value={jobs.location}
                handleChange={(e) => dispatch(setLocation(e.target.value))}
              />
            </Col>
            <Col>
              <Form.Check
                type='checkbox'
                label='Full Time'
                className='mt-4'
                onChange={(e) => dispatch(setFull_time(e.target.checked))}
              />
            </Col>
            <Col>
              <Button className='mt-4' type='submit'>
                Search
              </Button>
            </Col>
          </Row>
        </Form>
        <Table
          status={jobs.status}
          thead={['Tipe', 'Perusahaan', 'Lokasi', 'Title', 'Aksi']}
          data={jobs.data}
          tbody={['type', 'title', 'company', 'location']}
          editUrl
          pages={jobs.data.length < 8 ? 0 : 2}
          handlePageClick={({ selected }) => dispatch(setPage(selected + 1))}
        />
      </Container>
    </>
  );
}
