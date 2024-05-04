function Aside() {
  return (
    <aside className="join join-vertical sticky top-20 bg-secondary h-fit rounded-3xl">
      <div className="join-item h-20 bg-primary flex items-center px-5 text-4xl lg:text-3xl text-base-100 font-semibold">
        Genres
      </div>
      <div className="join-item h-full py-2">
        <ul className="menu menu-lg text-base-100">
          <li>
            <a>lg item 1</a>
          </li>
          <li>
            <a>lg item 2</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
