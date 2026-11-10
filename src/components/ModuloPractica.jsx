// src/components/ModuloPractica.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { KeyRound, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function ModuloPractica() {
  const [password, setPassword] = useState('');
  
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
    <section style={{ maxWidth: '1100px', margin: '0 auto 3rem', padding: '0 1.5rem' }}>
      <div className="digilab-card" style={{ padding: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
          <KeyRound color="#00f2fe" size={30} />
          <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#f8fafc' }}>
            Simulador Interactivo: Fortaleza de Contraseñas
          </h2>
        </div>

        {/* Caja de Analogía Didáctica */}
        <div style={{
          background: 'rgba(0, 242, 254, 0.05)',
          borderLeft: '4px solid #00f2fe',
          borderTop: '1px solid rgba(0, 242, 254, 0.1)',
          borderRight: '1px solid rgba(0, 242, 254, 0.1)',
          borderBottom: '1px solid rgba(0, 242, 254, 0.1)',
          padding: '1.25rem 1.5rem',
          borderRadius: '0 14px 14px 0',
          marginBottom: '1.8rem'
        }}>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.7 }}>
            <strong style={{ color: '#00f2fe' }}>💡 Analogía Didáctica (Transposición):</strong> Tu contraseña en internet es como la llave de la puerta principal de tu casa. Si usas una llave de juguete (como <em>"123456"</em> o <em>"contraseña"</em>), cualquiera puede entrar fácilmente. Una contraseña robusta es como una combinación blindada que protege tus espacios privados.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <label style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e2e8f0' }}>
            Prueba escribiendo una contraseña de prueba:
          </label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ej. MiClaveS3gura!"
            style={{
              padding: '1rem 1.2rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: '#070b19',
              color: '#ffffff',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
          />

          <div style={{ width: '100%', background: '#1e293b', height: '10px', borderRadius: '5px', overflow: 'hidden' }}>
            <motion.div 
              animate={{ width: estadoPwd.ancho, backgroundColor: estadoPwd.color }}
              transition={{ duration: 0.3 }}
              style={{ height: '100%' }}
            />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: estadoPwd.color, fontSize: '1rem' }}>
            {password.length >= 10 ? <CheckCircle2 size={20} /> : <AlertTriangle size={20} />}
            <span>Estado: {estadoPwd.nivel}</span>
          </div>
        </div>
      </div>
    </section>
  );
}