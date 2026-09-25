* {
  box-sizing: border-box;
}

:root {
  --bg: #08111f;
  --panel: #101b2d;
  --panel-strong: #16253d;
  --border: rgba(148, 163, 184, 0.2);
  --text: #e5eefb;
  --muted: #94a3b8;
  --accent: #78e3a5;
  --accent-strong: #34d399;
  --shadow: rgba(15, 23, 42, 0.5);
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top, rgba(120, 227, 165, 0.12), transparent 30%),
    linear-gradient(180deg, #020817, #0d1729 40%, #0b1423 100%);
  color: var(--text);
}

button,
input,
select,
textarea {
  font: inherit;
}

.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 20px 48px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0 28px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent), #7dd3fc);
  color: #04131e;
  font-size: 1.5rem;
  font-weight: 800;
}

.brand-name {
  margin: 0;
  font-weight: 800;
  font-size: 1.2rem;
}

.brand-tag {
  margin: 2px 0 0;
  color: var(--muted);
  font-size: 0.8rem;
}

.layout {
  display: grid;
  grid-template-columns: minmax(320px, 1fr) minmax(280px, 1.1fr);
  gap: 22px;
}

.panel {
  background: rgba(16, 27, 45, 0.8);
  border: 1px solid var(--border);
  border-radius: 22px;
  box-shadow: 0 18px 50px var(--shadow);
  backdrop-filter: blur(12px);
}

.controls {
  padding: 24px;
}

.controls h1,
.preview-header h2 {
  margin: 0 0 20px;
  font-size: clamp(1.6rem, 2vw, 2.1rem);
}

.field-row {
  display: grid;
  gap: 16px;
  margin-bottom: 16px;
}

.two-up {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

label {
  display: grid;
  gap: 8px;
  color: var(--muted);
  font-size: 0.9rem;
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.8);
  color: var(--text);
  padding: 10px 12px;
  border-radius: 12px;
  outline: none;
}

input[type="color"] {
  min-height: 46px;
  padding: 6px;
}

input:focus,
select:focus,
textarea:focus {
  border-color: rgba(120, 227, 165, 0.8);
  box-shadow: 0 0 0 3px rgba(120, 227, 165, 0.12);
}

.preview-panel {
  padding: 22px;
}

.preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 12px;
}

.primary-btn,
.secondary-btn {
  border: none;
  border-radius: 12px;
  padding: 10px 16px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.15s ease;
}

.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-1px);
}

.primary-btn {
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  color: #031310;
}

.secondary-btn {
  background: rgba(148, 163, 184, 0.08);
  border: 1px solid var(--border);
  color: var(--text);
}

.badge-stage {
  min-height: 160px;
  display: grid;
  place-items: center;
  margin: 18px 0;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.6));
}

.badge-stage img {
  max-width: 100%;
  display: block;
}

.snippet-box {
  margin-top: 16px;
}

.snippet-box p {
  margin: 0 0 8px;
  color: var(--muted);
  font-weight: 600;
}

textarea {
  resize: vertical;
  min-height: 74px;
}

@media (max-width: 800px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .two-up {
    grid-template-columns: 1fr;
  }

  .topbar,
  .preview-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
