'use strict';

/**
 * job-opening service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::job-opening.job-opening');
