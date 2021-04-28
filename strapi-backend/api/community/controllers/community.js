"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  getAllCustomers: async (ctx) => {
    const customers = await strapi
      .query("community")
      .find({ type: "Customers" });
    ctx.send({
      message: customers.map((customer) => {
        return customer.entity;
      }),
    });
  },

  getAllPartners: async (ctx) => {
    const partners = await strapi.query("community").find({ type: "Partners" });
    ctx.send({
      message: partners.map((partner) => {
        return partner.entity;
      }),
    });
  },

  getAllResellers: async (ctx) => {
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
