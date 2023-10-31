import React from "react";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import { Layout } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import "./HomeTemplate.css";
const HomeTemplates = () => {
  const styleImgContent = {
    backgroundImage: `url("./image/rutTien.jpg")`,
    width: "100%",
    posistion: "absoblute",

    height: "100%",
    backgroundSize: "cover",
  };
  return (
    <Layout>
      <Header />
      <div style={{ marginTop: "80px" }}>
        <div className="row bangGia">
          <div
            className="content-left col-12 col-md-6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="img-content" style={styleImgContent}></div>
          </div>{" "}
          <div
            className="col-12 col-md-6 content-right"
            style={{ padding: "20px" }}
          >
            <div
              className="title"
              style={{
                padding: "20px 0",
                textAlign: "left",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div className="d-md-flex" style={{ alignItems: "center" }}>
                <span> Phí chỉ từ</span>{" "}
                <span
                  style={{
                    color: "rgb(23, 171, 201)",
                    fontSize: "46px",
                    fontWeight: "bold",
                    marginLeft: "20px",
                  }}
                >
                  1.3%
                </span>
              </div>
              <div className="board">
                <div>Tư vấn free 24/7</div>
                <div>
                  <a
                    style={{ color: "white", textDecoration: "none" }}
                    href="https://zalo.me/0835.389.666"
                    target="_blank"
                  >
                    0835.389.666 ( Mr.Chính)
                  </a>
                </div>
              </div>
            </div>

            <div className="table-container" style={{ padding: "0 10px" }}>
              <table className="responsive-table">
                <thead>
                  <tr>
                    <th>Số Tiền Cần Làm</th>
                    <th>Giá hỗ trợ tại nhà</th>
                    <th>Giá tại văn phòng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1tr {`=>`} 5tr</td>
                    <td>Phí 150k/lần</td>
                    <td>Phí 130k/lần</td>
                  </tr>
                  <tr>
                    <td>5,1tr {`=>`} 10tr</td>
                    <td>Phí 200k/lần</td>
                    <td>Phí 180k/lần</td>
                  </tr>
                  <tr>
                    <td>11tr {`=>`} 50tr</td>
                    <td>Phí 1.8%</td>
                    <td>Phí 1.75%</td>
                  </tr>
                  <tr>
                    <td>51tr {`=>`} 100tr</td>
                    <td>Phí 1.75%</td>
                    <td>Phí 1.7%</td>
                  </tr>
                  <tr>
                    <td>101tr {`=>`} 300tr</td>
                    <td>Phí 1.7%</td>
                    <td>Phí 1.6%</td>
                  </tr>
                  <tr>
                    <td>301tr {`=>`} 500tr</td>
                    <td>Phí 1.6%</td>
                    <td>Phí 1.5%</td>
                  </tr>
                  <tr>
                    <td>501tr {`=>`} 1 tỷ</td>
                    <td>Phí 1.5%</td>
                    <td>Phí 1.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div
          className="quiTrinh"
          style={{ marginTop: "20px", fontSize: "20px" }}
        >
          <div className="row">
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
              <div>
                <div
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "rgb(23, 171, 201)",
                  }}
                >
                  Qui Trình Làm Việc?
                </div>
                <div className="listLi" style={{ textAlign: "left" }}>
                  <ol>
                    <li>Bạn gọi điện/nhắn tin zalo để được tư vấn</li>
                    <li>
                      Bạn tới văn phòng chúng tôi hoặc nhân viên qua tận nơi hỗ
                      trợ bạn
                    </li>
                    <li>Cà thẻ và tiến hành thanh toán</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6" style={{ padding: "20px" }}>
              <div className="img">
                <div
                  style={{
                    backgroundImage: `url("./image/quiTrinh.jpg")`,
                    height: "500px",
                    width: "100%",
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div
        className="contact"
        style={{ position: "fixed", right: "2%", bottom: "6%" }}
      >
        <div className="Zalo">
          <a href="https://zalo.me/0835389666" target="_blank">
            <img
              style={{ width: "60px", height: "60px" }}
              src="./image/zalo.png"
              alt="icon-zalo"
            />
          </a>
        </div>
        <div className="soDt">
          <button
            className="button-62"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img width={30} height={30} src="./image/Phone.png" alt="phone" />
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="tel: 0835.389.666"
            >
              {" "}
              0835.389.666
            </a>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default HomeTemplates;
