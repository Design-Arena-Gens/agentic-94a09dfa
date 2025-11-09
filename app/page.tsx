import React from 'react';
import Visualization from '../components/Visualization';

export default function Page() {
  return (
    <div>
      <section className="hero">
        <div>
          <p className="kicker">Speculative concept</p>
          <h1>Black Hole ? Einstein?Rosen Bridge ? White Hole</h1>
          <p>
            This page presents a cohesive speculative idea: matter falling into a black hole could traverse an Einstein?Rosen bridge (wormhole) and emerge from a white hole ? an outward-ejecting dual ? under a balance of attractive and repulsive curvature effects.
          </p>
          <p className="small">Click the visualization to pause/resume the animation.</p>
        </div>
        <Visualization />
      </section>

      <section id="overview" className="section">
        <h2>Overview</h2>
        <div className="card">
          <p>
            Consider a coupled black?white hole configuration joined by a wormhole. Intuitively, gravitational attraction near the black hole and an effective anti-gravity-like behavior near the white hole could sum to a net balance across the bridge, suggestively written as <span className="code">F_G + F_AG = 0</span> in an idealized symmetric steady state.
          </p>
          <p>
            In this picture, the white hole acts as a time-reversed counterpart of the black hole: where one region inexorably pulls inward, the other ejects outward. The joining throat forms a partition where inward-spacelike stretching meets outward-spacelike expansion.
          </p>
        </div>
      </section>

      <section id="mechanism" className="section">
        <h2>Mechanism (Intuitive)</h2>
        <div className="grid">
          <div className="card">
            <strong>Infall</strong>
            <p>
              Matter collapses past the black hole horizon, guided along geodesics toward the throat. Local curvature increases as effective volume elements contract.
            </p>
          </div>
          <div className="card">
            <strong>Bridge</strong>
            <p>
              At the wormhole partition, opposing tendencies meet: inward curvature from the black hole and outward curvature from the white hole region. The interface is an idealized boundary of zero thickness.
            </p>
          </div>
          <div className="card">
            <strong>Outflow</strong>
            <p>
              On the white hole side, trajectories reverse character: spacetime pushes outward, ejecting matter away from the throat and increasing effective volume elements.
            </p>
          </div>
        </div>
      </section>

      <section id="math" className="section">
        <h2>Notation and Key Ideas</h2>
        <div className="card">
          <ul>
            <li>
              <strong>Force balance:</strong> <span className="code">F_G + F_AG = 0</span> ? heuristic balance of inward vs. outward curvature influences across the bridge.
            </li>
            <li>
              <strong>Partition point:</strong> <span className="code">V = 0</span> ? the notional zero-thickness boundary at the throat where opposing effects meet; not a physical volume, but a mathematical interface.
            </li>
            <li>
              <strong>Singularity intuition:</strong> Apparent infinite density arises when effective volume elements shrink toward zero while conserved quantities remain finite across the partition idealization.
            </li>
          </ul>
        </div>
      </section>

      <section id="viz" className="section">
        <h2>Visualization</h2>
        <div className="card">
          <p>
            The animated wells suggest inward (left) and outward (right) behavior, with a circular throat indicating the partition. Animation exaggerates motion to support intuition; it is not a simulation.
          </p>
          <Visualization />
        </div>
      </section>

      <section id="notes" className="section">
        <h2>Notes</h2>
        <div className="card">
          <p>
            This is a conceptual presentation. Real wormhole stability, traversability, and energy conditions involve complex general relativity and quantum considerations beyond this summary.
          </p>
        </div>
      </section>
    </div>
  );
}
