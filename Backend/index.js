import indexRoutes from './routes/index.routes.js'
import express from 'express'
import cors from 'cors'

const app = express();
const port = 3001;

// settings

app.use(cors())
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(indexRoutes)

app.get('/', (req, res) => {
    console.log("Iniciaron")
    res.json({message: "OK"})
});

app.listen(port, () => {
    console.log(`App escuchando en http://localhost:${port}`)
}); 