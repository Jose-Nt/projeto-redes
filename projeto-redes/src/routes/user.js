const express = require('express');
const router = express.Router();
const db = require('../db/db'); 

// ROTA: Realizar login do usuário
router.post('/check-email', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'E-mail e senha são obrigatórios.' });
    }

    try {
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

        if (rows.length > 0) {
            const user = rows[0];

            if (user.password === password) {
                req.session.email = email;
                return res.json({ exists: true, validPassword: true });
            } else {
                return res.json({ exists: true, validPassword: false });
            }
        } else {
            return res.json({ exists: false });
        }
    } catch (error) {
        console.error('Erro ao verificar usuário:', error);
        res.status(500).json({ error: 'Erro ao verificar usuário.' });
    }
});

module.exports = router; 