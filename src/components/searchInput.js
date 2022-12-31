import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

function SearchInput({ handleChange, value, disabled, label, placeholder }) {
  return (
    <Row className='mb-3'>
      <Form.Group as={Col}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          disabled={disabled}
          type='text'
          placeholder={placeholder}
          value={value}
          name='query'
          onChange={handleChange}
        />
      </Form.Group>
    </Row>
  );
}

export default SearchInput;
