
// // ./routes/index.js
// const express = require('express');
// const router = express.Router();
// const User = require('../models/user');
// require('../models/db');

// // Get all users
// router.get('/', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.render('index', { users });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });

// // Search user by name or email
// router.get('/search', async (req, res) => {
//   try {
//     const query = req.query.q;
//     const users = await User.find({
//       $or: [
//         { name: { $regex: query, $options: 'i' } },
//         { email: { $regex: query, $options: 'i' } }
//       ]
//     });
//     res.render('index', { users });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });

// // Filter by age range
// router.get('/filter', async (req, res) => {
//   try {
//     const min = parseInt(req.query.min) || 0;
//     const max = parseInt(req.query.max) || 100;
//     const users = await User.find({ age: { $gte: min, $lte: max } });
//     res.render('index', { users });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });

// // Create user
// router.post('/add', async (req, res) => {
//   try {
//     const { name, email, age } = req.body;
//     const newUser = new User({ name, email, age });
//     await newUser.save();
//     res.redirect('/');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });

// // Update user
// router.post('/update/:id', async (req, res) => {
//   try {
//     const { name, email, age } = req.body;
//     await User.findByIdAndUpdate(req.params.id, { name, email, age });
//     res.redirect('/');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });

// // Delete user
// router.get('/delete/:id', async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.redirect('/');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });

// module.exports = router;

