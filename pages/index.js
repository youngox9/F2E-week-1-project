import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Tween, Timeline } from "react-gsap";
import { clsx } from "clsx";

import ScrollTween from "@/components/ScrollTween";
import LoadingMask from "@/components/LoadingMask";
import AnimalSence from "@/components/AnimalSence";
import DecorateSence from "@/components/DecorateSence";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import { useBrowserInfo } from "@/hook";

export default function Banner(props) {
  const {} = props;
  const dispatch = useDispatch();
  const { progress = 0 } = useSelector((state) => state?.global || {});

  const { startProgress, isPC } = useSelector((state) => state?.global);

  useBrowserInfo((config) => {
    dispatch({ type: "SET_SCROLL_PROGRESS", ...config });
  });

  return (
    <>
      {/* <div className="global-progress">{progress}</div> */}
      <LoadingMask />
      <Cursor />
      <a
        className="logo"
        href="https://2022.thef2e.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={clsx("pc", progress > 10 && "active")}
          src="logo/logo.png"
        />
        <img className="m" src="logo/logo_text.png" />
      </a>

      <div className={clsx("traffic-light", startProgress > 5 && "active")}>
        <p>{startProgress > 4 ? "GO !" : "Ready ?"}</p>
        <div className="light-bar">
          <img className="bk" src="/main/ready_frame.png" />
          {startProgress > 3 && (
            <img className="light light-1" src="/main/ready_1.png" />
          )}
          {startProgress > 2 && (
            <img className="light light-2" src="/main/ready_2.png" />
          )}
          {startProgress > 1 && (
            <img className="light light-3" src="/main/ready_3.png" />
          )}
        </div>
      </div>
      <a
        className="profile-btn hover-pic"
        href="https://2022.thef2e.com/users"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/btn/btn_user.png" />
        <img className="h" src="/btn/btn_user_h.png" />
      </a>
      <a
        className="join-btn "
        href="https://2022.thef2e.com/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="f2e-btn active">
          <p>Join</p>
          <div className="f2e-btn-pic">
            <img src="/btn/btn_join.png" />
            <img className="h" src="/btn/btn_join_h.png" />
          </div>
        </div>
      </a>
      <div className="container">
        <div className="content">
          <Map />
          <DecorateSence />
          <Navbar />

          <AnimalSence />
          <div className="delay-sence" />
          <div className="sence sence-1">
            <ScrollTween>
              <div className="tit">
                <Tween
                  target="img"
                  from={{ opacity: 0, scale: 0.5 }}
                  to={{ opacity: 1, scale: 1 }}
                >
                  <img className="pc" src="/kv2_tit.svg" />
                  <img className="m" src="/kv2_tit_m.svg" />
                </Tween>
              </div>
            </ScrollTween>

            <div className="flex">
              <ScrollTween>
                <Tween
                  target=".quest-box"
                  from={{ opacity: 0, y: "50%", scale: 0 }}
                  to={{ opacity: 1, y: "0%", scale: 1 }}
                >
                  <div className="flex-col">
                    <div className="quest-box">
                      <p>????????????????????????????????????</p>
                      <img className="pc" src="/main/question_1.png" />
                      <img className="m" src="/main/question_1_m.png" />
                    </div>
                  </div>
                </Tween>
              </ScrollTween>
              <ScrollTween>
                <Tween
                  target=".quest-box"
                  from={{ opacity: 0, y: "50%", scale: 0 }}
                  to={{ opacity: 1, y: "0%", scale: 1 }}
                >
                  <div className="flex-col">
                    <div className="quest-box">
                      <p>??????????????????????????????</p>
                      <img className="pc" src="/main/question_2.png" />
                      <img className="m" src="/main/question_2_m.png" />
                    </div>
                  </div>
                </Tween>
              </ScrollTween>
              <ScrollTween>
                <Tween
                  target=".quest-box"
                  from={{ opacity: 0, y: "50%", scale: 0 }}
                  to={{ opacity: 1, y: "0%", scale: 1 }}
                >
                  <div className="flex-col">
                    <div className="quest-box">
                      <p>????????????????????????????????????</p>
                      <img className="pc" src="/main/question_3.png" />
                      <img className="m" src="/main/question_3_m.png" />
                    </div>
                  </div>
                </Tween>
              </ScrollTween>
            </div>
          </div>

          <div className="sence sence-2">
            <ScrollTween>
              <div className="tit">
                <Tween
                  target="img"
                  from={{ opacity: 0, scale: 0.5 }}
                  to={{ opacity: 1, scale: 1 }}
                >
                  <img className="pc" src="/kv3_tit.svg" />
                  <img className="m" src="/kv3_tit_m.svg" />
                </Tween>
              </div>
            </ScrollTween>
            <ScrollTween>
              <div className="flex">
                <div className="flex-col m">
                  <Tween
                    from={{ opacity: 0, scale: 0 }}
                    to={{ opacity: 1, scale: 1 }}
                  >
                    <img src="/character/character_f2e.gif" />
                  </Tween>
                </div>

                <div className="flex-col">
                  <Tween
                    from={{ opacity: 0, scale: 0 }}
                    to={{ opacity: 1, scale: 1 }}
                  >
                    <a
                      className="f2e-btn"
                      href="https://2022.thef2e.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="f2e-btn-pic">
                        <img src="/btn/btn_join.png" />
                        <img className="h" src="/btn/btn_join_h.png" />
                      </div>
                      <p>???????????????</p>
                    </a>
                  </Tween>
                </div>

                <div className="flex-col">
                  <Tween
                    from={{ opacity: 0, scale: 0 }}
                    to={{ opacity: 1, scale: 1 }}
                  >
                    <a
                      className="f2e-btn"
                      href="https://2022.thef2e.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="f2e-btn-pic">
                        <img src="/btn/btn_join.png" />
                        <img className="h" src="/btn/btn_join_h.png" />
                      </div>
                      <p>UI?????????</p>
                    </a>
                  </Tween>
                </div>

                <div className="flex-col m">
                  <Tween
                    from={{ opacity: 0, scale: 0 }}
                    to={{ opacity: 1, scale: 1 }}
                  >
                    <img src="/character/character_ui.gif" />
                  </Tween>
                </div>

                <div className="flex-col m">
                  <Tween
                    from={{ opacity: 0, scale: 0 }}
                    to={{ opacity: 1, scale: 1 }}
                  >
                    <img src="/character/character_team.gif" />
                  </Tween>
                </div>

                <div className="flex-col">
                  <Tween
                    from={{ opacity: 0, scale: 0 }}
                    to={{ opacity: 1, scale: 1 }}
                  >
                    <a
                      className="f2e-btn"
                      href="https://2022.thef2e.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="f2e-btn-pic">
                        <img src="/btn/btn_join.png" />
                        <img className="h" src="/btn/btn_join_h.png" />
                      </div>
                      <p>?????????(UI+??????)</p>
                    </a>
                  </Tween>
                </div>
              </div>
            </ScrollTween>
          </div>
          <div className="sence sence-3">
            <ScrollTween>
              <div className="tit">
                <Tween
                  target={"img"}
                  from={{ opacity: 0, scale: 0.5 }}
                  to={{ opacity: 1, scale: 1 }}
                  // ease="elastic.out(0.2, 0.1)"
                >
                  <img className="pc" src="/kv4_tit.svg" />
                  <img className="m" src="/kv4_tit_m.svg" />
                </Tween>
              </div>
            </ScrollTween>

            <div className="week-list">
              <ScrollTween>
                <Tween
                  from={{ opacity: 0, scale: 0.5, x: "-25%" }}
                  to={{ opacity: 1, scale: 1, x: "0%" }}
                >
                  <div className="week-item-box">
                    <div className="week-item-pic">
                      <img src="/main/week_1.png" />
                    </div>
                    <div className="week-item-content">
                      <h4>WEEK 1</h4>
                      <p>The F2E ??????????????????</p>
                      <div className="inline-btns">
                        <a className="border-btn">Parallax Scrolling</a>
                        <a className="border-btn">#????????????</a>
                      </div>
                      <a
                        className="border-btn link"
                        href="https://2022.thef2e.com/news/week1"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        ??????????????????
                      </a>
                    </div>
                  </div>
                </Tween>
              </ScrollTween>
              <ScrollTween>
                <Tween
                  from={{ opacity: 0, scale: 0.5, x: "25%" }}
                  to={{ opacity: 1, scale: 1, x: "0%" }}
                >
                  <div className="week-item-box week-item-right">
                    <div className="week-item-pic m">
                      <img src="/main/week_2.png" />
                    </div>
                    <div className="week-item-content">
                      <h4>WEEK 2</h4>
                      <p>???????????????????????????</p>
                      <div className="inline-btns">
                        <a className="border-btn">Canvas</a>
                        <a className="border-btn">#??????????????????</a>
                      </div>
                      <a
                        className="border-btn link"
                        href="https://2022.thef2e.com/news/week2"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        ??????????????????
                      </a>
                    </div>
                    <div className="week-item-pic pc">
                      <img src="/main/week_2.png" />
                    </div>
                  </div>
                </Tween>
              </ScrollTween>
              <ScrollTween>
                <Tween
                  from={{ opacity: 0, scale: 0.5, x: "-25%" }}
                  to={{ opacity: 1, scale: 1, x: "0%" }}
                >
                  <div className="week-item-box">
                    <div className="week-item-pic">
                      <img src="/main/week_3.png" />
                    </div>
                    <div className="week-item-content">
                      <h4>WEEK 3</h4>
                      <p>Scrum ?????????</p>
                      <div className="inline-btns">
                        <a className="border-btn">JS draggable</a>
                        <a className="border-btn">#????????????</a>
                      </div>
                      <a
                        className="border-btn link"
                        href="https://2022.thef2e.com/news/week3"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        ??????????????????
                      </a>
                    </div>
                  </div>
                </Tween>
              </ScrollTween>
            </div>
          </div>
          <div className="sence sence-4">
            <div className="flex-row">
              <ScrollTween>
                <Tween
                  from={{ scale: 0.5, opacity: 0, rotation: -45 }}
                  to={{ scale: 1, opacity: 1, rotation: 0 }}
                >
                  <div className="flex-col">
                    <img className="icon" src="/date_icon_1.svg" />
                    <h4>SIGN UP</h4>
                    <div className="date">10/13 - 11/6</div>
                    <p>??????????????????????????????</p>
                  </div>
                </Tween>
              </ScrollTween>
              <ScrollTween>
                <Tween
                  from={{ scale: 0.5, opacity: 0, rotation: 0 }}
                  to={{ scale: 1, opacity: 1, rotation: 0 }}
                >
                  <div className="flex-col">
                    <img className="icon" src="/date_icon_2.svg" />
                    <h4>START</h4>
                    <div className="date">10/13 - 11/6</div>
                    <p>
                      10/31(???) UI??????????????????
                      <br />
                      11/7(???) ???????????????
                    </p>
                  </div>
                </Tween>
              </ScrollTween>
              <ScrollTween>
                <Tween
                  from={{ scale: 0.5, opacity: 0, rotation: 45 }}
                  to={{ scale: 1, opacity: 1, rotation: 0 }}
                >
                  <div className="flex-col">
                    <img className="icon" src="/date_icon_3.svg" />
                    <h4>UPLOAD</h4>
                    <div className="date">10/13 - 11/6</div>
                    <p>
                      ?????????????????????
                      <br />
                      <span>??????????????? ???????????????????????????</span>
                    </p>
                  </div>
                </Tween>
              </ScrollTween>
            </div>
            <ScrollTween>
              <Tween from={{ scale: 0 }} to={{ scale: 1 }}>
                <div className="middle-line">
                  <img src="/gate_2.svg" />
                </div>
              </Tween>
            </ScrollTween>
          </div>

          <ScrollTween start="top 50%">
            <div className="sence sence-5">
              {isPC ? (
                <Tween
                  from={{ rotation: 45, y: "-300%" }}
                  to={{
                    rotation: 0,
                    y: "0%",
                    text: "???????????????????????????????????????",
                  }}
                >
                  <h4 className="pc"></h4>
                </Tween>
              ) : (
                <h4 className="m">
                  ????????????
                  <br />
                  ???????????????????????????
                </h4>
              )}
            </div>
          </ScrollTween>

          <div className="sence sence-6">
            <ScrollTween>
              <div className="tit">
                <Tween
                  target="img"
                  from={{ opacity: 0, scale: 0.5 }}
                  to={{ opacity: 1, scale: 1 }}
                >
                  <img className="pc" src="/kv7_tit.svg" />
                  <img className="m" src="/kv7_tit_m.svg" />
                </Tween>
              </div>
            </ScrollTween>
            <ScrollTween>
              <div className="reward">
                <Tween from={{ scale: 0 }} to={{ scale: 1 }}>
                  <div className="reward-pic">
                    <img src="/main/award_trophy.png" />
                  </div>
                </Tween>
                <div className="reward-content">
                  <Tween
                    stagger={0.2}
                    from={{ opacity: 0, x: "-20%" }}
                    to={{ opacity: 1, x: "0%" }}
                  >
                    <h4>????????????</h4>
                    <p>
                      ????????? ???????????????????????????UI ??????????????????????????????
                      <br />
                      ????????? ??????????????????????????????????????????????????????????????????
                      12/30(???) ????????????????????????????????????
                    </p>

                    <h4>??????</h4>

                    <p>
                      1. ???????????? ?????????????????????????? <br />
                      2. ??????????????? ???????????NTD <span>3,000</span> /??? <br />
                      3. ??????????????? ???????????NTD <span>10,000</span> /???
                      <br />
                      4. ????????????????????????????????? <br />
                    </p>
                  </Tween>
                </div>
              </div>
            </ScrollTween>
          </div>
          <div className="sence sence-7">
            <ScrollTween>
              <div className="tit">
                <Tween
                  target="img"
                  from={{ opacity: 0, scale: 0.5 }}
                  to={{ opacity: 1, scale: 1 }}
                >
                  <img className="pc" src="/kv8_tit.svg" />
                  <img className="m" src="/kv8_tit_m.svg" />
                </Tween>
              </div>
            </ScrollTween>
            <ScrollTween>
              <div className="sponsor">
                <Tween
                  stagger={0.2}
                  from={{ opacity: 0, scale: 0 }}
                  to={{ opacity: 1, scale: 1 }}
                >
                  <div className="sponsor-item">
                    <img src="/main/logo_blockstudio.png" />
                    <a className="border-btn">#????????????</a>
                  </div>
                  <div className="sponsor-item">
                    <img src="/main/logo_kdanmobile.png" />
                    <a className="border-btn">#????????????</a>
                  </div>
                  <div className="sponsor-item">
                    <img src="/main/logo_titansoft.png" />
                    <a className="border-btn">#????????????</a>
                  </div>
                </Tween>
              </div>
            </ScrollTween>
          </div>
          <div className="sence sence-8"></div>
          <div className="sence sence-9">
            <img className="finish-logo" src="/logo/logo.png" />
            <a
              className="f2e-btn"
              href="https://2022.thef2e.com/works/create"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className="f2e-btn-pic">
                <img src="/btn/btn_join.png" />
                <img className="h" src="/btn/btn_join_h.png" />
              </div>
              <p>????????????</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
