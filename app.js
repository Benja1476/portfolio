/* =========================================================
   PORTFOLIO — app.js
   i18n dictionary + dynamic section builders + interactions
   ========================================================= */
(function(){
  "use strict";

  /* ---------------------------------------------------------
     1. i18n dictionary (static, data-i18n bound elements)
     --------------------------------------------------------- */
  const dict = {
    "brand.name": { en:"Benjamin", th:"Benjamin" },
    "nav.home": { en:"Home", th:"หน้าแรก" },
    "nav.about": { en:"About", th:"เกี่ยวกับผม" },
    "nav.skills": { en:"Skills", th:"ทักษะ" },
    "nav.products": { en:"Products", th:"ผลงาน" },
    "nav.architecture": { en:"Architecture", th:"สถาปัตยกรรม" },
    "nav.career": { en:"Career", th:"เป้าหมายอาชีพ" },
    "nav.contact": { en:"Contact", th:"ติดต่อ" },

    "hero.eyebrow": { en:"DATA • BI • AI • PRODUCT DEVELOPMENT", th:"DATA • BI • AI • PRODUCT DEVELOPMENT" },
    "hero.heading": { en:"I Build Data, AI &amp; Business Systems.", th:"ผมสร้างระบบข้อมูล ธุรกิจ และ AI" },
    "hero.lead": { en:"I build Data, Business Intelligence and AI systems that connect information, technology and business logic — turning them into solutions that work in production and grow into real products.", th:"ผมพัฒนาระบบ Data, Business Intelligence และ AI ที่เชื่อมต่อระหว่างข้อมูล เทคโนโลยี และ Business Logic เพื่อสร้าง Solution ที่สามารถนำไปใช้งานจริงและต่อยอดเป็น Product ได้" },
    "hero.cta.primary": { en:"View My Projects", th:"ดูผลงานของผม" },
    "hero.cta.secondary": { en:"Contact Me", th:"ติดต่อผม" },
    "hero.stat.products": { en:"Independent products in development", th:"Product ที่พัฒนาเองและกำลังเตรียมเปิดตัว" },
    "hero.stat.engines": { en:"Modular engines across the BI stack", th:"Engine แบบ Modular ในระบบ BI" },
    "hero.stat.industry": { en:"Years of manufacturing &amp; SAP domain grounding", th:"ปีของประสบการณ์ในสายงานผลิตและ SAP" },

    "about.eyebrow": { en:"About", th:"เกี่ยวกับผม" },
    "about.heading": { en:"More Than Data Analysis", th:"มากกว่าการวิเคราะห์ข้อมูล" },
    "about.p1": { en:"I'm interested in bringing data, AI and software development together to build systems that solve real business problems — not just dashboards that describe them.", th:"ผมสนใจการนำ Data, AI และ Software Development มาสร้างระบบที่สามารถแก้ปัญหาทางธุรกิจได้จริง ไม่ใช่แค่ Dashboard ที่บอกว่าปัญหาคืออะไร" },
    "about.flow": { en:"Problem → Data → Logic → Software → AI → Product", th:"Problem → Data → Logic → Software → AI → Product" },
    "about.p2": { en:"I don't limit myself to data analysis. I work end-to-end — from data processing, through application development, to a packaged product.", th:"ผมไม่ได้จำกัดตัวเองอยู่เฉพาะการวิเคราะห์ข้อมูล แต่สามารถพัฒนา Solution ตั้งแต่ระดับ Data Processing ไปจนถึง Application และ Product" },
    "about.card1.title": { en:"Data", th:"ข้อมูล" },
    "about.card1.desc": { en:"Analyzing and structuring data, KPIs and business metrics.", th:"วิเคราะห์และออกแบบข้อมูล KPI และ Business Metrics" },
    "about.card2.title": { en:"Technology", th:"เทคโนโลยี" },
    "about.card2.desc": { en:"Building software, dashboards, engines and business logic.", th:"พัฒนา Software, Dashboard, Engine และ Business Logic" },
    "about.card3.title": { en:"AI", th:"AI" },
    "about.card3.desc": { en:"Designing AI and AI-assisted business solutions.", th:"ออกแบบ AI และ AI-assisted Business Solutions" },
    "about.card4.title": { en:"Product", th:"Product" },
    "about.card4.desc": { en:"Turning a technical solution into a usable, sellable product.", th:"เปลี่ยน Technical Solution ให้กลายเป็น Product ที่สามารถใช้งานและจำหน่ายได้" },

    "skills.eyebrow": { en:"Core Skills", th:"ทักษะหลัก" },
    "skills.heading": { en:"A Full-Stack View of Data, BI &amp; AI", th:"มุมมองแบบ Full-Stack ของ Data, BI และ AI" },
    "skills.lead": { en:"Five layers that connect raw data to a working, decision-ready product.", th:"5 ชั้นของทักษะที่เชื่อมข้อมูลดิบไปจนถึง Product ที่พร้อมใช้ตัดสินใจ" },
    "skills.tab.data": { en:"Data &amp; Analytics", th:"Data &amp; Analytics" },
    "skills.tab.bi": { en:"BI &amp; Decision Systems", th:"BI &amp; Decision Systems" },
    "skills.tab.sw": { en:"Software Development", th:"Software Development" },
    "skills.tab.ai": { en:"AI", th:"AI" },
    "skills.tab.product": { en:"Product", th:"Product" },

    "build.eyebrow": { en:"What I Build", th:"สิ่งที่ผมสร้าง" },
    "build.heading": { en:"From Data to Working Products", th:"จากข้อมูลสู่ Product ที่ใช้งานได้จริง" },
    "build.lead": { en:"Every project moves through the same disciplined path. Tap a step to see what happens there.", th:"ทุกโปรเจกต์เดินตามขั้นตอนเดียวกัน กดที่แต่ละขั้นเพื่อดูรายละเอียด" },

    "products.eyebrow": { en:"Featured Products", th:"ผลงานเด่น" },
    "products.heading": { en:"Independent Products, Built End-to-End", th:"Product ที่พัฒนาเองแบบ End-to-End" },
    "products.lead": { en:"Two self-initiated products, each designed, engineered and packaged solo — from raw data to a decision-ready system.", th:"Product ที่ริเริ่มและพัฒนาเอง 2 ตัว ตั้งแต่การออกแบบ พัฒนา ไปจนถึงการแพ็กเกจ — จากข้อมูลดิบสู่ระบบที่พร้อมใช้ตัดสินใจ" },

    "status.dev": { en:"Product Development", th:"อยู่ระหว่างพัฒนา" },

    "p1.name": { en:"BizMind Enterprise Dashboard", th:"BizMind Enterprise Dashboard" },
    "p1.subtitle": { en:"Local-first Business Intelligence &amp; Decision Platform", th:"Local-first Business Intelligence &amp; Decision Platform" },
    "p1.role": { en:"Role: Product Developer / System Architect / BI Developer", th:"บทบาท: Product Developer / System Architect / BI Developer" },
    "p1.positioning": { en:"Business intelligence that runs from a single file — no server, no monthly subscription, no waiting on IT to approve access.", th:"Business intelligence ที่รันในไฟล์เดียว ไม่ต้องมี Server ไม่ต้องสมัครสมาชิกรายเดือน และไม่ต้องรอ IT อนุมัติ" },
    "p1.desc": { en:"BizMind is a business intelligence and decision-support system designed to let users bring in business data, process it, analyze KPIs, surface problems, run root-cause analysis, generate decisions and produce reports — all inside one system. It's built local-first: everything runs inside the user's own browser.", th:"BizMind เป็น Business Intelligence และ Decision Support System ที่ออกแบบให้ผู้ใช้สามารถนำข้อมูลธุรกิจเข้ามาประมวลผล วิเคราะห์ KPI ตรวจสอบปัญหา วิเคราะห์ Root Cause สร้าง Decision และสร้าง Reports ได้ภายในระบบเดียว ระบบออกแบบในลักษณะ Local-first โดยประมวลผลภายใน Browser ของผู้ใช้" },
    "p1.archTitle": { en:"System Architecture", th:"สถาปัตยกรรมระบบ" },
    "p1.featTitle": { en:"Key Features", th:"ฟีเจอร์หลัก" },
    "p1.techTitle": { en:"Technical Highlights", th:"จุดเด่นทางเทคนิค" },

    "p2.name": { en:"AI Business Advisor", th:"AI Business Advisor" },
    "p2.subtitle": { en:"AI-powered Business Analysis &amp; Decision Support", th:"AI-powered Business Analysis &amp; Decision Support" },
    "p2.role": { en:"Role: Product Developer / AI System Designer / Business Solution Developer", th:"บทบาท: Product Developer / AI System Designer / Business Solution Developer" },
    "p2.desc": { en:"AI Business Advisor is designed to use AI to help analyze data and support business decisions. It's built as a modular architecture, with responsibilities split across data analysis, business analysis, risk analysis and decision support — the goal is to move AI from a simple chatbot into a business assistant that can actually work with data and process.", th:"AI Business Advisor ถูกออกแบบเพื่อใช้ AI ช่วยวิเคราะห์ข้อมูลและสนับสนุนการตัดสินใจทางธุรกิจ ระบบออกแบบในลักษณะ Modular Architecture โดยแบ่งความรับผิดชอบออกเป็น Data Analysis, Business Analysis, Risk Analysis และ Decision Support เป้าหมายคือเปลี่ยน AI จากการเป็นเพียง Chatbot ให้กลายเป็น Business Assistant ที่ทำงานกับข้อมูลและกระบวนการทางธุรกิจได้จริง" },
    "p2.conceptTitle": { en:"Concept", th:"แนวคิด" },
    "p2.capTitle": { en:"System Capabilities", th:"ความสามารถของระบบ" },

    "arch.eyebrow": { en:"Technical Architecture", th:"สถาปัตยกรรมทางเทคนิค" },
    "arch.heading": { en:"One System, Five Layers", th:"หนึ่งระบบ ห้าชั้นการทำงาน" },
    "arch.lead": { en:"The same shape underlies every product I build — from raw input to a working product a person can use.", th:"โครงสร้างเดียวกันนี้อยู่เบื้องหลังทุก Product ที่ผมสร้าง ตั้งแต่ข้อมูลดิบไปจนถึง Product ที่ใช้งานได้จริง" },

    "cap.eyebrow": { en:"Product Development Capability", th:"ความสามารถด้าน Product Development" },
    "cap.heading": { en:"I Build End-to-End", th:"ผมทำงานแบบ End-to-End" },
    "cap.note": { en:"I can operate across most parts of a product's lifecycle — from analyzing a problem and designing a system, through building the software, to packaging a product and preparing it for a sales channel.", th:"ผมสามารถทำงานข้ามหลายส่วนของ Product ได้ ตั้งแต่การวิเคราะห์ปัญหาและออกแบบระบบ ไปจนถึงการพัฒนา Software, สร้าง Product และเตรียมช่องทางสำหรับจำหน่าย" },

    "diff.eyebrow": { en:"My Differentiator", th:"จุดที่แตกต่าง" },
    "diff.heading": { en:"Beyond Traditional Data Analysis", th:"มากกว่าการวิเคราะห์ข้อมูลแบบทั่วไป" },
    "diff.lead": { en:"I don't stop at building a dashboard or analyzing a dataset — I bring data, business logic, software and AI together into a system that works in the real world.", th:"ผมไม่ได้หยุดอยู่ที่การสร้าง Dashboard หรือวิเคราะห์ข้อมูล แต่นำ Data, Business Logic, Software และ AI มาประกอบกันเป็นระบบที่ใช้งานจริงได้" },
    "diff.thesis": { en:"I don't just analyze data. I build systems that turn data into decisions — and products.", th:"ผมไม่ได้เพียงวิเคราะห์ข้อมูล แต่เปลี่ยนข้อมูลและ Business Logic ให้กลายเป็นระบบ AI / BI ที่ใช้งานจริงและต่อยอดเป็น Product ได้" },

    "career.eyebrow": { en:"Career Direction", th:"ทิศทางอาชีพ" },
    "career.heading": { en:"What I'm Looking For", th:"สิ่งที่ผมกำลังมองหา" },
    "career.copy": { en:"I'm interested in opportunities where I can use data, AI, software and business understanding together — to build systems and solutions that make a real difference in how a team works.", th:"ผมสนใจโอกาสที่สามารถใช้ทั้ง Data, AI, Software และ Business Understanding เพื่อสร้างระบบหรือ Solution ที่มีผลต่อการทำงานจริง" },

    "contact.eyebrow": { en:"Contact", th:"ติดต่อ" },
    "contact.heading": { en:"Let's Build Something Useful", th:"มาสร้างสิ่งที่มีประโยชน์ด้วยกัน" },
    "contact.copy": { en:"If you're looking for someone who can connect data, technology, AI and business, I'd be glad to talk — about a project, a product, or a role.", th:"หากคุณกำลังมองหาคนที่สามารถเชื่อมต่อระหว่าง Data, Technology, AI และ Business ได้ ผมยินดีพูดคุยเกี่ยวกับ Project, Product หรือโอกาสในการร่วมงาน" },
    "contact.cta.primary": { en:"Contact Me", th:"ติดต่อผม" },
    "contact.cta.secondary": { en:"View Projects", th:"ดูผลงาน" },

    "footer.tagline": { en:"Data • BI • AI • Product Development", th:"Data • BI • AI • Product Development" },
    "footer.rights": { en:"All Rights Reserved.", th:"สงวนลิขสิทธิ์" }
  };

  /* ---------------------------------------------------------
     2. Dynamic content data (built into DOM via JS so the
        same array can drive TH/EN without duplicating markup)
     --------------------------------------------------------- */
  const skillGroups = {
    chipsData: { en:["Data Modeling","Data Cleaning","Data Validation","KPI Design","Business Analytics","Root Cause Analysis","Reporting","Data Visualization"],
                 th:["Data Modeling","Data Cleaning","Data Validation","KPI Design","Business Analytics","Root Cause Analysis","Reporting","Data Visualization"] },
    chipsBi:   { en:["Dashboard Development","KPI Engine","Rule Engine","Formula Engine","Decision Engine","Scenario Simulation","Audit Trail","Report Engine"],
                 th:["Dashboard Development","KPI Engine","Rule Engine","Formula Engine","Decision Engine","Scenario Simulation","Audit Trail","Report Engine"] },
    chipsSw:   { en:["HTML","CSS","JavaScript","Application Architecture","Business Logic","Data Processing","Browser-based Applications","Local-first Architecture","Modular System Design"],
                 th:["HTML","CSS","JavaScript","Application Architecture","Business Logic","Data Processing","Browser-based Applications","Local-first Architecture","Modular System Design"] },
    chipsAi:   { en:["AI Business Solutions","AI Workflow","AI Agent Architecture","AI-assisted Decision Support","Data + AI Integration","Automation"],
                 th:["AI Business Solutions","AI Workflow","AI Agent Architecture","AI-assisted Decision Support","Data + AI Integration","Automation"] },
    chipsProduct: { en:["Product Development","Product Architecture","Business Requirement Analysis","Product Positioning","Product Packaging","Website Development","Digital Product Sales"],
                 th:["Product Development","Product Architecture","Business Requirement Analysis","Product Positioning","Product Packaging","Website Development","Digital Product Sales"] }
  };

  const buildSteps = [
    { en:{ t:"Business Problem", d:"Start from a real, specific problem — not a generic data request." }, th:{ t:"ปัญหาทางธุรกิจ", d:"เริ่มจากปัญหาที่เกิดขึ้นจริง ไม่ใช่แค่คำขอข้อมูลทั่วไป" } },
    { en:{ t:"Data", d:"Identify and collect the data that actually describes the problem." }, th:{ t:"ข้อมูล", d:"ระบุและรวบรวมข้อมูลที่สะท้อนปัญหานั้นจริง ๆ" } },
    { en:{ t:"Analysis", d:"Clean, validate and explore the data to understand what's happening." }, th:{ t:"การวิเคราะห์", d:"ทำความสะอาด ตรวจสอบ และสำรวจข้อมูลเพื่อทำความเข้าใจสถานการณ์" } },
    { en:{ t:"Business Logic", d:"Translate the analysis into rules, formulas and decision criteria." }, th:{ t:"Business Logic", d:"แปลงผลวิเคราะห์ให้เป็น Rule, Formula และเกณฑ์การตัดสินใจ" } },
    { en:{ t:"Software", d:"Build the logic into a working application, not a one-off script." }, th:{ t:"Software", d:"พัฒนา Logic ให้กลายเป็นแอปพลิเคชันที่ใช้งานได้จริง ไม่ใช่แค่สคริปต์ครั้งเดียว" } },
    { en:{ t:"AI", d:"Layer AI in where it genuinely improves analysis or decision-making." }, th:{ t:"AI", d:"เพิ่ม AI เข้าไปในจุดที่ช่วยการวิเคราะห์หรือการตัดสินใจได้จริง" } },
    { en:{ t:"Decision", d:"Turn KPIs and rules into status, priority, risk and recommendations." }, th:{ t:"Decision", d:"เปลี่ยน KPI และ Rule ให้กลายเป็น Status, Priority, Risk และคำแนะนำ" } },
    { en:{ t:"Product", d:"Package the system so someone else can actually use it." }, th:{ t:"Product", d:"แพ็กเกจระบบให้คนอื่นสามารถนำไปใช้งานได้จริง" } }
  ];

  const bizmindPipeline = {
    en:["Data Input","Data Processing","Business Logic","Analysis & KPIs","Decision & Reporting","Output"],
    th:["Data Input","Data Processing","Business Logic","Analysis & KPIs","Decision & Reporting","Output"]
  };

  const bizmindFeatures = [
    { en:{h:"Data Handling", p:"Brings business data in, cleans it and checks it before use."}, th:{h:"Data Handling", p:"นำข้อมูลธุรกิจเข้าระบบ ทำความสะอาด และตรวจสอบก่อนใช้งาน"} },
    { en:{h:"Business Rules & KPIs", p:"Configurable rules and formulas calculate the KPIs that matter."}, th:{h:"Business Rules & KPIs", p:"Rule และ Formula ที่ปรับได้ ใช้คำนวณ KPI ที่สำคัญ"} },
    { en:{h:"Decision Support", p:"Turns KPIs into status, priority, risk and recommendations."}, th:{h:"Decision Support", p:"เปลี่ยน KPI ให้กลายเป็น Status, Priority, Risk และคำแนะนำ"} },
    { en:{h:"Dashboards by Function", p:"Views tailored for different roles across a business."}, th:{h:"Dashboards by Function", p:"มุมมอง Dashboard ที่ออกแบบให้เหมาะกับแต่ละบทบาทในองค์กร"} },
    { en:{h:"Investigation Tools", p:"Helps trace what's driving an abnormal result before acting on it."}, th:{h:"Investigation Tools", p:"ช่วยตรวจสอบสาเหตุของผลลัพธ์ที่ผิดปกติก่อนตัดสินใจ"} },
    { en:{h:"Reporting & Export", p:"Produces reports in common business formats."}, th:{h:"Reporting & Export", p:"สร้างรายงานในรูปแบบที่ใช้งานได้จริงทางธุรกิจ"} }
  ];

  const bizmindTech = [
    { en:{h:"Verifiable Logic", p:"Business logic is designed to be predictable and auditable."}, th:{h:"Verifiable Logic", p:"ออกแบบ Business Logic ให้ตรวจสอบและคาดเดาผลลัพธ์ได้"} },
    { en:{h:"Runs Client-side", p:"Core processing can happen entirely in the user's own browser."}, th:{h:"Runs Client-side", p:"ประมวลผลหลักสามารถทำงานได้ภายใน Browser ของผู้ใช้"} },
    { en:{h:"Modular Design", p:"Built as independent modules so it's easier to maintain and extend."}, th:{h:"Modular Design", p:"ออกแบบเป็นโมดูลอิสระ เพื่อให้ดูแลและต่อยอดง่าย"} }
  ];

  const advisorConcept = { en:["Business Data","Data Analysis","AI Analysis","Business Insight","Risk / Opportunity","Recommendation","Decision Support"],
                            th:["Business Data","Data Analysis","AI Analysis","Business Insight","Risk / Opportunity","Recommendation","Decision Support"] };

  const advisorCapabilities = { en:["Business Analysis","Data Analysis","AI-assisted Decision Making","Risk Analysis","Business Insight","Recommendation","Workflow Automation","AI Agent Architecture"],
                                 th:["Business Analysis","Data Analysis","AI-assisted Decision Making","Risk Analysis","Business Insight","Recommendation","Workflow Automation","AI Agent Architecture"] };

  const archLayers = [
    { en:{t:"Data Input", s:"Raw business data, in whatever format it arrives."}, th:{t:"Data Input", s:"ข้อมูลดิบทางธุรกิจ ไม่ว่าจะอยู่ในรูปแบบใด"} },
    { en:{t:"Data Processing", s:"Cleaning, validation and structuring."}, th:{t:"Data Processing", s:"การทำความสะอาด ตรวจสอบ และจัดโครงสร้างข้อมูล"} },
    { en:{t:"Business Logic", s:"Rules, formulas and domain-specific reasoning."}, th:{t:"Business Logic", s:"Rule, Formula และตรรกะเฉพาะของธุรกิจ"} },
    { en:{t:"BI / AI / Decision Engine", s:"KPIs, insight, risk scoring and recommendations."}, th:{t:"BI / AI / Decision Engine", s:"KPI, Insight, การให้คะแนนความเสี่ยง และคำแนะนำ"} },
    { en:{t:"User Experience", s:"Dashboards, reports and interaction."}, th:{t:"User Experience", s:"Dashboard, Report และการใช้งาน"} },
    { en:{t:"Product", s:"A packaged system, ready to use.", final:true}, th:{t:"Product", s:"ระบบที่แพ็กเกจแล้ว พร้อมใช้งาน", final:true} }
  ];

  const capTimeline = [
    { en:"Problem", th:"ปัญหา" },{ en:"Requirement", th:"Requirement" },{ en:"Architecture", th:"Architecture" },
    { en:"Development", th:"Development" },{ en:"Data / AI Logic", th:"Data / AI Logic" },{ en:"UI / Dashboard", th:"UI / Dashboard" },
    { en:"Testing", th:"Testing" },{ en:"Product Packaging", th:"Product Packaging" },{ en:"Website", th:"Website" },{ en:"Commercialization", th:"Commercialization" }
  ];

  const diffCards = [
    { en:{t:"Data", p:"Understanding data and KPIs."}, th:{t:"Data", p:"เข้าใจข้อมูลและ KPI"} },
    { en:{t:"Engineering", p:"Building systems and business logic."}, th:{t:"Engineering", p:"สร้างระบบและ Business Logic"} },
    { en:{t:"AI", p:"Using AI to help analyze and decide."}, th:{t:"AI", p:"นำ AI เข้ามาช่วยวิเคราะห์และตัดสินใจ"} },
    { en:{t:"Product", p:"Turning a solution into a product."}, th:{t:"Product", p:"เปลี่ยน Solution ให้เป็น Product"} },
    { en:{t:"Business", p:"Understanding what a user actually needs solved."}, th:{t:"Business", p:"เข้าใจว่าระบบต้องแก้ปัญหาอะไรให้ผู้ใช้"} }
  ];

  const careerRoles = { en:["Data Analyst","BI Analyst","BI Developer","Business Analyst","Product Analyst","Analytics Engineer","Data Engineer","AI / Automation Developer","AI Business Solutions Developer","AI Product Developer","Data & AI Product Developer"],
                         th:["Data Analyst","BI Analyst","BI Developer","Business Analyst","Product Analyst","Analytics Engineer","Data Engineer","AI / Automation Developer","AI Business Solutions Developer","AI Product Developer","Data & AI Product Developer"] };

  /* ---------------------------------------------------------
     3. State
     --------------------------------------------------------- */
  const root = document.documentElement;
  let lang = localStorage.getItem("portfolio-lang") || "en";
  let theme = localStorage.getItem("portfolio-theme") || "dark";

  /* ---------------------------------------------------------
     4. Renderers
     --------------------------------------------------------- */
  function applyStaticText(){
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      const entry = dict[key];
      if(entry) el.innerHTML = entry[lang] || entry.en;
    });
    document.documentElement.lang = lang;
  }

  function chipList(id, items){
    const el = document.getElementById(id);
    if(!el) return;
    el.innerHTML = items[lang].map(s => `<span class="skill-chip"><span class="dot"></span>${s}</span>`).join("");
  }

  function renderSkills(){
    Object.keys(skillGroups).forEach(id => chipList(id, skillGroups[id]));
  }

  function renderBuildFlow(){
    const wrap = document.getElementById("buildFlow");
    if(!wrap) return;
    wrap.innerHTML = buildSteps.map((step,i)=>{
      const d = step[lang];
      return `<div class="build-step" data-idx="${i}">
        <span class="idx">${String(i+1).padStart(2,"0")}</span>
        <div class="content">
          <h4>${d.t} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 6l6 6-6 6"/></svg></h4>
          <div class="detail">${d.d}</div>
        </div>
      </div>`;
    }).join("");
    wrap.querySelectorAll(".build-step").forEach(node=>{
      node.addEventListener("click", ()=> node.classList.toggle("open"));
    });
  }

  function renderPipeline(){
    const wrap = document.getElementById("bizmindPipeline");
    if(!wrap) return;
    wrap.innerHTML = bizmindPipeline[lang].map(label=>
      `<div class="pipeline-node"><span class="node-dot"></span><span class="node-box">${label}</span></div>`
    ).join("");
  }

  function renderFeatureGrid(id, items){
    const wrap = document.getElementById(id);
    if(!wrap) return;
    wrap.innerHTML = items.map(item=>{
      const d = item[lang];
      return `<div class="feature-card"><h5>${d.h}</h5><p>${d.p}</p></div>`;
    }).join("");
  }

  function renderTechGrid(id, items){
    const wrap = document.getElementById(id);
    if(!wrap) return;
    wrap.innerHTML = items.map(item=>{
      const d = item[lang];
      return `<div class="tech-card"><h5>${d.h}</h5><p>${d.p}</p>${d.code ? `<code>${d.code}</code>` : ""}</div>`;
    }).join("");
  }

  function renderConceptFlow(){
    const wrap = document.getElementById("advisorConcept");
    if(!wrap) return;
    wrap.innerHTML = advisorConcept[lang].map((s,i,arr)=>
      `<span class="concept-step">${s}</span>${i<arr.length-1 ? '<span class="concept-arrow">→</span>' : ''}`
    ).join("");
  }

  function renderTagGrid(id, items){
    const wrap = document.getElementById(id);
    if(!wrap) return;
    wrap.innerHTML = items[lang].map(s => `<span class="tag-pill">${s}</span>`).join("");
  }

  function renderArch(){
    const wrap = document.getElementById("archDiagram");
    if(!wrap) return;
    wrap.innerHTML = archLayers.map((layer,i)=>{
      const d = layer[lang];
      const box = `<div class="arch-box${d.final?' final':''}">${d.t}<span class="sub">${d.s}</span></div>`;
      const connector = i < archLayers.length-1 ? `<div class="arch-connector"><span class="pulse-dot" style="animation-delay:${(i*0.4).toFixed(1)}s"></span></div>` : "";
      return box + connector;
    }).join("");
  }

  function renderCapTimeline(){
    const wrap = document.getElementById("capTimeline");
    if(!wrap) return;
    wrap.innerHTML = capTimeline.map((step,i)=>
      `<div class="timeline-item"><span class="num">${String(i+1).padStart(2,"0")}</span><h5>${step[lang]}</h5></div>`
    ).join("");
    observeReveal(wrap.querySelectorAll(".timeline-item"));
  }

  function renderDiffGrid(){
    const wrap = document.getElementById("diffGrid");
    if(!wrap) return;
    wrap.innerHTML = diffCards.map((c,i)=>{
      const d = c[lang];
      return `<div class="diff-card"><span class="n">${String(i+1).padStart(2,"0")}</span><h5>${d.t}</h5><p>${d.p}</p></div>`;
    }).join("");
  }

  function renderRoles(){
    const wrap = document.getElementById("roleList");
    if(!wrap) return;
    wrap.innerHTML = careerRoles[lang].map(r => `<span class="role-chip">${r}</span>`).join("");
  }

  function renderAll(){
    applyStaticText();
    renderSkills();
    renderBuildFlow();
    renderPipeline();
    renderFeatureGrid("bizmindFeatures", bizmindFeatures);
    renderTechGrid("bizmindTech", bizmindTech);
    renderConceptFlow();
    renderTagGrid("advisorCapabilities", advisorCapabilities);
    renderArch();
    renderCapTimeline();
    renderDiffGrid();
    renderRoles();
  }

  /* ---------------------------------------------------------
     5. Theme + language toggles
     --------------------------------------------------------- */
  function applyTheme(){
    root.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }
  document.getElementById("themeToggle").addEventListener("click", ()=>{
    theme = theme === "dark" ? "light" : "dark";
    applyTheme();
  });

  function applyLang(){
    root.setAttribute("data-lang", lang);
    localStorage.setItem("portfolio-lang", lang);
    renderAll();
  }
  document.getElementById("langToggle").addEventListener("click", ()=>{
    lang = lang === "en" ? "th" : "en";
    applyLang();
  });

  /* ---------------------------------------------------------
     6. Mobile menu
     --------------------------------------------------------- */
  const menuBtn = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  menuBtn.addEventListener("click", ()=>{
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  navLinks.querySelectorAll("a").forEach(a=>{
    a.addEventListener("click", ()=>{
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded","false");
    });
  });

  /* ---------------------------------------------------------
     7. Scroll progress + active nav section
     --------------------------------------------------------- */
  const progressBar = document.getElementById("scrollProgress");
  const sections = Array.from(document.querySelectorAll("main section, main#home"));
  const navAnchors = Array.from(document.querySelectorAll(".nav-links a"));

  function onScroll(){
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (docHeight > 0 ? (scrollTop/docHeight)*100 : 0) + "%";

    let currentId = "home";
    const probe = scrollTop + window.innerHeight * 0.3;
    document.querySelectorAll("main section[id]").forEach(sec=>{
      if(sec.offsetTop <= probe) currentId = sec.id;
    });
    if(scrollTop < 80) currentId = "home";
    navAnchors.forEach(a=>{
      a.classList.toggle("active", a.getAttribute("href") === "#"+currentId);
    });
  }
  window.addEventListener("scroll", onScroll, { passive:true });

  /* ---------------------------------------------------------
     8. Reveal-on-scroll (IntersectionObserver)
     --------------------------------------------------------- */
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.15, rootMargin:"0px 0px -60px 0px" });

  function observeReveal(nodeList){
    nodeList.forEach(n => io.observe(n));
  }

  function initReveal(){
    observeReveal(document.querySelectorAll(".reveal, .reveal-stagger"));
  }

  /* ---------------------------------------------------------
     9. Number counters
     --------------------------------------------------------- */
  function animateCounters(){
    document.querySelectorAll("[data-count]").forEach(el=>{
      const target = parseInt(el.getAttribute("data-count"),10);
      const suffix = el.getAttribute("data-suffix") || "";
      const dur = 1400;
      const start = performance.now();
      function tick(now){
        const p = Math.min(1,(now-start)/dur);
        const eased = 1 - Math.pow(1-p,3);
        el.textContent = Math.round(target*eased) + suffix;
        if(p<1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  /* ---------------------------------------------------------
     10. Hero flow-dot animation (simple loop along SVG path)
     --------------------------------------------------------- */
  function animateFlowDot(){
    const dot = document.getElementById("flowDot");
    if(!dot) return;
    const points = [[90,60],[90,160],[230,210],[230,300],[230,370],[230,300],[230,210],[370,160],[370,60],[230,210]];
    let i = 0;
    function step(){
      const [x,y] = points[i % points.length];
      dot.setAttribute("cx", x);
      dot.setAttribute("cy", y);
      i++;
      setTimeout(step, 650);
    }
    step();
  }

  /* ---------------------------------------------------------
     11. Content protection (deterrent-level only)
     Blocks casual right-click / copy / devtools shortcuts and
     shows a toast. This cannot stop a determined person from
     viewing page source — it just raises the bar for casual
     copy-pasting of the page content.
     --------------------------------------------------------- */
  function initContentProtection(){
    var toast = document.getElementById("copyToast");
    var toastTimer = null;
    function showToast(){
      if(!toast) return;
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function(){ toast.classList.remove("show"); }, 1800);
    }

    document.addEventListener("contextmenu", function(e){
      if(e.target.closest("[data-selectable]")) return;
      e.preventDefault();
      showToast();
    });

    document.addEventListener("copy", function(e){
      if(e.target.closest && e.target.closest("[data-selectable], .contact-box, input, textarea")) return;
      e.preventDefault();
      showToast();
    });

    document.addEventListener("dragstart", function(e){
      if(e.target.tagName === "IMG" || e.target.tagName === "SVG") e.preventDefault();
    });

    document.addEventListener("keydown", function(e){
      var k = e.key ? e.key.toLowerCase() : "";
      var blockCombo = (e.ctrlKey || e.metaKey) && (k === "u" || k === "s" || (e.shiftKey && (k === "i" || k === "j" || k === "c")));
      if(k === "f12" || blockCombo){
        e.preventDefault();
        showToast();
      }
    });

    console.log("%cContent on this site is © Benjamin. Please don't copy or redistribute without permission.", "color:#7dd3c8;font-weight:600;font-size:12px;");
  }

  /* ---------------------------------------------------------
     12. Boot
     --------------------------------------------------------- */
  applyTheme();
  root.setAttribute("data-lang", lang);
  renderAll();
  initReveal();
  onScroll();
  animateCounters();
  animateFlowDot();
  initContentProtection();

})();
