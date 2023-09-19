import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Post1 from "@/components/Post1";
const projects = () => {
  return (
    <div>
      <Hero heading="My Projects" message="" showArrow={true} />

      <Navbar />
      <div id="bottom" className="">
        {" "}
      </div>
      <Post1
        heading="Todo List"
        content="I recently completed a todo list web application using React and TypeScript. From this project I grew more comfortable passing data between components and handling user data with forms.    "
        link="https://github.com/tritan89/todolist"
        linkText="React Todo List"
      ></Post1>

      <Post1
        heading="BattleSnake"
        content="This project was done during a hackathon by myself and Carson Jennings on March 11, 2023. During this competition we successfully implemented an snake that could navigate to collect food and avoid going head to head with snakes of equal or greater length. You can read the full write up on my github!"
        link="https://github.com/tritan89/snakey"
        linkText="Battlesnake Writeup"
      />
    </div>
  );
};

export default projects;
