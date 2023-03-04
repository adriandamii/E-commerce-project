import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Button, Form, InputGroup } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';

const infoSearch = () =>
  toast(
    <div>
      <span className="info-icon">
        <i className="fas fa-info-circle"></i>
      </span>{' '}
      Type something in the search box!
    </div>
  );

export default function SearchBox() {
  const [name, setname] = useState('');
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (name === '') {
      infoSearch();
    } else {
      navigate(`/filters/name/${name}`);
    }
  };

  return (
      <div className="search-box">
        <Form onSubmit={submitHandler}>
          <InputGroup>
            <FormControl
              type="text"
              name="name"
              id="name"
              onChange={(e) => setname(e.target.value)}
              placeholder="I'm shopping for..."
              aria-label="Search Product"
              aria-describedby="button-search"
            ></FormControl>
            <Button variant="secondary" type="submit">
              Search
            </Button>
          </InputGroup>
        </Form>
      </div>
  );
}
