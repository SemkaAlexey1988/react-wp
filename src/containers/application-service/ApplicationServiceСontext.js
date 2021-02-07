import React from 'react';

const {
Provider: ApplicationServiceProvider,
Consumer: ApplicationServiceConsumer
} = React.createContext();

export {
  ApplicationServiceProvider, 
  ApplicationServiceConsumer
}