import profilePicture from "../../resources/images/aiCat.png";

const NewComment = () => {
  return (
    <div className="newComment">
      <div className="newComment_profile">
        <div className="newComment_profile_circle">
          <img
            src={profilePicture}
            alt="user-profile"
            className="newComment_profile_circle_picture"
          />
        </div>
      </div>
      <textarea
        type="text"
        className="newComment_write"
        placeholder="Write your comment here..."
      ></textarea>
    </div>
  );
};

export default NewComment;
