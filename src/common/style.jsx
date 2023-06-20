import Colors from "modules/Colors";
import styled from "styled-components";
export const StyleContainer = styled.div`
  max-width: 1320px;
  height: auto;
  margin: 0 auto;
  background-color: transparent;
`;
export const StyleHeader = styled.header`
  width: 100%;
  height: 100%;
  background-color: rgba(30, 40, 50, 0.05);
  .top {
    height: 100%;
    width: 100%;
    /* background-color: transparent; */
    padding: 31px 0 25px 0;
    border-bottom: 2px solid rgba(227, 227, 227, 1);
    .search {
      width: calc(100% / 3);
      i {
        font-size: 15px;
        cursor: pointer;
      }
    }
    .logo {
      width: calc(100% / 3);
      display: flex;
      align-items: center;
      justify-content: center;
      &__image {
        width: 180px;
        height: 34px;
      }
    }
    .user {
      width: calc(100% / 3);
      justify-content: end !important;
      gap: 22px;
      .item {
        gap: 8px;
        cursor: pointer;
        &:hover {
          color: ${Colors.violet};
        }
        i {
          font-size: 15px;
        }
        span {
          font: 15px "Roboto", sans-serif;
        }
      }
    }
  }
  .navbar {
    padding-top: 30px;
    height: 100%;
    width: 100%;
    ul {
      height: 60px;
      width: 100%;
      gap: 57.67px;
      li {
        position: relative;
        &::before {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0px;
          height: 1.5px;
          background-color: ${Colors.violet};
          transition: width 0.4s ease;
        }
        &:hover {
          color: ${Colors.violet};
          &::before {
            width: 100%;
          }
        }
      }
    }
  }
  .top__main {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
    .content {
      .title {
        h3 {
          font: 64px "Roboto";
          line-height: 55px;
          font-weight: 300;
          font-style: normal;
        }
      }
      .description {
        max-width: 80%;
        p {
          font: 20px "Roboto";
          font-weight: 400;
          line-height: 35px;
          text-transform: capitalize;
        }
      }
      .button {
        display: inline-flex;
        align-items: center;
        padding: 15px 26px;
        background: rgba(30, 40, 50, 1);
        color: ${Colors.white};
        border-radius: 2px;
        gap: 8px;
        a {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          text-transform: capitalize;
        }
      }
    }
    .image_main {
      width: 424px;
      height: 542px;
      .image {
        object-fit: cover;
      }
    }
  }
`;
export const StyleCardItems = styled.div`
  padding: 35px 0;
  .cards {
    display: grid;
    grid-template-columns: repeat(4, 312px);
    grid-template-rows: 478px;
    gap: 24px;
    &__item {
      cursor: pointer;
      transition: all 0.4s ease;
      position: relative;
      &-flag {
        position: absolute;
        z-index: 1;
        top: 22px;
        left: 0;
        span {
          padding: 4px 12px;
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 16px;
          text-align: center;
          text-transform: uppercase;
          color: #ffffff;
          &.sale {
            background-color: #1e2832;
          }
          &.hot {
            background-color: #ff6f61;
          }
        }
      }
      &-image {
        width: 100%;
        height: 400px;
        display: inline-block;
        overflow: hidden;
        .image {
          transform: scale(1);
          transition: transform 0.5s linear;
        }
      }
      &-content {
        padding: 18px 10px;
        .title {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
          text-transform: capitalize;
        }
        .content-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .collection {
            font-family: "Open Sans";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            text-transform: capitalize;
          }
          .price {
            display: flex;
            align-items: center;
            gap: 12px;
            span {
              font-family: "Open Sans";
              font-style: normal;
              font-weight: 600;
              font-size: 14px;
              line-height: 19px;
              text-align: right;
              text-transform: capitalize;
              &.old-price {
                color: rgba(0, 0, 0, 0.5);
                text-decoration-line: line-through;
              }
              &.new-price {
                color: rgba(0, 0, 0, 1);
              }
            }
          }
        }
      }
      &:hover {
        > .cards__item-image {
          .image {
            transform: scale(1.1);
          }
        }
        > .cards__item-content {
          .content-bottom {
            .price {
              span.new-price {
                color: #ff6f61;
              }
            }
          }
        }
      }
    }
  }
`;

export const StyleFooter = styled.div`
  width: 100%;
  height: 490px;
  background-color: #ffffff;
  padding: 140px 0 0;
  .list {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 56px;
    &__items {
      .top {
        width: 180px;
        height: 34px;
      }
      .title {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        text-transform: capitalize;
        text-transform: uppercase;
      }
      .content {
        margin: 38px 0;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        text-transform: capitalize;
        color: rgba(30, 40, 50, 0.75);
        ul {
          display: flex;
          flex-direction: column;
          margin: 0;
          padding: 0;

          gap: 12px;
          list-style-type: none;
          li {
            cursor: pointer;
            transition: all 0.4s ease;
            &:hover {
              color: #000000;
            }
          }
        }
      }
      .icons {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 36px;
      }
    }
  }
`;
