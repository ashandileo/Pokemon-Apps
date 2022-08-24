import React from "react";

interface IHello {
  name: string;
}

const Hello = ({ name }: IHello) => {
  return <div>Hello {name}</div>;
};

export default Hello;
