export default function Home() {
  return (
    <div>
      <nav className="navbar-primary text-white mb-4">
        <div className="container">
          <h2 className="site-title">CW CSS Library</h2>
          <p>A lightweight CSS library for geek</p>
        </div>
      </nav>
      <div className="container">
        <h2 className="mb-2">Colors</h2>
        <span className="text-primary">primary text</span> |
        <span className="text-secondary">secondary text</span> |
        <span className="text-error">error text</span> |
        <span className="text-info">info text</span> |
        <span className="text-blue">blue text</span> |
        <span className="text-red">red text</span> |
        <span className="text-green">green text</span> |
        <span className="text-yellow">yellow text</span> |
        <span className="text-purple">purple text</span> |
        <span className="text-orange">orange text</span> |
        <span className="text-gray">gray text</span>

        <br /><br />

        <span className="bg-primary text-white">bg primary</span> |
        <span className="bg-secondary text-white">bg secondary</span> |
        <span className="bg-error text-white">bg error</span> |
        <span className="bg-info text-white">bg info</span> |
        <span className="bg-blue text-white">bg blue</span> |
        <span className="bg-red text-white">bg red</span> |
        <span className="bg-green text-white">bg green</span> |
        <span className="bg-yellow text-white">bg yellow</span> |
        <span className="bg-purple text-white">bg purple</span> |
        <span className="bg-orange text-white">bg orange</span> |
        <span className="bg-gray text-white">bg gray</span> |

        <br /><br />

        <span className="bg-primary-dark-8 text-white">primary dark 8</span> |
        <span className="bg-primary-dark-6 text-white">primary dark 6</span> |
        <span className="bg-primary-dark-4 text-white">primary dark 4</span> |
        <span className="bg-primary-dark-2 text-white">primary dark 2</span> |
        <span className="bg-primary text-white">primary</span> |
        <span className="bg-primary-light-2 text-white">primary light 2</span> |
        <span className="bg-primary-light-4 text-white">primary light 4</span> |
        <span className="bg-primary-light-6 text-white">primary light 6</span> |
        <span className="bg-primary-light-8 text-white">primary light 8</span> |

        <br /><br />
        <a href="#" className="text-primary text-hover-orange-light-1">hover me</a>

        <hr className="mt-4 mb-4" />

        <h2 className="mb-2">Font Sizes</h2>
        <div className="font-sm">this is small font</div>
        <div className="font-md">this is medium font</div>
        <div className="font-lg">this is large font</div>
        <div className="font-xl">this is extra large font</div>
        <div className="font-xxl">this is extra, extra large font</div>

        <hr className="mt-4 mb-4" />

        <h2 className="mb-2">Buttons</h2>
        <a href="#" className="btn">default btn</a>
        <a href="#" className="btn-primary text-white">click me</a>
        <a href="#" className="btn-secondary text-white">click me</a>
        <a href="#" className="btn-error text-white">click me</a>
        <a href="#" className="btn-info">click me</a>
        <a href="#" className="btn-outlined-purple text-purple text-hover-white">click me</a>
        <a href="#" className="btn-outlined-orange text-orange text-hover-white">click me</a>
        <a href="#" className="btn-complement-purple">click me</a>
        <a href="#" className="btn-complement-primary">click me</a>

        <hr className="mt-4 mb-4" />

        <h2 className="mb-2">Cards</h2>
        <div className="card">
          <h1 className="card-title">This is a title</h1>
          <p className="card-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sunt, quo totam aliquam praesentium ducimus tempore sapiente quia nulla optio? Lorem ipsum, dolor sit amet consectetur <a href="">adipisicing elit</a>. Libero laboriosam laborum exercitationem autem commodi voluptas odio aliquid ut velit doloremque minima, quaerat dolores, corporis consequuntur totam nam id veniam maxime.</p>
        </div>

        <hr className="mt-4 mb-4" />

        <h2 className="mb-2">Grid System</h2>
        <div className="row gap-2 justify-center">
          <div className="col-12-xs col-5-sm col-3-xl">
            <div className="card">
              <h3 className="card-title">Hello, ninjas</h3>
              <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="col-12-xs col-5-sm col-3-xl">
            <div className="card">
              <h3 className="card-title">Hello, ninjas</h3>
              <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="col-12-xs col-5-sm col-3-xl">
            <div className="card">
              <h3 className="card-title">Hello, ninjas</h3>
              <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="col-12-xs col-5-sm col-3-xl">
            <div className="card">
              <h3 className="card-title">Hello, ninjas</h3>
              <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <h2>Using Utilities</h2>
        <div className="mt-2 text-orange-dark-2 bg-orange-light-5 p-2 br-xs">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, perspiciatis!</p>
        </div>
        <div className="mt-2 text-secondary-dark-2 bg-secondary-light-5 p-2 br-lg">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, perspiciatis!</p>
        </div>
        <div className="display-i-b bg-purple text-white o-10 mt-3 mr-3 p-2">opacity 10</div>
        <div className="display-i-b bg-purple text-white o-30 mt-3 mr-3 p-2">opacity 30</div>
        <div className="display-i-b bg-purple text-white o-50 mt-3 mr-3 p-2">opacity 50</div>
        <div className="display-i-b bg-purple text-white o-70 mt-3 mr-3 p-2">opacity 70</div>
        <div className="display-i-b bg-purple text-white o-90 mt-3 mr-3 p-2">opacity 90</div>

        <hr className="mt-4 mb-4" />

      </div>
    </div>
  );
}
