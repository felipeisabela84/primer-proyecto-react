export default function Experiencia() {
  const videoId = 'AbC123XyZ' // cambia esto por el ID de tu video

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Mi experiencia personal</h2>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Mi experiencia haciendo la tarea"
        allowFullScreen
        style={{ maxWidth: '100%', border: 'none' }}
      ></iframe>
    </div>
  )
}