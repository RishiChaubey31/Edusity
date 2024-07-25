import React from "react";
import "./Testimonials.css";
import next_icon from "../../Assets/next-icon.png";
import back_icon from "../../Assets/back-icon.png";
import user_1 from "../../Assets/user-1.png";
import user_2 from "../../Assets/user-2.png";
import user_3 from "../../Assets/user-3.png";
import user_4 from "../../Assets/user-4.png";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" />
      <img src={back_icon} alt="" className="back-btn" />
      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                sapiente ipsa similique totam illo nisi, fugit vero sint
                assumenda tenetur! Iste tempora optio debitis blanditiis
                dolores, amet corrupti natus quidem libero aliquam minima
                consequatur neque eos laborum, nulla expedita accusantium, iusto
                hic nisi provident accusamus error eum illo veniam. Quisquam,
                inventore?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Angelena Joli</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                sapiente ipsa similique totam illo nisi, fugit vero sint
                assumenda tenetur! Iste tempora optio debitis blanditiis
                dolores, amet corrupti natus quidem libero aliquam minima
                consequatur neque eos laborum, nulla expedita accusantium, iusto
                hic nisi provident accusamus error eum illo veniam. Quisquam,
                inventore?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Robert Downy Jr</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                sapiente ipsa similique totam illo nisi, fugit vero sint
                assumenda tenetur! Iste tempora optio debitis blanditiis
                dolores, amet corrupti natus quidem libero aliquam minima
                consequatur neque eos laborum, nulla expedita accusantium, iusto
                hic nisi provident accusamus error eum illo veniam. Quisquam,
                inventore?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Chris Hampsworth</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                sapiente ipsa similique totam illo nisi, fugit vero sint
                assumenda tenetur! Iste tempora optio debitis blanditiis
                dolores, amet corrupti natus quidem libero aliquam minima
                consequatur neque eos laborum, nulla expedita accusantium, iusto
                hic nisi provident accusamus error eum illo veniam. Quisquam,
                inventore?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
