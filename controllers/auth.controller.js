const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'secret_key', { expiresIn: '1h' });
    res.status(200).json({ token });
};

// Quick register for testing
const register = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({ email: req.body.email, password: hashedPassword });
    res.status(201).json(user);
};

module.exports = { login, register };