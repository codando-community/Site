import React from "react";
import AgendaSection from "../components/home/AgendaSection";
import EventosListSection from "../components/home/EventosListSection";

const Eventos = () => {
    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#0f172a' }}>
            <AgendaSection />
            <EventosListSection />
        </div>
    );
};

export default Eventos;