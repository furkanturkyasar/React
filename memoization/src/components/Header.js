import React from "react";

function Header({ number, data }) {
  return (
    <div>
      {console.log("Header rendered")}
      Header {number}
      <br />
      <code>{JSON.stringify(data)}</code>
    </div>
  );
}

export default React.memo(Header);
