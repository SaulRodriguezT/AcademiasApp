import { pool } from "../db.js";

const getAcademias = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM academias");
  console.log(result);
  res.json(result);
};

const getDirectorAcademia = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM directores WHERE academia_id = ?", [req.params.academia_id]);
    console.log(result);
    res.json(result)
}

const getAlumnosAcademia = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM alumnos WHERE academia_id = ?", [req.params.academia_id]);
    console.log(result);
    res.json(result)
}

const getMaestrosAcademia = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM maestros WHERE academia_id = ?", [req.params.academia_id]);
    console.log(result);
    res.json(result)
}

const getDirectiores = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM directores");
  console.log(result);
  res.json(result);
};

const getDirectorNumEmpleado = async (req, res) => {
    const [result] = await pool.query(
      "SELECT * FROM directores WHERE num_empleado = ?",
      [req.params.num_empleado]
    );
    console.log(result);
    res.json(result[0]);
  };
  
  const getDirectorNombre = async (req, res) => {
    const [result] = await pool.query(
      "SELECT * FROM directores WHERE nombre = ? AND apellido = ?",
      [req.params.nombre, req.params.apellido]
    );
    console.log(result);
    res.json(result[0]);
  };

const getMaestros = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM maestros");
  console.log(result);
  res.json(result);
};

const getMaestroNumEmpleado = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM maestros WHERE num_empleado = ?",
    [req.params.num_empleado]
  );
  console.log(result);
  res.json(result[0]);
};

const getMaestroNombre = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM maestros WHERE nombre = ? AND apellido = ?",
    [req.params.nombre, req.params.apellido]
  );
  console.log(result);
  res.json(result[0]);
};

const getEstudiantes = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM alumnos");
  console.log(result);
  res.json(result);
};

const getEstudianteMatricula = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM alumnos WHERE matricula = ?",
    [req.params.matricula]
  );
  console.log(result);
  res.json(result);
};

const getEstudianteNombre = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM alumnos WHERE nombre = ? AND apellido = ?",
    [req.params.nombre, req.params.apellido]
  );
  console.log(result);
  res.json(result);
};

const postEstudiante = async (req, res) => {
  const { nombre, apellido, academia_id, correo, matricula } = req.body;
  const [result] = await pool.query(
    "INSERT INTO alumnos (nombre, apellido, academia_id, correo, matricula) values(?,?,?,?,?)",
    [nombre, apellido, academia_id, correo, matricula]
  );
  console.log(result);
  res.json({
    id: result.insertId,
    nombre,
    apellido,
    academia_id,
    correo,
    matricula,
  });
};

export {
  getAcademias,
  getDirectorAcademia,
  getMaestrosAcademia,
  getAlumnosAcademia,
  getDirectiores,
  getDirectorNumEmpleado,
  getDirectorNombre,
  getMaestros,
  getMaestroNumEmpleado,
  getMaestroNombre,
  getEstudiantes,
  getEstudianteNombre,
  getEstudianteMatricula,
  postEstudiante,
};
