export const mysql = {
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
};

Object.entries(mysql).forEach(([key, value]) => {
    if (value === undefined) {
        throw new Error(`env ${key} is undefined!`);
    }
});
