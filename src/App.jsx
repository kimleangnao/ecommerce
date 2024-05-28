import {createRoot} from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Home from "./Home";
import Search from "./Search";
import Checkout from "./Checkout";
import Cart from "./Cart";
import Athlete from "./Athlete";
import Trend from "./Trend";
import ViewSingleProduct from "./ViewSingleProduct";
import { useState } from "react";

import userprofile from "../resources/images/userprofile.png"
import NavbarExtend from "./NavbarExtend";

const App = () => {
    //we do not have back-end yet, so we are trying to emulate the back-end like ecommerce
    //All the product
 

    const [allProducts] = useState([
        {
            id: 621096,
            brand: "Nike",
            productName: "Air Jordan 1 Low",
            productType: "Basketball Shoe",
            productPrice: 115,
            filterProductType: "Shoes",
            filterType: "Basketball",
            filterGender: "Both",
            matchingBackground: "#ADACA9",
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
                    color: "White",
                    productImage: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7709df52-f96e-4c12-9f13-ca13d5198971/air-jordan-1-low-womens-shoes-rJrHLw.png",
                    productImageMore: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/35e9a24e-6337-4fda-abbb-6bc8e31c12c1/air-jordan-1-low-womens-shoes-rJrHLw.png",
                    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8b689ec3-0967-449a-a9e2-04bb3152b2bc/air-jordan-1-low-womens-shoes-rJrHLw.png",
                    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fc1d471c-e699-4564-8f63-8b5b054ac15a/air-jordan-1-low-womens-shoes-rJrHLw.png"
                    ]   
                },
                {
                    id: "pc_002",
                    selected: false,
                    color: "Black",
                    productImage: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3e37f983-4872-4eb6-a655-94fa09e7897f/air-jordan-1-low-womens-shoes-rJrHLw.png",
                    productImageMore: [
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e4015c13-f043-4ed7-84b0-2801bd2f9ac3/air-jordan-1-low-womens-shoes-rJrHLw.png",
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d2d67051-ccd1-4ae9-bd7e-096b256524eb/air-jordan-1-low-womens-shoes-rJrHLw.png",
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1198514-83aa-4ac4-a9e4-c71c28f9b315/air-jordan-1-low-womens-shoes-rJrHLw.png"
                    ]
                },
                {
                    id: "pc_003",
                    selected: false,
                    color: "Red",
                    productImage: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b4aaf5a8-2fc4-4eca-b62d-a2368d8ba3d2/air-jordan-1-low-womens-shoes-rJrHLw.png",
                    productImageMore: [
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8d2b8619-664d-4c21-936d-f1f408ddfec9/air-jordan-1-low-womens-shoes-rJrHLw.png",
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f985fc5c-508d-481f-bdac-399012e16ace/air-jordan-1-low-womens-shoes-rJrHLw.png",
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a096593b-c50d-40db-8d53-767a9477d1eb/air-jordan-1-low-womens-shoes-rJrHLw.png"
                    ]
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
        },
        {
            id: 992469,
            brand: "Nike",
            productName: "Nike Blazer Mid '77",
            productType: "Basketball Shoe",
            productPrice: 85,
            filterProductType: "Shoes",
            filterType: "Basketball",
            filterGender: "Male",
            productGender: [
                {
                    id: "pg_001",
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
                    color: "White / Blue",
                    productImage: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/34bef37e-2cd8-45ea-9c14-f59e4888e804/blazer-mid-77-womens-shoes-NPWfjm.png",
                    productImageMore: [
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aefa4cb2-345c-4c47-973f-783da4f24b26/blazer-mid-77-womens-shoes-NPWfjm.png",
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3ed96c1f-143f-4725-af88-e018fd1a7739/blazer-mid-77-womens-shoes-NPWfjm.png",
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b9751964-e668-4769-b6c7-4688dc026b40/blazer-mid-77-womens-shoes-NPWfjm.png"
                    ]   
                },
                {
                    id: "pc_002",
                    selected: false,
                    color: "White",
                    productImage:  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3b6e46eb-5f49-4019-a34d-57c1a89fdfa7/blazer-mid-77-womens-shoes-NPWfjm.png",
                    productImageMore: [
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9f8e18c8-aea8-4405-a17c-fbecb30a5481/blazer-mid-77-womens-shoes-NPWfjm.png",
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bcac27f2-cefa-4142-a8f9-cc5fcedf8f4c/blazer-mid-77-womens-shoes-NPWfjm.png",
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/29094aed-839d-4d22-a584-8639c65f5c1d/blazer-mid-77-womens-shoes-NPWfjm.png"
                    ]
                },
                {
                    id: "pc_003",
                    selected: false,
                    color: "White / Red",
                    productImage: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/861f58d0-0077-492a-a048-3cae5108bf34/blazer-mid-77-womens-shoes-NPWfjm.png",
                    productImageMore: [
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/92808f08-f815-46e5-90f6-8b642a3125ad/blazer-mid-77-womens-shoes-NPWfjm.png",
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ce126cbc-79be-4f3f-956c-17fa4ebf911b/blazer-mid-77-womens-shoes-NPWfjm.png",
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4f604ad8-71fe-4ac4-ab35-56db2ceefef6/blazer-mid-77-womens-shoes-NPWfjm.png"
                    ]
                },
                {
                    id: "pc_004",
                    selected: false,
                    color: "White / Black",
                    productImage: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a8ab0634-f892-4bcb-b703-5564cfe4f8b7/blazer-mid-77-womens-shoes-NPWfjm.png",
                    productImageMore: [
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cd5f8147-b3e4-4948-bb97-70e864908f8d/blazer-mid-77-womens-shoes-NPWfjm.png",
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/14772c5f-5a12-4151-baf3-ee5cf53deb1a/blazer-mid-77-womens-shoes-NPWfjm.png",
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ec32aea3-8aba-4459-a815-399557b6d329/blazer-mid-77-womens-shoes-NPWfjm.png"
                    ]
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
        },
        {
            id: 96427,
            brand: "Nike",
            productName: "Jordan 4 Retro 'Industrial Blue'",
            productType: "Kid's Shoe",
            productPrice: 100,
            filterProductType: "Shoes",
            filterType: "Basketball",
            filterGender: "Female",
            productGender: [
                {
                    id: "pg_001",
                    selected: true,
                    gender: "Female"
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
                    color: "White / Blue",
                    productImage: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9ab9aaff-e36e-4dba-87a3-bc73921fb066/jordan-4-retro-industrial-blue-little-kids-shoes-kDKnwq.png",
                    productImageMore: [
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/10bc6365-e662-4b4f-b7e2-f27233dd1c7f/jordan-4-retro-industrial-blue-little-kids-shoes-kDKnwq.png",
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/92138c8c-c106-42fb-a257-6403eeb18984/jordan-4-retro-industrial-blue-little-kids-shoes-kDKnwq.png",
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4d097c57-66ac-4d40-9be3-c4af4eb089fe/jordan-4-retro-industrial-blue-little-kids-shoes-kDKnwq.png"
                    ]   
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
        },
        {
            id: 797513,
            brand: "Adidas",
            productName: "AE 1 Velocity Blue",
            productType: "Basketball Shoe",
            productPrice: 100,
            filterProductType: "Shoes",
            filterGender: "Both",
            filterType: "Basketball",
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
                    color: "Lucid Blue",
                    productImage: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b387ab8df5147f4b2c4c48175bcb4a9_9366/AE_1_Velocity_Blue_Basketball_Shoes_Kids_Blue_IF1876_01_standard.jpg",
                    productImageMore: [
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a2aa08ce55bd4e83bd9d7fd8b6b94fbb_9366/AE_1_Velocity_Blue_Basketball_Shoes_Blue_IF1864_02_standard.jpg",
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6af8c631c0484bb6983b62de77337ccc_9366/AE_1_Velocity_Blue_Basketball_Shoes_Blue_IF1864_03_standard.jpg",
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5d80b5cfc93b4da1a79b9b12d776cf35_9366/AE_1_Velocity_Blue_Basketball_Shoes_Blue_IF1864_04_standard.jpg"
                    ]   
                },
                {
                    id: "pc_002",
                    selected: true,
                    color: "Cloud White",
                    productImage: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/86a91d8a2b414cd4afbccb58fbc87bdc_9366/AE_1_Best_of_adi_Basketball_Shoes_Kids_White_IF1875_01_standard.jpg",
                    productImageMore: [
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/68741b74c10442b68f074e82df5ea2f6_9366/AE_1_Best_Of_Adi_Basketball_Shoes_White_IF1857_02_standard.jpg",
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b351f069d8b44f2b9c1d80be57331004_9366/AE_1_Best_Of_Adi_Basketball_Shoes_White_IF1857_03_standard.jpg",
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/52b397bde6e94cbd8df65d60224092a6_9366/AE_1_Best_Of_Adi_Basketball_Shoes_White_IF1857_04_standard.jpg"
                    ]   
                },
                {
                    id: "pc_003",
                    selected: true,
                    color: "Wonder Clay",
                    productImage: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/11aba87f5b054e8091b14e88679d197c_9366/AE_1_Georgia_Red_Clay_Basketball_Shoes_Red_IF1863_01_standard.jpg",
                    productImageMore: [
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e918879bca3f42b3864d035e65b9b9f9_9366/AE_1_Georgia_Red_Clay_Basketball_Shoes_Red_IF1863_02_standard_hover.jpg",
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ea52ab346ad14a43a58b809333837c2c_9366/AE_1_Georgia_Red_Clay_Basketball_Shoes_Red_IF1863_03_standard.jpg",
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/77a2c990f0634a858078deefdf414d42_9366/AE_1_Georgia_Red_Clay_Basketball_Shoes_Red_IF1863_04_standard.jpg"
                    ]   
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
        },
        {
            id: 720151,
            brand: "Adidas",
            productName: "Dame Certified 2 ",
            productType: "Basketball Shoe",
            productPrice: 90,
            filterProductType: "Shoes",
            filterGender: "Both",
            filterType: "Basketball",
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
                    color: "Cloud White",
                    productImage: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d3eb5dcbea2449578db71d578c6aec1a_9366/Dame_Certified_2_Basketball_Shoes_White_IE7794_01_standard.jpg",
                    productImageMore: [
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a2c5e3b125d74c51b69e4a775039e420_9366/Dame_Certified_2_Basketball_Shoes_White_IE7794_02_standard_hover.jpg",
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/94853abc6ca542199f14791ee8ced257_9366/Dame_Certified_2_Basketball_Shoes_White_IE7794_03_standard.jpg",
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7e33f8a7e7d34ecb9f650c53ef6c7ba7_9366/Dame_Certified_2_Basketball_Shoes_White_IE7794_04_standard.jpg"
                    ]   
                },
                {
                    id: "pc_002",
                    selected: true,
                    color: "Semi Green Spark",
                    productImage: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/156fa2e59732473c9bd70d5c3bdd7edd_9366/Dame_Certified_2_Low_Basketball_Shoes_Green_IE7790_01_standard.jpg",
                    productImageMore: [
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ae2dba3098c94ab58f7c63902d1ef704_9366/Dame_Certified_2_Low_Basketball_Shoes_Green_IE7790_02_standard_hover.jpg",
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/75737cba914f47d684ad3111648bd02e_9366/Dame_Certified_2_Low_Basketball_Shoes_Green_IE7790_03_standard.jpg",
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c0305c8e5b8f46f5a60c8b93b20e79bb_9366/Dame_Certified_2_Low_Basketball_Shoes_Green_IE7790_04_standard.jpg"
                    ]   
                },
                {
                    id: "pc_003",
                    selected: true,
                    color: "Core Black",
                    productImage: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b4e8fe7a1daf4c61b40e5a781e491459_9366/Dame_Certified_2_Low_Basketball_Shoes_Black_IE7791_01_standard.jpg",
                    productImageMore: [
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/cf884bc39eaa43f1b8fad65a244d25ef_9366/Dame_Certified_2_Low_Basketball_Shoes_Black_IE7791_02_standard_hover.jpg",
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7a8e88be42914028aaa55070ce98fb6f_9366/Dame_Certified_2_Low_Basketball_Shoes_Black_IE7791_03_standard.jpg",
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/fa9077a2ac1d425aa938ff41cab3bcbd_9366/Dame_Certified_2_Low_Basketball_Shoes_Black_IE7791_04_standard.jpg"
                    ]   
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
        },
        {
            id: 241378,
            brand: "Adidas",
            productName: "Forum Low CL Shoes",
            productType: "Basketball Shoe",
            productPrice: 100,
            filterProductType: "Shoes",
            filterGender: "Both",
            filterType: "Basketball",
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
                    color: "Night Indigo",
                    productImage: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/29af4e86e6474619ad304712bad6afb7_9366/Forum_Low_CL_Shoes_Blue_IG8700_01_standard.jpg",
                    productImageMore: [
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a4ace21182974e0ea4689fc7f743b619_9366/Forum_Low_CL_Shoes_Blue_IG8700_04_standard.jpg",
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9cd6853d65a74a518756711ce6c371f6_9366/Forum_Low_CL_Shoes_Blue_IG8700_03_standard.jpg",
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ef4447d9ecdc4e98a65ab3ddd4114906_9366/Forum_Low_CL_Shoes_Blue_IG8700_02_standard_hover.jpg"
                       
                    ]   
                },
                {
                    id: "pc_002",
                    selected: true,
                    color: "red",
                    productImage: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1e45472f2dd04b0187bfafb2018802fb_9366/Forum_Low_Shoes_Red_IE7176_01_standard.jpg",
                    productImageMore: [
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/11065d4cb41d4554a498afb20188b83e_9366/Forum_Low_Shoes_Red_IE7176_02_standard_hover.jpg",
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/97513d2b757a42dfb61bafb2018877d2_9366/Forum_Low_Shoes_Red_IE7176_03_standard.jpg",
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9ba30d7db665425b9637afb20189c4e4_9366/Forum_Low_Shoes_Red_IE7176_04_standard.jpg"
                    ]   
                },
                {
                    id: "pc_003",
                    selected: true,
                    color: "Cloud White",
                    productImage: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8b18a7bd4ad249b68939140a279f34bf_9366/Forum_Low_CL_Shoes_White_IG3778_01_standard.jpg",
                    productImageMore: [
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/03789da9a983466699c5f97f34484bee_9366/Forum_Low_CL_Shoes_White_IG3778_02_standard_hover.jpg",
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e68c98b3ecf2406eb2f3505526d3a3ee_9366/Forum_Low_CL_Shoes_White_IG3778_03_standard.jpg",
                        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9d93a9ba2ba44740986d7c789531025c_9366/Forum_Low_CL_Shoes_White_IG3778_04_standard.jpg"
                    ]   
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
        },
        {
            id: 519412,
            brand: "UA",
            productName: "Unisex Curry 3Z7",
            productType: "Basketball Shoe",
            productPrice: 85,
            filterProductType: "Shoes",
            filterGender: "Female",
            filterType: "Basketball",
            productGender: [
                {
                    id: "pg_001",
                    selected: true,
                    gender: "Female"
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
                    color: "Royal",
                    productImage: "https://underarmour.scene7.com/is/image/Underarmour/3026622-400_DEFAULT?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                    productImageMore: [
                        "https://underarmour.scene7.com/is/image/Underarmour/3026622-400_TOE?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                        "https://underarmour.scene7.com/is/image/Underarmour/3026622-400_PAIR?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                        "https://underarmour.scene7.com/is/image/Underarmour/3026622-400_SOLE?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688"
                    ]   
                },
                {
                    id: "pc_002",
                    selected: true,
                    color: "black",
                    productImage: "https://underarmour.scene7.com/is/image/Underarmour/3026622-001_DEFAULT?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                    productImageMore: [
                        "https://underarmour.scene7.com/is/image/Underarmour/3026622-001_TOE?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                        "https://underarmour.scene7.com/is/image/Underarmour/3026622-001_PAIR?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                        "https://underarmour.scene7.com/is/image/Underarmour/3026622-001_SOLE?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688"
                    ]   
                },
                {
                    id: "pc_003",
                    selected: true,
                    color: "Capri",
                    productImage: "https://underarmour.scene7.com/is/image/Underarmour/3026622-401_DEFAULT?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                    productImageMore: [
                        "https://underarmour.scene7.com/is/image/Underarmour/3026622-401_TOE?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                        "https://underarmour.scene7.com/is/image/Underarmour/3026622-401_PAIR?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                        "https://underarmour.scene7.com/is/image/Underarmour/3026622-401_SOLE?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688"
                    ]   
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
        },
        {
            id: 206761,
            brand: "UA",
            productName: "Unisex UA Flow FUTR X 3",
            productType: "Basketball Shoe",
            productPrice: 125,
            filterProductType: "Shoes",
            filterGender: "Female",
            filterType: "Basketball",
            productGender: [
                {
                    id: "pg_001",
                    selected: true,
                    gender: "Female"
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
                    color: "White",
                    productImage: "https://underarmour.scene7.com/is/image/Underarmour/3026630-103_DEFAULT?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                    productImageMore: [
                        "https://underarmour.scene7.com/is/image/Underarmour/3026630-103_TOE?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                        "https://underarmour.scene7.com/is/image/Underarmour/3026630-103_PAIR?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                        "https://underarmour.scene7.com/is/image/Underarmour/3026630-103_SOLE?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688"
                    ]   
                },
                {
                    id: "pc_002",
                    selected: true,
                    color: "Black / Yellow",
                    productImage: "https://underarmour.scene7.com/is/image/Underarmour/3026630-003_DEFAULT?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                    productImageMore: [
                        "https://underarmour.scene7.com/is/image/Underarmour/3026630-003_TOE?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                        "https://underarmour.scene7.com/is/image/Underarmour/3026630-003_PAIR?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                        "https://underarmour.scene7.com/is/image/Underarmour/3026630-003_SOLE?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688"
                    ]   
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
        },
        {
            id: 184012,
            brand: "UA",
            productName: "Unisex Curry 2 Retro",
            productType: "Basketball Shoe",
            productPrice: 150,
            filterProductType: "Shoes",
            filterGender: "Both",
            filterType: "Basketball",
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
                    color: "White / Gold",
                    productImage: "https://underarmour.scene7.com/is/image/Underarmour/3027361-100_DEFAULT?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                    productImageMore: [
                        "https://underarmour.scene7.com/is/image/Underarmour/3027361-100_TOE?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                        "https://underarmour.scene7.com/is/image/Underarmour/3027361-100_PAIR?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                        "https://underarmour.scene7.com/is/image/Underarmour/3027361-100_SOLE?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688"
                    ]   
                },
                {
                    id: "pc_002",
                    selected: true,
                    color: "Black",
                    productImage: "https://underarmour.scene7.com/is/image/Underarmour/3027361-101_DEFAULT?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                    productImageMore: [
                        "https://underarmour.scene7.com/is/image/Underarmour/3027361-101_TOE?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                        "https://underarmour.scene7.com/is/image/Underarmour/3027361-101_PAIR?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                        "https://underarmour.scene7.com/is/image/Underarmour/3027361-101_SOLE?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688"
                    ]   
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
        },
        {
            id: 41022,
            brand: "UA",
            productName: "Men's Curry 1 ",
            productType: "Golf Shoe",
            productPrice: 150,
            filterProductType: "Shoes",
            filterGender: "Both",
            filterType: "Golf",
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
                    color: "White / Black",
                    productImage: "https://underarmour.scene7.com/is/image/Underarmour/3027378-101_DEFAULT?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                    productImageMore: [
                        "https://underarmour.scene7.com/is/image/Underarmour/3027378-101_TOE?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                        "https://underarmour.scene7.com/is/image/Underarmour/3027378-101_PAIR?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
                        "https://underarmour.scene7.com/is/image/Underarmour/3027378-101_SOLE?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688"
                    ]   
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
        },
        {
            id: 898329,
            brand: "Lacoste",
            productName: "Men's Bayliss Leather Perforated Collar ",
            productType: "Sneakers",
            productPrice: 150,
            filterProductType: "Shoes",
            filterGender: "Both",
            filterType: "Everyday",
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
                    color: "White",
                    productImage: "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw73bc0f02/37CMA0073_21G_01.jpg?imwidth=915&impolicy=product",
                    productImageMore: [
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw609b9b9b/37CMA0073_21G_03.jpg?imwidth=915&impolicy=product",
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dwa3b7b698/37CMA0073_21G_02.jpg?imwidth=915&impolicy=product",
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dwe117852c/37CMA0073_21G_04.jpg?imwidth=915&impolicy=product"
                    ]   
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
        },
        {
            id: 218510,
            brand: "Lacoste",
            productName: "Men's G-Elite Golf Shoes",
            productType: "Sneakers",
            productPrice: 80,
            filterProductType: "Shoes",
            filterGender: "Both",
            filterType: "Everyday",
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
                    color: "White",
                    productImage: "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dwf91411e5/45SMA0012_03A_01.jpg?imwidth=915&impolicy=product",
                    productImageMore: [
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw7d3d0b71/45SMA0012_03A_02.jpg?imwidth=915&impolicy=product",
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw8ab01629/45SMA0012_03A_03.jpg?imwidth=915&impolicy=product",
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw4e811fd5/45SMA0012_03A_04.jpg?imwidth=915&impolicy=product"
                    ]   
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
        },
        {
            id: 676700,
            brand: "Lacoste",
            productName: "Men's Carnaby Pro BL Leather Tonal",
            productType: "Sneakers",
            productPrice: 100,
            filterProductType: "Shoes",
            filterGender: "Both",
            filterType: "Everyday",
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
                    color: "White",
                    productImage: "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw80e2656a/45SMA0110_042_01.jpg?imwidth=915&impolicy=product",
                    productImageMore: [
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dwa85b16f6/45SMA0110_042_02.jpg?imwidth=915&impolicy=product",
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dwd9d541f3/45SMA0110_042_03.jpg?imwidth=915&impolicy=product",
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dwd47685d8/45SMA0110_042_04.jpg?imwidth=915&impolicy=product"
                    ]   
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
        },
        {
            id: 317280,
            brand: "Lacoste",
            productName: "Men's Carnaby Pro BL Leather Tonal",
            productType: "Sneakers",
            productPrice: 100,
            filterProductType: "Shoes",
            filterGender: "Both",
            filterType: "Everyday",
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
                    color: "White",
                    productImage: "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw80e2656a/45SMA0110_042_01.jpg?imwidth=915&impolicy=product",
                    productImageMore: [
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dwa85b16f6/45SMA0110_042_02.jpg?imwidth=915&impolicy=product",
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dwd9d541f3/45SMA0110_042_03.jpg?imwidth=915&impolicy=product",
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dwd47685d8/45SMA0110_042_04.jpg?imwidth=915&impolicy=product"
                    ]   
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
        },
        {
            id: 762664,
            brand: "New Republic",
            productName: "Stanton Recycled Suede ",
            productType: "Sneakers",
            productPrice: 78,
            filterProductType: "Shoes",
            filterGender: "Both",
            filterType: "Everyday",
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
                    color: "White",
                    productImage: "https://shopnewrepublic.com/cdn/shop/products/NR_Stanton_Suede_Sneaker_Silver_Birch_1_600x.jpg?v=1627516843",
                    productImageMore: [
                        "https://shopnewrepublic.com/cdn/shop/products/NR_Stanton_Suede_Sneaker_Silver_Birch_1_600x.jpg?v=1627516843",
                        "https://shopnewrepublic.com/cdn/shop/products/NR_Stanton_Suede_Sneaker_Silver_Birch_3_600x.jpg?v=1627516843",
                        "https://shopnewrepublic.com/cdn/shop/products/NR_Stanton_Suede_Sneaker_Silver_Birch_2_600x.jpg?v=1627516844"
                    ]   
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
        },
        {
            id: 442616,
            brand: "New Republic",
            productName: "Grayson Sneaker",
            productType: "Sneakers",
            productPrice: 45,
            filterProductType: "Shoes",
            filterGender: "Both",
            filterType: "Everyday",
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
                    color: "White",
                    productImage: "https://shopnewrepublic.com/cdn/shop/products/nrm-grayson-wht02_final_420ab2bd-ae1b-48a7-bede-eb9996e9f955_600x.jpg?v=1658954361",
                    productImageMore: [
                        "https://shopnewrepublic.com/cdn/shop/products/nrm-grayson-wht02_final_420ab2bd-ae1b-48a7-bede-eb9996e9f955_600x.jpg?v=1658954361",
                        "https://shopnewrepublic.com/cdn/shop/products/nrm-grayson-wht01_final_2e62a9f3-b7ee-494d-934f-88e6a99fbc42_600x.jpg?v=1658954361",
                        "https://shopnewrepublic.com/cdn/shop/products/nrm-grayson-wht03_final_7ec5e789-4542-4137-bacc-59b88df2eccd_600x.jpg?v=1658953564"
                    ]   
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
        },
        {
            id: 507536,
            brand: "New Republic",
            productName: "Bowery Canvas Sneaker",
            productType: "Sneakers",
            productPrice: 45,
            filterProductType: "Shoes",
            filterGender: "Both",
            filterType: "Everyday",
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
                    color: "Brown",
                    productImage: "https://shopnewrepublic.com/cdn/shop/products/nr-bowery-canvas-sneaker-truffle-1_600x.jpg?v=1656358564",
                    productImageMore: [
                        "https://shopnewrepublic.com/cdn/shop/products/nr-bowery-canvas-sneaker-truffle-1_600x.jpg?v=1656358564",
                        "https://shopnewrepublic.com/cdn/shop/products/nr-bowery-canvas-sneaker-truffle-2_600x.jpg?v=1656358565",
                        "https://shopnewrepublic.com/cdn/shop/products/nr-bowery-canvas-sneaker-truffle-3_600x.jpg?v=1656358563"
                    ]   
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
        },
        {
            id: 163110,
            brand: "UA",
            productName: "Curry Flow 9 '2974'",
            productType: "Basketball Shoe",
            productPrice: 145,
            filterProductType: "Shoes",
            filterGender: "Both",
            filterType: "Basketball",
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
                    color: "Blue / Gold",
                    productImage: "https://underarmour.scene7.com/is/image/Underarmour/3026437-400_DEFAULT?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
                    productImageMore: [
                        "https://underarmour.scene7.com/is/image/Underarmour/3026437-400_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
                        "https://underarmour.scene7.com/is/image/Underarmour/3026437-400_TOE?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
                        "https://underarmour.scene7.com/is/image/Underarmour/3026437-400_A?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688"
                    ]   
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
        },
        {
            id: 894518,
            brand: "Nike",
            productName: "Nike Lebron 20",
            productType: "Basketball Shoe",
            productPrice: 160,
            filterProductType: "Shoes",
            filterGender: "Both",
            filterType: "Basketball",
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
                    color: "Mix",
                    productImage: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/185116f3-9e57-4405-a9c4-851fbdeb36fc/lebron-xxi-basketball-shoes-DjB9tK.png",
                    productImageMore: [
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/56f1807f-4974-4cc6-8cd7-8fe89607480b/lebron-xxi-basketball-shoes-DjB9tK.png",
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0ddf973d-e905-4362-8a2b-040e862bd273/lebron-xxi-basketball-shoes-DjB9tK.png",
                        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f14064b6-10a3-468e-b24e-788106e6a9ed/lebron-xxi-basketball-shoes-DjB9tK.png"
                    ]   
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
        },
    ])


    //trend product
    const [trendProducts] = useState([
        {
            id: 218510,
            brand: "Lacoste",
            productName: "Men's G-Elite Golf Shoes",
            productType: "Sneakers",
            productPrice: 80,
            filterProductType: "Shoes",
            filterGender: "Both",
            filterType: "Everyday",
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
                    color: "White",
                    productImage: "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dwf91411e5/45SMA0012_03A_01.jpg?imwidth=915&impolicy=product",
                    productImageMore: [
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw7d3d0b71/45SMA0012_03A_02.jpg?imwidth=915&impolicy=product",
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw8ab01629/45SMA0012_03A_03.jpg?imwidth=915&impolicy=product",
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw4e811fd5/45SMA0012_03A_04.jpg?imwidth=915&impolicy=product"
                    ]   
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
        },
        {
            id: 676700,
            brand: "Lacoste",
            productName: "Men's Carnaby Pro BL Leather Tonal",
            productType: "Sneakers",
            productPrice: 100,
            filterProductType: "Shoes",
            filterGender: "Both",
            filterType: "Everyday",
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
                    color: "White",
                    productImage: "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw80e2656a/45SMA0110_042_01.jpg?imwidth=915&impolicy=product",
                    productImageMore: [
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dwa85b16f6/45SMA0110_042_02.jpg?imwidth=915&impolicy=product",
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dwd9d541f3/45SMA0110_042_03.jpg?imwidth=915&impolicy=product",
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dwd47685d8/45SMA0110_042_04.jpg?imwidth=915&impolicy=product"
                    ]   
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
        },
        {
            id: 317280,
            brand: "Lacoste",
            productName: "Men's Powercourt Leather Multicolor",
            productType: "Sneakers",
            productPrice: 100,
            filterProductType: "Shoes",
            filterGender: "Both",
            filterType: "Everyday",
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
                    color: "White",
                    productImage: "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw392f1d9e/43SMA0034_407_01.jpg?imwidth=915&impolicy=product",
                    productImageMore: [
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw716bf962/43SMA0034_407_02.jpg?imwidth=915&impolicy=product",
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dwa367a29c/43SMA0034_407_03.jpg?imwidth=915&impolicy=product",
                        "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dwe3e3098b/43SMA0034_407_04.jpg?imwidth=915&impolicy=product"
                    ]   
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
        }
    ]);

    const [suggestProducts] = useState([
        {
            id: 762664,
            brand: "New Republic",
            productName: "Stanton Recycled Suede ",
            productType: "Sneakers",
            productPrice: 78,
            filterProductType: "Shoes",
            filterGender: "Both",
            filterType: "Everyday",
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
                    color: "White",
                    productImage: "https://shopnewrepublic.com/cdn/shop/products/NR_Stanton_Suede_Sneaker_Silver_Birch_1_600x.jpg?v=1627516843",
                    productImageMore: [
                        "https://shopnewrepublic.com/cdn/shop/products/NR_Stanton_Suede_Sneaker_Silver_Birch_1_600x.jpg?v=1627516843",
                        "https://shopnewrepublic.com/cdn/shop/products/NR_Stanton_Suede_Sneaker_Silver_Birch_3_600x.jpg?v=1627516843",
                        "https://shopnewrepublic.com/cdn/shop/products/NR_Stanton_Suede_Sneaker_Silver_Birch_2_600x.jpg?v=1627516844"
                    ]   
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
        },
        {
            id: 442616,
            brand: "New Republic",
            productName: "Grayson Sneaker",
            productType: "Sneakers",
            productPrice: 45,
            filterProductType: "Shoes",
            filterGender: "Both",
            filterType: "Everyday",
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
                    color: "White",
                    productImage: "https://shopnewrepublic.com/cdn/shop/products/nrm-grayson-wht02_final_420ab2bd-ae1b-48a7-bede-eb9996e9f955_600x.jpg?v=1658954361",
                    productImageMore: [
                        "https://shopnewrepublic.com/cdn/shop/products/nrm-grayson-wht02_final_420ab2bd-ae1b-48a7-bede-eb9996e9f955_600x.jpg?v=1658954361",
                        "https://shopnewrepublic.com/cdn/shop/products/nrm-grayson-wht01_final_2e62a9f3-b7ee-494d-934f-88e6a99fbc42_600x.jpg?v=1658954361",
                        "https://shopnewrepublic.com/cdn/shop/products/nrm-grayson-wht03_final_7ec5e789-4542-4137-bacc-59b88df2eccd_600x.jpg?v=1658953564"
                    ]   
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
        },
        {
            id: 507536,
            brand: "New Republic",
            productName: "Bowery Canvas Sneaker",
            productType: "Sneakers",
            productPrice: 45,
            filterProductType: "Shoes",
            filterGender: "Both",
            filterType: "Everyday",
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
                    color: "Brown",
                    productImage: "https://shopnewrepublic.com/cdn/shop/products/nr-bowery-canvas-sneaker-truffle-1_600x.jpg?v=1656358564",
                    productImageMore: [
                        "https://shopnewrepublic.com/cdn/shop/products/nr-bowery-canvas-sneaker-truffle-1_600x.jpg?v=1656358564",
                        "https://shopnewrepublic.com/cdn/shop/products/nr-bowery-canvas-sneaker-truffle-2_600x.jpg?v=1656358565",
                        "https://shopnewrepublic.com/cdn/shop/products/nr-bowery-canvas-sneaker-truffle-3_600x.jpg?v=1656358563"
                    ]   
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
        }
    ]);
    //functions when add to cart
    /*structure for cart

    {
            id: 1212121,
            productName: "Bowery Canvas Sneaker",
            productImage: "https://shopnewrepublic.com/cdn/shop/products/nr-bowery-canvas-sneaker-truffle-1_600x.jpg?v=1656358564",
            productType: "Sneakers",
            productGender: "Unisex",
            productPrice: 160,
            productColor: "Brown",
            productAmount: 1
        }
    */


    const [shoppingCart, setShoppingCart] = useState([])

    const addToCart = (productID, colorID, Gender, size) => {
        let currentShoppingCart = [...shoppingCart]
        let newProduct = {
            id: productID,
            productName: "",
            productImage: "",
            productType: "",
            productGender: Gender,
            productPrice: null,
            productSize: size,
            productColor: colorID,
            productAmount: 1
        }

        let currentProduct = allProducts.filter((product) => product.id == productID);
        newProduct.productName= currentProduct[0].productName;
 
        let currentColorObject = currentProduct[0].productColors.filter((color) => color.selected == true);
        newProduct.productImage =   currentColorObject[0].productImage;
        
        newProduct.productType= currentProduct[0].productType;
        newProduct.productPrice =  currentProduct[0].productPrice;
        currentShoppingCart.push(newProduct)
        setShoppingCart(currentShoppingCart);
    }

    return(
        <BrowserRouter>
            <NavbarExtend shoppingCart={shoppingCart} />
            <Routes>
                <Route path="/trend" element={<Trend  trendProducts={trendProducts} suggestProducts={suggestProducts} />} />
                <Route path="/athlete" element={<Athlete addToCart={addToCart}  />} />
                <Route path="/cart" element={<Cart shoppingCart={shoppingCart} />} />
                <Route path="/checkout" element={<Checkout setShoppingCart={setShoppingCart} shoppingCart={shoppingCart} />} />
                <Route path="/search/:id" element={<ViewSingleProduct addToCart={addToCart} allProducts={allProducts}  />} />
                <Route path="/search" element={<Search  allProducts={allProducts} />} />
                <Route path="/" element={<Home  />} />
            </Routes>
        </BrowserRouter>
    )
}

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />)