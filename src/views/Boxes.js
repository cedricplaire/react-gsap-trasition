import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Boxes() {
  const container = useRef();
  const tl = useRef();

  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box');
      tl.current = gsap
        .timeline()
        .to(boxes[0], { x: 100, rotation: 360 })
        .to(boxes[1], { x: -100, y: -90, rotation: -360 })
        .to(boxes[2], { y: -180, rotation: 360 })
        .reverse();
    },
    { scope: container }
  );

  return (
    <main>
      <section className="boxes-container" ref={container}>
        <h2>Use the button to toggle a Timeline</h2>
        <div>
          <button onClick={toggleTimeline}>Toggle Timeline</button>
        </div>
        <div className="box gradient-blue">Box 11</div>
        <div className="box gradient-blue">Box 22</div>
        <div className="box gradient-blue">Box 33</div>
      </section>
    </main>
  );
}
