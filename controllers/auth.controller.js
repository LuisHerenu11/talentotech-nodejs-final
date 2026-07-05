import jwt from 'jsonwebtoken';

export const loginController = async (req, res) => {
    try {
        // Recibe las credenciales en el cuerpo (body) de la petición
        const { username, password } = req.body;

        // Validamos que se envíen los datos
        if (!username || !password) {
            return res.status(400).json({ error: 'Faltan credenciales (username, password)' });
        }

        // Simulación de validación de identidad (Usuario)
        if (username === 'admin@gmail.com' && password === '123456') {
            
            // Si son válidas, generamos el Bearer token
            // Usa JWT_SECRET del archivo .env
            const token = jwt.sign(
                { username: 'admin@gmail.com', role: 'admin' }, 
                process.env.JWT_SECRET, 
                { expiresIn: '20h' } // El token expira en 2 horas
            );

            return res.status(200).json({ 
                message: 'Autenticación exitosa',
                token: `Bearer ${token}` 
            });
        } else {
            // Error 401 ante errores de autenticación
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

    } catch (error) {
        // Código de estado 500 cuando las peticiones contienen errores imprevistos
        return res.status(500).json({ error: 'Error interno en el servidor durante el login' });
    }
};