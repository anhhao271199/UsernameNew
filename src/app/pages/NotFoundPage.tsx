import { useNavigate } from 'react-router';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: 'var(--cb-bg-page)',
        color: 'var(--cb-text-primary)',
      }}
    >
      <div
        style={{
          fontSize: '8rem',
          fontWeight: 700,
          lineHeight: 1,
          color: 'var(--cb-accent)',
          marginBottom: '1rem',
        }}
      >
        404
      </div>

      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 600,
          marginBottom: '0.75rem',
          color: 'var(--cb-text-primary)',
        }}
      >
        Trang không tìm thấy
      </h1>

      <p
        style={{
          fontSize: '1.1rem',
          color: 'var(--cb-text-secondary)',
          maxWidth: '400px',
          marginBottom: '2rem',
          lineHeight: 1.6,
        }}
      >
        Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
      </p>

      <button
        onClick={() => navigate('/')}
        style={{
          backgroundColor: 'var(--cb-accent)',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          padding: '0.75rem 2rem',
          fontSize: '1rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'background-color 0.2s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--cb-accent-hover)')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--cb-accent)')}
      >
        Về trang chủ
      </button>
    </div>
  );
}
