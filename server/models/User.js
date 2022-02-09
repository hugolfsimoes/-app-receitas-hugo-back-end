const db = require('./connection');

const getAllUsers = async () => {
  const { rows } = await db.query("SELECT * FROM public.users");
  return rows;
};

const createNewUser = async ({ name, email, password }, role = 'user') => {
  console.log(name, email, password);
  const result = await
    db.query(`INSERT INTO users(user_name, user_email, user_password, role) VALUES (${name}, ${email}, ${password}, ${role})`);
  console.log(result);
  return result;
};

module.exports = { getAllUsers, createNewUser };