import Link from "next/link";
import genres from "../../data/genres.json";

function Aside() {
  return (
    <div className="join join-vertical bg-secondary h-fit rounded-3xl sticky top-20 max-lg:hidden">
      <div className="join-item h-20 bg-primary flex items-center px-5 text-4xl lg:text-3xl text-base-100 font-semibold">
        Genres
      </div>
      <div className="join-item h-full py-2">
        <ul className="menu menu-lg text-base-100">
          {genres.map((genre, index) => {
            return (
              <li key={index}>
                <Link className="focus:text-base-100" href="/">
                  {genre}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Aside;
