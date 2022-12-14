import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

function SearchInput({ handleChange, query, disabled, label }) {
  return (
    <Row className='mb-3'>
      <Form.Group as={Col}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          disabled={disabled}
          type='text'
          placeholder='Masukan pencarian disini'
          value={query}
          name='query'
          onChange={handleChange}
        />
      </Form.Group>
    </Row>
  );
}

export default SearchInput;
