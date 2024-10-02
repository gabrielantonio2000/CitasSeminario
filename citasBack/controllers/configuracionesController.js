import { SP_HORARIO_LABORAL } from "../utils/sp.js";
import { ejecutarSP } from "../data/dbConexion.js";

export const getHorarioLaboral = async (req, res, next) => {
  try {
    const horario = await ejecutarSP(SP_HORARIO_LABORAL);
    res.json({
      resultado: JSON.parse(horario[0]?.valor),
      ocurrioError: false,
      mensaje: "exito",
    });
  } catch (err) {
    console.log(err);
    const error = new Error("Error interno del servidor");
    next(error);
  }
};
