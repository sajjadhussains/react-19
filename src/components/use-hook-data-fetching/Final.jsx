import React, { Suspense, use } from "react";

// const fetchJoke = async () => {
//   const res = await fetch("https://api.chucknorris.io/jokes/random");
//   console.log(res.json());
//   return res.json();
// };

const fetchJoke = fetch("https://api.chucknorris.io/jokes/random").then((res) =>
  res.json()
);

const JokeItem = () => {
  //   console.log("this is main", fetchJoke);
  const joke = use(fetchJoke);
  console.log("this is joke", joke);
  return (
    <>
      <p>{joke.value}</p>
    </>
  );
};

export default function Final() {
  return (
    <div>
      <Suspense fallback={<p>loading ...</p>}>
        <JokeItem />
      </Suspense>
    </div>
  );
}
