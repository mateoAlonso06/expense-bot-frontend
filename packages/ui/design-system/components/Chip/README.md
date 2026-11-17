# Chip

Small pill that labels a category, a date or a status.

- `caption` style (12px/600), padding 4px 10px, `radius-pill`.
- **Category chips** always use their matching pair: `cat-<category>-bg` + `cat-<category>-fg`. Alimentación → food, Vivienda → housing, Transporte → transport, Salud → health, Ocio → leisure, Servicios → services, Otros → other.
- **Neutral chips** ("Hoy", "Datos de ejemplo") use `cat-other-*`, weight 500.
- **Status badges** ("Disponible", "Nuevo") use `brand-tint` + `brand-strong`, or `brand` + `on-brand` for "Nuevo".
- Not interactive. If a chip filters a list, make it a real `<button>` with `aria-pressed`.
