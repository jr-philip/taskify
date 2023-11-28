import { FC } from "react";
interface Iprops {
  handleAddBy100: () => void;
}

export const MyButton : FC<Iprops>= ({handleAddBy100}) => {
  return (
    <div style={{display: "flex", flexDirection: 'row'}}>
      <SecondButton handleAddBy100={handleAddBy100} />
    </div>
  );
};

const SecondButton : FC<Iprops>= ({ handleAddBy100}) => {
  return (
  <button onClick={handleAddBy100} style={{ marginLeft: "1rem" }}> I am a second button </button>
  );
}

