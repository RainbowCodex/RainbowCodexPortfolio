import { useState } from 'react';
import projectsData from './projectsData';

// Small separate sub-component for the interactive Image Slider Pop-up Modal
function ImageModal({ images, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 1050 }}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content border-0 text-light" style={{ backgroundColor: '#111827', borderRadius: '16px' }}>
          <div className="modal-header border-secondary border-opacity-25 px-4">
            <h5 className="modal-title font-monospace text-info small">SYSTEM CAPTURES: FILE {currentIndex + 1} OF {images.length}</h5>
            <button type="button" className="btn-close btn-close-white shadow-none" onClick={onClose}></button>
          </div>
          <div className="modal-body p-4 text-center position-relative">
            <img 
              src={images[currentIndex]} 
              alt="System Screenshot Preview" 
              className="img-fluid rounded border border-secondary border-opacity-25 shadow-lg"
              style={{ maxHeight: '65vh', objectFit: 'contain' }}
            />
            {/* Navigation Arrows */}
            <button onClick={handlePrev} className="btn btn-dark btn-sm position-absolute top-50 start-0 translate-middle-y ms-4 opacity-75 rounded-circle" style={{ width: '40px', height: '40px' }}>&lt;</button>
            <button onClick={handleNext} className="btn btn-dark btn-sm position-absolute top-50 end-0 translate-middle-y me-4 opacity-75 rounded-circle" style={{ width: '40px', height: '40px' }}>&gt;</button>
          </div>
          <div className="modal-footer border-secondary border-opacity-25 justify-content-between font-monospace small text-muted px-4">
            <span>Use controls to cycle systemic captures</span>
            <button type="button" className="btn btn-sm btn-outline-secondary px-4 rounded-3" onClick={onClose}>Close Viewer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [modalImages, setModalImages] = useState(null); // Tracks images active in the gallery view

  const filters = ['All', 'React.js', 'PHP', 'Python', 'MySQL'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.technologies.includes(activeFilter));

  return (
    <div className="bg-dark text-light min-vh-100" style={{ fontFamily: '"Segoe UI", Roboto, sans-serif', backgroundColor: '#0b0f19' }}>
      
      {/* Premium Tech Hero Section */}
      <header className="position-relative py-5 overflow-hidden border-bottom border-secondary border-opacity-25" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)' }}>
        <div className="position-absolute top-50 start-50 translate-middle w-75 h-75 opacity-25 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', zIndex: 0 }}></div>
        <div className="container position-relative text-center py-4" style={{ zIndex: 1 }}>
          <div className="d-inline-block border border-info border-opacity-50 rounded-pill px-3 py-1 text-info small mb-3 bg-info bg-opacity-10 fw-bold tracking-wider">
            ⚡ AVAILABLE FOR HIRE / PROJECTS
          </div>
          <h1 className="display-3 fw-black text-white tracking-tight mb-2">
            RainbowCodex<span className="text-info">Portfolio</span>
          </h1>
          <p className="lead text-secondary max-w-2xl mx-auto mb-4" style={{ color: '#94a3b8' }}>
            Full Stack Web Developer specialized in architecting custom applications from database to deployment.
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-2 pt-2">
            <span className="badge border border-info text-info bg-info bg-opacity-10 px-3 py-2 rounded-pill fs-6 fw-normal">React.js</span>
            <span className="badge border border-success text-success bg-success bg-opacity-10 px-3 py-2 rounded-pill fs-6 fw-normal">Node.js</span>
            <span className="badge border border-light text-light bg-light bg-opacity-10 px-3 py-2 rounded-pill fs-6 fw-normal">PHP</span>
            <span className="badge border border-warning text-warning bg-warning bg-opacity-10 px-3 py-2 rounded-pill fs-6 fw-normal">Python / Flask</span>
          </div>
        </div>
      </header>

      {/* Main Interactive Matrix Workspace */}
      <main className="container py-5">
        
        {/* Filter Bar */}
        <div className="text-center mb-5">
          <p className="text-muted small uppercase tracking-wider mb-2">Filter Matrix by Core Engineering Stack</p>
          <div className="d-inline-flex bg-black bg-opacity-40 p-1.5 rounded-3 border border-secondary border-opacity-25 shadow-inner">
            {filters.map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveFilter(tech)}
                className={`btn btn-sm px-4 py-2 rounded-2 fw-medium border-0 ${
                  activeFilter === tech ? 'btn-info text-dark shadow-sm fw-bold' : 'text-secondary bg-transparent'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Cyber Cards Grid Layout */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4">
              <div 
                className="card h-100 border-0 shadow" 
                style={{ 
                  backgroundColor: '#111827', 
                  borderRadius: '16px',
                  border: project.status === 'In Progress' ? '1px solid rgba(245, 158, 11, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4)'
                }}
              >
                <div className="card-body p-4 d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted font-monospace small">#00{project.id}_PROJECT</span>
                    <span className={`badge rounded-pill border px-2.5 py-1 small ${project.status === 'In Progress' ? 'border-warning text-warning bg-warning bg-opacity-10' : 'border-success text-success bg-success bg-opacity-10'}`}>
                      ● {project.status.toUpperCase()}
                    </span>
                  </div>

                  <h4 className="card-title text-white fw-bold mb-3 tracking-tight">{project.title}</h4>
                  <p className="card-text text-secondary mb-4 flex-grow-1" style={{ fontSize: '0.92rem', lineHeight: '1.6', color: '#9ca3af' }}>{project.description}</p>
                  
                  <div className="mb-4 d-flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="badge font-monospace rounded" style={{ backgroundColor: '#1f2937', color: '#67e8f9', fontSize: '0.78rem' }}>{tech}</span>
                    ))}
                  </div>

                  {/* Cyber Action Anchor System */}
                  <div className="d-flex gap-3 mt-auto">
                    <a 
                      href={project.githubLink} 
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-outline-secondary w-100 py-2 font-monospace text-decoration-none text-center rounded-3"
                      style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#d1d5db' }}
                    >
                      &lt; Code /&gt;
                    </a>
                    
                    {/* Launch trigger checks if complex image arrays are available */}
                    <button 
                      onClick={() => {
                        if (project.images) {
                          setModalImages(project.images);
                        } else if (project.liveLink !== '#') {
                          window.open(project.liveLink, '_blank');
                        }
                      }}
                      className={`btn btn-sm w-100 py-2 font-monospace rounded-3 fw-bold ${project.status === 'In Progress' ? 'btn-outline-warning text-warning' : 'btn-info text-dark'}`}
                    >
                      {project.status === 'In Progress' ? 'Specs' : 'Launch ↗'}
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Render slider modal safely if modalImages state array holds targets */}
      {modalImages && <ImageModal images={modalImages} onClose={() => setModalImages(null)} />}

      <footer className="bg-black bg-opacity-40 text-center py-4 border-top border-secondary border-opacity-10 text-muted font-monospace small">
        <div className="container"><span>Executed compilation sequence successfully. © 2026 RainbowCodex</span></div>
      </footer>
    </div>
  );
}

export default App;