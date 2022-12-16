
export const config = {
    database: {
        mongoDBURI: process.env.MONGO_DB_URI
    },
    applicationConfig: {
        name: 'IdeaPad',
        env: process.env.NODE_ENV,
        port: process.env.PORT,
    },
}
