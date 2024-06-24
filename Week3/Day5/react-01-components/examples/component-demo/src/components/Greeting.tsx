export interface GreetingProps {
  name: string;
  isBirthday: boolean;
}

const Greeting = ({ name, isBirthday }: GreetingProps) => {
  return (
    <div>
      <h1>Hello {name}</h1>
      {isBirthday && <p>Happy Birthday to you!</p>}
    </div>
  );
};

export default Greeting;
