import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero__text">
          <h1>
            Canal Street Market is a carefully curated retail market, food hall
            &amp; community space open year-round at 265 Canal Street.{" "}
            <a href="">Support Small Business</a> this weekend!
          </h1>
        </div>
      </section>
      <section className="home-image">
        <div className="img-loader__img hero"></div>
      </section>
      <section className="home-columns">
        <h2>A New Kind of Market</h2>
        <div className="home-columns__grid">
          <div className="home-columns__column ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="home-columns__img"
            >
              <div className="first img-loader__img"> </div>
            </motion.div>
            <p>
              Merging retail, food, art, and culture, Canal Street Market
              highlights top retail and design concepts, restaurants, and
              up-and-coming players in the downtown New York City community.
              <br />{" "}
            </p>
          </div>
          <div className="home-columns__column ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="home-columns__img"
            >
              <div className="second img-loader__img"></div>
            </motion.div>
            <p>
              Retail Market Hours:
              <br />
              Fri– Sun: 11:00AM - 7:00PM
              <br />
            </p>
          </div>
          <div className="home-columns__column ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="home-columns__img "
            >
              <div className="third img-loader__img "></div>
            </motion.div>
            <p>
              Food Hall Hours:
              <br />
              Mon – Thurs: 11:00AM - 6:00PM
              <br />
              Fri– Sun: 11:00AM - 7:00PM
              <br />{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="home-events">
        <div className="home-events__header">
          <div className="home-events__header-item">
            <svg
              width="116px"
              height="60px"
              viewBox="0 12 116 58"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs></defs>
              <g
                id="R2"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                fontSize="60"
                fontWeight="500"
                line-spacing="60"
              >
                <g
                  id="1440_HP_v2-1-Copy-3"
                  transform="translate(-172.000000, -3219.000000)"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="0.75"
                >
                  <text id="事件">
                    <tspan x="170" y="3282">
                      活動
                    </tspan>
                  </text>
                </g>
              </g>
            </svg>
          </div>
          <div className="home-events__header-item">
            <h1>Market Events</h1>
          </div>
          <div className="home-events__header-item">
            <svg
              width="116px"
              height="60px"
              viewBox="0 12 116 58"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs></defs>
              <g
                id="R2"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                fontSize="60"
                fontWeight="500"
                line-spacing="60"
              >
                <g
                  id="1440_HP_v2-1-Copy-3"
                  transform="translate(-172.000000, -3219.000000)"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="0.75"
                >
                  <text id="事件">
                    <tspan x="170" y="3282">
                      活動
                    </tspan>
                  </text>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="home-events__row">
          <div className="home-events__row-item">
            <span>10/22</span>
            <p>
              <a href="/community/event/small-business-retail-pop-up-weekend">
                Small Business Retail Pop Up Weekend!
              </a>
            </p>
          </div>
          <div className="home-events__row-item">
            <span>02/07</span>
            <p>
              <a href="/community/event/new-balance-has-teamed-up-with-paris-based-restaurant-meets-streetwear">
                New Balance x Paperboy Paris by Greenhouse @ Canal Street Market
              </a>
            </p>
          </div>
          <div className="home-events__row-item">
            <span>12/11</span>
            <p>
              <a href="/community/event/comedy-show">Hack City 12/11</a>
            </p>
          </div>
          <a href="/community/event/">see all</a>
        </div>
      </section>
      <section className="home-address">
        <a href="">
          <div className="home-address__text">
            <h3>265 Canal St. New York, NY</h3>
          </div>
        </a>
        <a href="">
          <div className="home-address__map">
            <div className="home-address__map-image "></div>
          </div>
        </a>
      </section>
    </main>
  );
}
