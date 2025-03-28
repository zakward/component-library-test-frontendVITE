import 'gunkustom-component-library-test/dist/style.css';
import * as React from "react";
import { useEffect } from "react";
import { Button as LibButton, Icon as LibIcon } from "gunkustom-component-library-test";
import './index.css'; // Global styles including your Roboto font

// Define the ButtonProps locally so the cast matches the library’s interface.
type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text" | "subtext" | "error";
  fontColor?: "primary" | "secondary";
  fontSize?: string | number;
  height?: string | number;
  width?: string | number;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
};

// Cast the imported component to React.FC<ButtonProps>
const Button = LibButton as React.FC<ButtonProps>;
const Icon = LibIcon as React.FC<{ name: "star" | "heart" }>;

function App(): JSX.Element {
  useEffect(() => {
    const bodyStyles = window.getComputedStyle(document.body);
    const fontFamily = bodyStyles.getPropertyValue('font-family');
    console.log('Body Font Family:', fontFamily);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
      <h1>Button Group</h1>
      <Button
        variant="primary"
        fontColor="primary"
        fontSize="16px"
        height="50px"
        width="150px"
        className="custom-margin custom-display"
      >
        Primary
      </Button>
      <Button
        variant="secondary"
        fontColor="secondary"
        fontSize="16px"
        className="custom-margin custom-display"
      >
        Secondary
      </Button>
      <Button
        variant="text"
        fontColor="secondary"
        fontSize="16px"
        height="45px"
        width="130px"
        className="custom-margin custom-display"
      >
        Text 
      </Button>
      <Button
        variant="subtext"
        fontColor="primary"
        fontSize="16px"
        height="55px"
        width="140px"
        className="custom-margin custom-display"
      >
        Subtext
      </Button>
      <Button
        variant="error"
        fontColor="secondary"
        fontSize="16px"
        height="40px"
        width="110px"
        className="custom-margin custom-display"
      >
        Error 
      </Button>
      <Icon name="star" />
    </div>
  );
}

export default App;
