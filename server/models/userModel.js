const db = require('./connection');

db.connect();

const getAllUsers = async () => {
  const { rows } = await db.query("SELECT name, email, role, date  FROM public.users");
  return rows;
};

const getUserByEmail = async (email) => {
  const result =
    await db.query(`SELECT email, password FROM users WHERE email = $1`,
      [email]);
  return result;
};

const createNewUser = async ({ name, email, passwordHash }, role = 'user') => {
  try {
    const result = await db.query(`INSERT INTO "users" (name, email, password, role)
     VALUES ($1, $2, $3, $4)`,
      [name, email, passwordHash, role]);
    return true;
  } catch (error) {
    console.log(error.stack);
    return false;
  }
};

const login = async ({ email, passwordHash }) => {
  try {
    const result = await db.query(`SELECT name, email FROM users WHERE email = $1 AND password = $2`, [email]);
    console.log(result);
    return true;
  } catch (error) {
    console.log(error.stack);
    return false;
  }
};

module.exports = { getAllUsers, createNewUser, login, getUserByEmail };