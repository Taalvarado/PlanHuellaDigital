// src/services/nocodb.js

// Reemplaza estas constantes con las credenciales de tu proyecto en NocoDB Cloud
const NOCODB_API_URL = 'https://app.nocodb.com/api/v1/db/data/v1/p_plan_huella/evaluaciones';
const NOCODB_TOKEN = 'YOUR_NOCODB_API_TOKEN';

/**
 * Registra el progreso o respuesta de un estudiante en NocoDB Cloud.
 * @param {Object} datosEstudiante - Objeto con nombre, grado y puntaje/respuestas
 */
export async function guardarEvaluacionEstudiante(datosEstudiante) {
  try {
    const response = await fetch(NOCODB_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xc-token': NOCODB_TOKEN,
      },
      body: JSON.stringify(datosEstudiante),
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Fallo en la persistencia con NocoDB:', error);
    return { success: false, error: error.message };
  } finally {
    console.log('Operación de persistencia asincrónica finalizada.');
  }
}