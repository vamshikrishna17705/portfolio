import { useRef, useEffect } from 'react';

interface WaveBand {
  y: number;
  amplitude: number;
  speed: number;
  color: [number, number, number];
  phase: number;
  stagger: number;
}

const WAVE_BANDS: WaveBand[] = [
  { y: 0.15, amplitude: 0.08, speed: 0.2, color: [0, 100, 255], phase: 0, stagger: 0 },
  { y: 0.30, amplitude: 0.12, speed: 0.3, color: [0, 212, 255], phase: 1.0, stagger: 0 },
  { y: 0.45, amplitude: 0.10, speed: 0.4, color: [255, 0, 255], phase: 2.0, stagger: 0 },
  { y: 0.60, amplitude: 0.15, speed: 0.25, color: [0, 255, 0], phase: 3.0, stagger: 0 },
  { y: 0.75, amplitude: 0.09, speed: 0.35, color: [255, 255, 0], phase: 4.0, stagger: 0 },
  { y: 0.85, amplitude: 0.07, speed: 0.45, color: [255, 100, 0], phase: 5.0, stagger: 0 },
];

// Precompute stagger values
WAVE_BANDS.forEach((band) => {
  band.stagger = (band.phase * 50) % 200;
});

export default function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio, 2);
    let width = 0;
    let height = 0;

    const resize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      if (!ctx) return;
      const time = timeRef.current;

      // Clear with deep space background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Add subtle starfield background
      for (let i = 0; i < 100; i++) {
        const x = (Math.sin(time * 0.1 + i) * 0.5 + 0.5) * width;
        const y = (Math.cos(time * 0.15 + i * 1.3) * 0.5 + 0.5) * height;
        const radius = Math.random() * 1.5;
        const opacity = Math.random() * 0.5 + 0.5;
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw each wave band with interactive distortion
      for (const band of WAVE_BANDS) {
        // Calculate mouse influence on wave
        const mouseDistance = Math.hypot(
          mousePos.current.x - width / 2,
          mousePos.current.y - height / 2
        );
        const mouseInfluence = Math.max(0, 1 - mouseDistance / 300) * 0.2;

        const yOffset =
          Math.sin(time * band.speed + band.phase) * band.amplitude * height +
          mouseInfluence * Math.sin(time * band.speed * 2 + band.phase) * band.amplitude * height * 0.5;
        const baseY = band.y * height + yOffset;

        // Create gradient with more vibrant colors
        const gradient = ctx.createLinearGradient(0, baseY, 0, baseY + height * 0.4);
        gradient.addColorStop(
          0,
          `rgba(${band.color[0]}, ${band.color[1]}, ${band.color[2]}, 0)`
        );
        gradient.addColorStop(
          0.4,
          `rgba(${band.color[0]}, ${band.color[1]}, ${band.color[2]}, 0.2)`
        );
        gradient.addColorStop(
          0.6,
          `rgba(${band.color[0]}, ${band.color[1]}, ${band.color[2]}, 0.15)`
        );
        gradient.addColorStop(
          1,
          `rgba(${band.color[0]}, ${band.color[1]}, ${band.color[2]}, 0)`
        );

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(-50, baseY + band.stagger);

        for (let x = -50; x <= width + 50; x += 15) {
          const waveOffset =
            Math.sin(x * 0.005 + time * band.speed + band.phase) *
            band.amplitude *
            120;
          const rippleEffect =
            Math.sin(
              (x - mousePos.current.x) * 0.02 +
                time * band.speed * 1.5 +
                band.phase
            ) *
            band.amplitude *
            20 *
            mouseInfluence;
          const y =
            baseY +
            band.stagger +
            waveOffset +
            rippleEffect;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width + 50, height + 50);
        ctx.lineTo(-50, height + 50);
        ctx.closePath();
        ctx.fill();

        // Add glowing edge to waves
        ctx.strokeStyle = `rgba(${band.color[0]}, ${band.color[1]}, ${band.color[2]}, 0.3)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Add occasional lightning effect
      if (Math.random() < 0.003) {
        const x = Math.random() * width;
        const y = Math.random() * height * 0.5;
        const length = 50 + Math.random() * 100;
        const branches = 2 + Math.floor(Math.random() * 2);

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 2;

        let startX = x;
        let startY = y;

        for (let b = 0; b < branches; b++) {
          let endX = startX + (Math.random() - 0.5) * 40;
          let endY = startY + Math.random() * 30 + 20;

          ctx.beginPath();
          ctx.moveTo(startX, startY);

          // Create jagged lightning bolt
          for (let i = 0; i < 5; i++) {
            const midX =
              startX + (endX - startX) * ((i + 1) / 5) +
              (Math.random() - 0.5) * 10;
            const midY =
              startY + (endY - startY) * ((i + 1) / 5) +
              (Math.random() - 0.5) * 10;
            ctx.lineTo(midX, midY);
          }
          ctx.lineTo(endX, endY);
          ctx.stroke();

          startX = endX;
          startY = endY;
        }
      }

      timeRef.current += 0.008;
      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
}
