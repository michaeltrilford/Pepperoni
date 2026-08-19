import React from "react";
import * as sx from "@stylexjs/stylex";
import type { SurfaceVisual } from "../types/surface";

const styles = sx.create({
  column: {
    display: "grid",
    justifyItems: "center",
    gap: "8px",
    minWidth: 0,
  },
  label: {
    color: "var(--text-color)",
    fontSize: "12px",
    fontWeight: 600,
  },
  stage: {
    display: "grid",
    placeItems: "center",
    width: "min(100%, 340px)",
    aspectRatio: "1",
    color: "var(--text-color)",
  },
  ring: {
    display: "grid",
    placeItems: "center",
    aspectRatio: "1",
    borderRadius: "50%",
    border: "none",
  },
  outer: { width: "90%" },
  middle: { width: "80%" },
  inner: { width: "70%" },
});

export interface SurfaceRingProps {
  visual: SurfaceVisual;
  showEffects?: boolean;
}

export const SurfaceRing: React.FC<SurfaceRingProps> = ({ visual, showEffects = true }) => {
  const ringProps = (index: 0 | 1 | 2, background: string) => {
    const level = (index + 1) * 100;
    const effect = `var(--card-effect-${visual.mode === "DEPTH" ? "depth" : "lift"}-${level})`;
    const sizeStyle = index === 0 ? styles.outer : index === 1 ? styles.middle : styles.inner;

    return {
      ...sx.props(styles.ring, sizeStyle),
      style: {
        background,
        boxShadow: showEffects && visual.mode !== "FLAT" ? effect : "none",
      },
    };
  };

  return (
    <div {...sx.props(styles.column)}>
      <span {...sx.props(styles.label)}>{visual.label}</span>
      <div {...sx.props(styles.stage)}>
        <div {...ringProps(0, visual.first)}>
          <div {...ringProps(1, visual.second)}>
            <div {...ringProps(2, visual.third)} />
          </div>
        </div>
      </div>
    </div>
  );
};
