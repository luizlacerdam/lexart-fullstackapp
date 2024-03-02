/* eslint-disable max-lines-per-function */
const userService = require('../services/user.service');
const { hashMd5Encrypt, hashMd5Compare } = require('../utils/md5');
const { tokenGenerator } = require('../utils/tokenRelated');

const createUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const userExists = await userService.getUserByEmail(email);
        if (userExists) {
            return res.status(409).json({ message: 'User already registered' });
        }
        const hashedPassword = hashMd5Encrypt(password);
        const newUser = await userService.createUser({ email, password: hashedPassword });
        const { id } = newUser;
        const token = tokenGenerator({ data: { id, email } });
        return res.status(201).json({ token, user: { id, email } });
    } catch (error) {
        next(error);
    }
};

const isBodyValid = (email, password) => email && password;

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!isBodyValid(email, password)) {
            return res.status(400).json({ message: 'Some required fields are missing.' });
          }
        const user = await userService.getUserByEmail(email);
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const isPasswordValid = hashMd5Compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const { id } = user;
        const token = tokenGenerator({ data: { id, email } });

        res.status(200).json({ token, user: { id, email } });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createUser,
    login,
};