import { Router } from "express";
import {
  getAcademias,
  getDirectiores,
  getDirectorNumEmpleado,
  getDirectorNombre,
  getMaestroNombre,
  getMaestroNumEmpleado,
  getEstudianteMatricula,
  getEstudianteNombre,
  getEstudiantes,
  getMaestros,
  postEstudiante,
  getDirectorAcademia,
  getMaestrosAcademia,
  getAlumnosAcademia,
} from "../controllers/controllers.js";

const router = Router();

router.get("/academias", getAcademias);

router.get("/academia/director", getDirectorAcademia);

router.get("/academia/maestros", getMaestrosAcademia);

router.get("/academia/alumnos", getAlumnosAcademia);

router.get("/directores", getDirectiores);

router.get("/director/:num_empleado", getDirectorNumEmpleado);

router.get("/director/:nombre/:apellido", getDirectorNombre);

router.get("/maestros", getMaestros);

router.get("/maestro/:num_empleado", getMaestroNumEmpleado);

router.get("/maestro/:nombre/:apellido", getMaestroNombre);

router.get("/estudiantes", getEstudiantes);

router.post("/add/estudiante", postEstudiante);

router.get("/estudiante/:matricula", getEstudianteMatricula);

router.get("/estudiante/:nombre/:apellido", getEstudianteNombre);

export default router;
