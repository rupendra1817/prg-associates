"use client";
import { useEffect, useRef, useState } from "react";

export default function ThunderStorm() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animFrame: number;
    let flashOpacity = 0;
    let boltOpacity = 1;
    let segments: { x1: number; y1: number; x2: number; y2: number }[] = [];

    function generateLightning(x: number, y: number, angle: number, length: number, depth: number, maxHeight: number) {
      const result: typeof segments = [];
      let cx = x, cy = y;
      for (let i = 0; i < 14; i++) {
        const segLen = length * (0.5 + Math.random() * 0.9);
        const jitter = (Math.random() - 0.5) * 50;
        const nx = cx + Math.sin((angle + jitter) * Math.PI / 180) * segLen;
        const ny = cy + Math.cos(angle * Math.PI / 180) * segLen;
        result.push({ x1: cx, y1: cy, x2: nx, y2: ny });
        cx = nx; cy = ny;
        if (cy > maxHeight) break;
        if (depth > 0 && Math.random() > 0.6) {
          const branchAngle = angle + (Math.random() - 0.5) * 45;
          result.push(...generateLightning(cx, cy, branchAngle, segLen * 0.5, depth - 1, maxHeight));
        }
      }
      return result;
    }

    // Strike once after short delay
    setTimeout(() => {
      const x = canvas.width * (0.3 + Math.random() * 0.4);
      segments = generateLightning(x, 0, (Math.random() - 0.5) * 15, 40, 3, canvas.height);
      flashOpacity = 0.7;

      function draw() {
        ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

        // Yellow screen flash
        if (flashOpacity > 0) {
          ctx!.fillStyle = `rgba(255, 220, 50, ${flashOpacity * 0.25})`;
          ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
          flashOpacity = Math.max(0, flashOpacity - 0.04);
        }

        if (boltOpacity > 0.02) {
          segments.forEach((seg) => {
            // Outer yellow glow
            ctx!.shadowBlur = 40;
            ctx!.shadowColor = `rgba(255, 200, 0, ${boltOpacity})`;
            ctx!.strokeStyle = `rgba(255, 180, 0, ${boltOpacity * 0.6})`;
            ctx!.lineWidth = 6;
            ctx!.lineCap = "round";
            ctx!.beginPath();
            ctx!.moveTo(seg.x1, seg.y1);
            ctx!.lineTo(seg.x2, seg.y2);
            ctx!.stroke();

            // Mid yellow
            ctx!.shadowBlur = 18;
            ctx!.shadowColor = `rgba(255, 230, 50, ${boltOpacity})`;
            ctx!.strokeStyle = `rgba(255, 230, 50, ${boltOpacity * 0.85})`;
            ctx!.lineWidth = 3;
            ctx!.beginPath();
            ctx!.moveTo(seg.x1, seg.y1);
            ctx!.lineTo(seg.x2, seg.y2);
            ctx!.stroke();

            // Bright white core
            ctx!.shadowBlur = 6;
            ctx!.shadowColor = `rgba(255, 255, 255, ${boltOpacity})`;
            ctx!.strokeStyle = `rgba(255, 255, 255, ${boltOpacity})`;
            ctx!.lineWidth = 1.2;
            ctx!.beginPath();
            ctx!.moveTo(seg.x1, seg.y1);
            ctx!.lineTo(seg.x2, seg.y2);
            ctx!.stroke();

            ctx!.shadowBlur = 0;
          });
          boltOpacity -= 0.025;
          animFrame = requestAnimationFrame(draw);
        } else {
          ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
          setDone(true);
        }
      }

      animFrame = requestAnimationFrame(draw);
    }, 300);

    return () => cancelAnimationFrame(animFrame);
  }, []);

  if (done) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
