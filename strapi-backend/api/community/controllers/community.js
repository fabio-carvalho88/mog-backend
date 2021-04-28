"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  customers: async (ctx) => {
    const customers = await strapi
      .query("community")
      .find({ type: "Customers" });
    ctx.send({
      message: customers.map((customer) => {
        return customer.entity;
      }),
    });
  },

  partners: async (ctx) => {
    const partners = await strapi.query("community").find({ type: "Partners" });
    ctx.send({
      message: partners.map((partner) => {
        return partner.entity;
      }),
    });
  },

  resellers: async (ctx) => {
    const resellers = await strapi
      .query("community")
      .find({ type: "Resellers" });
    ctx.send({
      message: resellers.map((reseller) => {
        return reseller.entity;
      }),
    });
  },
};
