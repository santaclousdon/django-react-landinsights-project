/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.2
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/* eslint-disable react/prop-types */
// Soft UI Dashboard PRO React components
import SoftBadge from "components/SoftBadge";

// ProductsList page components
import ProductCell from "layouts/ecommerce/products/products-list/components/ProductCell";
import ActionCell from "layouts/ecommerce/products/products-list/components/ActionCell";

// Images
import adidasHoodie from "assets/images/ecommerce/adidas-hoodie.jpeg";
import macBookPro from "assets/images/ecommerce/macbook-pro.jpeg";
import metroChair from "assets/images/ecommerce/metro-chair.jpeg";
import alchimiaChair from "assets/images/ecommerce/alchimia-chair.jpeg";
import fendiCoat from "assets/images/ecommerce/fendi-coat.jpeg";
import offWhiteJacket from "assets/images/ecommerce/off-white-jacket.jpeg";
import yohjiYamamoto from "assets/images/ecommerce/yohji-yamamoto.jpeg";
import mcqueenShirt from "assets/images/ecommerce/mcqueen-shirt.jpeg";
import yellowChair from "assets/images/ecommerce/yellow-chair.jpeg";
import heronTshirt from "assets/images/ecommerce/heron-tshirt.jpeg";
import livingChair from "assets/images/ecommerce/living-chair.jpeg";
import orangeSofa from "assets/images/ecommerce/orange-sofa.jpeg";
import burberry from "assets/images/ecommerce/burberry.jpeg";
import dgSkirt from "assets/images/ecommerce/d&g-skirt.jpeg";
import undercover from "assets/images/ecommerce/undercover.jpeg";

// Badges
const outOfStock = (
  <SoftBadge variant="contained" color="error" size="xs" badgeContent="out of stock" container />
);
const inStock = (
  <SoftBadge variant="contained" color="success" size="xs" badgeContent="in stock" container />
);

const dataTableData = {
  columns: [
    {
      Header: "product",
      accessor: "product",
      width: "40%",
      Cell: ({ value: [name, data] }) => (
        <ProductCell image={data.image} name={name} checked={data.checked} />
      ),
    },
    { Header: "category", accessor: "category" },
    { Header: "price", accessor: "price" },
    { Header: "sku", accessor: "sku" },
    { Header: "quantity", accessor: "quantity" },
    {
      Header: "status",
      accessor: "status",
      Cell: ({ value }) => (value === "in stock" ? inStock : outOfStock),
    },
    { Header: "action", accessor: "action" },
  ],

  rows: [
    {
      product: ["BKLGO Full Zip Hoodie", { image: adidasHoodie, checked: true }],
      category: "Cloting",
      price: "$1,321",
      sku: 243598234,
      quantity: 0,
      status: "out of stock",
      action: <ActionCell />,
    },
    {
      product: ["MacBook Pro", { image: macBookPro, checked: true }],
      category: "Electronics",
      price: "$1,869",
      sku: 877712,
      quantity: 0,
      status: "out of stock",
      action: <ActionCell />,
    },
    {
      product: ["Metro Bar Stool", { image: metroChair, checked: false }],
      category: "Furniture",
      price: "$99",
      sku: "0134729",
      quantity: 978,
      status: "in stock",
      action: <ActionCell />,
    },
    {
      product: ["Alchimia Chair", { image: alchimiaChair, checked: false }],
      category: "Furniture",
      price: "$2,999",
      sku: 113213,
      quantity: 0,
      status: "out of stock",
      action: <ActionCell />,
    },
    {
      product: ["Fendi Gradient Coat", { image: fendiCoat, checked: false }],
      category: "Clothing",
      price: "$869",
      sku: 634729,
      quantity: 725,
      status: "in stock",
      action: <ActionCell />,
    },
    {
      product: ["Off White Cotton Bomber", { image: offWhiteJacket, checked: false }],
      category: "Clothing",
      price: "$1,869",
      sku: 634729,
      quantity: 725,
      status: "in stock",
      action: <ActionCell />,
    },
    {
      product: ["Y-3 Yohji Yamamoto", { image: yohjiYamamoto, checked: true }],
      category: "Shoes",
      price: "$869",
      sku: 634729,
      quantity: 725,
      status: "in stock",
      action: <ActionCell />,
    },
    {
      product: ["Alexander McQueen", { image: mcqueenShirt, checked: true }],
      category: "Clothing",
      price: "$1,199",
      sku: "00121399",
      quantity: 51293,
      status: "in stock",
      action: <ActionCell />,
    },
    {
      product: ["Luin Floor Lamp", { image: yellowChair, checked: true }],
      category: "Furniture",
      price: "$1,900",
      sku: 434729,
      quantity: 34,
      status: "in stock",
      action: <ActionCell />,
    },
    {
      product: ["Heron Preston T-shirt", { image: heronTshirt, checked: false }],
      category: "Clothing",
      price: "$149",
      sku: 928341,
      quantity: 0,
      status: "out of stock",
      action: <ActionCell />,
    },
    {
      product: ["Gray Living Chair", { image: livingChair, checked: true }],
      category: "Furniture",
      price: "$2,099",
      sku: 9912834,
      quantity: 32,
      status: "in stock",
      action: <ActionCell />,
    },
    {
      product: ["Derbyshire Orange Sofa", { image: orangeSofa, checked: false }],
      category: "Furniture",
      price: "$2,999",
      sku: 561151,
      quantity: 22,
      status: "in stock",
      action: <ActionCell />,
    },
    {
      product: ["Burberry Low-Tops", { image: burberry, checked: true }],
      category: "Shoes",
      price: "$869",
      sku: 634729,
      quantity: 725,
      status: "in stock",
      action: <ActionCell />,
    },
    {
      product: ["Dolce & Gabbana Skirt", { image: dgSkirt, checked: false }],
      category: "Designer",
      price: "$999",
      sku: "01827391",
      quantity: 0,
      status: "out of stock",
      action: <ActionCell />,
    },
    {
      product: ["Undercover T-shirt", { image: undercover, checked: true }],
      category: "Shoes",
      price: "$869",
      sku: 63472,
      quantity: 725,
      status: "in stock",
      action: <ActionCell />,
    },
  ],
};

export default dataTableData;
