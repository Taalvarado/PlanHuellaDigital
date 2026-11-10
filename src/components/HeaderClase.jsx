// src/components/HeaderClase.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu } from 'lucide-react';

export default function HeaderClase() {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #0b132b 0%, #1c2541 100%)',
      color: '#ffffff',
      padding: '2.5rem 1.5rem',
      borderRadius: '0 0 24px 24px',
      boxShadow: '0 10px 25px rgba(0, 242, 254, 0.15)',
      marginBottom: '2rem'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <ShieldCheck color="#00f2fe" size={32} />
            <span style={{ color: '#00f2fe', fontWeight: 'bold', letterSpacing: '1px', fontSize: '0.9rem' }}>
              TIC - CICLO BÁSICO (12–16 AÑOS)
            </span>
          </div>
          <h1 style={{ margin: 0, fontSize: '2.2rem', fontWeight: 800 }}>
            Plan de Clase Digital: <span style={{ color: '#00f2fe' }}>Huella Digital & Ciberseguridad</span>
          </h1>
          <p style={{ margin: '0.5rem 0 0', color: '#94a3b8', fontSize: '1rem' }}>
            Aprende a proteger tu identidad digital y a navegar seguro en la web.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            padding: '0.75rem 1.25rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Cpu color="#00f2fe" size={20} />
          <span style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>React 18 + Vite | NocoDB Cloud</span>
        </motion.div>
      </div>
    </header>
  );
}