import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="text-center">
      <header className="p-3">
        <h1 className="text-2xl"> Film Essays </h1>
      </header>
      <div className="flex justify-center">
        <ul className="list-disc text-left max-w-screen-md">
          <li> Irrational characters </li>
          <li>
            <Link to="/essays/single-instrument-soundtracks">
              Single instrument soundtracks
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
