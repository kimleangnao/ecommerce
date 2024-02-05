
import playButton from "../../resources/images/play-button.png";

const DisplayProductDetails = () => {
    return(
        <div className="viewproduct_display_images_display">
            <div className="viewproduct_display_images_display_video">
                <div className="viewproduct_display_images_display_video_buttons">
                    <button className="viewproduct_display_images_display_video_buttons_play">
                        <img src={playButton} alt="not found" className="viewproduct_display_images_display_video_buttons_play_image" />
                    </button>
                </div>
            </div>
            <div className="viewproduct_display_images_display_bigImage">

            </div>
            <div className="viewproduct_display_images_display_bigImage">

            </div>
            <div className="viewproduct_display_images_display_bigImage">

            </div>
            <div className="viewproduct_display_images_display_bigImage">

            </div>
        </div>
            
    )
}

export default DisplayProductDetails;