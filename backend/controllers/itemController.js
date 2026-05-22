const db = require('../config/db');
const path = require('path');
const fs = require('fs');

exports.addItem = (req, res) => {
    console.log(req.body);
    // return req.body;
  const {
    itemName,
    unit,
    salesPrice,
    purchasePrice,
    openingStock,
    asOfDate,
    lowStockAlert
  } = req.body;

  let imagePath = null;
  if (req.file) {
    imagePath = `/uploads/${req.file.filename}`;
  }

  const sql = `
    INSERT INTO items (
      item_name, unit, sales_price, purchase_price,
      opening_stock, as_of_date, low_stock_alert, image
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    itemName,
    unit,
    salesPrice,
    purchasePrice,
    openingStock === "" ? 0 : openingStock,
    asOfDate,
    lowStockAlert === true || lowStockAlert === "true" ? 1 : 0,
    imagePath
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ message: "Failed to add item" });
    }
    res.json({ message: "Item added successfully", id: result.insertId });
  });
};

exports.getItems = (req, res) => {
  const { id } = req.params;

  if (id) {
    // Fetch particular item
    const sql = 'SELECT * FROM items WHERE id = ?';
    db.query(sql, [id], (err, results) => {
      if (err) return res.status(500).json({ message: 'Database error', error: err });
      if (results.length === 0) return res.status(404).json({ message: 'Item not found' });
      return res.json(results[0]);
    });
  } else {
    // Fetch all items
    const sql = 'SELECT * FROM items';
    db.query(sql, (err, results) => {
      if (err) return res.status(500).json({ message: 'Database error', error: err });
      return res.json(results);
    });
  }
};

exports.delItems = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'Item ID is required' });
  }

  // Step 1: Check if item exists and get image (if any)
  const selectSql = 'SELECT image FROM items WHERE id = ?';
  db.query(selectSql, [id], (selectErr, selectResults) => {
    if (selectErr) {
      console.error("Error finding item:", selectErr);
      return res.status(500).json({ message: 'Failed to find item' });
    }

    if (selectResults.length === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }

    const imagePath = selectResults[0].image;

    // Step 2: Delete item from DB
    const deleteSql = 'DELETE FROM items WHERE id = ?';
    db.query(deleteSql, [id], (deleteErr, result) => {
      if (deleteErr) {
        console.error("Delete error:", deleteErr);
        return res.status(500).json({ message: 'Failed to delete item' });
      }

      // Step 3: If image exists, delete file
      if (imagePath) {
        const fullPath = path.join(__dirname, '..', imagePath);
        fs.unlink(fullPath, (unlinkErr) => {
          if (unlinkErr) {
            console.warn("Failed to delete image file:", unlinkErr.message);
            // Don't fail the request, just log the error
          }
        });
      }

      return res.json({ message: 'Item deleted successfully' });
    });
  });
};

