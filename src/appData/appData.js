import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

export const topMenuItems = [
  {
    itemName: "For Me",
    isActive: true,
    bgColor: "#e6e7e7"
  },
  {
    itemName: "Jeans",
    isActive: false,
    bgColor: "#e8f7fd"
  },
  {
    itemName: "T-Shirts",
    isActive: false,
    bgColor: "#ffe3e3"
  },
  {
    itemName: "Shirts",
    isActive: false,
    bgColor: "#eae8fd"
  },
  {
    itemName: "Trousers",
    isActive: false,
    bgColor: "#fafae0"
  },
  {
    itemName: "Joggers",
    isActive: false,
    bgColor: "#e6e7e7"
  },
  {
    itemName: "Shorts",
    isActive: false,
    bgColor: "#e8f7fd"
  }
];

export const footerInfos = [
  "About Us",
  "Deliver Information",
  "Returns & Exchange",
  "Technical & Privacy",
  "Order Status"
];

export const addressInfos = [
  "Our Corporate Office",
  "No:7, A2B road, Adyar Rajpuram,",
  "T-Nagar, Chennai - 642002."
];

export const secNavItems = [
  {
    itemName: "like",
    itemSrc: <FontAwesomeIcon icon={faHeart} />
  },
  {
    itemName: "profile",
    itemSrc: <FontAwesomeIcon icon={faUser} />
  }
];

export const navItems = [
  {
    itemName: "For Me",
    isActive: true
  },
  {
    itemName: "Jeans",
    isActive: false
  },
  {
    itemName: "Shirts",
    isActive: false
  },
  {
    itemName: "T-Shirts",
    isActive: false
  },
  {
    itemName: "Trousers",
    isActive: false
  },
  {
    itemName: "Joggers",
    isActive: false
  },
  {
    itemName: "Shorts",
    isActive: false
  }
];

export const myOrderList = [
  {
    orderId: "12345678",
    orderItemKey: "12345678_1",
    itemName: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
    deliverAt: "Express Delivery by Sat, Aug 30",
    typeOfPayment: "Credit Card Payment",
    itemValue: "Rs 1,899",
    itemStatus: "Pending"
  },
  {
    orderId: "12345678",
    orderItemKey: "12345678_2",
    itemName: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
    deliverAt: "Express Delivery by Sun, Aug 31",
    typeOfPayment: "Credit Card Payment",
    itemValue: "Rs 1,899",
    itemStatus: "Pending"
  },
  {
    orderId: "12345678",
    orderItemKey: "12345678_3",
    itemName: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
    deliverAt: "Express Delivery by Sun, Aug 16",
    typeOfPayment: "Credit Card Payment",
    itemValue: "Rs 1,899",
    itemStatus: "Delivered"
  },
  {
    orderId: "12345678",
    orderItemKey: "12345678_4",
    itemName: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
    deliverAt: "Express Delivery by Sat, Aug 15",
    typeOfPayment: "Credit Card Payment",
    itemValue: "Rs 1,899",
    itemStatus: "Delivered"
  }
];
