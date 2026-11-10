// src/components/ObjetivoCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, BookOpen } from 'lucide-react';

export default function ObjetivoCard({ moduloActivo, setModuloActivo }) {
  const objetivos = [
    {
      id: 'teoria',
      icon: <BookOpen color="#00f2fe" size={26} />,
      titulo: "1. Módulo Teórico",
      descripcion: "Comprende qué es tu huella digital y por qué cada acción en internet deja un registro imborrable."
    },
    {
      id: 'practica',
      icon: <Target color="#4facfe" size={26} />,
      titulo: "2. Módulo Práctico",
      descripcion: "Interactúa con simuladores reales de contraseñas seguras y aprende a detectar correos de Phishing."
    },
    {
      id: 'evaluacion',
      icon: <Compass color="#f64f59" size={26} />,
      titulo: "3. Evaluación y Registro",
      descripcion: "Envía tus respuestas y reflexiones directamente a la base de datos central en NocoDB Cloud."
    }
  ];

  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto 3rem', padding: '0 1.5rem' }}>
      <h2 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '1.5rem', fontWeight: 800 }}>
        Ruta de Aprendizaje Interactiva
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {objetivos.map((obj) => {
          const isActive = moduloActivo === obj.id;
          return (
            <motion.div
              key={obj.id}
              onClick={() => setModuloActivo(obj.id)}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="digilab-card"
              style={{
                padding: '2rem',
                cursor: 'pointer',
                borderColor: isActive ? '#00f2fe' : 'rgba(0, 242, 254, 0.2)',
                background: isActive 
                  ? 'linear-gradient(145deg, rgba(0, 242, 254, 0.12) 0%, rgba(14, 22, 40, 0.95) 100%)' 
                  : 'linear-gradient(145deg, rgba(14, 22, 40, 0.8) 0%, rgba(7, 11, 25, 0.9) 100%)',
                boxShadow: isActive ? '0 0 25px rgba(0, 242, 254, 0.25)' : '0 15px 35px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div style={{ 
                marginBottom: '1.2rem', 
                background: isActive ? 'rgba(0, 242, 254, 0.2)' : 'rgba(0, 242, 254, 0.08)', 
                width: '52px', 
                height: '52px', 
                borderRadius: '14px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                border: '1px solid rgba(0, 242, 254, 0.3)'
              }}>
                {obj.icon}
              </div>
              <h3 style={{ margin: '0 0 0.75rem 0', fontSize: '1.2rem', color: '#f8fafc' }}>{obj.titulo}</h3>
              <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>{obj.descripcion}</p>
              
              <div style={{ marginTop: '1.2rem', fontSize: '0.85rem', fontWeight: 600, color: isActive ? '#00f2fe' : '#64748b' }}>
                {isActive ? '▶ Módulo activo en pantalla' : 'Haz clic para seleccionar ➔'}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}