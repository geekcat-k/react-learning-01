/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";
import { styled } from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  return (
    <div css={containerStyle}>
      <p className="title"> -Styled JSX -</p>
      <button>FIGHT!!</button>
    </div>
  );
};
