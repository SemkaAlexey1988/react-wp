import React from 'react';
import { ApplicationServiceConsumer } from '../application-service';

const wrapContainer = () => (Wrapped) => {
return (props) => {
return(
  <ApplicationServiceConsumer>
    {
      (ApplicationService) => {
      return (  <Wrapped { ...props} ApplicationService={ApplicationService}/>
      );
      }
    }
  </ApplicationServiceConsumer>
);
}
};

export default wrapContainer; 