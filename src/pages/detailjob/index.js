import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SNavbar from '../../components/navbar';
import axios from 'axios';

export default function DetailJobsPage() {
  const { id } = useParams();
  const [data, setData] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    description: '',
    how_to_apply: '',
    url: '',
  });

  const fetchOneJobs = async () => {
    const res = await axios.get(
      `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`
    );
    setData({
      ...data,
      title: res.data.title,
      company: res.data.company,
      location: res.data.location,
      type: res.data.type,
      description: res.data.description,
      how_to_apply: res.data.how_to_apply,
      url: res.data.url,
    });
  };

  useEffect(() => {
    fetchOneJobs();
  }, []);

  function createMarkup(data) {
    return { __html: data };
  }

  return (
    <>
      <SNavbar />
      <Container className='mt-5'>
        <h1>{data.title}</h1>
        <h2>{data.company}</h2>
        <br />
        <h3>{data.type}</h3>
        <br />
        <p dangerouslySetInnerHTML={createMarkup(data.description)}></p>
        <Card style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title>How To Apply</Card.Title>
            <Card.Text>
              <a dangerouslySetInnerHTML={createMarkup(data.how_to_apply)}></a>
            </Card.Text>
            <Card.Link href={data.url}>{data.url}</Card.Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
