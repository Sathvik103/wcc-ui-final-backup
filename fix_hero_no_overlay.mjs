import fs from 'fs';

let c = fs.readFileSync('components/HeroSection.tsx', 'utf8');

// Replace the InteractivePoster component entirely
const newPoster = `function InteractivePoster() {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-[1000px] w-full max-w-[440px] mx-auto lg:mr-0 lg:ml-auto mt-12 lg:mt-0">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full bg-white rounded-[28px] p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-black/5"
      >
        <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-6">
          <Image 
            src="/assets/images/poster_6_0.png" 
            alt="WCC 6.0 Official Poster" 
            fill 
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 440px"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="flex-1 bg-white border-2 border-ink/10 rounded-xl p-3 sm:p-4 text-left">
            <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-ink uppercase mb-1.5">Round 1 (Online)</div>
            <div className="text-[13px] sm:text-[14px] font-bold text-ink leading-tight">09 OCT 2026</div>
          </div>
          <div className="flex-1 bg-white border-2 border-ink/10 rounded-xl p-3 sm:p-4 text-left">
            <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-ink uppercase mb-1.5">Round 2 (Campus)</div>
            <div className="text-[13px] sm:text-[14px] font-bold text-ink leading-tight">11 OCT 2026 • VNRVJIET</div>
          </div>
        </div>

        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgba(255,255,255,0.4)] to-transparent pointer-events-none rounded-[28px]"
          style={{
            x: useTransform(mouseXSpring, [-0.5, 0.5], ["-50%", "50%"]),
            y: useTransform(mouseYSpring, [-0.5, 0.5], ["-50%", "50%"]),
          }}
        />
      </motion.div>
    </div>
  );
}`;

c = c.replace(/function InteractivePoster\(\) \{[\s\S]*?\}\n\nexport default function HeroSection/, newPoster + '\n\nexport default function HeroSection');

fs.writeFileSync('components/HeroSection.tsx', c, 'utf8');
console.log('HeroSection updated without overlays!');
