import express from 'express'

const app = express()

app.get("/", (req, res) => {
    res.send('Server is ready.')
});

// Array of 2 Jokes

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Joke One",
            content: "This is first joke."
        },
        {
            id: 2,
            title: "Joke Two",
            content: "This is second joke."
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});