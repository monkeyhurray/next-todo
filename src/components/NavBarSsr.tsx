import React from "react";
import Link from "next/link";
const NavBarSsr = () => {
  return (
    <ul className="flex m-5">
      <li className="mr-5">
        <Link href="/report">[할일정보통계보러가기]</Link>
      </li>
    </ul>
  );
};

export default NavBarSsr;
