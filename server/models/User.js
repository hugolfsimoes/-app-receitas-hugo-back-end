const db = require('./connection');

db.connect();

const getAllUsers = async () => {
  const { rows } = await db.query("SELECT * FROM public.users");
  return rows;
};

const createNewUser = async ({ name, email, password }, role = 'user') => {

  try {
    const result = await db.query(`INSERT INTO "users" (name, email, password, role)
     VALUES ($1, $2, $3, $4)`,
      [name, email, password, role]);
    return true;
  } catch (error) {
    console.log(error.stack);
    return false;
  }
};

module.exports = { getAllUsers, createNewUser };