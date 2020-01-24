import {ProductData} from "./types/types";

const shoes = ['https://images.ctfassets.net/od02wyo8cgm5/4zKaw0ZGSnCmuqB8EaLFI0/f372623f3e0d27dfa100802421c35f0d/cloud_waterproof_2-fw19-black_lunar-m-g1.png?w=500&h=500&fl=progressive&q=91&bg=rgb:f7f7f7&fm=jpg',
'https://www.americangolf.co.uk/on/demandware.static/-/Sites-master-catalog/default/dwc8fd5f12/images-square/zoom/338968-Nike-Golf-Black-Air-Max-1G-1.jpg',
'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1574099086-adidas-continental-80-1574099076.jpg?crop=1xw:1xh;center,top&resize=480:*',
'https://stockx-360.imgix.net/Nike-Air-Max-97-MSCHF-x-INRI-Jesus-Shoes/Images/Nike-Air-Max-97-MSCHF-x-INRI-Jesus-Shoes/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1573581208'
]

const data:ProductData[] = [
    {
        id: "id1",
        product_name: "Cloud Lightweight Running Shoe",
        image: shoes[0],
        category: "Men",
        size_uk: 10,
        colour: "Dark Grey",
        customer_initials: "JA",
        status: 3
    },
    {
        id: "id2",
        product_name: "Nike Air Max 1G",
        image: shoes[1],
        category: "Men",
        size_uk: 7,
        colour: "Black",
        customer_initials: "MC",
        status: 2
    },
    {
        id: "id3",
        product_name: "Adidas Continental 80",
        image: shoes[2],
        category: "Women",
        size_uk: 7,
        colour: "White",
        customer_initials: "DN",
        status: 1
    },
    {
        id: "id4",
        product_name: "Nike Air Max 97",
        image: shoes[3],
        category: "Men",
        size_uk: 6,
        colour: "White/Blue",
        customer_initials: "BR",
        status: 1
    },
    {
        id: "id5",
        product_name: "Cloud Lightweight Running Shoe",
        image: shoes[0],
        category: "Men",
        size_uk: 10,
        colour: "Dark Grey",
        customer_initials: "AJ",
        status: 3
    },
    {
        id: "id6",
        product_name: "Nike Air Max 1G",
        image: shoes[1],
        category: "Men",
        size_uk: 7,
        colour: "Black",
        customer_initials: "VS",
        status: 3
    },
    {
        id: "id7",
        product_name: "Adidas Continental 80",
        image: shoes[2],
        category: "Women",
        size_uk: 9,
        colour: "White",
        customer_initials: "JP",
        status: 2
    },
    {
        id: "id9",
        product_name: "Cloud Lightweight Running Shoe",
        image: shoes[0],
        category: "Men",
        size_uk: 10,
        colour: "Dark Grey",
        customer_initials: "AJ",
        status: 1
    },
    {
        id: "id8",
        product_name: "Nike Air Max 97",
        image: shoes[3],
        category: "Women",
        size_uk: 6,
        colour: "White/Blue",
        customer_initials: "TR",
        status: 0
    },
    {
        id: "id10",
        product_name: "Nike Air Max 1G",
        image: shoes[1],
        category: "Men",
        size_uk: 7,
        colour: "Black",
        customer_initials: "EF",
        status: 0
    },
    {
        id: "id12",
        product_name: "Nike Air Max 97",
        image: shoes[3],
        category: "Men",
        size_uk: 6,
        colour: "White/Blue",
        customer_initials: "TL",
        status: 2
    },
    {
        id: "id13",
        product_name: "Cloud Lightweight Running Shoe",
        image: shoes[0],
        category: "Men",
        size_uk: 11,
        colour: "Dark Grey",
        customer_initials: "AJ",
        status: 3
    },
    {
        id: "id19",
        product_name: "Adidas Continental 80",
        image: shoes[2],
        category: "Women",
        size_uk: 5,
        colour: "White",
        customer_initials: "HF",
        status: 1
    },
    {
        id: "id11",
        product_name: "Adidas Continental 80",
        image: shoes[2],
        category: "Women",
        size_uk: 7,
        colour: "White",
        customer_initials: "BB",
        status: 0
    },
    {
        id: "id14",
        product_name: "Nike Air Max 1G",
        image: shoes[1],
        category: "Men",
        size_uk: 8,
        colour: "Black",
        customer_initials: "WP",
        status: 1
    },
    {
        id: "id15",
        product_name: "Adidas Continental 80",
        image: shoes[2],
        category: "Women",
        size_uk: 5,
        colour: "White",
        customer_initials: "HF",
        status: 3
    },
    {
        id: "id16",
        product_name: "Nike Air Max 97",
        image: shoes[3],
        category: "Men",
        size_uk: 8,
        colour: "White/Blue",
        customer_initials: "RT",
        status: 1
    },
    {
        id: "id18",
        product_name: "Nike Air Max 1G",
        image: shoes[1],
        category: "Men",
        size_uk: 8,
        colour: "Black",
        customer_initials: "WP",
        status: 3
    },
    {
        id: "id17",
        product_name: "Cloud Lightweight Running Shoe",
        image: shoes[0],
        category: "Men",
        size_uk: 11,
        colour: "Dark Grey",
        customer_initials: "AJ",
        status: 3
    },
    {
        id: "id20",
        product_name: "Nike Air Max 97",
        image: shoes[3],
        category: "Women",
        size_uk: 8,
        colour: "White/Blue",
        customer_initials: "RT",
        status: 2
    },
];

export default data;