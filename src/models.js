export  var  cars = [
    { model: "FINEO_101_SOGEEU", price: "", country: "", picture: "", id: "" },
    { model: "FINEO_102_SOGEEU", price: "", country: "", picture: "", id: "" },
    { model: "FINEO_100_SOGEEU", price: "", country: "", picture: "", id: "" },
    { model: "FINEO_100_SOGEEU", price: "", country: "", picture: "", id: "" },
    { model: "FINEO_200_SOGEEU", price: "", country: "", picture: "", id: "" },
    { model: "FINEO_200_SOGEEU", price: "", country: "", picture: "", id: "" },
    { model: "FINEO_200_SOGEEU", price: "", country: "", picture: "", id: "" },
    { model: "FINEO_101_SOGEEU", price: "", country: "", picture: "", id: "" }
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
                style: "width:120px "
              } 
            },
            { title: "None Rappr", field: "id" },
            { title: "Rapproches", field: "price" },
            { title: "None Rappr", field: "country" },
            { title: "Total", field: "country" }
        ]

