'use client';
"use strict";
exports.__esModule = true;
exports.Products = void 0;
var image_1 = require("next/image");
var products_module_scss_1 = require("../style/products.module.scss");
var productsStore_1 = require("@/features/store/productsStore");
var authStore_1 = require("@/features/store/authStore");
var react_1 = require("react");
exports.Products = function () {
    var _a = productsStore_1.useStore(), products = _a.products, getProducts = _a.getProducts;
    var user = authStore_1.useStore().user;
    react_1.useEffect(function () {
        console.log(user);
        getProducts();
    }, [getProducts, user]);
    return (React.createElement("div", { className: products_module_scss_1["default"].productContainer },
        React.createElement("h1", { className: products_module_scss_1["default"].sectionTitle }, "Latest Products"),
        React.createElement("div", { className: products_module_scss_1["default"].productList }, products.map(function (product) { return (React.createElement("div", { key: product.id, className: products_module_scss_1["default"].productCard },
            React.createElement("div", { className: products_module_scss_1["default"].productImage },
                React.createElement(image_1["default"], { src: product.thumbnail, alt: product.title, width: 300, height: 300, loading: "lazy" })),
            React.createElement("div", { className: products_module_scss_1["default"].productInfo },
                React.createElement("h3", { className: products_module_scss_1["default"].productName }, product.title),
                React.createElement("span", { className: products_module_scss_1["default"].productCategory }, product.category),
                React.createElement("span", { className: products_module_scss_1["default"].productPrice },
                    "$",
                    product.price),
                React.createElement("div", { className: products_module_scss_1["default"].productBuy }, user && React.createElement("button", null, "Add to cart"))))); }))));
};
