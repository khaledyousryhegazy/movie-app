// Navbar data
export const header = [
  {
    id: 1,
    title: "home",
    path: "/",
  },
  {
    id: 2,
    title: "movies",
    path: "/movies",
  },
  {
    id: 3,
    title: "tv show",
    path: "/tv-show",
  },
  {
    id: 4,
    title: "signIn",
    path: "/sign-in",
  },
  {
    id: 5,
    title: "watchlist",
    path: "/watch-list",
  },
];

import {
  faGithub,
  faInstagram,
  faLinkedin,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";

// Footer data
export const FooterData = [
  {
    id: 1,
    icon: faGithub,
    href: "https://github.com/khaledyousryhegazy",
  },
  {
    id: 2,
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/khalid-yousry-a35b15234/",
  },
  {
    id: 3,
    icon: faSquareFacebook,
    href: "https://www.facebook.com/khalid.usry",
  },
  {
    id: 4,
    icon: faInstagram,
    href: "https://www.instagram.com/khaledyousry_21/",
  },
];
// Swiper break points
// Regular swiper
export const regularBreakPoints = {
  375: {
    slidesPerView: 2,
  },
  576: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 4,
  },
  992: {
    slidesPerView: 5,
  },
};

// Small swiper
export const smallBreakPoints = {
  375: {
    slidesPerView: 2,
  },
  576: {
    slidesPerView: 4,
  },
  768: {
    slidesPerView: 5,
  },
  992: {
    slidesPerView: 6,
  },
};
