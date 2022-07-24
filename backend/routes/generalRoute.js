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

module.exports = router;
