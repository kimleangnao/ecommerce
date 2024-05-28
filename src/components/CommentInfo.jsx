


const CommentInfo = ({review}) => {

    let arrayRating = review.userRating ?  Array(review.userRating).fill(null) : Array(0).fill(null)
    return(
        <div className="commentInfo">
            <div className="comment_image">
                <img src={review.userImage} alt="cat profile" className="comment_image_profile" />

    
            </div>
            <div className="comment_details">
                <p className="comment_details_name">{review.userName}</p>
                <div className="comment_details_stars">
                    {
                        arrayRating.map((_, index) => (
                            <i key={index} className="fa-solid fa-star"></i>
                        )) 
                    }
                  
                </div>
                <div className="comment_details_review">
                   {
                        review.userComment
                   }
                </div>
                <div className="comment_details_likeDislike">
                    <button className="comment_details_likeDislike_replyBtn">REPLY</button>
                    <div className="comment_details_likeDislike_likeWrap">
                        <button><i className="fa-solid fa-thumbs-up"></i></button>
                        <span>{review.likes}</span>
                    </div>
                    <div className="comment_details_likeDislike_dislikeWrap">
                        <button><i className="fa-solid fa-thumbs-down"></i></button>
                        <span>{review.dislikes}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentInfo;