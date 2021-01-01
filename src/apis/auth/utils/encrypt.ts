import bcryptjs from 'bcryptjs';

export const encryptPassword = async (password: string) => {
    const salt = await bcryptjs.genSalt(10);
    const hashed = await bcryptjs.hash(password, salt);
    return hashed;
};

export const comparePassword = async (password: string, encryptPassword: string) => {
    const matchPassword = await bcryptjs.compare(password, encryptPassword);
    return matchPassword;
};
