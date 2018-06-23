
exports.up = knex => {
    return knex.schema.createTable("cohorts", table => {
        table.increments("id");
        table.string("team_name");
        table.text("members_name");
        table.string("logoUrl");
      });
  
};

exports.down = knex => {
    return knex.schema.dropTable("cohorts");
};
