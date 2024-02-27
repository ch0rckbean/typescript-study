import React from 'react';

type GreetingsProps = {
  // props의 타입 선언
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void; //아무것도 리턴하지 않는 함수
};

// const Greetings: React.Fc<GreetingsProps>=({name})=>(
function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  // props의 타입을 Generics로 넣어 사용
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark} {optional && <p>{optional}</p>}
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!',
};
export default Greetings;
