import styled from "styled-components";

export const StyleBrand = styled.div`
  padding: 90px 0;
  .image__brand {
    width: 200px;
    height: 70px;
    .image {
      object-fit: contain !important;
      cursor: pointer;
    }
  }
`;
export const StylePopular = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .title {
    width: 20px;
    h1 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;
      text-align: center;
      text-transform: uppercase;
      writing-mode: vertical-lr;
      text-orientation: mixed;
      transform: rotate(-180deg);
    }
  }
  .cards {
    width: calc(100% - 30px);
    display: grid;
    grid-template-columns: repeat(4, 312px);
    grid-template-rows: 312px 312px;
    gap: 24px;
    &__item {
      &:first-child {
        grid-column: 1/3;
        grid-row: 1/3;
      }
    }
  }
`;
export const StyleTrendingProduct = styled.div`
  padding: 140px 0;
  .tabs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      display: flex;
      align-items: center;
      gap: 40.33px;
      li {
        font-size: 16px;
        font-weight: 600px;
        color: rgba(0, 0, 0, 0.5);
        line-height: 21.79px;
        font-family: "Open Sans";
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover {
          color: rgba(0, 0, 0, 1);
        }
        &.active {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
    .button {
      background-color: rgba(30, 40, 50, 1);
      color: #ffffff;
      padding: 4px 14px;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      border-radius: 2px;
      border: 1px solid rgba(30, 40, 50, 1);
      transition: all 0.4s ease;
      &:hover {
        background-color: transparent;
        color: rgba(30, 40, 50, 1);
      }
    }
  }
`;
export const StyleBannerHome = styled.div`
  width: 100%;
  height: 65vh;
  background-image: url("images/background.png");
  background-size: cover;
  position: relative;
  overflow: hidden;

  .shape {
    display: inline;
    width: 732px;
    height: 309px;
    position: absolute;
    top: 51px;
    right: -90px;
    overflow: hidden;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    max-width: 504px;
    color: #ffffff;
    .title {
      width: 191px;
      height: 81px;
      .image {
        object-fit: contain !important;
      }
    }
    .description {
      margin: 30px 0;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
    }
    .button {
      padding: 10px 26px;
      background-color: #ffffff;
      color: #000000;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 34px;
      text-transform: capitalize;
      border-radius: 2px;
      border: 1px solid #ffffff;
      transition: all 0.4s ease;
      &:hover {
        background-color: transparent;
        color: #ffffff;
      }
    }
  }
`;
export const StyleBestSeller = styled.div`
  padding: 140px 0;
  .tabs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      display: flex;
      align-items: center;
      gap: 40.33px;
      li {
        font-size: 16px;
        font-weight: 600px;
        color: rgba(0, 0, 0, 0.5);
        line-height: 21.79px;
        font-family: "Open Sans";
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover {
          color: rgba(0, 0, 0, 1);
        }
        &.active {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
    .button {
      background-color: rgba(30, 40, 50, 1);
      color: #ffffff;
      padding: 4px 14px;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      border-radius: 2px;
      border: 1px solid rgba(30, 40, 50, 1);
      transition: all 0.4s ease;
      &:hover {
        background-color: transparent;
        color: rgba(30, 40, 50, 1);
      }
    }
  }
`;
export const StyleFollow = styled.div`
  background-color: rgba(30, 40, 50, 0.05);
  padding: 100px 0;
  .image_follow {
    width: 200px;
    height: 200px;
  }
  .content {
    padding: 60px 0;
  }
`;
export const StyleSubscribe = styled.div`
  .main__title {
    font-size: 30px !important;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 26px;
    z-index: 1;
    .input {
      width: 643px;
      position: relative;
      input {
        width: 100%;
        position: relative;
        z-index: 1;
        background-color: transparent;
        border: none;
        outline: none;
        padding: 10px 15px;
        border-bottom: 2px solid #000000;
        transition: border all 0.4s ease;
        &:focus,
        &:not(:placeholder-shown) {
          + label {
            top: 0;
            z-index: 99;
            color: #000000;
            background-color: #f4f4f5;
          }
          border: 2px solid #000000;
          color: #000000;
        }
      }

      label {
        z-index: -1;
        left: 15px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-family: "Roboto";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: rgba(30, 40, 50, 0.5);
        transition: top 0.4s ease;
        padding: 0 10px;
      }
    }
    button {
      border: none;
      outline: none;
      padding: 8px 14px;
      background-color: transparent;
      color: #000000;
      transition: all 0.4s ease;
      position: relative;
      span {
        position: absolute;
        display: block;
        background-color: #000000;
        &:nth-child(4) {
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          transform: scaleY(1);
        }
        &:nth-child(1) {
          right: 0;
          top: 0;
          width: 2px;
          height: 100%;
          transform: scaleY(0);
          transition: transform 0.5s;
          transform-origin: top;
        }
        &:nth-child(2) {
          right: 0;
          top: 0;
          width: 100%;
          height: 2px;
          transform: scaleX(0);
          transition: transform 0.5s;
          transform-origin: left;
        }
        &:nth-child(3) {
          left: 0;
          top: 0;
          width: 2px;
          height: 100%;
          transform: scaleY(0);
          transition: transform 0.5s;
          transform-origin: bottom;
        }
      }
      &:hover {
        span {
          &:nth-child(1) {
            transform: scale(1);
            transform-origin: bottom;
          }
          &:nth-child(2) {
            transform: scale(1);
            transform-origin: right;
          }
          &:nth-child(3) {
            transform: scale(1);
            transform-origin: top;
          }
        }
      }
    }
  }
`;
