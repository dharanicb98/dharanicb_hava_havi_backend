const { EntitySchema } = require("typeorm");

module.exports.City = new EntitySchema({
  name: "City",
  tableName: "City",
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
    country_id: {
      type: "int",
    },
    is_active: {
      type: "boolean",
      default: true,
    },
    created_at: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    updated_at: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
      onUpdate: "CURRENT_TIMESTAMP",
    },
    lat: {
      type: "float",
    },
    long: {
      type: "float",
    },
  },
  relations: {
    country: {
      type: "many-to-one",
      target: "Country",
      joinColumn: { name: "country_id" },
    },
    airports: {
      type: "one-to-many",
      target: "Airport",
      inverseSide: "city",
    },
  },
});
