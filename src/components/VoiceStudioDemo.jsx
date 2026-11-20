import { useState } from "react";

export default function VoiceStudioDemo() {
  const [activeTab, setActiveTab] = useState("audio");
  const [activePersona, setActivePersona] = useState("support");

  const personas = {
    support: {
      name: "Customer Support",
      greeting: "Hello! I'm connected via WebRTC audio streaming. How can I resolve your query today?",
      latency: "210ms",
      kb: "Customer Docs & Knowledge Base",
      chunk: "Matched KB: Resolving auth tokens, billing records, and active tickets.",
    },
    receptionist: {
      name: "Front Desk",
      greeting: "Good morning! I can direct your call, book appointments, or notify staff.",
      latency: "195ms",
      kb: "Staff Directory & Schedule DB",
      chunk: "Matched Schedule: Calendar availability for engineering & customer success.",
    },
    assistant: {
      name: "Technical Assistant",
      greeting: "Ready. Vector RAG context loaded. Querying system metrics and documentation.",
      latency: "230ms",
      kb: "Architecture & API Reference",
      chunk: "Matched Vector: PostgreSQL schema, worker dispatch configuration, and Prisma models.",
    },
  };

  const current = personas[activePersona];

  return (
    <div className="project-visual voice-visual">
      <div className="demo-head mono">
        <span>Voice Studio / Pipeline Inspector</span>
        <span className="live-pill">
          <i className="status-dot live"></i>
          {"Live"}
        </span>
      </div>

      <div className="voice-body">
        <div className="demo-title">Real-time voice intelligence.</div>
        <span className="mono">Inspect live audio stream, RAG retrieval & system state</span>

        {/* View Switcher */}
        <div className="voice-tab-bar" role="tablist" aria-label="Pipeline view">
          <button
            className={`voice-tab-btn ${activeTab === "audio" ? "active" : ""}`}
            onClick={() => setActiveTab("audio")}
          >
            Audio & Speech
          </button>
          <button
            className={`voice-tab-btn ${activeTab === "rag" ? "active" : ""}`}
            onClick={() => setActiveTab("rag")}
          >
            Vector RAG
          </button>
          <button
            className={`voice-tab-btn ${activeTab === "stack" ? "active" : ""}`}
            onClick={() => setActiveTab("stack")}
          >
            Architecture
          </button>
        </div>

        {/* Tab 1: Audio & Speech */}
        {activeTab === "audio" && (
          <div className="voice-panel">
            <div className="persona-chips" role="group" aria-label="Persona select">
              {Object.entries(personas).map(([key, data]) => (
                <button
                  key={key}
                  className={`persona-chip ${activePersona === key ? "active" : ""}`}
                  onClick={() => setActivePersona(key)}
                >
                  {data.name}
                </button>
              ))}
            </div>

            <div className="voice-active-panel">
              <div className="audio-wave" aria-label="Live audio waveform">
                <span className="bar b1"></span>
                <span className="bar b2"></span>
                <span className="bar b3"></span>
                <span className="bar b4"></span>
                <span className="bar b5"></span>
                <span className="bar b6"></span>
                <span className="bar b7"></span>
              </div>
              <div className="voice-transcript">
                <span className="mono transcript-label">Agent Output ({current.name}):</span>
                <p className="transcript-text">"{current.greeting}"</p>
              </div>
              <div className="voice-metrics mono">
                <span>STT → LLM → TTS</span>
                <span>Latency: {current.latency}</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Vector RAG */}
        {activeTab === "rag" && (
          <div className="voice-panel">
            <div className="voice-rag-box">
              <div className="rag-row">
                <span className="mono rag-tag">Active Knowledge Base</span>
                <span className="rag-value">{current.kb}</span>
              </div>
              <div className="rag-query-card">
                <span className="mono">Semantic Vector Chunk (Cosine: 0.94):</span>
                <p>"{current.chunk}"</p>
              </div>
              <div className="voice-metrics mono">
                <span>Vector Embeddings: text-embedding-3</span>
                <span>Top-K: 3 Chunks</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: System Architecture */}
        {activeTab === "stack" && (
          <div className="voice-panel">
            <div className="voice-stack-grid mono">
              <div className="stack-item">
                <span className="stack-label">Voice Worker</span>
                <span className="stack-val">Python Real-Time Agent · WebRTC</span>
              </div>
              <div className="stack-item">
                <span className="stack-label">Auth Layer</span>
                <span className="stack-val">Better Auth · HttpOnly Cookie</span>
              </div>
              <div className="stack-item">
                <span className="stack-label">Database</span>
                <span className="stack-val">PostgreSQL + Prisma ORM</span>
              </div>
              <div className="stack-item">
                <span className="stack-label">Frontend</span>
                <span className="stack-val">React + Material UI</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Link directly to hosted Voice AI */}
        <div className="voice-actions">
          <a
            className="book voice-direct-btn"
            href="https://voice-ai-k37a.onrender.com/login"
            target="_blank"
            rel="noopener"
          >
            Launch Voice Studio ↗
          </a>
          <span className="mono voice-room-info">
            WebRTC Channel: voice-studio-prod
          </span>
        </div>
      </div>

      <span className="mono">
        Real-Time Python Agent · WebRTC Audio · Better Auth · PostgreSQL
      </span>
    </div>
  );
}
