interface ThemeIndicatorProps {
  theme: 'light' | 'dark';
  source: 'auto' | 'manual';
  currentTime: string;
  onReset: () => void;
}

export function ThemeIndicator({ theme, source, currentTime, onReset }: ThemeIndicatorProps) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 900,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 14px',
        borderRadius: '100px',
        border: '1px solid var(--cb-border)',
        backgroundColor: 'var(--cb-bg-card)',
        boxShadow: 'var(--cb-shadow-md)',
        fontFamily: 'Inter, sans-serif',
        fontSize: '12px',
        color: 'var(--cb-text-muted)',
        cursor: source === 'manual' ? 'pointer' : 'default',
        userSelect: 'none',
      }}
      onClick={source === 'manual' ? onReset : undefined}
      title={source === 'manual' ? 'Click để về chế độ tự động' : ''}
    >
      <span style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: theme === 'light' ? '#F9A223' : '#6366f1',
        flexShrink: 0,
      }} />
      <span>{theme === 'light' ? '☀️' : '🌙'}</span>
      <span style={{ color: 'var(--cb-text-secondary)' }}>
        {theme === 'light' ? 'Sáng' : 'Tối'} · {source === 'auto' ? `tự động · ${currentTime}` : 'thủ công'}
      </span>
    </div>
  );
}
