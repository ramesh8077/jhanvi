import React from 'react';

export default function ProjectCard({ project, style }) {
  return (
    <div 
      className={`project-card ${project.className || ''}`}
      style={style}
      data-expertise={project.expertise}
      data-typologies={project.typology}
      data-status={project.status}
      data-country={project.country}
      data-region={project.region}
    >
      <div className="img-container">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h2 className="card-title">{project.title}</h2>
          <span className="card-arrow">{project.arrowIcon || '→'}</span>
        </div>
        <div className="card-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.tags && project.tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
