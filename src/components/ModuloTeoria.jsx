// src/components/ModuloTeoria.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, Globe, Layers } from 'lucide-react';

export default function ModuloTeoria() {
  const conceptos = [
    {
      icon: <Fingerprint color="#00f2fe" size={24} />,
      titulo: "¿Qué es la Huella Digital?",
      texto: "Es el rastro de datos que dejas al usar internet: publicaciones, búsquedas, sitios visitados y compras. ¡Nada desaparece por completo!"
    },
    {
      icon: <Globe color="#4facfe" size={24} />,
      titulo: "Impacto en tu Privacidad",
      texto: "Empresas y atacantes usan tu huella para crear perfiles. Controlar la información que compartes protege tu identidad."
    },
    {
      icon: <Layers color="#f64f59" size={24} />,
      titulo: "Ciberseguridad Activa",
      texto: "La ciberseguridad es el conjunto de prácticas para proteger tus dispositivos, redes y datos personales contra accesos no autorizados."
    }
  ];

  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto 3rem', padding: '0 1.5rem' }}>
      <h2 style={{ fontSize: '1.6rem', color: '#0b132b', marginBottom: '1.5rem', fontWeight: 800 }}>
        Fase 1: Fundamentos teóricos
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {conceptos.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="digilab-card"
            style={{ padding: '1.75rem' }}
          >
            <div style={{ marginBottom: '1rem', background: 'rgba(0, 242, 254, 0.08)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
              {item.icon}
            </div>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#f8fafc', fontSize: '1.15rem' }}>{item.titulo}</h3>
            <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.texto}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}