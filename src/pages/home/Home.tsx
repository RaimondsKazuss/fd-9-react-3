import styled from "styled-components";
import { colors, paddings } from "../../theme/theme";
import leftIcon from "../../assets/icons/icon-arrow-l.svg";
import rightIcon from "../../assets/icons/icon-arrow-r.svg";

const SliderWrapper = styled.div`
  padding-top: ${paddings.lg};
  width: 100%;
  height: 12rem;
  border: 1px solid rebeccapurple;
`;

const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 10rem;
  background-color: ${colors.lightBlue};
`;

const ButtonWrapper = styled.div`
  width: 12rem;
  height: 2rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SliderButton = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  background-color: ${colors.lightBlue};
  border-radius: 50%;
`;

const Arrow = styled.div<{ left?: boolean }>`
  position: absolute;
  top: 40%;
  right: 1rem;
  background: url(${rightIcon}) center/contain no-repeat;
  width: 1rem;
  height: 2rem;

  ${(props) =>
    props &&
    props.left &&
    `
    left: 1rem;
    background: url(${leftIcon}) center/contain no-repeat;
    right: unset;
  `}
`;

const Home: React.FC = () => {
  return (
    <SliderWrapper>
      <Slide>
        <Arrow left />
        <Arrow />
      </Slide>
      <ButtonWrapper>
        <SliderButton />
        <SliderButton />
        <SliderButton />
        <SliderButton />
        <SliderButton />
      </ButtonWrapper>
    </SliderWrapper>
  );
};

export default Home;
