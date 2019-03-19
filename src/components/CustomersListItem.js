import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './../index.css';

const CustomersListItem = ({dni,name,editAction,delAction,urlPath}) => {
  return(
    <div>
      <div className="customer-list-item">
        <div className="field">
      <Link to={`${urlPath}/${dni}`}>{name}</Link>
        </div>
        <div className="field">
        <Link to={`${urlPath}/${dni}/edit`}>{editAction}</Link>
        </div>
        <div className="field">
        <Link to={`${urlPath}/${dni}/delete`}>{delAction}</Link>
        </div>
      </div>
    </div>
  )
}
CustomersListItem.propTypes = {
  dni: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  editAction: PropTypes.string.isRequired,
  delAction: PropTypes.string.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default CustomersListItem;
