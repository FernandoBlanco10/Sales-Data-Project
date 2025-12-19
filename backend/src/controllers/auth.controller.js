import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';

export const register = async (req, res) => {
    try {
        const { email, password } = req.body;

        const hashedPassword = await bycrypt.hash(password, 10);

        const user = await User.create({ email, password: hashedPassword });

        res.status(201).json({ message: 'User registered successfully', user});
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isValid = await bycrypt.compare(password, user.password);
        if (!isValid) return res.status(401).json({ message: 'Invalid password' });

        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        
        res.json({ token });
        
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};