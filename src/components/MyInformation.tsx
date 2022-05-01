import React from "react";
import styled from "@emotion/styled";
import { icons } from "../data";
const MyInformation: React.FC = () => {
  return (
    <Container className="flex flex-col gap-5">
      <Wrapper>
        <img
          className="block w-80 h-80 object-cover"
          src="https://i.ibb.co/0fkbQJH/IMG-4934.jpg"
          alt="hoyeoun"
        />
      </Wrapper>
      <div className="my-info  pl-3 leading-6">
        <strong className="text-3xl">Who Am I ?</strong>
        <p className="mt-1">Welcome to my personal blog!</p>
        <p>
          I'm a Front-end junior developer who is working from start up in South
          Korea.
        </p>
        <p>This blog is for sharing information of web development ,</p>
        <p>Make new programmer friends from the world!</p>
        <div className="flex justify-start gap-10 text-6xl mt-8 cursor-pointer">
          {icons.map((item) => (
            <span key={item.id} onClick={() => window.open(item.url)}>
              {item.icon}
            </span>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MyInformation;
const Container = styled.section`
  p {
    display: block;
  }
`;
const Wrapper = styled.div`
  img {
    border-radius: 50%;
  }
`;
