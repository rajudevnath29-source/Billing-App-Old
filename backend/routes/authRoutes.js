const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const itemController = require('../controllers/itemController');
const userController = require('../controllers/userController');
const upload = require('../middleware/upload'); // multer middleware
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.post('/auth/user', userController.getUser);
router.put('/auth/update-user', userController.updateUser);
// router.post('/item/add-item', itemController.addItem);
router.post('/item/add-item', upload.single('image'), itemController.addItem);
router.get('/item/view-items', itemController.getItems);
router.delete('/item/delete/:id', itemController.delItems);


module.exports = router;







// const express = require('express');
// const router = express.Router();
// const itemController = require('../controllers/itemController');
// const multer = require('multer');

// // File upload setup
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     const filename = `${Date.now()}-${file.originalname}`;
//     cb(null, filename);
//   },
// });

// const upload = multer({ storage });

// router.post('/add-item', upload.single('image'), itemController.addItem);

// module.exports = router;
