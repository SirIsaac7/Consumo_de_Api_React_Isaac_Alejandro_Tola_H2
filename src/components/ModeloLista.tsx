import React, { useEffect, useState } from 'react';
import { fetchModels, Model } from "../service/skatchfabService";

const colors = ["#ff6b6b", "#6bcB77", "#4d96ff", "#f7b801", "#9b5de5"];

const styles = {
    container: {
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column' as React.CSSProperties['flexDirection'],
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        width: '100%',
        marginTop: '20px',
    },
    card: {
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        padding: '16px',
        textAlign: 'center' as React.CSSProperties['textAlign'],
        animation: 'pulse 2s infinite',
    },
    image: {
        width: '100%',
        height: '180px',
        objectFit: 'cover' as React.CSSProperties['objectFit'],
        borderRadius: '4px',
    },
    title: {
        fontSize: '1.2rem',
        margin: '12px 0',
    },
    button: {
        display: 'inline-block',
        padding: '8px 16px',
        background: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        textDecoration: 'none',
        cursor: 'pointer',
        marginTop: '8px',
    },
};

// Animación pulse
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}`;
document.head.appendChild(styleSheet);

const ModeloLista: React.FC = () => {
    const [models, setModels] = useState<Model[]>([]);

    useEffect(() => {
        const getModels = async () => {
            const data = await fetchModels(15); 
            console.log('data --->', data);
            setModels(data);
        };
        getModels();
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.grid}>
                {models.map((model) => {
                    const randomColor = colors[Math.floor(Math.random() * colors.length)];
                    return (
                        <div
                            key={model.id}
                            style={{ ...styles.card, borderTop: `6px solid ${randomColor}` }}
                        >
                            <img
                                src={model.thumbnail}
                                alt={model.name}
                                style={styles.image}
                            />
                            <h3 style={styles.title}>{model.name}</h3>
                            <a
                                href={model.viewerUrl}
                                target='_blank'
                                rel="noopener noreferrer"
                                style={styles.button}
                            >
                                Agrandar la imagen
                            <i className="fa-solid fa-magnifying-glass-plus"></i></a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ModeloLista;
