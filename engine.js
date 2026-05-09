/* ═══ LifeOS Cinematic Engine ═══ */

// ─── Custom Cursor ───
function initCursor(){
  const c=document.createElement('div');c.className='custom-cursor';document.body.appendChild(c);
  let mx=0,my=0,cx=0,cy=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
  (function loop(){cx+=(mx-cx)*0.15;cy+=(my-cy)*0.15;c.style.left=cx+'px';c.style.top=cy+'px';requestAnimationFrame(loop)})();
  document.querySelectorAll('a,button,.m-card,.c-feature,.c-page,.c-btn').forEach(el=>{
    el.addEventListener('mouseenter',()=>c.classList.add('hovering'));
    el.addEventListener('mouseleave',()=>c.classList.remove('hovering'));
  });
}

// ─── Scroll Reveal ───
function initReveal(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}});
  },{threshold:0.1,rootMargin:'0px 0px -60px 0px'});
  document.querySelectorAll('.c-reveal,.c-reveal-left').forEach(el=>obs.observe(el));
}

// ─── Counter Animation ───
function animateCounter(el,target,duration=2000){
  const start=performance.now();const end=start+duration;
  (function tick(now){
    const p=Math.min((now-start)/duration,1);const ease=1-Math.pow(1-p,4);
    el.textContent=Math.floor(ease*target).toLocaleString();
    if(p<1)requestAnimationFrame(tick);else el.textContent=target.toLocaleString()+'+';
  })(start);
}

function initCounters(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const t=parseInt(e.target.dataset.count)||0;
        animateCounter(e.target,t);obs.unobserve(e.target);
      }
    });
  },{threshold:0.5});
  document.querySelectorAll('[data-count]').forEach(el=>obs.observe(el));
}

// ─── Mouse Gradient on Hero ───
function initHeroGradient(color1='124,58,237',color2='6,182,212'){
  const hero=document.querySelector('.c-hero');if(!hero)return;
  hero.addEventListener('mousemove',e=>{
    const r=hero.getBoundingClientRect();
    const x=((e.clientX-r.left)/r.width*100).toFixed(1);
    const y=((e.clientY-r.top)/r.height*100).toFixed(1);
    hero.style.background=`radial-gradient(circle 600px at ${x}% ${y}%,rgba(${color1},0.08),transparent),radial-gradient(circle 400px at ${100-x}% ${100-y}%,rgba(${color2},0.05),transparent),var(--bg)`;
  });
}

// ─── Feature Card Glow ───
function initCardGlow(){
  document.querySelectorAll('.c-feature,.m-card').forEach(card=>{
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      card.style.setProperty('--gx',(e.clientX-r.left)+'px');
      card.style.setProperty('--gy',(e.clientY-r.top)+'px');
    });
  });
}

// ─── Loading Screen ───
function initLoader(){
  const l=document.querySelector('.c-loader');
  if(l)setTimeout(()=>l.classList.add('hidden'),1600);
}

// ─── Magnetic Buttons ───
function initMagnetic(){
  document.querySelectorAll('.c-btn').forEach(btn=>{
    btn.addEventListener('mousemove',e=>{
      const r=btn.getBoundingClientRect();
      const x=e.clientX-r.left-r.width/2;
      const y=e.clientY-r.top-r.height/2;
      btn.style.transform=`translate(${x*0.2}px,${y*0.2}px) scale(1.02)`;
    });
    btn.addEventListener('mouseleave',()=>{btn.style.transform=''});
  });
}

// ─── Marquee Duplication ───
function initMarquee(){
  document.querySelectorAll('.c-marquee-inner').forEach(m=>{
    m.innerHTML+=m.innerHTML; // duplicate for seamless loop
  });
}

// ─── Parallax on Scroll ───
function initParallax(){
  const els=document.querySelectorAll('[data-parallax]');
  if(!els.length)return;
  window.addEventListener('scroll',()=>{
    const sy=window.scrollY;
    els.forEach(el=>{
      const speed=parseFloat(el.dataset.parallax)||0.3;
      el.style.transform=`translateY(${sy*speed}px)`;
    });
  });
}

// ─── Text Split & Animate (for hero titles) ───
function splitText(selector){
  const el=document.querySelector(selector);if(!el)return;
  const text=el.textContent;
  el.innerHTML=text.split('').map((ch,i)=>
    ch===' '?'<span style="display:inline-block;width:0.3em">&nbsp;</span>':
    `<span style="display:inline-block;opacity:0;transform:translateY(40px);animation:revealUp 0.6s var(--ease) ${0.3+i*0.03}s forwards">${ch}</span>`
  ).join('');
}

// ─── Canvas Particle Background ───
function initParticles(canvasId, color='255,255,255'){
  const canvas=document.getElementById(canvasId);if(!canvas)return;
  const ctx=canvas.getContext('2d');
  let w,h,particles=[];
  function resize(){w=canvas.width=canvas.offsetWidth;h=canvas.height=canvas.offsetHeight}
  resize();window.addEventListener('resize',resize);
  for(let i=0;i<60;i++){
    particles.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.5+0.5,vx:(Math.random()-0.5)*0.3,vy:(Math.random()-0.5)*0.3,a:Math.random()*0.3+0.1});
  }
  (function draw(){
    ctx.clearRect(0,0,w,h);
    particles.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0)p.x=w;if(p.x>w)p.x=0;if(p.y<0)p.y=h;if(p.y>h)p.y=0;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(${color},${p.a})`;ctx.fill();
    });
    // draw lines between close particles
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const dx=particles[i].x-particles[j].x;const dy=particles[i].y-particles[j].y;
        const d=Math.sqrt(dx*dx+dy*dy);
        if(d<120){
          ctx.beginPath();ctx.moveTo(particles[i].x,particles[i].y);
          ctx.lineTo(particles[j].x,particles[j].y);
          ctx.strokeStyle=`rgba(${color},${0.05*(1-d/120)})`;ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  })();
}

// ─── Initialize All ───
function initEngine(opts={}){
  document.addEventListener('DOMContentLoaded',()=>{
    initLoader();
    initCursor();
    initReveal();
    initCounters();
    initCardGlow();
    initMagnetic();
    initMarquee();
    initParallax();
    if(opts.heroGradient!==false)initHeroGradient(opts.color1,opts.color2);
    if(opts.particles)initParticles(opts.particles,opts.particleColor);
  });
}
