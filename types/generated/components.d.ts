import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsCounter extends Schema.Component {
  collectionName: 'components_components_counters';
  info: {
    displayName: 'Counter';
  };
  attributes: {
    counterName: Attribute.String;
    counterNumber: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.counter': ComponentsCounter;
    }
  }
}
