// src/components/EvaluacionForm.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { guardarEvaluacionEstudiante } from '../services/nocodb';

export default function EvaluacionForm() {
  const [nombre, setNombre] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultadoMensaje, setResultadoMensaje] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre.trim() || !respuesta.trim()) {
      setResultadoMensaje({ tipo: 'error', texto: 'Por favor completa todos los campos.' });
      return;
    }

    setLoading(true);
    setResultadoMensaje(null);

    const datos = {
      nombre_estudiante: nombre,
      respuesta_quiz: respuesta,
      fecha: new Date().toISOString()
    };

    const res = await guardarEvaluacionEstudiante(datos);
    setLoading(false);

    if (res.success) {
      setResultadoMensaje({ tipo: 'success', texto: '¡Evaluación registrada exitosamente en NocoDB Cloud!' });
      setNombre('');
      setRespuesta('');
    } else {
      setResultadoMensaje({ tipo: 'error', texto: 'Error al registrar: ' + res.error });
    }
  };

  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto 3rem', padding: '0 1.5rem' }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '20px',
        border: '1px solid #e2e8f0',
        padding: '2rem',
        boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Send color="#f64f59" size={26} />
          <h2 style={{ margin: 0, fontSize: '1.4rem', color: '#0f172a' }}>
            Evaluación y Registro de Actividad (NocoDB)
          </h2>
        </div>
        <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
          Responde a la pregunta final del módulo y envía tu resultado a la base de datos central en la nube.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>
              Nombre del Estudiante:
            </label>
            <input 
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej. Juan Pérez"
              style={{
                width: '100%',
                padding: '0.85rem 1rem',
                borderRadius: '10px',
                border: '1px solid #cbd5e1',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>
              ¿Por qué es importante configurar la autenticación de dos pasos (2FA) en tus cuentas?
            </label>
            <textarea 
              rows="3"
              value={respuesta}
              onChange={(e) => setRespuesta(e.target.value)}
              placeholder="Escribe tu reflexión aquí..."
              style={{
                width: '100%',
                padding: '0.85rem 1rem',
                borderRadius: '10px',
                border: '1px solid #cbd5e1',
                fontSize: '1rem',
                outline: 'none',
                resize: 'vertical'
              }}
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={loading}
            style={{
              background: 'linear-gradient(135deg, #0b132b 0%, #1c2541 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '0.95rem 1.5rem',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 12px rgba(11, 19, 43, 0.2)'
            }}
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={18} />}
            {loading ? 'Enviando a NocoDB...' : 'Enviar Evaluación'}
          </motion.button>

          {resultadoMensaje && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                padding: '1rem',
                borderRadius: '10px',
                background: resultadoMensaje.tipo === 'success' ? '#ecfdf5' : '#fef2f2',
                color: resultadoMensaje.tipo === 'success' ? '#065f46' : '#991b1b',
                border: `1px solid ${resultadoMensaje.tipo === 'success' ? '#a7f3d0' : '#fecaca'}`,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.95rem',
                fontWeight: 500
              }}
            >
              {resultadoMensaje.tipo === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
              <span>{resultadoMensaje.texto}</span>
            </motion.div>
          )}
        </form>
      </div>
    </section>
  );
}