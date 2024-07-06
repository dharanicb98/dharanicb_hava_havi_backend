const { EntitySchema } = require("typeorm");

module.exports.Country = new EntitySchema({
  name: "Country",
  tableName: "Country",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    name: {
      type: "varchar",
      length: 255,
    },
    alt_name: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    country_code_two: {
      type: "varchar",
      length: 10,
    },
    country_code_three: {
      type: "varchar",
      length: 10,
    },
    flag_app: {
      type: "varchar",
      length: 10,
      charset: "utf8mb4", // Ensuring proper encoding for emojis
      collation: "utf8mb4_unicode_ci",
    },
    mobile_code: {
      type: "int",
    },
    continent_id: {
      type: "int",
    },
    country_flag: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
  },
  relations: {
    cities: {
      type: "one-to-many",
      target: "City",
      inverseSide: "country",
    },
  },
});
