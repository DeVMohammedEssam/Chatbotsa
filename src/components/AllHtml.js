import React from "react";

function AllHtml() {
  return (
    <React.Fragment>
      <section className="animated-chat">
        <div className="row my-3">
          <div
            className="user col-8  col-sm-6 col-md-3 offset-md-2 my-3  "
            id="m1"
          >
            Lorem ipsum dolor sit amet.
          </div>

          <div
            className="bot offset-4 offset-sm-6 offset-md-7 col-8 col-sm-6 col-md-3 scale0"
            id="m2"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            totam, facilis natus.
          </div>
          <div
            className="options offset-4 offset-sm-6 offset-md-7 col-8 col-sm-6 col-md-3 scale0"
            id="options1"
          >
            <a href="#" className="col-6">
              option1
            </a>
            <a href="#" className="col-6">
              option2
            </a>
          </div>

          <div
            className="user col-6  col-sm-3 col-md-2 offset-md-2 col-xl-1 my-3 scale0"
            id="m3"
          >
            option1
          </div>
        </div>

        <div className="row my-3">
          <div
            className="bot offset-4 offset-sm-6 offset-md-7 col-8 col-sm-6 col-md-3  scale0"
            id="m4"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
            asperiores!
          </div>

          <div
            className="options offset-4 offset-sm-6 offset-md-7 col-8 col-sm-6 col-md-3 scale0"
            id="option2"
          >
            <a href="#" className="col-4">
              option1
            </a>
            <a href="#" className="col-4">
              option2
            </a>
            <a href="#" className="col-4">
              option3
            </a>
          </div>

          <div
            className="user col-6  col-sm-3 col-md-2 offset-md-2 col-xl-1 my-3 scale0"
            id="m5"
          >
            option3
          </div>

          <div
            className="bot offset-4 offset-sm-6 offset-md-7 col-8 col-sm-6 col-md-3 scale0"
            id="m6"
          >
            welcome to chatbotsa
            <img src="images/others/happy.png" />
          </div>
        </div>
      </section>

      {/*scroll to top button*/}
      <i className="fas fa-chevron-circle-up fa-3x" />

      {/*color box*/}
      <div className="color-box">
        <span id="default" />
        <span id="style1" />
      </div>
      <i className="fas fa-2x fa-cog fa-spin" />

      {/*chat button*/}
      <i className="fas fa-comments" />
      <div className="chat">
        <form className="form-group">
          <input
            name="name"
            type="text"
            className="form-control my-2"
            autoComplete="off"
            placeholder="Name"
          />
          <input
            name="email"
            type="text"
            className="form-control my-2"
            autoComplete="off"
            placeholder="E-mail"
          />
          <input
            name="company"
            type="text"
            className="form-control my-2"
            autoComplete="off"
            placeholder="Company"
          />
          <input
            name="phone"
            type="tel"
            className="form-control my-2"
            autoComplete="off"
            placeholder="Phone number"
          />
          <textarea
            name="describtion"
            className="form-control my-2"
            autoComplete="off"
            placeholder="project describtion"
          />
          <button className="btn btn-primary" role="button" type="submit">
            Send Inquiry
          </button>
        </form>
      </div>

      {/* centerd logo*/}
      <img className="img-fluid logo-center" src="images/logos/logo3.png" />

      {/*starting of header*/}
      <header>
        {/*starting of navbar*/}
        <nav className="navbar navbar-expand-lg fixed-top">
          <a className="navbar-brand" href="#">
            <img src="images/logos/logo2.png" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-center">
              <i className="fas fa-bars" style={{ color: "#FFF" }} />
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mx-md-auto">
              <li
                className="nav-item mx-md-3 mx-lg-4 mx-xl-5 "
                data-scroll="home"
              >
                <a className="nav-link custom-active" href="#">
                  home
                </a>
              </li>
              <li
                className="nav-item mx-md-3 mx-lg-4 mx-xl-5"
                data-scroll="about"
              >
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
              <li
                className="nav-item dropdown mx-md-3 mx-lg-4 mx-xl-5"
                data-scroll="services"
              >
                <a className="nav-link " href="#">
                  services
                </a>
              </li>

              <li
                className="nav-item dropdown mx-md-3 mx-lg-4 mx-xl-5"
                data-scroll="clients"
              >
                <a className="nav-link " href="#">
                  clients
                </a>
              </li>

              <li
                className="nav-item dropdown mx-md-3 mx-lg-4 mx-xl-5"
                data-scroll="blogs"
              >
                <a className="nav-link " href="#">
                  blogs
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/*ending of navbar*/}
      </header>

      {/*ending of header*/}
      <div className="home-background" />
      <div className="container">
        {/*starting of quote*/}
        <section className="quote mt-5" id="home">
          <div className="row">
            <div className="col-12 col-md-6" data-aos="fade-in">
              {/*quote*/}
              <div className="jumbotron">
                <h2 className="display-4 text-md-left">Company quote</h2>
                <span>chatbotsa is a company that creates chatBot and..</span>
                <p className="collapse" id="readMore">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
                <a
                  className="btn btn-primary"
                  data-toggle="collapse"
                  href="#readMore"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Read more
                </a>
              </div>
            </div>
            {/*GIF*/}
            <div
              className="col-12 col-md-4 offset-md-1 offset-lg-2"
              data-aos="fade-in"
            >
              <div className="gif" />
            </div>
          </div>
        </section>
        {/*ending   of quote*/}

        {/*starting of letters*/}
        <section className="letters " data-aos="zoom-out">
          <object className="custom-row">
            <embed
              src="images/letters/c.svg"
              className="img-fluid custom-col-8"
              id="l1"
              data-typing="creative and committed company to partner with"
            />
            <embed
              src="images/letters/h.svg"
              className="img-fluid custom-col-8"
              id="l1"
              data-typing="Hardworking and reliable team"
            />
            <embed
              src="images/letters/a.svg"
              className="img-fluid custom-col-8"
              id="l1"
              data-typing="Availability to deliver your project on the required time"
            />
            <embed
              src="images/letters/t.svg"
              className="img-fluid custom-col-8"
              id="l1"
              data-typing="Time worthly resource to change your ideas into reality"
            />
            <embed
              src="images/letters/b.svg"
              className="img-fluid custom-col-8"
              id="l1"
              data-typing="Brilliant and efficient enough to handle the most intricate projects "
            />
            <embed
              src="images/letters/o.svg"
              className="img-fluid custom-col-8"
              id="l1"
              data-typing="Operating systems withoud flows"
            />
            <embed
              src="images/letters/t.svg"
              className="img-fluid custom-col-8"
              id="l1"
              data-typing="Time saving firm that renders the projects within deadlines"
            />
            <embed
              src="images/letters/s.svg"
              className="img-fluid custom-col-8"
              id="l1"
              data-typing="Skilled to undertake the most intricate projects"
            />
            <embed
              src="images/letters/a.svg"
              className="img-fluid custom-col-8"
              id="l1"
              data-typing="Adabtable to carry out multiple projects with varying deadlines "
            />
          </object>
          <h2
            className="letter-describtion text-center"
            style={{ height: "30px" }}
          />
        </section>
        {/*ending of letters*/}

        {/*starting of about us*/}
        <section className="about my-5" id="about">
          <div className="row justify-content-center" data-aos="zoom-in">
            <div className="timeline">
              <div className="timeline__bullets-container">
                <span id="test" className="timeline__bullet ">
                  <div className="card-custom ">
                    <div className="inner active">
                      <div className="img-container">
                        <img src="images/others/timeLine1.jpg" />
                      </div>
                      <p className="card-custom__text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Veniam id, rem earum optio ipsa atque incidunt
                        similique totam doloremque mollitia maiore
                      </p>
                    </div>
                  </div>
                </span>
                <span className="timeline__bullet">
                  <div className="card-custom">
                    <div className="inner ">
                      <div className="img-container">
                        <img src="images/others/timeLine2.jpg" />
                      </div>
                      <p className="card-custom__text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Veniam id, rem earum optio ipsa atque incidunt
                        similique totam doloremque mollitia maiore
                      </p>
                    </div>
                  </div>
                </span>
                <span className="timeline__bullet">
                  <div className="card-custom">
                    <div className="inner ">
                      <div className="img-container">
                        <img src="images/others/timeLine3.jpg" />
                      </div>
                      <p className="card-custom__text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Veniam id, rem earum optio ipsa atque incidunt
                        similique totam doloremque mollitia maiore
                      </p>
                    </div>
                  </div>
                </span>
                <span className="timeline__bullet">
                  <div className="card-custom">
                    <div className="inner ">
                      <div className="img-container">
                        <img src="images/others/timeLine4.jpg" />
                      </div>
                      <p className="card-custom__text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Veniam id, rem earum optio ipsa atque incidunt
                        similique totam doloremque mollitia maiore
                      </p>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </section>
        {/*ending of about us*/}
      </div>

      <div className="team-work ">
        <div className="team-work__inner">
          <h2 className="team-work__title">
            Together we establish an adequate environment for client
            satisfaction
          </h2>
          {/* st container start */}
          <div className="statistics-container">
            <div className="statisitic">
              <span className="icon">
                <i className="fas fa-code" />
              </span>
              <span className="title">Developers</span>
              <span className="number" id="statistic-counter" data-count="58" />
            </div>
            <div className="statisitic">
              <span className="icon">
                <i className="fas fa-user-tie" />
              </span>
              <span className="title">Clients</span>
              <span
                className="number"
                id="statistic-counter"
                data-count="100"
              />
            </div>

            <div className="statisitic">
              <span className="icon">
                <i className="fas fa-chart-bar" />
              </span>
              <span className="title">Pages</span>
              <span
                className="number"
                id="statistic-counter"
                data-count="214"
              />
            </div>
          </div>
          {/* st container end */}
        </div>
      </div>

      {/*starting of services*/}
      <section className="services " id="services">
        <div className="container">
          {/*carousal*/}
          <div id="c" className="carousel slide">
            <ol className="carousel-indicators">
              <li data-target="#c" data-slide-to="0" className="active">
                <i className="fas fa-store fa-3x" />
              </li>
              <li data-target="#c" data-slide-to="1" className="">
                <i className="fas fa-headphones fa-3x" />
              </li>
              <li data-target="#c" data-slide-to="2" className="">
                <i className="fas fa-briefcase-medical fa-3x" />
              </li>
            </ol>
            <div className="carousel-inner">
              {/*starting of slide 1*/}
              <div className="carousel-item active">
                <div className="row">
                  {/*describtion*/}
                  <div className="col-12 col-md-5">
                    <span className="typeIcon">
                      <i className="fas fa-less-than" />
                    </span>
                    <h2 className="service-title-describtion ">type 1</h2>
                    <span className="typeIcon fa-custom-slash"> /</span>
                    <span className="typeIcon">
                      <i className="fas fa-greater-than" />
                    </span>

                    <ul>
                      <h4 className="service-title-describtion">
                        what it can prodvide
                      </h4>
                      <p className="service__desciption">
                        {" "}
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Perspiciatis cupiditate veritatis aut. Nobis modi
                        maiores, omnis vero doloribus in pariatur perspiciatis
                        odit dolorum illum corrupti harum expedita provident sit
                        natus quod deserunt blanditiis ducimus? Dicta,
                        exercitationem! Provident beatae doloremque nobis.
                      </p>
                    </ul>
                  </div>
                  {/*video*/}
                  <div className="col-12 col-md-7 ">
                    <video
                      width="100%"
                      height="300px"
                      height="auto"
                      controls
                      loop
                      muted
                      preload="auto"
                    >
                      <source src=".mp4" type="video/mp4" />
                      <source src=".ogg" type="video/ogg" />
                      <source src=".webm" type="video/webm" />
                    </video>
                  </div>
                </div>
              </div>
              {/*ending of slide 1*/}

              {/*starting of slide 2*/}
              <div className="carousel-item">
                <div className="row">
                  {/*describtion*/}
                  <div className="col-12 col-md-5">
                    <span className="typeIcon">
                      <i className="fas fa-less-than" />
                    </span>
                    <h2 className="service-title-describtion ">type 2</h2>
                    <span className="typeIcon fa-custom-slash"> /</span>
                    <span className="typeIcon">
                      <i className="fas fa-greater-than" />
                    </span>

                    <ul>
                      <h4 className="service-title-describtion">
                        what it can prodvide
                      </h4>
                      <p className="service__desciption">
                        {" "}
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Perspiciatis cupiditate veritatis aut. Nobis modi
                        maiores, omnis vero doloribus in pariatur perspiciatis
                        odit dolorum illum corrupti harum expedita provident sit
                        natus quod deserunt blanditiis ducimus? Dicta,
                        exercitationem! Provident beatae doloremque nobis.
                      </p>
                    </ul>
                  </div>
                  {/*video*/}
                  <div className="col-12 col-md-7 ">
                    <video
                      width="100%"
                      height="300px"
                      height="auto"
                      controls
                      loop
                      muted
                      preload="auto"
                    >
                      <source src=".mp4" type="video/mp4" />
                      <source src=".ogg" type="video/ogg" />
                      <source src=".webm" type="video/webm" />
                    </video>
                  </div>
                </div>
              </div>
              {/*ending of slide 2*/}

              {/*starting of slide 3*/}
              <div className="carousel-item ">
                <div className="row">
                  {/*describtion*/}
                  <div className="col-12 col-md-5">
                    <span className="typeIcon">
                      <i className="fas fa-less-than" />
                    </span>
                    <h2 className="service-title-describtion ">type 3</h2>
                    <span className="typeIcon fa-custom-slash"> /</span>
                    <span className="typeIcon">
                      <i className="fas fa-greater-than" />
                    </span>

                    <ul>
                      <h4 className="service-title-describtion">
                        what it can prodvide
                      </h4>
                      <p className="service__desciption">
                        {" "}
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Perspiciatis cupiditate veritatis aut. Nobis modi
                        maiores, omnis vero doloribus in pariatur perspiciatis
                        odit dolorum illum corrupti harum expedita provident sit
                        natus quod deserunt blanditiis ducimus? Dicta,
                        exercitationem! Provident beatae doloremque nobis.
                      </p>
                    </ul>
                  </div>
                  {/*video*/}
                  <div className="col-12 col-md-7 ">
                    <video
                      width="100%"
                      height="300px"
                      height="auto"
                      controls
                      loop
                      muted
                      preload="auto"
                    >
                      <source src=".mp4" type="video/mp4" />
                      <source src=".ogg" type="video/ogg" />
                      <source src=".webm" type="video/webm" />
                    </video>
                  </div>
                </div>
              </div>
              {/*ending of slide 3*/}
            </div>
          </div>
        </div>
      </section>
      {/*ending of services*/}

      <div className="container">
        {/*starting of acievements*/}
        <section className="achieve" id="clients">
          <div className="row">
            <div
              className="col-xs-12 col-sm-6 col-lg-3 my-3 my-lg-0"
              data-aos="flip-down"
              data-aos-duration="500"
            >
              <div className="img-wrabber" />
            </div>
            <div
              className="col-xs-12 col-sm-6 col-lg-3 my-3 my-lg-0"
              data-aos="flip-down"
              data-aos-duration="1500"
            >
              <div className="img-wrabber" />
            </div>
            <div
              className="col-xs-12 col-sm-6 col-lg-3 my-3 my-lg-0"
              data-aos="flip-down"
              data-aos-duration="2500"
            >
              <div className="img-wrabber" />
            </div>
            <div
              className="col-xs-12 col-sm-6 col-lg-3 my-3 my-lg-0"
              data-aos="flip-down"
              data-aos-duration="3500"
            >
              <div className="img-wrabber" />
            </div>
          </div>
        </section>
        {/*ending of acievements*/}

        {/*starting of testimonials*/}
        <section className="testimonial" data-aos="flip-down">
          {/*title*/}
          {/*carousel*/}
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  {/*card*/}
                  <div className="col-12 col-sm-6">
                    <div className="card">
                      <div className="col-6">
                        <div className="profile-img__container">
                          <img
                            className="card-img-top"
                            alt="profile"
                            src="images/others/profile1.jpg"
                          />
                        </div>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">clint 1</h5>
                        <p className="card-text">client info </p>
                        <a href="#" className="btn btn-primary">
                          client link
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 text-light py-3 py-sm-0">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  {/*card*/}
                  <div className="col-12 col-sm-6">
                    <div className="card">
                      <div className="col-6">
                        <div className="profile-img__container">
                          <img
                            className="card-img-top "
                            alt="profile"
                            src="images/others/profile2.jpg"
                          />
                        </div>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">clint 2</h5>
                        <p className="card-text">client info </p>
                        <a href="#" className="btn btn-primary">
                          client link
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 text-light py-3 oy-sm-0">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  {/*card*/}
                  <div className="col-12 col-sm-6">
                    <div className="card">
                      <div className="col-6">
                        <div className="profile-img__container">
                          <img
                            className="card-img-top "
                            alt="profile"
                            src="images/others/profile3.jpg"
                          />
                        </div>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">clint 3</h5>
                        <p className="card-text">client info </p>
                        <a href="#" className="btn btn-primary">
                          client link
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 text-light py-3 py-sm-0">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*ending of testimonials*/}

        {/*starting of auto typing*/}
        <section className="auto-typing text-center display-4 my-5" />
        {/*ending of auto typing*/}
      </div>
      {/* starting of section blogs*/}
      <section className="blogs " id="blogs">
        <div className="row text-center">
          <div className="col-12 col-lg-5 blogs-title__container">
            <h2 className="blogs__title">
              s
              <span>
                <span>
                  <i className="fas fa-eye" />
                </span>
              </span>
              <span>
                <i className="fas fa-eye" />
              </span>
            </h2>
            <h2 className="blogs__title">our blogs</h2>
            <p className="blogs__text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              consectetur dignissimos, eos nobis error neque ratione! Eos
              provident, praesentium voluptate molestiae molestias dolorum ipsam
              ea veritatis. Asperiores magni maiores perferendis facilis
              temporibus corrupti sapiente quod non earum, cupiditate aperiam
              officiis.
            </p>
          </div>
          <div className="offset-1 " />
          <div className="col-12 col-lg-6">
            <div className="row blog-cards-container">
              <div className="blog-card">
                <div className="blog-card__img-container">
                  <img
                    src="images/others/blog1.jpg"
                    alt=""
                    className="blog-card__img"
                  />
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__title">this is the title</div>
                  <p className="blog-card__text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                    eum veritatis
                  </p>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-card__img-container">
                  <img
                    src="images/others/blog2.jpg"
                    alt=""
                    className="blog-card__img"
                  />
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__title">this is the title</div>
                  <p className="blog-card__text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                    eum veritatis
                  </p>
                </div>
              </div>

              <div className="blog-card">
                <div className="blog-card__img-container">
                  <img
                    src="images/others/blog3.jpg"
                    alt=""
                    className="blog-card__img"
                  />
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__title">this is the title</div>
                  <p className="blog-card__text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                    eum veritatis
                  </p>
                </div>
              </div>

              <div className="blog-card">
                <div className="blog-card__img-container">
                  <img
                    src="images/others/blog4.jpg"
                    alt=""
                    className="blog-card__img"
                  />
                  <div className="blog-card__content">
                    <div className="blog-card__title">this is the title</div>
                    <p className="blog-card__text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ad eum veritatis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ending of section blogs*/}

      {/*starting of footer*/}
      <footer
        className="pt-4 pb-2"
        data-aos="slide-left"
        data-aos-duration="1000"
      >
        <div className="row social-cont">
          <div className="col-xs-12 col-md-4 my-4 my-lg-0">
            <div className="col-12">
              <a href="#">
                <i className="fas fa-map-marker" />
                <span>see where are our clients</span>
              </a>
            </div>
            <div className="col-12" />
            <div className="col-12  social">
              <h3 className="my-3">our social accounts</h3>
              <a href="#">
                <i className="fab fa-facebook-square" />
              </a>
              <a href="#">
                <i className="fab fa-twitter-square" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-google-plus-square" />
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-md-4 my-5 my-lg-2" id="hiring">
            <div className="hiring">
              <div className="col-12">
                <h2>We are hiring</h2>
              </div>
              <div className="col-12">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>
            </div>

            {/*starting of when hiring is hidden*/}
            <div className="when-hiring-hidden">
              <div className="col-12">
                <h2>we'll be hiring soon</h2>
              </div>
              <div className="col-12">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur necessitatibus assumenda inventore error, dolores
                  quibusdam dolore nam consequuntur asperiores pariatur.
                </p>
              </div>
            </div>
            {/*ending of when hiring is hidden*/}
          </div>
          <div className="col-xs-12 col-md-3 offset-md-1 my-4 my-lg-0 ">
            <div className="col-12">
              <h2>contact us</h2>
            </div>
            <ul className="list-unstyled">
              <li>info</li>
              <li>info</li>
              <li>info</li>
              <li>info</li>
            </ul>
          </div>
        </div>

        {/*admin hiring control*/}
        <div className="col-12 d-flex justify-content-center">
          <div className="toggle-btn-container on" id="toggler">
            <div className="toggle-btn" />
          </div>
        </div>

        <div className="col-12 text-center copy">
          chatbotsa &copy; copyrights
        </div>
      </footer>
      {/*ending of footer*/}
    </React.Fragment>
  );
}

export default AllHtml;
