import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

const skills = [
  "React", "TypeScript", "Next.js", "Node.js", "TailwindCSS",
  "Three.js", "Framer Motion", "PostgreSQL", "GraphQL", "Docker",
  "AWS", "Git", "Figma", "UI/UX", "System Design",
  "Flutter", "Dart", "Firebase", "Bloc", "Riverpod",
  "Python", "FastAPI", "C++", "Java", "SQL"
];

const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isInView, setIsInView] = useState(false);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);

  const bodiesRef = useRef<Map<string, Matter.Body>>(new Map());
  const [skillElements, setSkillElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || !containerRef.current || !canvasRef.current) return;

    if (engineRef.current) {
      Matter.World.clear(engineRef.current.world, false);
      Matter.Engine.clear(engineRef.current);
    }

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const engine = Matter.Engine.create();
    const world = engine.world;
    engineRef.current = engine;

    const render = Matter.Render.create({
      element: containerRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width,
        height,
        background: "transparent",
        wireframes: false,
        showAngleIndicator: false
      }
    });
    renderRef.current = render;

    // Walls - keep chips in the box
    const wallThickness = 100;
    const wallOptions = {
      isStatic: true,
      render: { visible: false }
    };

    const ground = Matter.Bodies.rectangle(width / 2, height - wallThickness / 2, width, wallThickness, wallOptions);
    const leftWall = Matter.Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, wallOptions);
    const rightWall = Matter.Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, wallOptions);

    Matter.World.add(world, [ground, leftWall, rightWall]);

    // Skill Bodies
    const newSkillElements: JSX.Element[] = [];

    skills.forEach((skill) => {
      const x = Math.random() * (width - 200) + 100;
      const y = -Math.random() * 500 - 100;

      const charWidth = 10;
      const padding = 40;
      const bodyWidth = skill.length * charWidth + padding;
      const bodyHeight = 50;

      const body = Matter.Bodies.rectangle(x, y, bodyWidth, bodyHeight, {
        restitution: 0.6,
        friction: 0.1,
        chamfer: { radius: 25 },
        render: { visible: false }
      });

      bodiesRef.current.set(skill, body);
      Matter.World.add(world, body);

      newSkillElements.push(
        <div
          key={skill}
          id={`skill-${skill}`}
          className="absolute top-0 left-0 bg-card border border-border text-foreground px-6 py-3 rounded-full shadow-sm font-medium whitespace-nowrap select-none pointer-events-none flex items-center justify-center"
          style={{
            width: `${bodyWidth}px`,
            height: `${bodyHeight}px`,
            transform: `translate(${x}px, ${y}px)`
          }}
        >
          {skill}
        </div>
      );
    });

    setSkillElements(newSkillElements);

    // Mouse Control
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.8,
        render: { visible: false }
      }
    });

    Matter.World.add(world, mouseConstraint);
    render.mouse = mouse;

    // Runner
    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    // Sync Loop
    let animationFrameId: number;
    const updateLoop = () => {
      bodiesRef.current.forEach((body, skill) => {
        const element = document.getElementById(`skill-${skill}`);
        if (element) {
          const { x, y } = body.position;
          const rotation = body.angle;
          element.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}rad) translate(-50%, -50%)`;
        }
      });
      animationFrameId = requestAnimationFrame(updateLoop);
    };
    updateLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      if (engineRef.current) {
        Matter.World.clear(engineRef.current.world, false);
        Matter.Engine.clear(engineRef.current);
      }
    };
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-background overflow-hidden py-20"
    >
      <div className="container mx-auto px-6 mb-12 text-center relative z-10 pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tighter">
          Technical Skills
        </h2>
        <div className="h-1 w-24 bg-foreground mx-auto rounded-full mb-6" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A collection of technologies I've worked with. Drag them around!
        </p>
      </div>

      {/* Physics Container */}
      <div className="absolute inset-0 w-full h-full">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing"
          style={{ opacity: 0.01 }}
        />
        {/* HTML Overlay for Skills */}
        {skillElements}
      </div>
    </section>
  );
};

export default SkillsSection;