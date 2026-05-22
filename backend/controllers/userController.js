const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// exports.register = (req, res) => {
//  const { fname, lname, email, password } = req.body;
//   const hashed = bcrypt.hashSync(password, 8);
//   const sql = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';

//   db.query(sql, [fname, lname, email, hashed], (err) => {
//     if (err) return res.status(500).json({ message: 'User already exists' });
//     res.json({ message: 'User registered successfully' });
//   });
// };

exports.getUser = (req, res) => {
  const { id } = req.body;
  const sql = 'SELECT * FROM users WHERE id = ?';
  db.query(sql, [id], (err, results) => {
    if (err || results.length === 0) return res.status(404).json({ message: 'User not found' });
    const user = results[0];
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: user });
  });
};


exports.updateUser = (req, res) => {
  const {
    id,
    first_name,
    last_name,
    email,
    mobile,
    designation,
    socialface,
    socialx,
    sociallinkedin,
    socialinstagram,
    city,
    country,
    zipcode,
    gstno,
  } = req.body;

  if (!id) return res.status(400).json({ message: "User ID is required" });

  const sql = `
    UPDATE users SET
      first_name = ?,
      last_name = ?,
      email = ?,
      mobile = ?,
      designation = ?,
      socialface = ?,
      socialx = ?,
      sociallinkedin = ?,
      socialinstagram = ?,
      city = ?,
      country = ?,
      zipcode = ?,
      gstno = ?
    WHERE id = ?
  `;
  const values = [
    first_name,
    last_name,
    email,
    mobile,
    designation,
    socialface,
    socialx,
    sociallinkedin,
    socialinstagram,
    city,
    country,
    zipcode,
    gstno,
    id,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating user:", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // Optional: fetch updated user and send back
    const getUserQuery = "SELECT * FROM users WHERE id = ?";
    db.query(getUserQuery, [id], (err, rows) => {
      if (err || rows.length === 0) {
        return res.status(500).json({ message: "Failed to retrieve updated user" });
      }
      const token = jwt.sign({ id: rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1d' });
      res.json({ token, user: rows[0], message: "User updated", });
    });
  });
};
