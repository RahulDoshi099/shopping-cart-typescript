import React from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row>
        {storeItems.map((item) => {
          return (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Store;
