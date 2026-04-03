"use client";

export function CodingBoy() {
  return (
    <svg
      viewBox="0 0 500 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[520px]"
      aria-hidden
    >
      {/* ── subtle + decorations ── */}
      <text x="22"  y="55"  fill="#6ee7b7" fontSize="14" opacity="0.2">+</text>
      <text x="440" y="68"  fill="#6ee7b7" fontSize="14" opacity="0.2">+</text>
      <text x="44"  y="360" fill="#6ee7b7" fontSize="14" opacity="0.2">+</text>
      <text x="418" y="375" fill="#6ee7b7" fontSize="14" opacity="0.2">+</text>
      <circle cx="70"  cy="42" r="2"   fill="#6ee7b7" opacity="0.28"/>
      <circle cx="86"  cy="32" r="1.4" fill="#6ee7b7" opacity="0.2"/>
      <circle cx="100" cy="24" r="1.6" fill="#6ee7b7" opacity="0.15"/>

      {/* ══════════════════════
          DESK
      ══════════════════════ */}
      <rect x="20" y="278" width="460" height="10" rx="5" fill="#0f1f30"/>
      {/* desk edge highlight */}
      <rect x="20" y="278" width="460" height="2"  rx="1" fill="#1a3a52" opacity="0.6"/>

      {/* ══════════════════════
          MONITOR
      ══════════════════════ */}
      <rect x="148" y="100" width="204" height="168" rx="8" fill="#0d1f2d" stroke="#1e3a52" strokeWidth="1.5"/>
      <rect x="158" y="110" width="184" height="148" rx="5" fill="#060e18"/>
      {/* title bar */}
      <rect x="158" y="110" width="184" height="15" rx="5" fill="#0f1f30"/>
      <circle cx="171" cy="117" r="3.2" fill="#ff5f57"/>
      <circle cx="182" cy="117" r="3.2" fill="#febc2e"/>
      <circle cx="193" cy="117" r="3.2" fill="#28c840"/>
      <text x="206" y="121" fill="#1e3a52" fontSize="8" fontFamily="monospace">portfolio.tsx</text>

      {/* code lines — fast staggered fade-in */}
      <rect x="166" y="134" width="48" height="5" rx="2" fill="#6ee7b7" opacity="0">
        <animate attributeName="opacity" values="0;0.9" dur="0.15s" begin="0.05s" fill="freeze"/>
      </rect>
      <rect x="166" y="145" width="72" height="5" rx="2" fill="#a5b4fc" opacity="0">
        <animate attributeName="opacity" values="0;0.75" dur="0.15s" begin="0.2s" fill="freeze"/>
      </rect>
      <rect x="174" y="156" width="60" height="5" rx="2" fill="#fde68a" opacity="0">
        <animate attributeName="opacity" values="0;0.72" dur="0.15s" begin="0.35s" fill="freeze"/>
      </rect>
      <rect x="174" y="167" width="44" height="5" rx="2" fill="#fca5a5" opacity="0">
        <animate attributeName="opacity" values="0;0.68" dur="0.15s" begin="0.5s" fill="freeze"/>
      </rect>
      <rect x="166" y="178" width="68" height="5" rx="2" fill="#6ee7b7" opacity="0">
        <animate attributeName="opacity" values="0;0.8" dur="0.15s" begin="0.65s" fill="freeze"/>
      </rect>
      <rect x="166" y="189" width="34" height="5" rx="2" fill="#a5f3fc" opacity="0">
        <animate attributeName="opacity" values="0;0.72" dur="0.15s" begin="0.8s" fill="freeze"/>
      </rect>
      <rect x="166" y="200" width="80" height="5" rx="2" fill="#a5b4fc" opacity="0">
        <animate attributeName="opacity" values="0;0.65" dur="0.15s" begin="0.95s" fill="freeze"/>
      </rect>
      <rect x="166" y="211" width="55" height="5" rx="2" fill="#fde68a" opacity="0">
        <animate attributeName="opacity" values="0;0.68" dur="0.15s" begin="1.1s" fill="freeze"/>
      </rect>
      {/* blinking cursor */}
      <rect x="166" y="224" width="6" height="10" rx="1" fill="#6ee7b7">
        <animate attributeName="opacity" values="1;0;1" dur="0.9s" repeatCount="indefinite"/>
      </rect>
      {/* scrollbar */}
      <rect x="336" y="126" width="4" height="126" rx="2" fill="#0f1f30"/>
      <rect x="336" y="140" width="4" height="32"  rx="2" fill="#1e3a52"/>

      {/* monitor stand */}
      <rect x="237" y="268" width="26" height="14" rx="2" fill="#0f1f30"/>
      <rect x="218" y="281" width="64" height="7"  rx="3" fill="#0d1f2d"/>

      {/* ══════════════════════
          COFFEE CUP  (right of keyboard)
      ══════════════════════ */}
      {/* saucer */}
      <ellipse cx="400" cy="278" rx="22" ry="5" fill="#0f1f30"/>
      {/* cup body */}
      <path d="M384 258 Q384 278 400 278 Q416 278 416 258 Z" fill="#1a3044"/>
      <path d="M384 258 L416 258" stroke="#1e3a52" strokeWidth="1.2"/>
      {/* coffee surface */}
      <ellipse cx="400" cy="258" rx="16" ry="4" fill="#2a1a0a"/>
      <ellipse cx="400" cy="258" rx="10" ry="2.5" fill="#3d2510" opacity="0.8"/>
      {/* handle */}
      <path d="M416 262 Q428 262 428 268 Q428 274 416 274" stroke="#1e3a52" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* steam wisps */}
      <path d="M394 252 Q392 246 394 240" stroke="#6ee7b7" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="d" values="M394 252 Q392 246 394 240;M394 252 Q396 246 394 240;M394 252 Q392 246 394 240" dur="2s" repeatCount="indefinite"/>
      </path>
      <path d="M400 250 Q398 243 400 236" stroke="#6ee7b7" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.08;0.3" dur="2.4s" repeatCount="indefinite"/>
        <animate attributeName="d" values="M400 250 Q398 243 400 236;M400 250 Q402 243 400 236;M400 250 Q398 243 400 236" dur="2.4s" repeatCount="indefinite"/>
      </path>
      <path d="M406 252 Q404 245 406 238" stroke="#6ee7b7" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.35">
        <animate attributeName="opacity" values="0.35;0.1;0.35" dur="1.8s" repeatCount="indefinite"/>
      </path>

      {/* ══════════════════════
          KEYBOARD
      ══════════════════════ */}
      <rect x="178" y="268" width="148" height="20" rx="5" fill="#0d1f2d" stroke="#1e3a52" strokeWidth="1.1"/>
      {[0,1,2,3,4,5,6,7,8,9].map(i=>(
        <rect key={i} x={184+i*13} y={272} width="10" height="5.5" rx="1.5" fill="#0f1f30" stroke="#1e3a52" strokeWidth="0.5"/>
      ))}
      {[0,1,2,3,4,5,6,7,8].map(i=>(
        <rect key={i} x={186+i*13} y={280} width="10" height="5"   rx="1.5" fill="#0f1f30" stroke="#1e3a52" strokeWidth="0.5"/>
      ))}

      {/* ══════════════════════
          CHAIR
      ══════════════════════ */}
      <rect x="196" y="292" width="108" height="96" rx="12" fill="#0d1f2d" stroke="#1e3a52" strokeWidth="1.3"/>
      <rect x="208" y="303" width="84"  height="76" rx="8"  fill="#0f1f30"/>

      {/* ══════════════════════
          BODY / SHIRT
      ══════════════════════ */}
      <path d="M206 318 Q206 298 250 296 Q294 298 294 318 L300 390 L200 390 Z" fill="#6ee7b7" opacity="0.82"/>
      {/* collar */}
      <path d="M232 296 L250 315 L268 296" stroke="#072e1a" strokeWidth="1.8" fill="none"/>

      {/* ══════════════════════
          ARMS — animated typing
      ══════════════════════ */}
      {/* LEFT ARM */}
      <g>
        
        <path d="M206 322 Q180 336 172 360 Q169 372 179 374 Q189 375 194 360 L205 340Z" fill="#dba870"/>
        <ellipse cx="178" cy="374" rx="12" ry="8" fill="#dba870"/>
      </g>
      {/* RIGHT ARM — offset phase */}
      <g>
        <path d="M294 322 Q320 336 328 360 Q331 372 321 374 Q311 375 306 360 L295 340Z" fill="#dba870"/>
        <ellipse cx="322" cy="374" rx="12" ry="8" fill="#dba870"/>
      </g>

      {/* ══════════════════════
          NECK
      ══════════════════════ */}
      <rect x="238" y="278" width="24" height="22" rx="6" fill="#dba870"/>

      {/* ══════════════════════
          HEAD
      ══════════════════════ */}
      <ellipse cx="250" cy="246" rx="40" ry="40" fill="#dba870"/>
      {/* hair */}
      <path d="M210 240 Q210 200 250 200 Q290 200 290 240 Q288 220 276 215 Q262 207 250 207 Q238 207 224 215 Q212 220 210 240Z" fill="#b07820"/>
      {/* ear left */}
      <ellipse cx="210" cy="248" rx="7.5" ry="9.5" fill="#c99050"/>
      {/* ear right */}
      <ellipse cx="290" cy="248" rx="7.5" ry="9.5" fill="#c99050"/>

      {/* ══════════════════════
          HEADPHONES
      ══════════════════════ */}
      <path d="M212 236 Q212 198 250 198 Q288 198 288 236" stroke="#6ee7b7" strokeWidth="7.5" fill="none" strokeLinecap="round"/>
      {/* left cup */}
      <ellipse cx="212" cy="240" rx="13.5" ry="16" fill="#6ee7b7"/>
      <ellipse cx="212" cy="240" rx="8.5"  ry="10.5" fill="#052b18"/>
      {/* right cup */}
      <ellipse cx="288" cy="240" rx="13.5" ry="16" fill="#6ee7b7"/>
      <ellipse cx="288" cy="240" rx="8.5"  ry="10.5" fill="#052b18"/>

      {/* ══════════════════════
          FLOATING </> TAG
      ══════════════════════ */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-7;0,0" dur="3s" repeatCount="indefinite" additive="sum"/>
        <rect x="358" y="58" width="76" height="66" rx="6" fill="#0d1f2d" stroke="#1e3a52" strokeWidth="1.3"/>
        <path d="M416 58 L434 76 L416 76 Z" fill="#0f1f30"/>
        <line x1="416" y1="58" x2="434" y2="76" stroke="#1e3a52" strokeWidth="1"/>
        <text x="368" y="106" fill="#6ee7b7" fontSize="20" fontFamily="monospace" fontWeight="600">{"</>"}</text>
      </g>

      {/* orbit ring around tag */}
      <circle cx="396" cy="94" r="38" stroke="#6ee7b7" strokeWidth="1.1" fill="none" strokeDasharray="4 4" opacity="0.35">
        <animateTransform attributeName="transform" type="rotate" from="0 396 94" to="360 396 94" dur="9s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );
}
