function Star({ selected }) {
  return (
    <div role="img" aria-label="star" style={{ color: selected ? '#ffc107' : '#e4e5e9' }}>
      <div style={{clipPath: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)
}}></div>
    </div>
  );
}