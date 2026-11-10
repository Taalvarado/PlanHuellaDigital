// src/components/ModuloPractica.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { KeyRound, ShieldAlert, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function ModuloPractica() {
  const [password, setPassword] = useState('');
  
  // Lógica simple para evaluar fortaleza en tiempo real
  const evaluarPassword = (val) => {
    if (val.length === 0) return { nivel: 'Escribe una contraseña...', color: '#64748b', ancho: '0%' };
    if (val.length < 6) return { nivel: 'Débil (Muy corta)', color: '#f64f59', ancho: '30%' };
    if (val.length < 10 || !/[A-Z]/.test(val) || !/[0-9]/.test(val)) {
      return { nivel: 'Moderada (Agrega mayúsculas y números)', color: '#fbbf24', ancho: '70%' };
    }
    return { nivel: '¡Fuerte y Segura!', color: '#10b981', ancho: '100%' };
  };

  const estadoPwd = evaluarPassword(password);

  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto 2.5rem', padding: '0 1.5rem' }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '20px',
        border: '1px solid #e2e8f0',
        padding: '2rem',
        boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <KeyRound color="#4facfe" size={28} />
          <h2 style={{ margin: 0, fontSize: '1.4rem', color: '#0f172a' }}>
            Simulador Interactivo: Fortaleza de Contraseñas
          </h2>
        </div>

        {/* Transposición Pedagógica exigida por la rúbrica */}
        <div style={{
          background: '#f8fafc',
          borderLeft: '4px solid #00f2fe',
          padding: '1rem 1.25rem',
          borderRadius: '0 12px 12px 0',
          marginBottom: '1.5rem'
        }}>
          <p style={{ margin: 0, fontSize: '0.92rem', color: '#334155', lineHeight: 1.6 }}>
            <strong>💡 Analogía Didáctica (Transposición):</strong> Tu contraseña en internet es como la llave de la puerta principal de tu casa. Si usas una llave de juguete (como <em>"123456"</em> o <em>"contraseña"</em>), cualquiera puede entrar fácilmente. Una contraseña robusta es como una combinación blindada que protege tus espacios privados.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>
            Prueba escribiendo una contraseña de prueba:
          </label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ej. MiClaveS3gura!"
            style={{
              padding: '0.85rem 1rem',
              borderRadius: '10px',
              border: '1px solid #cbd5e1',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
          />

          {/* Barra de progreso visual dinámica */}
          <div style={{ width: '100%', background: '#e2e8f0', height: '10px', borderRadius: '5px', overflow: 'hidden' }}>
            <motion.div 
              animate={{ width: estadoPwd.ancho, backgroundColor: estadoPwd.color }}
              transition={{ duration: 0.3 }}
              style={{ height: '100%' }}
            />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: estadoPwd.color, fontSize: '0.95rem' }}>
            {password.length >= 10 ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
            <span>Estado: {estadoPwd.nivel}</span>
          </div>
        </div>
      </div>
    </section>
  );
}