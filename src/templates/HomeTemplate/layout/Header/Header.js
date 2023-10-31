import { Layout } from "antd";
import React from "react";
import "./Header.css";

const Header = () => {
  const imgLeftStyle = {
    backgroundImage: `url("/image/imgleft.jpg")`,
    width: " 100%",
    height: " 531px",
  };

  return (
    <header>
      <div className="d-flex header">
        {" "}
        <div className="header-left">
          <div className="img" style={imgLeftStyle}></div>
        </div>
        <div className="header-right ">
          <div className="content">
            Đáo và rút thẻ tín dụng chỉ từ <br />
            <span
              style={{
                display: "inline-block",
                fontSize: "40px",
                border: "6px solid white",
                borderRadius: "20px",
                backgroundColor: "rgb(23, 171, 201)",
                color: "white",
                padding: "10px",
                transform: "rotateZ(-8deg)",
              }}
            >
              1.3%
            </span>
            <br />
            <button style={{ marginTop: "14px" }} className="button-34">
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="https://zalo.me/0835389666"
                target="_blank"
              >
                Miễn phí dịch vụ lên tới 45 ngày{" "}
              </a>
            </button>
          </div>

          <h1>
            <span style={{ color: "white" }}>QUẸT THẺ</span>{" "}
            <span style={{ color: "rgb(17, 10, 92)" }}></span>RÚT TIỀN
          </h1>
          <div>
            <p>ĐỊA ĐIỂM RÚT TIỀN THẺ TÍN DỤNG </p>
            <p>UY TÍN NHẤT HÀ NỘI </p>

            <button className="button-33">
              <a href="tel:0835389666" className="button2">
                GỌI NGAY
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden-top d-none d-md-block"></div>
    </header>
  );
};

export default Header;
