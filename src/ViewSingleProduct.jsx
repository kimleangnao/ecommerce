

import { useCallback, useEffect, useState } from "react";
import ViewSingleProductDetails from "./ViewSingleProductDetails";



import sampleShoeBlack from "../resources/images/sample_shoe_black.png";
import sampleShoeRed from "../resources/images/sample_shoe_red.png";


import userprofile from "../resources/images/userprofile.png"
import { useParams } from "react-router-dom";


const ViewSingleProduct = ({allProducts, addToCart}) => {
    const {id} = useParams();

    const [product, setProduct] = useState({
        id: 621096,
        brand: "Nike",
        productName: "Air Jordan 1 Low",
        productType: "Basketball Shoe",
        productPrice: 115,
        filterProductType: "Shoes",
        filterType: "Basketball",
        filterGender: "Both",
        productGender: [
            {
                id: "pg_001",
                selected: false,
                gender: "Female"
            },
            {
                id: "pg_002",
                selected: true,
                gender: "Male"
            }
        ],
        productRating: {
            1: 1,
            2: 1,
            3: 1,
            4: 25,
            5: 50,
            totalRating: 78
        },
        productColors: [
            {
                id: "pc_001",
                selected: true,
                color: "",
                productImage: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7709df52-f96e-4c12-9f13-ca13d5198971/air-jordan-1-low-womens-shoes-rJrHLw.png",
                productImageMore: []   
            },
            {
                id: "pc_002",
                selected: false,
                color: "",
                productImage: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3e37f983-4872-4eb6-a655-94fa09e7897f/air-jordan-1-low-womens-shoes-rJrHLw.png",
                productImageMore: []
            },
            {
                id: "pc_003",
                selected: false,
                color: "",
                productImage: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b4aaf5a8-2fc4-4eca-b62d-a2368d8ba3d2/air-jordan-1-low-womens-shoes-rJrHLw.png",
                productImageMore: []
            }
        ],
        productSizes: [
            {
                id: "ps_001",
                selected: false,
                size: 6
            },
            {
                id: "ps_002",
                selected: false,
                size: 6.5
            },
            {
                id: "ps_003",
                selected: false,
                size: 7
            },
            {
                id: "ps_004",
                selected: false,
                size: 7.5
            },
            {
                id: "ps_005",
                selected: false,
                size: 8
            },
            {
                id: "ps_006",
                selected: false,
                size: 8.5
            },
            {
                id: "ps_007",
                selected: false,
                size: 9
            },
            {
                id: "ps_008",
                selected: false,
                size: 9.5
            },
            {
                id: "ps_009",
                selected: false,
                size: 10
            },
            {
                id: "ps_010",
                selected: false,
                size: 10.5
            },
            {
                id: "ps_011",
                selected: true,
                size: 11
            },
            {
                id: "ps_012",
                selected: false,
                size: 11.5
            },
            {
                id: "ps_013",
                selected: false,
                size: 12
            },
            {
                id: "ps_014",
                selected: false,
                size: 12.5
            },
            {
                id: "ps_015",
                selected: false,
                size: 13
            },
            {
                id: "ps_016",
                selected: false,
                size: 13.5
            },
            {
                id: "ps_017",
                selected: false,
                size: 14
            },
            {
                id: "ps_018",
                selected: false,
                size: 14.5
            },
            {
                id: "ps_019",
                selected: false,
                size: 15
            },
            {
                id: "ps_020",
                selected: false,
                size: 15.5
            },
            {
                id: "ps_021",
                selected: false,
                size: 16
            },
            
        ],
        productReviews: [
            {
                id: 1,
                userName: "Brendin",
                date: 1716399789224,
                scores: 3,
                userImage: userprofile,
                userRating: 5,
                userComment: "Biltong pariatur laboris aliquip, deserunt capicola esse dolore tempor sint est ut sed in. Irure beef ribs ribeye venison chislic pastrami consequat, laborum enim shoulder jowl anim rump andouille ut. Aliqua enim officia burgdoggen, beef ribs eu pork loin eiusmod. Dolore magna adipisicing deserunt kielbasa consectetur in chuck commodo cupim incididunt elit qui flank.",
                likes: 3,
                dislikes: 0,
                childComments: [
                    {
                        id: 1,
                        userName: "Odin",
                        date: 1716399789224,
                        scores: 10,
                        userImage: userprofile,
                        userComment: "Biltong pariatur laboris aliquip, deserunt capicola esse dolore tempor sint est ut sed in. Irure beef ribs ribeye venison chislic pastrami consequat, laborum enim shoulder jowl anim rump andouille ut. Aliqua enim officia burgdoggen, beef ribs eu pork loin eiusmod. Dolore magna adipisicing deserunt kielbasa consectetur in chuck commodo cupim incididunt elit qui flank.",
                        likes: 2,
                        dislikes: 0
                    },
                    {
                        id: 2,
                        userName: "Jakack",
                        userImage: userprofile,
                        userComment: "Biltong pariatur laboris aliquip, deserunt capicola esse dolore tempor sint est ut sed in. Irure beef ribs ribeye venison chislic pastrami consequat, laborum enim shoulder jowl anim rump andouille ut. Aliqua enim officia burgdoggen, beef ribs eu pork loin eiusmod. Dolore magna adipisicing deserunt kielbasa consectetur in chuck commodo cupim incididunt elit qui flank.",
                        likes: 1,
                        dislikes: 0
                    },
                    {
                        id: 3,
                        userName: "Jreo",
                        userImage: userprofile,
                        userComment: "Biltong pariatur laboris aliquip, deserunt capicola esse dolore tempor sint est ut sed in. Irure beef ribs ribeye venison chislic pastrami consequat, laborum enim shoulder jowl anim rump andouille ut. Aliqua enim officia burgdoggen, beef ribs eu pork loin eiusmod. Dolore magna adipisicing deserunt kielbasa consectetur in chuck commodo cupim incididunt elit qui flank.",
                        likes: 1,
                        dislikes: 0
                    }
                ]
            },
            {
                id: 2,
                userName: "Yuth",
                date: 1716399852220,
                scores: 15,
                userImage: userprofile,
                userRating: 5,
                userComment: "Biltong pariatur laboris aliquip, deserunt capicola esse dolore tempor sint est ut sed in. Irure beef ribs ribeye venison chislic pastrami consequat, laborum enim shoulder jowl anim rump andouille ut. Aliqua enim officia burgdoggen, beef ribs eu pork loin eiusmod. Dolore magna adipisicing deserunt kielbasa consectetur in chuck commodo cupim incididunt elit qui flank.",
                likes: 6,
                dislikes: 0,
                childComments: [
                    {
                        id: 1,
                        userName: "Prey",
                        userImage: userprofile,
                        userComment: "Biltong pariatur laboris aliquip, deserunt capicola esse dolore tempor sint est ut sed in. Irure beef ribs ribeye venison chislic pastrami consequat, laborum enim shoulder jowl anim rump andouille ut. Aliqua enim officia burgdoggen, beef ribs eu pork loin eiusmod. Dolore magna adipisicing deserunt kielbasa consectetur in chuck commodo cupim incididunt elit qui flank.",
                        likes: 2,
                        dislikes: 0
                    },
                    {
                        id: 2,
                        userName: "0Zero0",
                        userImage: userprofile,
                        userComment: "Biltong pariatur laboris aliquip, deserunt capicola esse dolore tempor sint est ut sed in. Irure beef ribs ribeye venison chislic pastrami consequat, laborum enim shoulder jowl anim rump andouille ut. Aliqua enim officia burgdoggen, beef ribs eu pork loin eiusmod. Dolore magna adipisicing deserunt kielbasa consectetur in chuck commodo cupim incididunt elit qui flank.",
                        likes: 1,
                        dislikes: 0
                    }
                ]
            },
            {
                id: 3,
                userName: "Wozok",
                date: 1716399863974,
                scores: 5,
                userImage: userprofile,
                userRating: 4,
                userComment: "Biltong pariatur laboris aliquip, deserunt capicola esse dolore tempor sint est ut sed in. Irure beef ribs ribeye venison chislic pastrami consequat, laborum enim shoulder jowl anim rump andouille ut. Aliqua enim officia burgdoggen, beef ribs eu pork loin eiusmod. Dolore magna adipisicing deserunt kielbasa consectetur in chuck commodo cupim incididunt elit qui flank.",
                likes: 10,
                dislikes: 0,
                childComments: []
            },

        ]
    })

    const [similarProducts] = useState([
        {
            id: 1,
            brand: "Under Armour",
            productName: "Under Armour Curry Flow 9 Team",
            productType: "Basketball Shoe",
            productImage: sampleShoeBlack
        },
        {
            id: 2,
            brand: "Under Armour",
            productName: "Under Armour Curry Flow 7 Team",
            productType: "Basketball Shoe",
            productImage: sampleShoeRed
        }
    ])

    const [user] = useState({
        id: 1,
        userName: "Yalo",
        userImage: userprofile,
        userReviews: [

        ]
    })

    const onChangeSelectColor = (productID) => {
        let currentProduct = {...product}
        for(let i = 0; i <currentProduct.productColors.length; i++){
         
            if(currentProduct.productColors[i].id == productID){
        
                currentProduct.productColors[i].selected = true;
            }else{
                currentProduct.productColors[i].selected = false;
            }
        }

        setProduct(currentProduct)
    }

    const onChangeSelectGender = (productID) => {
        let currentProduct = {...product}
        for(let i = 0; i < currentProduct.productGender.length; i++){
            if(currentProduct.productGender[i].id == productID){
                currentProduct.productGender[i].selected = true;
            }else{
                currentProduct.productGender[i].selected = false;
            }
        }
        //console.log(currentProduct)
        setProduct(currentProduct)
    }

    const onChangeSelectSize = (productID) => {
        let currentProduct = {...product};
        for(let i = 0; i < currentProduct.productSizes.length; i++){
            if(currentProduct.productSizes[i].id == productID){
                currentProduct.productSizes[i].selected = true
            }else{
                currentProduct.productSizes[i].selected = false
            }
        }

        setProduct(currentProduct)
    }

    const sortingComments = useCallback((mode) => {
        let currentProduct = allProducts.filter((prod) => prod.id == id);

       
        if(Object.keys(currentProduct).length > 0){
            if(mode == "TOP"){
                currentProduct[0].productReviews.sort((a,b) => b.scores - a.scores)
            }else if (mode == "NEW"){
                currentProduct[0].productReviews.sort((a,b) => b.date - a.date)
            }
            setProduct(currentProduct[0]);
        }
    }, [])



    useEffect(() => {
        sortingComments("TOP");
    }, [sortingComments, allProducts, id])

    const onChangeAddToCart = (productID) => {
        const productGender = product.productGender.filter((gender) => gender.selected == true);
        const productColor = product.productColors.filter((prodColor) => prodColor.selected == true)
        const productSize = product.productSizes.filter((size) => size.selected == true);
        alert("Added item to cart!")
        addToCart(productID, productColor[0].color, productGender[0].gender, productSize[0].size)
    }


    return(
        <div className="viewSingleProduct">
       
    
           
            <ViewSingleProductDetails
                onChangeAddToCart={onChangeAddToCart}
                product={product} 
                user={user}
                moreProducts={similarProducts}
                onChangeSelectColor={onChangeSelectColor}
                onChangeSelectGender={onChangeSelectGender}
                onChangeSelectSize={onChangeSelectSize}
                sortingComments={sortingComments}
            />
         
        </div>
    )
}

export default ViewSingleProduct;