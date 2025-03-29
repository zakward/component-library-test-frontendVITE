import React from 'react';
import { colorPaletteOptions, ColorPalette } from 'gunkustom-component-library';
// Import the components and raw color definitions from our library

import '../index.css';

const ColorsTest: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      {/* Section 1: Demo of the ColorPalette component */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Color Palette Component</h2>
        <p>This component visually displays our design color palette <code>component</code>.</p>
        <ColorPalette />
      </section>

      {/* Section 2: Using the raw color definitions */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Raw Color Definitions</h2>
        <p>
          The following hex values were imported using the{' '}
          <code>colorPaletteOptions</code> array from <code>gunkustom-component-library</code>:
        </p>
        <ul>
          {Object.entries(colorPaletteOptions).map(([key, value]) => (
            <li key={key}>
              {value.label}: <span style={{ color: value.hex }}>{value.hex}</span> – {value.usage}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ColorsTest;
