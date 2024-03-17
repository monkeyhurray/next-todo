import React from "react";
import Link from "next/link";
const NavBarSsr = () => {
  return (
    <ul className="flex m-5 w-60 rounded my-3 border-2 border-black">
      <li className="mr-5">
        <Link href="/report">[할일정보통계보러가기]</Link>
      </li>
    </ul>
  );
};

export default NavBarSsr;
