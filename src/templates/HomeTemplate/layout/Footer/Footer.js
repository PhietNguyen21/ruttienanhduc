import { Layout } from "antd";
import React from "react";
import {
  HeatMapOutlined,
  HomeOutlined,
  PhoneOutlined,
  CustomerServiceOutlined,
  LockOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import "./Footer.css";
const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "black", color: "white", padding: "20px 0" }}
    >
      <div
        className=""
        style={{
          width: "80%",
          margin: "auto",
          textAlign: "left",
          fontSize: 20,
        }}
      >
        <div className="row">
          <div className="col-12 col-md-6 ">
            <div style={{ borderBottom: "2px solid gray", fontSize: "30px" }}>
              <HeatMapOutlined style={{ color: "gold" }} /> Hệ thống cơ sở Uy
              Tín
            </div>
            <div
              className="infoCty mt-2"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <HomeOutlined style={{ color: "red", fontSize: "16px" }} />{" "}
                <p
                  style={{
                    marginBottom: "0",
                    marginLeft: "10px",
                    fontSize: 16,
                  }}
                >
                  Cơ sở 1: CT2A Xala Hà Đông
                </p>
              </div>

              <div
                className="mt-2"
                style={{
                  display: "flex",

                  alignItems: "center",
                }}
              >
                <HomeOutlined style={{ color: "red", fontSize: "16px" }} />{" "}
                <p
                  style={{
                    marginBottom: "0",
                    marginLeft: "10px",
                    fontSize: 16,
                  }}
                >
                  Cơ sở 2: 141 Lê Lợi Hà Đông
                </p>
              </div>

              <div
                className="mt-2"
                style={{
                  display: "flex",

                  alignItems: "center",
                }}
              >
                <HomeOutlined style={{ color: "red", fontSize: "16px" }} />{" "}
                <p
                  style={{
                    marginBottom: "0",
                    marginLeft: "10px",
                    fontSize: 16,
                  }}
                >
                  Cơ sở 3: Khu vực Mỹ Đình Cầu giấy
                </p>
              </div>

              <div
                className="mt-2"
                style={{
                  display: "flex",

                  alignItems: "center",
                }}
              >
                <HomeOutlined style={{ color: "red", fontSize: "16px" }} />{" "}
                <p
                  style={{
                    marginBottom: "0",
                    marginLeft: "10px",
                    fontSize: 16,
                  }}
                >
                  Cơ sở 4: khu vực Thanh xuân Hoàng Mai
                </p>
              </div>
              <div
                className="mt-2"
                style={{
                  display: "flex",

                  alignItems: "center",
                }}
              >
                <PhoneOutlined style={{ color: "green", fontSize: "16px" }} />{" "}
                <a
                  href="tel:0835389666"
                  style={{
                    marginBottom: "0",
                    marginLeft: "10px",
                    fontSize: 16,
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Hotline: +0835389666
                </a>
              </div>
              <div
                className="mt-2"
                style={{
                  display: "flex",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "50%",
                    alignItems: "center",
                  }}
                >
                  <CustomerServiceOutlined
                    style={{ color: "white", fontSize: "16px" }}
                  />{" "}
                  <p
                    style={{
                      marginBottom: "0",
                      marginLeft: "10px",
                      fontSize: 16,
                    }}
                  >
                    Phục vụ 24/7
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",

                    alignItems: "center",
                  }}
                >
                  {" "}
                  <LockOutlined />
                  <p
                    style={{
                      marginBottom: "0",
                      marginLeft: "10px",
                      fontSize: 16,
                    }}
                  >
                    Uy tín, bảo mật
                  </p>
                </div>
              </div>
              <div
                className="mt-2"
                style={{
                  display: "flex",

                  alignItems: "center",
                }}
              >
                <DollarOutlined style={{ fontSize: "16px" }} />{" "}
                <p
                  style={{
                    marginBottom: "0",
                    marginLeft: "10px",
                    fontSize: 16,
                  }}
                >
                  Chi phí thấp nhất thị trường
                </p>
              </div>

              <div
                className="listImg mt-2"
                style={{
                  backgroundColor: "white",
                  width: "fit-content",
                  padding: "0 20px",
                  display: "flex",
                  gap: 10,
                }}
              >
                <div className="img-visa">
                  <img
                    width={100}
                    height={50}
                    src="./image/thanhToan.webp"
                    alt="visa"
                  />
                </div>

                <div className="img-BCT">
                  <img
                    width={40}
                    height={50}
                    src="./image/BoCT.svg"
                    alt="boCT"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-2">
            <div className="map" style={{ width: "100%" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.7530376718596!2d105.79268287502956!3d20.962430580670375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad27ab377f8d%3A0xcdb4545d23468708!2sCT2A%20Xa%20La!5e0!3m2!1svi!2s!4v1698724376263!5m2!1svi!2s"
                height={300}
                style={{ border: 0, width: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>©2023 Allrights reserved mystore.com</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
