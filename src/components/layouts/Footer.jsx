import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";

const Footer = () => {
  return (
    <>
      <div className="py-6 bg-[#006ff7a2]">
        <Container>
        <div className="">
          <ul className="flex items-center justify-center gap-x-3">
            <li className="hover:text-[#262626] text-[#ffffff] text-sm">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-[#262626] text-[#ffffff] text-sm">
              <Link to={"/shop"}>Shop</Link>
            </li>
          </ul>
        </div>
      </Container>
      </div>
    </>
  );
};

export default Footer;
