import React from 'react';
import RightArrow from '../../../../img/rightArrow.svg';
import { CardBody } from 'reactstrap';

function ShowAllShops(props) {
  return (
    <CardBody className="pagination__dashboard">
      <div className="d-flex align-items-center">
        <div>
          <img src={RightArrow} className="all-shops-circle" />
        </div>
        <div>See all shops</div>
      </div>
    </CardBody>
  );
}

export default ShowAllShops;