const { EntitySchema } = require("typeorm");

module.exports.Airport = new EntitySchema({
  name: "Airport",
  tableName: "Airport",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    icao_code: {
      type: "varchar",
      length: 4,
    },
    iata_code: {
      type: "varchar",
      length: 3,
    },
    name: {
      type: "longtext"
    },
    type: {
      type: "varchar",
      length: 255,
    },
    city_id: {
      type: "int",
    },
    country_id: {
      type: "int",
    },
    continent_id: {
      type: "int",
    },
    website_url: {
      type: "longtext",
      nullable: true,
    },
    created_at: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    updated_at: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    latitude_deg: {
      type: "decimal",
      precision: 10,
      scale: 6,
    },
    longitude_deg: {
      type: "decimal",
      precision: 10,
      scale: 6,
    },
    elevation_ft: {
      type: "int",
      nullable: true,
    },
    wikipedia_link: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
  },
  relations: {
    city: {
      type: "many-to-one",
      target: "City",
      joinColumn: { name: "city_id" },
    },
    country: {
      type: "many-to-one",
      target: "Country",
      joinColumn: { name: "country_id" },
    },
  },
});
