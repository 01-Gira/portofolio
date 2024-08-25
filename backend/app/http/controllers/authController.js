const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../../models');

// Login pengguna
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Buat token JWT
    const accessToken = jwt.sign(
      { id: user.id, email: user.email },
      process.env.ACCESS_TOKEN_SECRET, // Mengambil secret dari .env
      { expiresIn: process.env.JWT_EXPIRES_IN } // Mengambil waktu kadaluarsa dari .env
    );

    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Registrasi pengguna
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, email, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
