import React from "react";

const AboutSSGPage = async () => {
  const response = await fetch(`${process.env.NEXT_SERVER_URL}/companyInfo`, {
    cache: "force-cache",
  });
  const company = await response.json();
  return (
    <div className="m-0">
      <div>{company.name}</div>
      <div>{company.desctiption}</div>
      <img src={`${company.image}`} />
    </div>
  );
};

export default AboutSSGPage;
