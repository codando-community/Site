import React, { useState, useMemo } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { eventosAgenda, symplaLink } from '../../data/eventosData';
import styles from './EventosListSection.module.css';

const EventosListSection = () => {
  const [expandedEventId, setExpandedEventId] = useState(null);
  const [activeTab, setActiveTab] = useState('sobre');
  const [filter, setFilter] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleExpand = (id) => {
    if (expandedEventId === id) {
      setExpandedEventId(null);
    } else {
      setExpandedEventId(id);
      setActiveTab('sobre');
      // Step 5: Scroll into view (handled by useEffect below)
    }
  };

  // Step 5: Scroll into view effect
  React.useEffect(() => {
    if (expandedEventId) {
      const element = document.getElementById(`event-${expandedEventId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [expandedEventId]);

  const groupedEventos = useMemo(() => {
    const filtered = eventosAgenda.filter((evento) => {
      const matchesSearch = evento.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            evento.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesFilter = true;
      if (filter === 'futuros') {
        matchesFilter = evento.status === 'upcoming';
      } else if (filter === 'passados') {
        matchesFilter = evento.status === 'past';
      }
      
      return matchesSearch && matchesFilter;
    });

    // Sort: Upcoming (Ascending), Past (Descending)
    const sorted = [...filtered].sort((a, b) => {
      const parseDate = (d) => {
        if (!d || d.includes('breve')) return new Date(2099, 11, 31);
        const [day, month, year] = d.split('/').map(Number);
        return new Date(year, month - 1, day);
      };
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      
      if (a.status === 'upcoming' && b.status === 'upcoming') return dateA - dateB;
      return dateB - dateA;
    });

    // Step 1: Group by Month/Year
    const groups = {};
    const monthNames = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    sorted.forEach(evento => {
      let groupKey = "Próximos Eventos";
      if (evento.status === 'past') {
        const [day, month, year] = evento.date.split('/').map(Number);
        groupKey = `${monthNames[month - 1]} ${year}`;
      } else if (evento.date.includes('breve')) {
        groupKey = "Em Breve";
      }

      if (!groups[groupKey]) groups[groupKey] = [];
      groups[groupKey].push(evento);
    });

    return groups;
  }, [filter, searchQuery]);

  return (
    <section className={styles.listContainer}>
      <div className={styles.stickyHeader}>
        <div className={styles.searchHeader}>
          <div className={styles.searchBar}>
            <SearchIcon style={{ color: '#4b6a82' }} />
            <input 
              type="text" 
              placeholder="Buscar eventos" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className={styles.filterPills}>
            <button 
              className={`${styles.filterPill} ${filter === 'todos' ? styles.active : ''}`}
              onClick={() => setFilter('todos')}
            >
              Todos eventos
            </button>
            <button 
              className={`${styles.filterPill} ${filter === 'futuros' ? styles.active : ''}`}
              onClick={() => setFilter('futuros')}
            >
              Próximos
            </button>
            <button 
              className={`${styles.filterPill} ${filter === 'passados' ? styles.active : ''}`}
              onClick={() => setFilter('passados')}
            >
              Encerrados
            </button>
          </div>
        </div>
      </div>

      <div className={styles.eventList}>
        {Object.entries(groupedEventos).map(([month, eventos]) => (
          <div key={month} className={styles.monthGroup}>
            <h2 className={styles.monthHeader}>{month}</h2>
            {eventos.map((evento) => (
              <div 
                key={evento.id} 
                id={`event-${evento.id}`}
                className={`${styles.eventRow} ${evento.status === 'past' ? styles.pastEvent : ''}`}
              >
                <div className={styles.eventMain}>
                  <div className={styles.eventDate}>
                    {evento.dayWeek}<br />
                    {evento.date}
                  </div>
                  
                  <div className={styles.eventInfo}>
                    <div 
                      className={`${styles.thumbnail} ${!evento.image ? styles[evento.type] : ''}`}
                      style={evento.image ? { backgroundImage: `url(${evento.image})` } : {}}
                    >
                      {/* Step 6: Badges */}
                      {evento.status === 'past' && (
                        <span className={styles.badgePast}>Sucesso de Público</span>
                      )}
                      {evento.status === 'upcoming' && (
                        <span className={styles.badgeUpcoming}>Inscrições Abertas</span>
                      )}

                      {!evento.image && (
                        <>
                          <h3 className={styles.thumbnailTitle}>{evento.title}</h3>
                          <p className={styles.thumbnailSubtitle}>{evento.subtitle}</p>
                        </>
                      )}
                    </div>
                    <div className={styles.eventDetails}>
                      <h2 className={styles.eventTitle}>{evento.title}</h2>
                      <p className={styles.eventTransmission}>{evento.transmission || evento.dayTime}</p>
                    </div>
                  </div>

                  <div className={styles.eventActions}>
                    <button 
                      className={styles.btnPrimary}
                      onClick={() => evento.link && evento.status !== 'past' && window.open(evento.link, '_blank')}
                      style={evento.status === 'past' || !evento.link ? { opacity: 0.5, cursor: 'not-allowed', backgroundColor: '#4b6a82' } : {}}
                      disabled={evento.status === 'past'}
                    >
                      {evento.status === 'past' 
                        ? 'Evento Encerrado' 
                        : evento.link?.includes('youtube') 
                          ? 'Acessar Live' 
                          : 'Garantir Vaga'}
                    </button>
                    <button 
                      className={styles.btnSecondary} 
                      onClick={() => toggleExpand(evento.id)}
                    >
                      {expandedEventId === evento.id ? 'Fechar Detalhes' : 'Mais Informações'}
                    </button>
                  </div>
                </div>

                {expandedEventId === evento.id && (
                  <div className={styles.expandedPanel}>
                    <div className={styles.tabs}>
                      <div 
                        className={`${styles.tab} ${activeTab === 'sobre' ? styles.active : ''}`}
                        onClick={() => setActiveTab('sobre')}
                      >
                        Sobre o evento
                      </div>
                      <div 
                        className={`${styles.tab} ${activeTab === 'palestrante' ? styles.active : ''}`}
                        onClick={() => setActiveTab('palestrante')}
                      >
                        Palestrante
                      </div>
                      <div 
                        className={`${styles.tab} ${activeTab === 'lista' ? styles.active : ''}`}
                        onClick={() => setActiveTab('lista')}
                      >
                        Lista de Presença
                      </div>
                      <div 
                        className={`${styles.tab} ${activeTab === 'certificado' ? styles.active : ''}`}
                        onClick={() => setActiveTab('certificado')}
                      >
                        Certificação
                      </div>
                    </div>
                    <div className={styles.tabContent}>
                      {activeTab === 'sobre' && <p>{evento.description || "Detalhes do evento em breve."}</p>}
                      {activeTab === 'palestrante' && <p>{evento.speaker ? `Apresentado por: ${evento.speaker}` : "Palestrante a ser definido."}</p>}
                      {activeTab === 'lista' && <p>A lista de presença será disponibilizada durante o evento.</p>}
                      {activeTab === 'certificado' && <p>Os certificados serão enviados por e-mail após a confirmação de presença.</p>}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
        {Object.keys(groupedEventos).length === 0 && (
           <EmptyState 
            searchQuery={searchQuery} 
            onClear={() => {setSearchQuery(''); setFilter('todos');}} 
           />
        )}
      </div>

      <div style={{ 
        marginTop: '5rem', 
        textAlign: 'center', 
        padding: '3rem 2rem', 
        backgroundColor: 'rgba(255, 255, 255, 0.03)', 
        borderRadius: '2rem', 
        border: '1px solid rgba(28, 82, 115, 0.3)',
        backdropFilter: 'blur(10px)'
      }}>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Acompanhe nossa agenda completa</h3>
        <p style={{ color: '#4b6a82', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Confira também nossos eventos exclusivos e oportunidades de networking na nossa página oficial da Sympla.
        </p>
        <button 
          className={styles.btnPrimary} 
          onClick={() => window.open(symplaLink, '_blank')}
          style={{ width: 'auto', padding: '0.8rem 2.5rem' }}
        >
          Ver todos os eventos no Sympla
        </button>
      </div>
    </section>
  );
};

// Step 2: Empty State Component
const EmptyState = ({ searchQuery, onClear }) => (
  <div style={{ 
    textAlign: 'center', 
    padding: '4rem 2rem', 
    backgroundColor: 'rgba(255, 255, 255, 0.02)', 
    borderRadius: '2rem',
    border: '1px dashed rgba(28, 82, 115, 0.5)',
    marginTop: '2rem'
  }}>
    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>Nenhum evento encontrado</h3>
    <p style={{ color: '#4b6a82', marginBottom: '1.5rem' }}>
      Não encontramos resultados para "{searchQuery}".<br />
      Tente outros termos ou limpe os filtros.
    </p>
    <button 
      className={styles.btnSecondary} 
      onClick={onClear}
      style={{ width: 'auto', padding: '0.6rem 2rem' }}
    >
      Ver todos os eventos
    </button>
  </div>
);

export default EventosListSection;
