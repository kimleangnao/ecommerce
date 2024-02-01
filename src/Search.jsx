
import Navbar from "./Navbar";

const Search = () => {
    return(
        <div className="search">
            <Navbar />
            <div className="search_body">
                <div className="search_body_filter">
                    <div className="search_body_filter_title">
                        Filter list
                    </div>
                    <div className="search_body_filter_category">
                        <div className="search_body_filter_category_header">
                            SPORTS
                        </div>
                        <div className="search_body_filter_category_sport">
                            <input type="checkbox" id="Soccer" name="Soccer"  />
                            <label htmlFor="Soccer">Soccer</label>
                        </div>
                        <div className="search_body_filter_category_sport">
                            <input type="checkbox" id="Football" name="Football"  />
                            <label htmlFor="Football">Football</label>
                        </div>
                        <div className="search_body_filter_category_sport">
                            <input type="checkbox" id="Golf" name="Golf"  />
                            <label htmlFor="Golf">Golf</label>
                        </div>
                        <div className="search_body_filter_category_sport">
                            <input type="checkbox" id="Basketball" name="Basketball"  />
                            <label htmlFor="Basketball">Basketball</label>
                        </div>
                        <div className="search_body_filter_category_sport">
                            <input type="checkbox" id="Track & Field" name="Track & Field"  />
                            <label htmlFor="Track & Field">Track & Field</label>
                        </div>
                        <div className="search_body_filter_category_sport">
                            <input type="checkbox" id="Baseball" name="Baseball"  />
                            <label htmlFor="Baseball">Baseball</label>
                        </div>
                    </div>
                    <div className="search_body_filter_category">
                        <div className="search_body_filter_category_header">
                            TYPE
                        </div>
                        <div className="search_body_filter_category_sport">
                            <input type="checkbox" id="Shoes" name="Shoes"  />
                            <label htmlFor="Shoes">Shoes</label>
                        </div>
                        <div className="search_body_filter_category_sport">
                            <input type="checkbox" id="Pant" name="Pant"  />
                            <label htmlFor="Pant">Pant</label>
                        </div>
                        <div className="search_body_filter_category_sport">
                            <input type="checkbox" id="Shirt" name="Shirt"  />
                            <label htmlFor="Shirt">Shirt</label>
                        </div>
                        <div className="search_body_filter_category_sport">
                            <input type="checkbox" id="Socks" name="Socks"  />
                            <label htmlFor="Socks">Socks</label>
                        </div>
                        <div className="search_body_filter_category_sport">
                            <input type="checkbox" id="Protective Gears" name="Protective Gears"  />
                            <label htmlFor="Protective Gears">Protective Gears</label>
                        </div>
                    </div>
                    <div className="search_body_filter_category">
                        <div className="search_body_filter_category_header">
                            PRICE RANGE
                        </div>
                        <div className="search_body_filter_category_sport">
                            <input type="checkbox" id="Under100" name="Under100"  />
                            <label htmlFor="Under100">Under 100$</label>
                        </div>
                        <div className="search_body_filter_category_sport">
                            <input type="checkbox" id="100to200" name="100to200"  />
                            <label htmlFor="100to200">100$-200$</label>
                        </div>
                        <div className="search_body_filter_category_sport">
                            <input type="checkbox" id="200up" name="200up"  />
                            <label htmlFor="200up">200$+</label>
                        </div>   
                    </div>
                    
                </div>  
                <div className="search_body_display">
                    <div className="search_body_display_filterList">
                        <div className="search_body_display_filterList_box">
                            Filtered
                        </div>  
                        <div className="search_body_display_filterList_box">
                            Basketball
                        </div>  
                        <div className="search_body_display_filterList_box">
                            200$+
                        </div>  
                    </div>  
                    <div className="search_body_display_wrapper">

                    </div>
                </div>  
            </div>

         
        </div>
    )
}

export default Search;