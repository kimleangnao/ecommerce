
import Navbar from "./Navbar";

import placeholderImage_4 from "../resources/images/placeholder-4.png";
import ShoeCase from "./components/ShoeCase";
import { useState } from "react";


const Search = () => {

    const [filter, setfilter] = useState([])
    const [fitlerList, setfilterList] = useState({
        sports: [
            {
                id: "s_0001",
                text: "Soccer",
                checked: false
            },
            {
                id: "s_0002",
                text: "Football",
                checked: false
            },
            {
                id: "s_0003",
                text: "Golf",
                checked: false
            },
            {
                id: "s_0004",
                text: "Basketball",
                checked: false
            },
            {
                id: "s_0005",
                text: "Track & Field",
                checked: false
            }
            ,{
                id: "s_0006",
                text: "Baseball",
                checked: false
            }
        ],
        types: [
            {
                id: "t_0001",
                text: "Shoes",
                checked: false
            },
            {
                id: "t_0002",
                text: "Pant",
                checked: false
            },
            {
                id: "t_0003",
                text: "Shirt",
                checked: false
            },
            {
                id: "t_0004",
                text: "Socks",
                checked: false
            },
            {
                id: "t_0005",
                text: "Protective Gears",
                checked: false
            }
        ],
        ranges: [
            {
                id: "r_0001",
                text: "Under 100",
                checked: false
            },
            {
                id: "r_0002",
                text: "100 to 200",
                checked: false
            },
            {
                id: "r_0003",
                text: "over 200",
                checked: false
            }
        ]
    })


    const onChangeSports = (checkedId) => {
   
        let filterActive = [...filter];
        let filterListCopy = {...fitlerList}

        for(let i = 0; i < filterListCopy.sports.length; i++){
            if(filterListCopy.sports[i].id == checkedId){
                if(filterListCopy.sports[i].checked){
                    filterListCopy.sports[i].checked = false;

                    filterActive = filterActive.filter((v) => v.id != checkedId);

                }else{
                    filterListCopy.sports[i].checked = true;
                    filterActive.push(filterListCopy.sports[i])
                }        
            }
        }

        setfilter(filterActive);
        setfilterList(filterListCopy);
    }

    const onChangeType = (checkedId) => {

        let filterListCopy = {...fitlerList}

        for(let i = 0; i < filterListCopy.types.length; i++){
            if(filterListCopy.types[i].id == checkedId){
                if(filterListCopy.types[i].checked){
                    filterListCopy.types[i].checked = false;
                }else{
                    filterListCopy.types[i].checked = true;
                }        
            }
        }
        setfilterList(filterListCopy);
    }
    const onChangeRange= (checkedId) => {
        
        let filterActive = [...filter];
        let filterListCopy = {...fitlerList}

        for(let i = 0; i < filterListCopy.ranges.length; i++){
            if(filterListCopy.ranges[i].id == checkedId){
                if(filterListCopy.ranges[i].checked){
                    filterListCopy.ranges[i].checked = false;

                    filterActive = filterActive.filter((v) => v.id != checkedId);

                }else{
                    filterListCopy.ranges[i].checked = true;
                    filterActive.push(filterListCopy.ranges[i])
                }        
            }
        }
        setfilter(filterActive);
        setfilterList(filterListCopy);
    }



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
                        {
                            fitlerList.sports.map((v, i) => (
                                <div key={i} className="search_body_filter_category_sport">
                                    <input onChange={() => onChangeSports(v.id)} type="checkbox" id={v.text} name={v.text}  />
                                    <label onChange={() => onChangeSports(v.id)} htmlFor={v.text}>{v.text}</label>
                                </div>
                            ))
                        }           
                    </div>
                    <div className="search_body_filter_category">
                        <div className="search_body_filter_category_header">
                            TYPE
                        </div>
                        {
                            fitlerList.types.map((v, i) => (
                                <div key={i} className="search_body_filter_category_sport">
                                    <input onChange={() => onChangeType(v.id)} type="checkbox" id={v.text} name={v.text} />
                                    <label onChange={() => onChangeType(v.id)} htmlFor={v.text}>{v.text}</label>
                                </div>
                            ))
                        }
                    </div>
                    <div className="search_body_filter_category">
                        <div className="search_body_filter_category_header">
                            PRICE RANGE
                        </div>
                        {
                            fitlerList.ranges.map((v, i) => (
                                <div key={i} className="search_body_filter_category_sport">
                                    <input onChange={() => onChangeRange(v.id)} type="checkbox" id={v.text}  name={v.text}   />
                                    <label onChange={() => onChangeRange(v.id)} htmlFor={v.text} >{v.text} $</label>
                                </div>
                            ))
                        }
                    </div>
                </div>  
                <div className="search_body_display">
                    <div className="search_body_display_filterList">
                        {
                            filter.length != 0 ? filter.map((v, i) =>(
                                <div key={i} className="search_body_display_filterList_box">
                                    {v.text}
                                </div>  
                            )) : ""
                        }             
                    </div>  

                    {/*populate items here*/}
                    <div className="search_body_display_wrapper">
                        <ShoeCase id="11111" image4={placeholderImage_4} />
                        <ShoeCase id="11111" image4={placeholderImage_4}/>
                        <ShoeCase id="11111" image4={placeholderImage_4}/>
                        <ShoeCase id="11111" image4={placeholderImage_4}/>
                        <ShoeCase id="11111" image4={placeholderImage_4}/>
                        <ShoeCase id="11111" image4={placeholderImage_4}/>
                        <ShoeCase id="11111" image4={placeholderImage_4}/>
                        <ShoeCase id="11111" image4={placeholderImage_4}/>
                        <ShoeCase id="11111" image4={placeholderImage_4}/>
                        <ShoeCase id="11111" image4={placeholderImage_4}/>
                        <ShoeCase id="11111" image4={placeholderImage_4}/>
                        <ShoeCase id="11111" image4={placeholderImage_4}/>
                        <ShoeCase id="11111" image4={placeholderImage_4}/>
                        <ShoeCase id="11111" image4={placeholderImage_4}/>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Search;