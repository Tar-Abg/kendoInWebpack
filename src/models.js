export  var  cars = [
    { model: "FINEO_101_SOGEEU", price: "", country: "", picture: "", id: "" },
    { model: "FINEO_102_SOGEEU", price: "", country: "", picture: "", id: "" },
    { model: "FINEO_100_SOGEEU", price: "", country: "", picture: "", id: "" },
    { model: "FINEO_100_SOGEEU", price: "", country: "", picture: "", id: "" },
    { model: "FINEO_200_SOGEEU", price: "", country: "", picture: "", id: "" },
    { model: "FINEO_200_SOGEEU", price: "", country: "", picture: "", id: "" },
    // { model: "FINEO_200_SOGEEU", price: "", country: "", picture: "", id: "" },
    // { model: "FINEO_101_SOGEEU", price: "", country: "", picture: "", id: "" }
  ];
  export  var  dataForSecndGrid = [
    { model: "FINEO_101_SOGEEU", price: "599 099.5", country: "599 099.5", picture: "599 099.5", id: "599 099.5" },
    { model: "FINEO_102_SOGEEU", price: "0.00", country: "0.00", picture: "0.00", id: "0.00" },
    { model: "FINEO_100_SOGEEU", price: "-555. 44.5", country: "-555. 44.5", picture: "-555. 44.5", id: "-555. 44.5" },
    { model: "FINEO_100_SOGEEU", price: "0.00", country: "0.00", picture: "0.00", id: "0.00" },
    { model: "FINEO_200_SOGEEU", price: "162 25.44", country: "162 25.44", picture: "162 25.44", id: "162 25.44" },
    { model: "FINEO_200_SOGEEU", price: "1 000 00", country: "1 000 00", picture: "1 000 00", id: "1 000 00" },
    { model: "FINEO_200_SOGEEU", price: "-10 110.5", country: "-10 110.5", picture: "-10 110.5", id: "-10 110.5" },
    // { model: "FINEO_101_SOGEEU", price: "", country: "", picture: "", id: "" }
  ];

  export var dataMenu = [
    {
        text: "", imageUrl: "https://img.icons8.com/ios-glyphs/30/000000/home.png",
        url: "#grid",
        cssClass:"menuItem"
    },
    {
        text: "<span class=\"k-icon k-i-track-changes-enable \"></span>",encoded: false,
        url: "#grid",
        cssClass:"menuItem"
    },
    {
        text: "<span class=\"k-icon k-i-success \"></span>",encoded: false,
        url: "#grid",
        cssClass:"menuItem"
    },
    {
        text: "<span class=\"k-icon k-i-zoom \"></span>",encoded: false,
        url: "#grid",
        cssClass:"menuItem"
    },
    {
        text: "<span class=\"k-icon k-i-notification k-i-bell\"></span>",encoded: false,
        url: "#",
        cssClass:"menuItem"
    },
    {
        text: "<span class=\"k-icon k-i-gear k-icon-64\"></span>",encoded: false,
        url: "#",
        cssClass:"menuItem"
    },
    {
        text: "", imageUrl:"https://img.icons8.com/ios-glyphs/30/000000/question-mark.png",
        url: "#",
        cssClass:"last-item"
    }
  
];
export var secndMenu =  [
    {
        text: "", imageUrl: "https://img.icons8.com/ios-glyphs/60/000000/restart.png",
        url: "#grid",
        cssClass:"sencndMenuItem"
    },
    {
        text: "", imageUrl: "src/assets/avatar-5.jpg",
        url: "#grid",
        cssClass:"sencndMenuItem-lastItem img"
    },
    {
        text: "", imageUrl: "https://img.icons8.com/ios-glyphs/30/000000/chain-end.png",
        url: "#grid",
        cssClass:"sencndMenuItem-lastItem"
        
    }
]
export var gridColumn = [
            { title: " ", field: "model",
              attributes: {
                "class": "first-cell",
                style: "width:100px;color: hsl(208, 98%, 20%) "
              } 
            },
            { title: "None Rappr", field: "id" },
            { title: "Rapproches", field: "price" },
            { title: "None Rappr", field: "country" },
            { title: "Total", field: "country" }
        ];
export var gridColumnToo = [
    { title: " ", field: "model",
        attributes: {
        "class": "first-cell",
        style: "color: hsl(208, 98%, 20%); width:100px "
        } 
    },
    { title: "04/04/19", field: "id" },
    { title: "05/04/19", field: "price" },
    { title: "06/04/19", field: "country" },
    { title: "07/04/19", field: "country" },
    { title: "08/04/19", field: "country" }
];

export var gridDataCurrency = [
    {country:"src/assets/euro.png", value:"1.000", name:"EUR"},
    {country:"src/assets/kh.png", value:"4 569.847", name:"KHR"},
    {country:"src/assets/usd.png", value:"1.336", name:"USD"},
];

export var gridColumnCurrency = [
    { field: "country", template: '<img src="#= country #" alt="image"  class="imge"/> <span class="cours"> #= name # </span>'  },
    { field: "value",
        attributes: {
            "class": "CoursValue",
        } 
    },
];

