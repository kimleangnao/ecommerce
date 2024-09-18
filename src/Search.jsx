import ShoeCase from "./components/ShoeCase";
import { useCallback, useEffect, useState } from "react";
import NavbarExtend from "./NavbarExtend";

import { useLocation } from "react-router-dom";
import MobileNav from "./MobileNav";

const Search = ({ shoppingCart, allProducts }) => {
  const [switchStateBody, setSwitchStateBody] = useState(false);

  const [products] = useState(allProducts);
  const location = useLocation();

  const [filter, setfilter] = useState([]);
  const [fitlerList, setfilterList] = useState({
    gender: [
      {
        id: "g_0001",
        text: "Female",
        type: "gender",
        checked: false,
      },
      {
        id: "g_0002",
        text: "Male",
        type: "gender",
        checked: false,
      },
    ],
    sports: [
      {
        id: "s_0003",
        text: "Golf",
        type: "sports",
        checked: false,
      },
      {
        id: "s_0004",
        text: "Basketball",
        type: "sports",
        checked: false,
      },
    ],
    types: [
      {
        id: "t_0001",
        text: "Shoes",
        type: "types",
        checked: false,
      },
      {
        id: "t_0004",
        text: "Socks",
        type: "types",
        checked: false,
      },
    ],
    ranges: [
      {
        id: "r_0001",
        text: "Under 100",
        type: "price",
        checked: false,
      },
      {
        id: "r_0002",
        text: "100 to 200",
        type: "price",
        checked: false,
      },
      {
        id: "r_0003",
        text: "over 200",
        type: "price",
        checked: false,
      },
    ],
  });
  const [switchFilter, setSwitchFilter] = useState(false);

  const [filterProducts, setFilterProducts] = useState([]);

  const onChangeGender = (checkedId) => {
    let filterActive = [...filter];
    let filterListCopy = { ...fitlerList };
    //console.log(filterActive);
    const foundIndex = filterListCopy.gender.findIndex(
      (gender) => gender.id == checkedId,
    );

    filterListCopy.gender[foundIndex].checked =
      !filterListCopy.gender[foundIndex].checked;

    if (filterListCopy.gender[foundIndex].checked) {
      filterListCopy.gender.forEach((item, index) => {
        if (index != foundIndex) {
          item.checked = false;
        }
      });
    }

    filterActive = filterActive.filter((item) => !(item.type == "gender"));
    //console.log(filterActive);
    if (filterListCopy.gender[foundIndex].checked) {
      filterActive.push(filterListCopy.gender[foundIndex]);
    }
    //console.log(filterActive);
    filteringProducts(filterActive);
    setfilter(filterActive);
    setfilterList(filterListCopy);
  };

  const onChangeSports = (checkedId) => {
    let filterActive = [...filter];
    let filterListCopy = { ...fitlerList };

    const foundIndex = filterListCopy.sports.findIndex(
      (sport) => sport.id == checkedId,
    );

    filterListCopy.sports[foundIndex].checked =
      !filterListCopy.sports[foundIndex].checked;
    //make sure other that is not select change to false
    if (filterListCopy.sports[foundIndex].checked) {
      filterListCopy.sports.forEach((item, index) => {
        if (index != foundIndex) {
          item.checked = false;
        }
      });
    }

    //we are on sports type, select everything that is active that is not sports
    filterActive = filterActive.filter((item) => !(item.type == "sports"));

    //then we add the current sports selection to the active filter list
    if (filterListCopy.sports[foundIndex].checked) {
      filterActive.push(filterListCopy.sports[foundIndex]);
    }

    filteringProducts(filterActive);
    setfilter(filterActive);
    setfilterList(filterListCopy);
  };

  const onChangeType = (checkedId) => {
    let filterActive = [...filter];
    let filterListCopy = { ...fitlerList };

    const foundIndex = filterListCopy.types.findIndex(
      (type) => type.id == checkedId,
    );
    //console.log("found:", foundIndex);

    filterListCopy.types[foundIndex].checked =
      !filterListCopy.types[foundIndex].checked;

    if (filterListCopy.types[foundIndex].checked) {
      filterListCopy.types.forEach((item, index) => {
        if (index != foundIndex) {
          item.checked = false;
        }
      });
    }

    filterActive = filterActive.filter((item) => !(item.type == "types"));

    if (filterListCopy.types[foundIndex].checked) {
      filterActive.push(filterListCopy.types[foundIndex]);
    }

    filteringProducts(filterActive);
    setfilter(filterActive);
    setfilterList(filterListCopy);
  };
  const onChangeRange = (checkedId) => {
    let filterActive = [...filter];
    let filterListCopy = { ...fitlerList };

    const foundIndex = filterListCopy.ranges.findIndex(
      (price) => price.id == checkedId,
    );

    filterListCopy.ranges[foundIndex].checked =
      !filterListCopy.ranges[foundIndex].checked;

    if (filterListCopy.ranges[foundIndex].checked) {
      filterListCopy.ranges.forEach((item, index) => {
        if (index != foundIndex) {
          item.checked = false;
        }
      });
    }

    filterActive = filterActive.filter((item) => !(item.type == "price"));

    if (filterListCopy.ranges[foundIndex].checked) {
      filterActive.push(filterListCopy.ranges[foundIndex]);
    }

    filteringProducts(filterActive);
    setfilter(filterActive);
    setfilterList(filterListCopy);
  };

  const filterPrice = (price, productPrice, over = false) => {
    if (over) {
      if (productPrice > price) {
        return true;
      }
      return false;
    } else {
      if (price.length > 1) {
        if (productPrice >= price[0] && productPrice < price[1]) {
          return true;
        }
        return false;
      } else {
        if (productPrice < price[0]) {
          return true;
        }
        return false;
      }
    }
  };
  const filterTypes = (type, productType) => {
    if (type == productType) {
      return true;
    }
    return false;
  };
  const filterSports = (sport, productSport) => {
    if (sport == productSport) {
      return true;
    }
    return false;
  };
  const filterGender = (gender, productGender) => {
    if (productGender == "Both") {
      return true;
    } else {
      if (gender == productGender) {
        return true;
      }
      return false;
    }
  };

  const filteringProducts = (currentFilterList) => {
    let result = [];
    let currentFilterProduct = [];

    for (let i = 0; i < products.length; i++) {
      //first gender
      //second sports
      //third type
      //fourth ranges
      let passedFilterPrice = true;
      let passedFilterTypes = true;
      let passedFilterSports = true;
      let passedFilterGender = true;

      for (let j = 0; j < currentFilterList.length; j++) {
        //
        if (currentFilterList[j].type == "price") {
          //

          if (currentFilterList[j].text == "Under 100") {
            passedFilterPrice = filterPrice([100], products[i].productPrice);
            //skip this iteration if return false already
            if (!passedFilterPrice) {
              continue;
            }
          } else if (currentFilterList[j].text == "100 to 200") {
            passedFilterPrice = filterPrice(
              [100, 200],
              products[i].productPrice,
            );

            //skip this iteration if return false already
            if (!passedFilterPrice) {
              continue;
            }
          } else if (currentFilterList[j].text == "over 200") {
            passedFilterPrice = filterPrice(
              200,
              products[i].productPrice,
              true,
            );

            //skip this iteration if return false already
            if (!passedFilterPrice) {
              continue;
            }
          }
        } else if (currentFilterList[j].type == "types") {
          //

          if (currentFilterList[j].text == "Shoes") {
            //
            passedFilterTypes = filterTypes(
              currentFilterList[j].text,
              products[i].filterProductType,
            );
            if (!passedFilterTypes) {
              continue;
            }
          } else if (currentFilterList[j].text == "Socks") {
            //
            passedFilterTypes = filterTypes(
              currentFilterList[j].text,
              products[i].filterProductType,
            );
            if (!passedFilterTypes) {
              continue;
            }
          }
        } else if (currentFilterList[j].type == "sports") {
          //

          if (currentFilterList[j].text == "Golf") {
            //
            passedFilterSports = filterSports(
              currentFilterList[j].text,
              products[i].filterType,
            );
            if (!passedFilterSports) {
              continue;
            }
          } else if (currentFilterList[j].text == "Basketball") {
            //
            passedFilterSports = filterSports(
              currentFilterList[j].text,
              products[i].filterType,
            );
            if (!passedFilterSports) {
              continue;
            }
          }
        } else if (currentFilterList[j].type == "gender") {
          //

          if (currentFilterList[j].text == "Male") {
            //
            passedFilterGender = filterGender(
              currentFilterList[j].text,
              products[i].filterGender,
            );

            if (!passedFilterGender) {
              continue;
            }
          } else if (currentFilterList[j].text == "Female") {
            //
            passedFilterGender = filterGender(
              currentFilterList[j].text,
              products[i].filterGender,
            );

            if (!passedFilterGender) {
              continue;
            }
          }
        }
      }
      if (
        passedFilterPrice &&
        passedFilterTypes &&
        passedFilterSports &&
        passedFilterGender
      ) {
        //passed filter, add to filteredProducts

        currentFilterProduct.push(products[i]);
      }
    }

    setFilterProducts(currentFilterProduct);
    //must return an array of products
    return result;
  };

  const onFilterGenderWhenUseEffect = useCallback((checkedId) => {
    let filterActive = [...filter];
    let filterListCopy = { ...fitlerList };

    const foundIndex = filterListCopy.gender.findIndex(
      (gender) => gender.id == checkedId,
    );

    //when user click on the filter, the filter will switch to either false or true
    //reverse to what they were
    filterListCopy.gender[foundIndex].checked =
      !filterListCopy.gender[foundIndex].checked;

    //why need this? not sure
    /*if (filterListCopy.gender[foundIndex].checked) {
      filterListCopy.gender.forEach((item, index) => {
        if (index != foundIndex) {
          item.checked = false;
        }
      });
    }
      */
    //filterActive = filterActive.filter((item) => !(item.type == "gender"));

    if (filterListCopy.gender[foundIndex].checked) {
      filterActive.push(filterListCopy.gender[foundIndex]);
    }
    //console.log(filterActive);
    filteringProducts(filterActive);
    setfilter(filterActive);
    setfilterList(filterListCopy);
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const parameterValue = searchParams.get("f");
    if (parameterValue == "men") {
      // id for men: g_0002
      onFilterGenderWhenUseEffect("g_0002");
    } else if (parameterValue == "women") {
      // id for women: g_0001
      onFilterGenderWhenUseEffect("g_0001");
    }
  }, [location, onFilterGenderWhenUseEffect, allProducts]);

  useEffect(() => {
    //depend on the width screen, switch filter
    if (window.innerWidth >= 1280) {
      setSwitchFilter(true);
    }
  }, [switchFilter]);

  const stateSwitch = (switchState) => {
    if (switchState) {
      setSwitchStateBody(true);
    } else {
      setSwitchStateBody(false);
    }
  };

  return (
    <div className={switchStateBody ? "search search-hidden" : "search "}>
      <NavbarExtend
        currentPage={"shoe"}
        shoppingCart={shoppingCart}
        colorText="#141414"
        backgroundColor="rgba(170, 225, 237, 0.19)"
      />
      <MobileNav stateSwitch={stateSwitch} />
      <div className="search_body">
        <div className="search_body_filter">
          <button
            onClick={() => setSwitchFilter((prev) => !prev)}
            className="search_body_filter_title"
          >
            Filter list
          </button>
          {switchFilter ? (
            <section>
              <div className="search_body_filter_category">
                <div className="search_body_filter_category_header">Gender</div>
                {fitlerList.gender.map((v, i) => (
                  <div key={i} className="search_body_filter_category_gender">
                    <input
                      onChange={() => onChangeGender(v.id)}
                      type="checkbox"
                      checked={v.checked}
                      id={v.text}
                      name={v.text}
                    />
                    <label
                      onChange={() => onChangeGender(v.id)}
                      htmlFor={v.text}
                    >
                      {v.text}
                    </label>
                  </div>
                ))}
              </div>
              <div className="search_body_filter_category">
                <div className="search_body_filter_category_header">SPORTS</div>
                {fitlerList.sports.map((v, i) => (
                  <div key={i} className="search_body_filter_category_sport">
                    <input
                      onChange={() => onChangeSports(v.id)}
                      type="checkbox"
                      checked={v.checked}
                      id={v.text}
                      name={v.text}
                    />
                    <label
                      onChange={() => onChangeSports(v.id)}
                      htmlFor={v.text}
                    >
                      {v.text}
                    </label>
                  </div>
                ))}
              </div>
              <div className="search_body_filter_category">
                <div className="search_body_filter_category_header">TYPE</div>
                {fitlerList.types.map((v, i) => (
                  <div key={i} className="search_body_filter_category_sport">
                    <input
                      onChange={() => onChangeType(v.id)}
                      type="checkbox"
                      checked={v.checked}
                      id={v.text}
                      name={v.text}
                    />
                    <label onChange={() => onChangeType(v.id)} htmlFor={v.text}>
                      {v.text}
                    </label>
                  </div>
                ))}
              </div>
              <div className="search_body_filter_category">
                <div className="search_body_filter_category_header">
                  PRICE RANGE
                </div>
                {fitlerList.ranges.map((v, i) => (
                  <div key={i} className="search_body_filter_category_sport">
                    <input
                      onChange={() => onChangeRange(v.id)}
                      type="checkbox"
                      checked={v.checked}
                      id={v.text}
                      name={v.text}
                    />
                    <label
                      onChange={() => onChangeRange(v.id)}
                      htmlFor={v.text}
                    >
                      {v.text} $
                    </label>
                  </div>
                ))}
              </div>
            </section>
          ) : (
            ""
          )}
        </div>
        <div className="search_body_display">
          {/*populate items here*/}
          <div className="search_body_display_wrapper">
            {filter.length > 0
              ? filterProducts.map((prod, index) => (
                  <ShoeCase key={index} id={prod.id} prod={prod} />
                ))
              : products.map((prod, index) => (
                  <ShoeCase key={index} id={prod.id} prod={prod} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
