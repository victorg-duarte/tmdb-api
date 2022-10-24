import styled, { css } from "styled-components";

export const TrailerVideo = styled.div`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  visibility:  ${({ showModal }) => showModal ? 'auto' : 'hidden'};
  align-items: center;
  justify-content: center;
  background: rgb(0 0 0 / .8);
  transition: .2s;
  padding: 2rem;
  opacity: 0;
  pointer-events: none;

  ${({ showModal }) => showModal && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);
  `}

  > svg {
    position: absolute;
    color: #fff;
    top: 1.8rem;
    right: 1.8rem;
    font-size: 3rem;
    cursor: pointer;
  }

  #youtube-video {
    width: 60%;
    height: 80%;
  }

  iframe {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 800px) {
    #youtube-video {
    width: 100%;
    height: 80%;
  }
  }
`