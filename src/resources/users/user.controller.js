const { createUser, getUsers, updateUser, getUser, deleteUser, signIn, getUserByEmail } = require("./user.service");
const createUserSchema = require("./validations/createUserValidation");
const editUserSchema = require("./validations/updateUserValidation");

const createAccountController = async(req, res) => {
    const { value, error } = createUserSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ code: 400, message: error.message });
    }

    try {

        const user = await getUserByEmail(value.email);

        if (user) {
            return res.status(409).json({ status: 409, message: 'User already exists' });
        }

        await createUser(value);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ code: 500, message: 'Unknown server error.' });
    }

    return res.status(201).json({ code: 200, message: 'User created successfully' });

}

const getUsersController = async(req, res) => {
    try {
        const users = await getUsers();

        return res.status(200).json({ status: 200, body: users });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ code: 500, message: 'Unknown server error.' });
    }
}

const updateUserController = async(req, res) => {

    const { value, error } = editUserSchema.validate(req.body);
    const { id } = req.params;


    if (error) {
        return res.status(400).json({ code: 400, message: error.message });
    }

    try {
        await getUser(id);
    } catch {
        return res.status(404).json({ code: 404, message: 'User not found' });
    }

    try {
        await updateUser(id, value);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ code: 500, message: 'Unknown server error.' });
    }


    return res.status(200).json({ status: 200, message: 'User updated successfully' })
}

const deleteUserController = async(req, res) => {
    const { id } = req.params;

    try {
        await getUser(id);
    } catch {
        return res.status(404).json({ code: 404, message: 'User not found' });
    }

    try {
        await deleteUser(id);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ code: 500, message: 'Unknown server error.' });
    }

    return res.status(200).json({ status: 200, message: 'User deleted successfully' })
}

const signInController = async(req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ status: 400, message: 'Bad request' });
    }

    try {

        const token = await signIn(email, password);

        return res.status(200).json({ status: 200, token });

    } catch (e) {

        switch (e.message) {
            case 'User not found':
                return res.status(404).json({ status: 404, message: 'User was not found' });
            case 'Password doesnt match':
                return res.status(403).json({ status: 404, message: 'Bad credentials, try again.' });
            default:
                console.error(e);
                return res.status(500).json({ status: 500, message: 'Unexpected server error' });
        }

    }


}

module.exports = {
    createAccountController,
    getUsersController,
    updateUserController,
    deleteUserController,
    signInController
}