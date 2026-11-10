// src/App.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeaderClase from './components/HeaderClase';
import ObjetivoCard from './components/ObjetivoCard';
import ModuloTeoria from './components/ModuloTeoria';
import ModuloPractica from './components/ModuloPractica';
import EvaluacionForm from './components/EvaluacionForm';

export default function App() {
  // Estado para controlar qué sección se muestra ('teoria', 'practica', 'evaluacion')
  const [moduloActivo, setModuloActivo] = useState('teoria');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#070b19', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* 1. ENCABEZADO INSTITUCIONAL */}
      <HeaderClase />

      {/* 2. RUTA DE APRENDIZAJE INTERACTIVA (Selector de módulos) */}
      <ObjetivoCard moduloActivo={moduloActivo} setModuloActivo={setModuloActivo} />

      {/* 3. CONTENIDO DINÁMICO SEGÚN EL MÓDULO SELECCIONADO */}
      <div style={{ minHeight: '350px' }}>
        <AnimatePresence mode="wait">
          {moduloActivo === 'teoria' && (
            <motion.div
              key="teoria"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ModuloTeoria />
            </motion.div>
          )}

          {moduloActivo === 'practica' && (
            <motion.div
              key="practica"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ModuloPractica />
            </motion.div>
          )}

          {moduloActivo === 'evaluacion' && (
            <motion.div
              key="evaluacion"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <EvaluacionForm />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* PIE DE PÁGINA */}
      <footer style={{ textAlign: 'center', padding: '2.5rem 1rem', color: '#64748b', fontSize: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#050814' }}>
        <p style={{ margin: 0, color: '#94a3b8', fontWeight: 600 }}>Universidad Rafael Landívar — Facultad de Humanidades</p>
        <p style={{ margin: '0.4rem 0 0', color: '#64748b' }}>Profesorado en Enseñanza Media con Especialidad en TIC | Proyecto Integrador Final (2026)</p>
      </footer>
    </div>
  );
}