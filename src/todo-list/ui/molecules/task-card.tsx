import styled from "styled-components";

import { TTask } from "../../types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  background: white;
  border-radius: 8px;
  width: 240px;

  &:hover {
    cursor: pointer;
    background: #bebeed;
  }
`;

const Id = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const Description = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const TaskCreator = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

type Props = TTask & {
  onClick: (id: string) => void;
};

export const TaskCard = ({
  id,
  description,
  title,
  userId,
  onClick,
}: Props) => {
  return (
    <Wrapper onClick={() => onClick(id)}>
      <Id>{id}</Id>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {userId && <TaskCreator>{`@${userId}`}</TaskCreator>}
    </Wrapper>
  );
};
