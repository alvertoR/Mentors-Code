import express  from 'express';
import morgan   from 'morgan';
import mongoose from 'mongoose';
import cors     from 'cors';
import path from "path";

//rutas
import rutasUsuarios from './rutes/usuario';
import rutasVideos   from './rutes/videos';

const app = express();

//Inicio conexión  a la base de datos local
//const uri     = 'mongodb://localhost:27017/mentorscode';

//inicio conexión a la base de datos en la nube
const uri     = 'mongodb+srv://paquito_lorito:paquito123@mentorscode-x9mtu.mongodb.net/mentorscode?retryWrites=true&w=majority';

const options = {
    useNewUrlParser:    true,
    useCreateIndex:     true,
    useUnifiedTopology: true
};



mongoose.connect(uri, options)
.then(() => {
    console.log('Entramos a la base de datos'),
    err => {
        console.log(err);
    }
});

//Fin conexión a la base de datos

//Middleware

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/mentorscode/user', rutasUsuarios);
app.use('/mentorscode/video', rutasVideos);

app.use(express.static(path.join(__dirname,'public')));

//Iniciar servidor
app.set('puerto', process.env.PORT || 3000);

app.listen(app.get('puerto'), () => {
    console.log('Servidor corriendo, puerto : '+app.get('puerto'));
});