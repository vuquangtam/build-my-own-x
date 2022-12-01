export default function Home() {
  return (
    <div>
      <nav className="navbar justify-between">
        <div className="container">
          <h1 className="site-title">CW Designs</h1>
          <ul className="display-f">
            <li className="ml-1 text-hover-secondary"><a href="#work">Our Work</a></li>
            <li className="ml-1 text-hover-secondary"><a href="#about">About Us</a></li>
          </ul>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row justify-center">
          <div className="col-12-xs col-5-md">
            <h2>
              <div className="font-xxl">Black-Belt</div>
              <div className="font-xxl text-secondary">Your Website</div>
            </h2>
            <p className="text-gray mt-2 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#work" className="btn-outlined-secondary text-secondary text-hover-white">View Our Work</a>
          </div>
          <div className="col-12-xs col-5-md">
            <img src="/img/laptop.svg" alt="" />
          </div>
        </div>
      </div>

      <section id="about" className="bg-secondary-light-9 mt-5 pt-4 pb-4">
        <div className="container">
          <h2 className="mb-2">About CW Designs</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam animi aliquid sequi fuga, nam nesciunt dolore libero dolorem exercitationem aliquam cupiditate atque illo, quae dicta doloribus et? Ab ipsam inventore quam asperiores, sequi unde tenetur accusamus, distinctio magni necessitatibus quis deserunt id alias. Iste eum ea labore rerum voluptatibus.</p>
          <p className="mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta nam, corrupti dolorum inventore perspiciatis id illum repellat iste amet sapiente ducimus nihil molestias quasi, totam, ratione minima molestiae blanditiis iure consequatur praesentium debitis. Nulla maiores doloremque tempore nobis dolorum amet!</p>
        </div>
      </section>

      <section id="work" className="mt-5">
        <div className="container">
          <h2 className="mb-2">Some of Our Work</h2>
          <div className="row gap-2">
            <div className="col-12-xs col-6-md col-3-lg">
              <div className="card p-0">
                <h3 className="card-title m-1">
                  Mario Club <span className="badge-orange text-white ml-1">new</span>
                </h3>
                <img src="/img/mario.png" alt="" />
                  <p className="m-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, hic!</p>
              </div>
            </div>
            <div className="col-12-xs col-6-md col-3-lg">
              <div className="card p-0">
                <h3 className="card-title m-1">Ninja Food</h3>
                <img src="/img/food.png" alt="" />
                  <p className="m-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, hic!</p>
              </div>
            </div>
            <div className="col-12-xs col-6-md col-3-lg">
              <div className="card p-0">
                <h3 className="card-title m-1">Just Add Marmite</h3>
                <img src="/img/marmite.png" alt="" />
                  <p className="m-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, hic!</p>
              </div>
            </div>
            <div className="col-12-xs col-6-md col-3-lg">
              <div className="card p-0">
                <h3 className="card-title m-1">Ninja Notes</h3>
                <img src="/img/notes.png" alt="" />
                  <p className="m-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, hic!</p>
              </div>
            </div>
          </div>
          <div className="row justify-center mt-2">
            <button className="btn-secondary text-white font-md">View All</button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-light-7 pt-3 pb-3 mt-5">
        <div className="container">
          copyright 2022
        </div>
      </footer>
    </div>
  );
}
