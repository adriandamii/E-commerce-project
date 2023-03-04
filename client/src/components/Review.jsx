import React, { useRef, useState } from 'react';
import { Button, FloatingLabel, ListGroup } from 'react-bootstrap';
import { Form } from 'react-router-dom';
import Rating from './Rating';
import MessageBox from './MessageBox';

const Review = () => {
  let reviewsRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  return (
    <>
      <div className="my-3">
        <MessageBox>There is no review</MessageBox>

        <div className="my-3">
          <form onSubmit={submitHandler}>
            <h2>Write a customer review</h2>
            <section className="mb-3" controlId="rating">
              <label>Rating</label>
              <select
                aria-label="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="select-star-review"
              >
                <option value="">Select...</option>
                <option value="1">1- Poor</option>
                <option value="2">2- Fair</option>
                <option value="3">3- Good</option>
                <option value="4">4- Very good</option>
                <option value="5">5- Excelent</option>
              </select>
            </section>
            <section className="mb-3" controlId="rating">
              <textarea
                as="textarea"
                placeholder="Leave a comment here"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className='comment-review'
              />
            </section>

            <div className="mb-3">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Review;
