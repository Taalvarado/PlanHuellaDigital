// src/components/ObjetivoCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, BookOpen } from 'lucide-react';

export default function ObjetivoCard() {
  const objetivos = [
    {
      icon: <BookOpen color="#00f2fe" size={24} />,
      titulo: "1. Módulo Teórico",
      descripcion: "Comprende qué es tu huella digital y por qué cada acción en internet deja un registro imborrable."
    },
    {
      icon: <Target color="#4facfe" size={24} />,
      titulo: "2. Módulo Práctico",
      descripcion: "Interactúa con simuladores reales de contraseñas seguras y aprende a detectar correos de Phishing."
    },
    {
      icon: <Compass color="#f64f59" size={24} />,
      titulo: "3. Transposición Didáctica",
      descripcion: "Usamos analogías de la vida cotidiana para entender conceptos complejos de seguridad web sin tecnicismos."
    }
  ];

  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto 2.5rem', padding: '0 1.5rem' }}>
      <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '1.25rem', fontWeight: 700 }}>
        Ruta de Aprendizaje (Ciclo Básico)
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {objetivos.map((obj, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="tarjeta-digilab"
            style={{
              padding: '1.75rem',
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 10px 20px -5px rgba(0,0,0,0.05)'
            }}
          >
            <div style={{ marginBottom: '1rem', background: '#f8fafc', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {obj.icon}
            </div>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.15rem', color: '#1e293b' }}>{obj.titulo}</h3>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem', lineHeight: 1.5 }}>{obj.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}