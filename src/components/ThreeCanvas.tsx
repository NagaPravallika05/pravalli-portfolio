import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // --- DYNAMIC FLUID NEURAL CONSTELLATION ---
    const NODE_COUNT = 150;
    const MAX_CONNECTIONS = 380;
    const CONNECTION_DIST = 4.6;

    // Node state arrays
    const positions: THREE.Vector3[] = [];
    const basePositions: THREE.Vector3[] = [];
    const velocities: THREE.Vector3[] = [];
    const baseSizes: number[] = [];
    const currentSizes: number[] = [];
    const phases: number[] = [];
    const colors: THREE.Color[] = [];

    const palette = [
      new THREE.Color(0x38bdf8), // Cyan
      new THREE.Color(0x06b6d4), // Deep Cyan
      new THREE.Color(0x818cf8), // Indigo
      new THREE.Color(0xa855f7), // Violet
      new THREE.Color(0x67e8f9), // Bright Sky
      new THREE.Color(0x2dd4bf), // Teal
    ];

    // Distribute across the full background
    for (let i = 0; i < NODE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 46;
      const y = (Math.random() - 0.5) * 34;
      const z = (Math.random() - 0.5) * 16 - 2;

      const pos = new THREE.Vector3(x, y, z);
      positions.push(pos.clone());
      basePositions.push(pos.clone());
      velocities.push(new THREE.Vector3(0, 0, 0));

      // Varied sizes from small (0.06) to half-max (0.24)
      const sizeFactor = Math.pow(Math.random(), 1.6);
      const radius = 0.07 + sizeFactor * 0.17;
      baseSizes.push(radius);
      currentSizes.push(radius);
      phases.push(Math.random() * Math.PI * 2);

      const col = palette[Math.floor(Math.random() * palette.length)].clone();
      colors.push(col);
    }

    // Instanced Spheres
    const baseSphereGeom = new THREE.SphereGeometry(1, 16, 16);
    const sphereMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.7,
      metalness: 0.15,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.9,
    });

    const instancedSpheres = new THREE.InstancedMesh(baseSphereGeom, sphereMaterial, NODE_COUNT);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < NODE_COUNT; i++) {
      dummy.position.copy(positions[i]);
      dummy.scale.setScalar(baseSizes[i]);
      dummy.updateMatrix();
      instancedSpheres.setMatrixAt(i, dummy.matrix);
      instancedSpheres.setColorAt(i, colors[i]);
    }
    instancedSpheres.instanceMatrix.needsUpdate = true;
    if (instancedSpheres.instanceColor) instancedSpheres.instanceColor.needsUpdate = true;
    scene.add(instancedSpheres);

    // Dynamic Connection Lines (Neural Synapses)
    const linePositions = new Float32Array(MAX_CONNECTIONS * 6);
    const lineColors = new Float32Array(MAX_CONNECTIONS * 6);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const neuralLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(neuralLines);

    // Background Floating Cosmic Dust
    const DUST_COUNT = 70;
    const dustGeom = new THREE.BufferGeometry();
    const dustPos = new Float32Array(DUST_COUNT * 3);
    for (let i = 0; i < DUST_COUNT; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 52;
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 42;
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 4;
    }
    dustGeom.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.14,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const dust = new THREE.Points(dustGeom, dustMat);
    scene.add(dust);

    // Dynamic Studio Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 9, 50);
    cyanLight.position.set(10, 10, 15);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight(0xa855f7, 9, 50);
    violetLight.position.set(-10, -10, 15);
    scene.add(violetLight);

    // Mouse Tracking in 3D
    const mouse2D = new THREE.Vector2(-999, -999);
    const mouse3D = new THREE.Vector3(0, 0, 0);
    const targetMouse3D = new THREE.Vector3(0, 0, 0);
    const raycaster = new THREE.Raycaster();
    const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    const handleMouseMove = (e: MouseEvent) => {
      mouse2D.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse2D.y = -(e.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse2D, camera);
      const intersection = new THREE.Vector3();
      raycaster.ray.intersectPlane(planeZ, intersection);
      if (intersection) {
        targetMouse3D.copy(intersection);
      }
    };

    const handleMouseLeave = () => {
      mouse2D.set(-999, -999);
      targetMouse3D.set(-999, -999, 0);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!renderer || !camera) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Render loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Mouse smoothing
      mouse3D.lerp(targetMouse3D, 0.12);

      if (!prefersReducedMotion) {
        // Continuous rich organic wave motion across all nodes
        for (let i = 0; i < NODE_COUNT; i++) {
          const pos = positions[i];
          const base = basePositions[i];
          const vel = velocities[i];
          const phase = phases[i];

          // 1. Dynamic continuous wave floating motion (smooth Sine/Cosine 3D currents)
          const waveX = Math.sin(elapsedTime * 0.9 + phase + base.y * 0.15) * 0.65;
          const waveY = Math.cos(elapsedTime * 0.8 + phase + base.x * 0.15) * 0.65;
          const waveZ = Math.sin(elapsedTime * 0.7 + phase * 2) * 0.4;
          const targetHome = new THREE.Vector3(base.x + waveX, base.y + waveY, base.z + waveZ);

          // 2. Spring restoring force
          const force = targetHome.clone().sub(pos).multiplyScalar(0.045);
          vel.add(force);

          // 3. Dynamic Mouse Kinetic Push & Ripple
          if (mouse2D.x > -900) {
            const distToMouse = pos.distanceTo(mouse3D);
            const influenceRadius = 6.0;

            if (distToMouse < influenceRadius) {
              const repelStrength = (1 - distToMouse / influenceRadius) * 0.55;
              const repelDir = pos.clone().sub(mouse3D).normalize();
              vel.add(repelDir.multiplyScalar(repelStrength));
            }
          }

          // 4. Elastic Cohesion Tension with Nearby Neighbors (Chain Reaction)
          for (let j = 0; j < NODE_COUNT; j++) {
            if (i !== j) {
              const d = pos.distanceTo(positions[j]);
              if (d < 2.8 && d > 0.2) {
                const tension = (d - 2.0) * 0.005;
                const dir = positions[j].clone().sub(pos).normalize();
                vel.add(dir.multiplyScalar(tension));
              }
            }
          }

          // 5. Velocity damping & position update
          vel.multiplyScalar(0.9);
          pos.add(vel);

          // 6. Dynamic size breathing pulse
          const pulse = 1 + Math.sin(elapsedTime * 2.0 + phase) * 0.18;
          currentSizes[i] = baseSizes[i] * pulse;

          // Update instanced sphere
          dummy.position.copy(pos);
          dummy.scale.setScalar(currentSizes[i]);
          dummy.updateMatrix();
          instancedSpheres.setMatrixAt(i, dummy.matrix);
        }

        instancedSpheres.instanceMatrix.needsUpdate = true;

        // Dynamic Line Connections calculation with fast travelling electrical bursts
        let lineIdx = 0;
        const linePosAttr = lineGeometry.attributes.position as THREE.BufferAttribute;
        const lineColAttr = lineGeometry.attributes.color as THREE.BufferAttribute;
        const lPositions = linePosAttr.array as Float32Array;
        const lColors = lineColAttr.array as Float32Array;

        for (let i = 0; i < NODE_COUNT && lineIdx < MAX_CONNECTIONS; i++) {
          for (let j = i + 1; j < NODE_COUNT && lineIdx < MAX_CONNECTIONS; j++) {
            const dist = positions[i].distanceTo(positions[j]);
            if (dist < CONNECTION_DIST) {
              const alpha = (1 - dist / CONNECTION_DIST) * 0.8;

              // Fast travelling electrical synaptic signal
              const signal = (Math.sin(elapsedTime * 4.0 + i * 2 + j * 3) + 1) * 0.5;
              const r = 0.22 * alpha + signal * 0.25;
              const g = 0.74 * alpha + signal * 0.25;
              const b = 0.98 * alpha + signal * 0.1;

              // Point A
              lPositions[lineIdx * 6] = positions[i].x;
              lPositions[lineIdx * 6 + 1] = positions[i].y;
              lPositions[lineIdx * 6 + 2] = positions[i].z;

              lColors[lineIdx * 6] = r;
              lColors[lineIdx * 6 + 1] = g;
              lColors[lineIdx * 6 + 2] = b;

              // Point B
              lPositions[lineIdx * 6 + 3] = positions[j].x;
              lPositions[lineIdx * 6 + 4] = positions[j].y;
              lPositions[lineIdx * 6 + 5] = positions[j].z;

              lColors[lineIdx * 6 + 3] = r;
              lColors[lineIdx * 6 + 4] = g;
              lColors[lineIdx * 6 + 5] = b;

              lineIdx++;
            }
          }
        }

        // Clear unused connections
        for (let k = lineIdx * 6; k < MAX_CONNECTIONS * 6; k++) {
          lPositions[k] = 0;
          lColors[k] = 0;
        }

        lineGeometry.setDrawRange(0, lineIdx * 2);
        linePosAttr.needsUpdate = true;
        lineColAttr.needsUpdate = true;

        // Ambient dust float
        dust.rotation.y = elapsedTime * 0.02;
        dust.rotation.x = Math.sin(elapsedTime * 0.015) * 0.1;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);

      // Clean up Three.js resources
      baseSphereGeom.dispose();
      sphereMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      dustGeom.dispose();
      dustMat.dispose();
      renderer.dispose();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
