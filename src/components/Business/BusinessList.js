import React from 'react';
import './Business.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="BusinessList">
			  {
			    this.props.businesses.map(
			      function(business) {
			        return <Business business={business} />;
			      }
					)
			  }
			</div>
		);
	}
}

export default BusinessList;