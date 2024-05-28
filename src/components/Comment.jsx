import CommentInfo from "./CommentInfo";




const Comment = ({review}) => {

    return(
        <div className="comment">
            <CommentInfo review={review} />
            <div className="comment_ofComment">
                {
                    review.childComments ? review.childComments .map((comment, index) => (
                        <CommentInfo  key={index} review={comment} />
                    )) : ""
                }
            </div>
          
        </div>
    )
}

export default Comment;