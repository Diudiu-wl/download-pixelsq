
import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const buttonRef = useRef(null);
  const panelRef = useRef(null);

  const handleToggle = () => {
    setOpen((prev) => !prev);
    if (!open) setSelected(null); //打开时重置内容
  };

  const handleSelect = (name) => {
    setSelected(name);
  };

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e) => {
      
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target) &&
        panelRef.current &&
        !panelRef.current.contains(e.target)
      ) {
        setOpen(false);
        setSelected(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);


  return (
    <div className="app">
      <div className="card">
        <h1 className="title">欢迎下载像素小鱿鱼桌宠</h1>
        <p className="subtitle">windows版一键下载~</p>

        <button
            className="download-btn"
            onClick={() => window.location.href = `${process.env.PUBLIC_URL}/downloads/pixelsquid.exe`}
          >
            下载
          </button>

        <button
        ref={buttonRef}
        className="about-button"
        onClick={handleToggle}
        >
          关于作者
        </button>

              {open && (
        <div
          ref={panelRef}
          className={`about-panel ${selected ? "about-panel-expanded" : ""}`}
        >
          {!selected && (
  <div className="link-list">
    <div className="link-item">
      <span className="label">美术：</span>
      <span
        className="link"
        onClick={() => handleSelect("daami")}
      >
        打蜜
      </span>
    </div>

    <div className="link-item">
      <span className="label">编程：</span>
      <span
        className="link"
        onClick={() => handleSelect("tapioca")}
      >
        小白的狗
      </span>
    </div>
  </div>
)}


          {/*
          {selected === "arainwong" && (
            <div className="detail">
              <p>arainwong (Ω7):</p>
              <video
                className="media" 
                src={`${process.env.PUBLIC_URL}/images/arainwong.mp4`}  
                autoPlay              
                loop                  
                muted                 
                playsInline          
              />
              <p>畅玩斯普拉遁，感悟痛苦人生。</p>
               
              <a href="https://github.com/arainwong" target="_blank" rel="noopener noreferrer" className="github-button">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Logo" />
              Follow Me
              </a>
            </div>
          )}
          */}


          {selected === "daami" && (
            <div className="detail">
              <p>打蜜:</p>
              <img src={`${process.env.PUBLIC_URL}/images/daami.jpg`} alt="daami" />
              <p>特别坏的长热使。</p>
      
              {/*
              <a href="https://github.com/arainwong" target="_blank" rel="noopener noreferrer" className="github-button">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Logo" />
              Follow Me
              </a>
              */}
            </div>
          )}

          {selected === "tapioca" && (
            <div className="detail">
              <p>小白的狗:</p>
              <img src={`${process.env.PUBLIC_URL}/images/tapioca.jpeg`} alt="tapioca" />
              <p>日常破防的中刷使。</p>
              
              <a href="https://github.com/Diudiu-wl" target="_blank" rel="noopener noreferrer" className="github-button">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Logo" />
              Follow Me
              </a>
            </div>
          )}
        </div>
      )}

          
      </div>

      
    </div>
  );
}

export default App;
