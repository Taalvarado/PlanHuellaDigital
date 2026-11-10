// src/App.jsx
import React from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivoCard from './components/ObjetivoCard';
import ModuloPractica from './components/ModuloPractica';
import EvaluacionForm from './components/EvaluacionForm';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Encabezado Institucional / Estética Digilab */}
      <HeaderClase />

      {/* Objetivos y Ruta de Aprendizaje */}
      <ObjetivoCard />

      {/* Módulo Práctico con Analogía y Simulador */}
      <ModuloPractica />

      {/* Formulario de Evaluación con Conexión NocoDB */}
      <EvaluacionForm />

      {/* Pie de página institucional */}
      <footer style={{ textAlign: 'center', padding: '2rem 1rem', color: '#64748b', fontSize: '0.85rem', borderTop: '1px solid #e2e8f0' }}>
        <p style={{ margin: 0 }}>Universidad Rafael Landívar — Facultad de Humanidades | Profesorado en Enseñanza Media con Especialidad en TIC</p>
        <p style={{ margin: '0.3rem 0 0', color: '#94a3b8' }}>Proyecto Integrador Final: Plan de Clase Digital Interactivo (2026)</p>
      </footer>
    </div>
  );
}