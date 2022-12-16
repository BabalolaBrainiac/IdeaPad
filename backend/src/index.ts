import app from './app'
const port = process.env.PORT

const server = app.listen(port, () => {
    console.log('DB Connection established')
    return console.log(`Express is listening at http://localhost:${port}`);

});

process.once('SIGUSR2', function () {
    server.close(function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});

