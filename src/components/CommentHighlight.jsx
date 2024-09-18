const CommentHighlight = ({ picture, image }) => {
  return (
    <div className="viewSingleProduct_reviews_hightlights_userComments">
      <img
        src={image}
        alt="background product"
        className="viewSingleProduct_reviews_hightlights_userComments_background"
      />
      <div className="viewSingleProduct_reviews_hightlights_userComments_profile">
        <img
          src={picture}
          alt="user-profile"
          className="viewSingleProduct_reviews_hightlights_userComments_profile_picture"
        />
      </div>
      <div className="viewSingleProduct_reviews_hightlights_userComments_review">
        <h3>Username</h3>
        <div className="viewSingleProduct_reviews_hightlights_userComments_review_stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          consequat ex in venenatis volutpat. Aenean id justo mi. Curabitur
          congue dolor nec tortor pharetra accumsan.
        </p>
      </div>
    </div>
  );
};

export default CommentHighlight;
