import { dataHeader } from "modules/data-fake";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <ul className='d-flex align-items-center justify-content-center'>
          {dataHeader?.map(
            (item: { id: string | number; title: string; href: string }) => (
              <li className='' key={item.id}>
                <NavLink to={item.href}>{item.title}</NavLink>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
