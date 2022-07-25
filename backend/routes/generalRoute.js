const router = require('express').Router();
const db = require('../db');

router.get('/adminAuth', async (req, res) => {
  try {
    const admin = await db.query('select * from admin');
    console.log(admin);
    res.status(200).json({
      status: 'success',
      admin: admin.rows[0],
    });
  } catch (err) {
    console.log(err);
  }
});

router.get('/getDepartments', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM department');

    res.status(200).json({
      status: 'success',
      results: result.rows.length,
      department: result.rows,
    });
  } catch (err) {
    res.status(500).json({
      status: 'failed',
      message: err.message,
    });
  }
});

module.exports = router;
