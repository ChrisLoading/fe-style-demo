import { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Avatar = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 999px;
  background: #eee;
  flex: 0 0 auto;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
`;

const Subtitle = styled.p`
  margin: 4px 0 0;
  color: #666;
  font-size: 14px;
`;

const Badge = styled.span`
  margin-left: auto;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid ${({ $online }) => ($online ? "#1b8f3a" : "#b42318")};

  @media (max-width: 520px) {
    margin-left: 0;
  }
`;

const Btn = styled.button`
  margin-top: 10px;
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
`;

export default function ProfilecardCssInJs() {
    const [online, setOnline] = useState(true);

    return (
        <Card>
            <Avatar />
            <div>
                <Title>CSS-in-JS</Title>
                <Subtitle>Internal Systems / MIS</Subtitle>
                <btn onClick={() => setOnline(!online)}>
                    Toggle Online
                </btn>
            </div>

            <Badge $online={online}>
                {online ? "online" : "offline"}
            </Badge>
        </Card>
    )
}