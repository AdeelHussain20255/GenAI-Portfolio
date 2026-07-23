"use client";

import { useRef, useEffect, type ReactNode } from "react";

interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

interface BouncingBallsProps {
  children?: ReactNode;
  numBalls?: number;
  minRadius?: number;
  maxRadius?: number;
  speed?: number;
  colors?: string[];
  backgroundColor?: string;
  interactive?: boolean;
  interactionRadius?: number;
  interactionScale?: number;
  followMouse?: boolean;
  className?: string;
}

export default function BouncingBalls({
  children,
  numBalls = 140,
  minRadius = 0.5,
  maxRadius = 2.2,
  speed = 0.4,
  colors = ["#E50914", "rgba(229, 9, 20, 0.4)", "#FFFFFF", "rgba(255, 255, 255, 0.25)", "#333333"],
  backgroundColor = "transparent",
  interactive = true,
  interactionRadius = 100,
  interactionScale = 2.5,
  followMouse = false,
  className = "",
}: BouncingBallsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ballsRef = useRef<Ball[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const rafRef = useRef(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { w, h };
    }

    resize();

    const balls: Ball[] = [];
    for (let i = 0; i < numBalls; i++) {
      const r = minRadius + Math.random() * (maxRadius - minRadius);
      balls.push({
        x: Math.random() * sizeRef.current.w,
        y: Math.random() * sizeRef.current.h,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        radius: r,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    ballsRef.current = balls;

    let animating = true;

    function draw() {
      if (!animating) return;
      const { w, h } = sizeRef.current;
      if (w === 0 || h === 0) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w, h);

      for (const ball of ballsRef.current) {
        ball.x += ball.vx;
        ball.y += ball.vy;

        if (ball.x - ball.radius < 0) { ball.x = ball.radius; ball.vx *= -1; }
        if (ball.x + ball.radius > w) { ball.x = w - ball.radius; ball.vx *= -1; }
        if (ball.y - ball.radius < 0) { ball.y = ball.radius; ball.vy *= -1; }
        if (ball.y + ball.radius > h) { ball.y = h - ball.radius; ball.vy *= -1; }

        if (interactive && mouseRef.current.active) {
          const dx = ball.x - mouseRef.current.x;
          const dy = ball.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < interactionRadius && dist > 0) {
            const force = (interactionRadius - dist) / interactionRadius * interactionScale;
            ball.x += (dx / dist) * force;
            ball.y += (dy / dist) * force;
          }
        }

        if (followMouse) {
          const dx = mouseRef.current.x - ball.x;
          const dy = mouseRef.current.y - ball.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 1) {
            ball.vx += dx * 0.002;
            ball.vy += dy * 0.002;
            const maxV = speed * 3;
            const v = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
            if (v > maxV) {
              ball.vx = (ball.vx / v) * maxV;
              ball.vy = (ball.vy / v) * maxV;
            }
          }
        }

        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = ball.color;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => resize());
    ro.observe(container);

    function onMouseDown(e: MouseEvent) {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    }

    function onMouseUp() {
      mouseRef.current.active = false;
    }

    function onMouseMove(e: MouseEvent) {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    }

    function onTouchStart(e: TouchEvent) {
      const rect = container.getBoundingClientRect();
      const t = e.touches[0];
      mouseRef.current = {
        x: t.clientX - rect.left,
        y: t.clientY - rect.top,
        active: true,
      };
    }

    function onTouchEnd() {
      mouseRef.current.active = false;
    }

    function onTouchMove(e: TouchEvent) {
      const rect = container.getBoundingClientRect();
      const t = e.touches[0];
      mouseRef.current.x = t.clientX - rect.left;
      mouseRef.current.y = t.clientY - rect.top;
    }

    if (interactive) {
      window.addEventListener("mousedown", onMouseDown);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchend", onTouchEnd);
      window.addEventListener("touchmove", onTouchMove, { passive: true });
    }

    if (followMouse || interactive) {
      window.addEventListener("mousemove", onMouseMove);
    }

    return () => {
      animating = false;
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [numBalls, minRadius, maxRadius, speed, colors, interactive, interactionRadius, interactionScale, followMouse]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ backgroundColor, minHeight: "100%" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />
      {children && (
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      )}
    </div>
  );
}
