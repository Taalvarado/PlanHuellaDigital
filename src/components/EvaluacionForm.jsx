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
    <section style={{ maxWidth: '1100px', margin: '0 auto 3.5rem', padding: '0 1.5rem' }}>
      <div className="digilab-card" style={{ padding: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Send color="#f64f59" size={26} />
          <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#f8fafc' }}>
            Evaluación y Registro de Actividad (NocoDB)
          </h2>
        </div>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.8rem' }}>
          Responde a la pregunta final del módulo y envía tu resultado a la base de datos central en la nube.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.5rem' }}>
              Nombre del Estudiante:
            </label>
            <input 
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej. Juan Pérez"
              style={{
                width: '100%',
                padding: '1rem 1.2rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: '#070b19',
                color: '#ffffff',
                fontSize: '1rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.5rem' }}>
              ¿Por qué es importante configurar la autenticación de dos pasos (2FA) en tus cuentas?
            </label>
            <textarea 
              rows="3"
              value={respuesta}
              onChange={(e) => setRespuesta(e.target.value)}
              placeholder="Escribe tu reflexión aquí..."
              style={{
                width: '100%',
                padding: '1rem 1.2rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: '#070b19',
                color: '#ffffff',
                fontSize: '1rem',
                outline: 'none',
                resize: 'vertical',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={loading}
            style={{
              background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
              color: '#070b19',
              border: 'none',
              padding: '1rem 1.5rem',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 20px rgba(0, 242, 254, 0.3)'
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
                padding: '1rem 1.2rem',
                borderRadius: '12px',
                background: resultadoMensaje.tipo === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(246, 79, 89, 0.1)',
                color: resultadoMensaje.tipo === 'success' ? '#34d399' : '#f87171',
                border: `1px solid ${resultadoMensaje.tipo === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(246, 79, 89, 0.3)'}`,
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