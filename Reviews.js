import React, { useState } from 'react';
import user from './userimage.webp';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Alex Smith',
      profession: 'Designer | Developer',
      content:
        'The performance of the bike is very good and the comfort level is amazing. The bike is not too heavy and not too light. The light of the bike is awesome. It looks Aggressive and huge in size with its safety guards. The service cost is higher but the service quality is good and fast.',
      stars: 3,
    },
    {
      id: 2,
      name: 'Steven Chris',
      profession: 'YouTuber | Blogger',
      content:
        'I am writing after one month of using a single battery scooty. Pros: best for riding in the city. Good pickup comparable to my activa but a bit lower. You should recover your scooty cost in 20000 km and the battery replacement cost in another 7000. Cons: delicate plastics, less leg room, low boot space in dual battery, the seat has a bump separating the pillion which is uncomfortable, I got it covered with foam.',
      stars: 4,
    },
    {
      id: 3,
      name: 'Kristina Bellis',
      profession: 'Freelancer | Advertiser',
      content:
        'Very stylish, smooth run, load capacity is standard, the headlight is very bright, but body durability needs to be modified, the problem facing about a meter, body cracked tire is not long-lasting, seat plastic is also broken, suddenly accelerometer not working service center is not non cooperate these are problem facing.',
      stars: 4,
    },
  ];

  const [expandedReviews, setExpandedReviews] = useState([]);

  const toggleReadMore = (reviewId) => {
    if (expandedReviews.includes(reviewId)) {
      setExpandedReviews(expandedReviews.filter((id) => id !== reviewId));
    } else {
      setExpandedReviews([...expandedReviews, reviewId]);
    }
  };

  return (
    <div id="review">
      <div className="reviews">
        <h1>WHAT OUR CUSTOMERS SAY ABOUT US!</h1>
        <div className="wrapper-review">
          {reviews.map((review) => (
            <div className="box" key={review.id}>
              <i className="fas fa-quote-left quote"></i>
              <p className="read-more-text">
                {expandedReviews.includes(review.id)
                  ? review.content
                  : review.content.slice(0, 100) + '...'}
                <button
                  className="read-more-button"
                  onClick={() => toggleReadMore(review.id)}
                >
                  {expandedReviews.includes(review.id) ? 'Read Less' : 'Read More'}
                </button>
              </p>
              <div className="content">
                <div className="info">
                  <div className="name">{review.name}</div>
                  <div className="profession">{review.job}</div>
                  <div className="stars">
                    {Array.from({ length: 5 }, (_, index) => (
                      <i
                        key={index}
                        className={`fas fa-star${
                          index < review.stars ? '' : '-half-alt'
                        }`}
                      ></i>
                    ))}
                  </div>
                </div>
                <div className="image">
                  <img src={user} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
