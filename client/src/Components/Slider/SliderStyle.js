import styled from 'styled-components/macro';

export const Slider = styled.div`
  .list_scroll {
    overflow-x: auto;
    padding: 1.8rem 1rem;
    margin: 0 2rem;
    display: flex;
    overflow-y: hidden;
  }

  .list_title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 1rem;
    margin-left: 3rem;
    padding-left: 1rem;
    border-left: solid 8px #fcbf49;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .item {
    position: relative;
    width: 150px;
    height: 280px;
    display: block;
    margin: 5px;
    /* padding: 0.7rem; */
    transition: transform 500ms;
    }
  }

  .list_scroll .item,
  .list_scroll:hover .item {
    transform: translateX(-5%);
  }

  .item:hover ~ .item {
    transform: translateX(5%);
  }

  .list_scroll .item:hover {
    transform: scale(1.1);
    z-index: 1;
  }

  .item {
    /* display: block; */
    max-width: 100%;
  }
`;
