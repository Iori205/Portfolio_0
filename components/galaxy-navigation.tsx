"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";

function WaveFabric({ cols, rows }: { cols: number; rows: number }) {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const time = useRef(0);

  const SX = 1.3; // horizontal spacing
  const SZ = 1.1; // depth spacing

  useEffect(() => {
    camera.position.set(0, 14, 22);
    camera.lookAt(0, 0, -18);

    const handleMouse = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", handleMouse);
    return () => window.removeEventListener("pointermove", handleMouse);
  }, [camera]);

  const totalVerts = cols * rows;

  const lineIndices = useMemo(() => {
    const idx: number[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const i = r * cols + c;
        if (c < cols - 1) idx.push(i, i + 1);
        if (r < rows - 1) idx.push(i, i + cols);
      }
    }
    return idx;
  }, [cols, rows]);

  const linePositions = useMemo(
    () => new Float32Array(lineIndices.length * 3),
    [lineIndices],
  );
  const dotPositions = useMemo(() => new Float32Array(totalVerts * 3), [totalVerts]);

  const lineGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    return geo;
  }, [linePositions]);

  const dotGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(dotPositions, 3));
    return geo;
  }, [dotPositions]);

  const dotTexture = useMemo(() => {
    const s = 64;
    const cvs = document.createElement("canvas");
    cvs.width = cvs.height = s;
    const ctx = cvs.getContext("2d")!;
    const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    g.addColorStop(0, "rgba(200,180,255,1)");
    g.addColorStop(0.35, "rgba(160,140,255,0.85)");
    g.addColorStop(0.7, "rgba(120,100,220,0.3)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
    return new THREE.CanvasTexture(cvs);
  }, []);

  useFrame((_, delta) => {
    time.current += delta * 0.32;

    const t = time.current;
    const mx = mouse.current.x * 38;
    const my = mouse.current.y * -22;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const idx = r * cols + c;
        const i3 = idx * 3;

        const x = (c - cols / 2) * SX;
        const z = (r - rows * 0.15) * SZ;

        const wave1 =
          Math.sin(x * 0.2 + t * 1.0) * Math.cos(z * 0.15 + t * 0.7) * 2.0;
        const wave2 = Math.sin(x * 0.11 - t * 0.55 + z * 0.09) * 1.4;
        const wave3 = Math.cos(x * 0.18 + z * 0.22 - t * 0.4) * 0.9;

        const dx = x - mx;
        const dz = z - my;
        const dist = Math.sqrt(dx * dx + dz * dz);
        const pull = Math.exp(-dist * 0.1) * -9.0;

        dotPositions[i3] = x;
        dotPositions[i3 + 1] = wave1 + wave2 + wave3 + pull;
        dotPositions[i3 + 2] = z;
      }
    }

    for (let s = 0; s < lineIndices.length; s += 2) {
      const a = lineIndices[s];
      const b = lineIndices[s + 1];
      const si = s * 3;
      linePositions[si] = dotPositions[a * 3];
      linePositions[si + 1] = dotPositions[a * 3 + 1];
      linePositions[si + 2] = dotPositions[a * 3 + 2];
      linePositions[si + 3] = dotPositions[b * 3];
      linePositions[si + 4] = dotPositions[b * 3 + 1];
      linePositions[si + 5] = dotPositions[b * 3 + 2];
    }

    lineGeo.attributes.position.needsUpdate = true;
    dotGeo.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial
          color="#9080ff"
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      <points geometry={dotGeo}>
        <pointsMaterial
          size={0.14}
          map={dotTexture}
          transparent
          opacity={0.55}
          color="#a090ff"
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </>
  );
}

export function GalaxyNavigation() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);

    // Check for mobile
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // If user prefers reduced motion, show static background
  if (prefersReducedMotion) {
    return (
      <div 
        className="fixed inset-0 -z-10" 
        style={{ 
          background: "linear-gradient(180deg, #08080f 0%, #0a0a14 50%, #08080f 100%)" 
        }}
      >
        <div className="ambient-glow" />
      </div>
    );
  }

  // Use reduced grid size on mobile for performance
  const cols = isMobile ? 40 : 80;
  const rows = isMobile ? 50 : 100;

  return (
    <div className="fixed inset-0 -z-10" style={{ background: "#08080f" }}>
      <Canvas
        camera={{ fov: 90 }}
        gl={{ antialias: true, alpha: false }}
        style={{ width: "100%", height: "100%", background: "#08080f" }}
      >
        <color attach="background" args={["#08080f"]} />
        <WaveFabric cols={cols} rows={rows} />
      </Canvas>
      <div className="ambient-glow" />
    </div>
  );
}
