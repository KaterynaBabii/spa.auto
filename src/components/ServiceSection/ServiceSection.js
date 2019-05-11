import styles from './ServiceSection.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Service from "../Service/Service";
//TODO
import Background from 'C:/Users/asus/Desktop/pasha/washCarService/src/images/car1.jpg';

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Background})`
};

class ServiceSection extends Component {
    constructor (props) {
      super(props);
      this.state = {};
    }
  
    render () {
      return (
        <div style={ sectionStyle } className={styles.serviceSection}>
            <div className="container">
              <div className="row">
                <h1 className='text-center'>ПОСЛУГИ</h1>
                <Service />
               </div>
            </div>
          </div>
      );
    }
  }
  
  export default ServiceSection;
