/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("recipes").del();
  await knex("recipes").insert([
    {
      recipe_id: 1,
      recipe_name: "カレー",
      recipe_ingredien: "鶏もも肉,ジャガイモ,にんじん,たまねぎ",
    },
    {
      recipe_id: 2,
      recipe_name: "ハンバーグ",
      recipe_ingredien: "合挽肉,たまねぎ, 卵, パン粉",
    },
  ]);
};