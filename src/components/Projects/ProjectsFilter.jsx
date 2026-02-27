const CATEGORIES = [
  {
    display: "Design",
    value: "design"
  },
  {
    display: "UI & web",
    value: "ui"
  },
  {
    display: "Development",
    value: "development"
  }
];

export default function ProjectsFilter({ value, onFilterPressed }) {

  return (
    <div role="group" aria-label="Project categories" style={{ display: "flex", gap: 8, justifyContent: 'center', marginBottom: '35px' }}>
      {CATEGORIES.map((category) => {
        const isActive = value === category.value;

        return (
          <button
            key={category.value}
            type="button"
            onClick={() => onFilterPressed(category.value)}
            aria-pressed={isActive}
            style={{
              padding: "8px 14px",
              borderRadius: 10,
              border: `1.5px solid ${isActive ? "transparent" : "rgba(0,0,0,0.12)"}`,
              cursor: "pointer",
              fontWeight: 600,
              background: isActive ? "#347557" : "#fff",
              color: isActive ? "#fff" : "#347557",
              boxShadow: isActive
                ? "0 10px 22px rgba(0,0,0,0.14)"
                : "0 6px 16px rgba(0,0,0,0.08)",
              transition: "all 180ms ease",
            }}
          >
            {category.display}
          </button>
        );
      })}
    </div>
  );
}
