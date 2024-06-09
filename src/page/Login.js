import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Login.css"; // 새로운 CSS 파일을 불러옵니다.

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://cspeak.shop/api/login",
        username,
        {
          headers: {
            "Content-Type": "text/plain",
          },
          withCredentials: true,
        }
      );
      console.log(response.data); // 정상 통신 후 응답된 메시지 출력

      if (username === "admin") {
        navigate("/admin");
      } else {
        try {
          const imagesResponse = await axios.get(
            "https://cspeak.shop/api/all/images",
            {
              withCredentials: true,
            }
          );
          let images = imagesResponse.data.data.imageDtos; // 이미지 데이터 추출

          images = images.slice(0, 5); // 테스트용으로 첫 5개의 이미지만 사용
          console.log(images);

          navigate("/start-survey", { state: { images } });
        } catch (imageError) {
          if (imageError.response && imageError.response.data.code === "2002") {
            navigate("/already-participated");
          } else {
            console.error("Error fetching images", imageError);
            alert("이미지를 가져오는 데 실패했습니다.");
          }
        }
      }
    } catch (error) {
      console.error("Error logging in", error);
      alert("로그인 실패");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
