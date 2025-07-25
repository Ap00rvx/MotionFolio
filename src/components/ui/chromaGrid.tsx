import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";

export interface ChromaItem {
  title: string;
  period?: string;
  description: string;
  technologies?: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  subtitle?: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

type SetterFn = (v: number | string) => void;

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo: ChromaItem[] = [
    {
      image: "https://i.pravatar.cc/300?img=8",
      title: "Alex Rivera",
      subtitle: "Full Stack Developer",
      description: "Building modern web applications with React and Node.js",
      handle: "@alexrivera",
      borderColor: "#FF6B6B",
      gradient: "linear-gradient(145deg, #FF6B6B, #4A0E0E)",
      url: "https://github.com/",
      featured: true,
    },
    {
      image: "https://i.pravatar.cc/300?img=11",
      title: "Jordan Chen",
      subtitle: "DevOps Engineer",
      description: "Cloud infrastructure and automation specialist",
      handle: "@jordanchen",
      borderColor: "#4ECDC4",
      gradient: "linear-gradient(210deg, #4ECDC4, #0E3A38)",
      url: "https://linkedin.com/in/",
    },
    {
      image: "https://i.pravatar.cc/300?img=3",
      title: "Morgan Blake",
      subtitle: "UI/UX Designer",
      description: "Creating beautiful and intuitive user experiences",
      handle: "@morganblake",
      borderColor: "#FFD93D",
      gradient: "linear-gradient(165deg, #FFD93D, #4A3F0E)",
      url: "https://dribbble.com/",
      featured: true,
    },
    {
      image: "https://i.pravatar.cc/300?img=16",
      title: "Casey Park",
      subtitle: "Data Scientist",
      description: "Machine learning and data analytics expert",
      handle: "@caseypark",
      borderColor: "#FF8C42",
      gradient: "linear-gradient(195deg, #FF8C42, #4A240E)",
      url: "https://kaggle.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=25",
      title: "Sam Kim",
      subtitle: "Mobile Developer",
      description: "iOS and Android app development specialist",
      handle: "@thesamkim",
      borderColor: "#6B5B95",
      gradient: "linear-gradient(225deg, #6B5B95, #1F1A34)",
      url: "https://github.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=60",
      title: "Tyler Rodriguez",
      subtitle: "Cloud Architect",
      description: "Designing scalable cloud infrastructure solutions",
      handle: "@tylerrod",
      borderColor: "#88B04B",
      gradient: "linear-gradient(135deg, #88B04B, #263314)",
      url: "https://aws.amazon.com/",
    },
  ];

  const data = items?.length ? items : demo;

  const sortedData = [...data].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  const getProjectGradient = (index: number) => {
    const gradients = [
      "linear-gradient(145deg, #FF6B6B, #4A0E0E)",
      "linear-gradient(210deg, #4ECDC4, #0E3A38)",
      "linear-gradient(165deg, #FFD93D, #4A3F0E)",
      "linear-gradient(195deg, #FF8C42, #4A240E)",
      "linear-gradient(225deg, #6B5B95, #1F1A34)",
      "linear-gradient(135deg, #88B04B, #263314)",
    ];
    return gradients[index % gradients.length];
  };

  const getBorderColor = (index: number) => {
    const colors = ["#FF6B6B", "#4ECDC4", "#FFD93D", "#FF8C42", "#6B5B95", "#88B04B"];
    return colors[index % colors.length];
  };

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px") as SetterFn;
    setY.current = gsap.quickSetter(el, "--y", "px") as SetterFn;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (item: ChromaItem) => {
    const url = item.liveUrl || item.githubUrl || item.url;
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.4,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full min-h-screen p-4 ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--x": "50%",
          "--y": "50%",
        } as React.CSSProperties
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
        {sortedData.map((c, i) => {
          const isFeatured = c.featured;
          const cardClasses = isFeatured
            ? "md:col-span-2 md:row-span-2 min-h-[450px]"
            : i % 3 === 0
            ? "md:col-span-2 min-h-[280px]"
            : i % 4 === 1
            ? "md:row-span-2 min-h-[350px]"
            : "min-h-[280px]";

          return (
            <motion.article
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              onMouseMove={handleCardMove}
              onClick={() => handleCardClick(c)}
              className={`group relative flex flex-col rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer ${cardClasses}`}
              style={
                {
                  "--card-border": c.borderColor || getBorderColor(i),
                  background: c.gradient || getProjectGradient(i),
                  "--spotlight-color": "rgba(255,255,255,0.2)",
                } as React.CSSProperties
              }
            >
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
                }}
              />
              <div className={`relative z-10 p-[10px] box-border ${isFeatured ? 'h-[250px]' : 'h-[160px]'}`}>
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-[10px]"
                />
                {isFeatured && (
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-xs font-semibold">Featured</span>
                  </div>
                )}
              </div>
              <footer className="relative z-10 p-4 text-white font-sans flex-grow">
                <h3 className={`m-0 font-semibold mb-2 ${isFeatured ? 'text-[1.2rem]' : 'text-[1.05rem]'}`}>
                  {c.title}
                </h3>
                {c.period && (
                  <span className="text-[0.85rem] opacity-80 mb-2 block">
                    {c.period}
                  </span>
                )}
                <p className={`m-0 opacity-85 mb-3 leading-relaxed ${isFeatured ? 'text-[0.9rem]' : 'text-[0.85rem]'}`}>
                  {c.description}
                </p>
                {c.technologies && c.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {c.technologies.slice(0, isFeatured ? 6 : 4).map((tech, i) => (
                      <span key={i} className="text-[0.7rem] bg-white/20 px-2 py-1 rounded-full whitespace-nowrap">
                        {tech}
                      </span>
                    ))}
                    {c.technologies.length > (isFeatured ? 6 : 4) && (
                      <span className="text-[0.7rem] opacity-70">
                        +{c.technologies.length - (isFeatured ? 6 : 4)} more
                      </span>
                    )}
                  </div>
                )}
                {c.subtitle && (
                  <span className="text-[0.85rem] opacity-85">{c.subtitle}</span>
                )}
              </footer>
            </motion.article>
          );
        })}
      </div>
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
        }}
      />
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          opacity: 1,
        }}
      />
    </div>
  );
};

export default ChromaGrid;