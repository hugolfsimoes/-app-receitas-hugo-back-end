const db = require('./connection');

const getAllUsers = async () => {
  const { rows } = await db.query("SELECT * FROM public.users");
  return rows;
};

module.exports = { getAllUsers };