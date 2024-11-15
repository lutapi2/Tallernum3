// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    // Validar formulario de estudiantes
    document.getElementById("form-estudiantes").addEventListener("submit", function (e) {
      e.preventDefault();
      
      const idEstudiante = document.getElementById("id-estudiante").value;
      const nombreEstudiante = document.getElementById("nombre-estudiante").value;
      const emailEstudiante = document.getElementById("email-estudiante").value;
      
      if (!idEstudiante || !nombreEstudiante || !emailEstudiante) {
        alert("Todos los campos obligatorios deben ser completados.");
        return;
      }
  
      alert("Estudiante registrado correctamente.");
    });
  

    document.getElementById("form-programas").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const codigoPrograma = document.getElementById("codigo-programa").value;
      const nombrePrograma = document.getElementById("nombre-programa").value;
      const duracionPrograma = document.getElementById("duracion-programa").value;
  
      if (!codigoPrograma || !nombrePrograma || !duracionPrograma) {
        alert("Todos los campos obligatorios deben ser completados.");
        return;
      }
  
      alert("Programa registrado correctamente.");
    });
  
   
    document.getElementById("form-matriculas").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const idMatricula = document.getElementById("id-matricula").value;
      const idEstudianteMatricula = document.getElementById("id-estudiante-matricula").value;
      const codigoProgramaMatricula = document.getElementById("codigo-programa-matricula").value;
  
      if (!idMatricula || !idEstudianteMatricula || !codigoProgramaMatricula) {
        alert("Todos los campos obligatorios deben ser completados.");
        return;
      }
  
      alert("Matrícula registrada correctamente.");
    });
  });
  