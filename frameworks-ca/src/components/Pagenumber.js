import React from "react";
import Pagination from "react-bootstrap/Pagination";

let active = 1;
let items = [];
for (let number = 1; number <= 4; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}
const PageNumber = () => {
  return (
    <div className="pagination">
      <Pagination size="lg">{items}</Pagination>
    </div>
  );
};

export default PageNumber;
