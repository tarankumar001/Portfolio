import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress(); // Get progress dynamically

  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <span className="canvas-loader" />
      <p style={{ fontSize: 14, color: '#FFF', fontWeight: 800, marginTop: 10 }}>
        {progress > 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
      </p>
    </Html>
  );
};

export default CanvasLoader;
