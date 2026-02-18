

function Footer(){
    return (
    <footer style={{ textAlign: 'center', padding: '20px', background: '#111', color: '#666', fontSize: '0.9rem' }}>
      <p>© {new Date().getFullYear()} Tu Nombre. Construido con React & Vite.</p>
    </footer>
    )
}

export default Footer