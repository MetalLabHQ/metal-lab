export const languages = {
  en: "English",
  zh: "中文",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const translations = {
  en: {
    // Meta
    "meta.title": "Metal Lab — Learn Metal 4 API",
    "meta.description":
      "A beginner-friendly, step-by-step tutorial to Apple's Metal 4 GPU programming API.",

    // Nav
    "nav.tutorials": "Tutorials",
    "nav.github": "GitHub",
    "nav.cta": "Start Reading",
    "nav.theme.system": "System",
    "nav.theme.light": "Light",
    "nav.theme.dark": "Dark",

    // Hero
    "hero.badge": "Metal 4 API — Apple WWDC25",
    "hero.heading.main": "Metal Lab",
    "hero.heading.sub": "From Scratch Metal 4",
    "hero.heading.desc": "Graphics Programming",
    "hero.subtitle":
      "A beginner-friendly, step-by-step tutorial to Apple's next-generation GPU programming API. Build shaders, render pipelines, and real-time graphics — one chapter at a time.",
    "hero.cta.primary": "Start Reading",
    "hero.cta.secondary": "Explore Topics",

    // Features
    "features.heading": "What You'll Learn",
    "features.subtitle":
      "From how GPUs work to building full render pipelines — master Metal 4 graphics programming systematically.",

    "features.gpu.title": "GPU Fundamentals",
    "features.gpu.desc":
      "Understand how GPUs work, the rendering pipeline, and why Metal gives you direct control over Apple silicon.",
    "features.shaders.title": "Shader",
    "features.shaders.desc":
      "Write vertex and fragment shaders in MSL (Metal Shading Language). Learn to manipulate geometry and pixels on the GPU.",
    "features.pipelines.title": "Render Pipelines",
    "features.pipelines.desc":
      "Discover Metal 4's next-generation rendering architecture. Build command buffers, encoders, and pipeline states — master the full rendering flow from CPU to display.",
    "features.textures.title": "Textures & Sampling",
    "features.textures.desc":
      "Load images, create texture objects, and apply them to 3D models with configurable sampling and filtering.",
    "features.transforms.title": "3D Transforms",
    "features.transforms.desc":
      "Implement model-view-projection matrices and camera systems. Bring your scenes to life with spatial transformations.",
    "features.pbr.title": "PBR Rendering",
    "features.pbr.desc":
      "Master physically-based rendering — model realistic materials, lighting, and environment maps to create lifelike visuals.",
    "features.raytracing.title": "Ray Tracing",
    "features.raytracing.desc":
      "Trace rays on the GPU with Metal 4's ray tracing API. Build acceleration structures and render reflections, shadows, and global illumination.",
    // CTA
    "cta.heading": "Ready to Start?",
    "cta.subtitle":
      "The tutorial is free, open-access, and constantly updated. Jump in and write your first Metal shader today.",
    "cta.button": "Start Reading",

    // Footer
    "footer.tutorials": "Tutorials",
    "footer.appleDocs": "Apple Metal Docs",
    "footer.github": "GitHub",
    "footer.disclaimer":
      "Metal Lab is an independent educational project and is not affiliated with Apple Inc.",
  },

  zh: {
    // Meta
    "meta.title": "Metal Lab — 学习 Metal 4 API",
    "meta.description":
      "面向初学者的 Metal 4 GPU 编程教程，从零开始，循序渐进。",

    // Nav
    "nav.tutorials": "教程",
    "nav.github": "GitHub",
    "nav.cta": "开始阅读",
    "nav.theme.system": "跟随系统",
    "nav.theme.light": "浅色模式",
    "nav.theme.dark": "深色模式",

    // Hero
    "hero.badge": "Metal 4 API — Apple WWDC25",
    "hero.heading.main": "Metal Lab",
    "hero.heading.sub": "从零开始 Metal 4",
    "hero.heading.desc": "图形编程",
    "hero.subtitle":
      "面向初学者的 Apple 新一代 GPU 编程教程。逐章构建着色器、渲染管线与实时图形应用，循序渐进掌握 Metal 4。",
    "hero.cta.primary": "开始阅读",
    "hero.cta.secondary": "浏览主题",

    // Features
    "features.heading": "你将学到什么",
    "features.subtitle":
      "从 GPU 的工作原理到完整的渲染管线，系统性地掌握 Metal 4 图形编程。",

    "features.gpu.title": "GPU 基础概念",
    "features.gpu.desc":
      "理解 GPU 的工作原理、渲染管线的架构，以及 Metal 如何让你直接操控 Apple Silicon。",
    "features.shaders.title": "Shader",
    "features.shaders.desc":
      "使用 MSL（Metal Shading Language）编写顶点与片元着色器，学习在 GPU 上操控几何体与像素。",
    "features.pipelines.title": "渲染管线",
    "features.pipelines.desc":
      "认识 Metal 4 全新的渲染架构，构建命令缓冲区、编码器与管线状态，掌握从 CPU 到屏幕的完整渲染流程。",
    "features.textures.title": "纹理与采样",
    "features.textures.desc":
      "加载图像、创建纹理对象，并通过可配置的采样与过滤将其应用到 3D 模型上。",
    "features.transforms.title": "3D 变换",
    "features.transforms.desc":
      "实现模型-视图-投影矩阵和相机系统，通过空间变换让场景活起来。",
    "features.pbr.title": "PBR 渲染",
    "features.pbr.desc":
      "掌握基于物理的渲染——模拟真实材质、光照与环境贴图，创造逼真的视觉效果。",
    "features.raytracing.title": "光线追踪",
    "features.raytracing.desc":
      "使用 Metal 4 的光线追踪 API 在 GPU 上追踪光线，构建加速结构并渲染反射、阴影与全局光照。",
    // CTA
    "cta.heading": "准备好开始了吗？",
    "cta.subtitle":
      "本教程完全免费，持续更新，现在动手拒绝拖延。",
    "cta.button": "开始阅读",

    // Footer
    "footer.tutorials": "教程",
    "footer.appleDocs": "Apple Metal 文档",
    "footer.github": "GitHub",
    "footer.disclaimer":
      "Metal Lab 是独立的教学项目，与 Apple Inc. 没有任何关联。",
  },
} as const;
