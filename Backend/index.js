import { PORT } from "./config.js";
//los acabo de agregar
import express from "express";
import cors from "cors";
import morgan from "morgan";




app.listen(PORT, console.log(`server ejecutandose en el puerto ${PORT}`));
