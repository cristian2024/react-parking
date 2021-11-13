import axios from 'axios';

// configuracion inicial de axios, si se quiere usar axios, porfavor usar esta implementacion
export default axios.create({
  baseURL: `http://localhost:4500/api/`
});