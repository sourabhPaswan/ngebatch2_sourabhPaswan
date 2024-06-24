import React from "react";
interface GreetingsProps {
  name?: string;
  isBirthday?: boolean;
}

export default function Greeter(obj: GreetingsProps) {
  const getQuote = () =>
    "The world is a book, and those who do not travel read only one page.";
  const employee = {
    id: 1,
    name: "sourabh",
    skills: ["Java", "Javascript", "Python"],
  };
  const getGreeting = (user?: string): JSX.Element => {
    if (user) {
      return <p>Hello {user}!!</p>;
    }
    return <p>Hello Stranger!!</p>;
  };
  const getCart = (): React.JSX.Element => {
    let items: any = ["mobile", "tv"];
    return items?.length > 0 ? (
      <>Cart items are {items.map((e: any) => e + " ")}</>
    ) : (
      <>No items in cart, please continue shopping.</>
    );
  };
  return (
    <>
      <h2>Greetings!!!</h2>
      <p>{getQuote()}</p>
      <strong>{employee.name}</strong>
      <> knows </>
      <strong>{employee.skills[2]}</strong>
      {getGreeting("Paswan")}
      {getCart()}
      <table>
        {employee.skills.map((ele: any, index) => (
          <tr key={index}>
            <td>{ele}</td>
          </tr>
        ))}
      </table>
      <>
        {obj.name} {obj.isBirthday}
      </>
    </>
  );
}
