import React from "react";
import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/wallet.css";

const Wallet = () => {
  const wallet__data = [
    {
      title: "Bitcoin",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Veniam adipisci cupiditate officia",
      icon: "ri-bit-coin-line",
    },
    {
      title: "Coinbase",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Veniam adipisci cupiditate officia",
      icon: "ri-coin-line",
    },
    {
      title: "MetaMask",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Veniam adipisci cupiditate officia",
      icon: "ri-money-cny-circle-line",
    },
    {
      title: "Etherium",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Veniam adipisci cupiditate officia",
      icon: "ri-bit-coin-line",
    },
  ];

  return (
    <>
      <CommonSection title="Connect Wallet" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className="w-50 m-auto">
                <h3 className="text-light">Connect your wallet</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veniam adipisci cupiditate officia
                </p>
              </div>
            </Col>

            {wallet__data.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                <div className="wallet__item">
                  <span>
                    <i className={item.icon}></i>
                  </span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallet;
