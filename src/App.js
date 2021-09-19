import React from "react";
import Slider from "react-slick";
import "./assets/App.css";
import ensun from "./assets/img/ensun.ico";
import season1 from "./assets/img/season1.JPG";
import season2 from "./assets/img/season2.JPG";
import kakao_map from "./assets/img/kakaoMap.png";
import jcbc_logo from "./assets/img/logo.jpg";
import kctv_jejucleanboysclub from "./assets/video/kctv_jejucleanboysclub.mp4";

/*global kakao*/
class App extends React.Component {
  state = {
    isLoading: true,
    friend_profile1: [],
    friend_profile2: [],
    feed_location: [],
  };

  setMap = () => {
    kakao.maps.load(() => {
      let container = document.getElementById("Mymap");
      let options = {
        center: new kakao.maps.LatLng(33.371776, 126.543786),
        level: 9,
      };
      const map = new window.kakao.maps.Map(container, options);
      var imageSize = new kakao.maps.Size(25, 25);
      var markerImage = new kakao.maps.MarkerImage(jcbc_logo, imageSize);

      this.state.feed_location.map((location) => {
        var home_Position = new kakao.maps.LatLng(location.x, location.y);

        // 마커를 생성합니다
        var home = new kakao.maps.Marker({
          position: home_Position,
          image: markerImage,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        home.setMap(map);
      });
    });
  };

  getJson = () => {
    let filename = "our_friend.json";
    let data = fetch(filename, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(function (response) {
      return response.json();
    });
    return data;
  };

  getData = async () => {
    const instagramData = await this.getJson();
    const { friend_profile1, friend_profile2, feed_location } = instagramData;

    this.setState({
      friend_profile1,
      friend_profile2,
      feed_location,
      isLoading: false,
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.getData();
      this.setMap();
    }, 1500);
  }

  render() {
    const {
      isLoading,
      friend_profile1,
      friend_profile2,
      feed_location,
    } = this.state;

    const settings = {
      adaptiveHeight: true,
      dots: true,
      arrows: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      beforeChange: () => {
        window.scrollTo({ top: 0, left: 0 });
      },
      appendDots: (dots) => (
        <div
          style={{
            position: "fixed",
            padding: "10px",
            backgroundColor: "white",
            textAlign: "center",
            borderTop: "1px solid #e2e8f0",
            marginBottom: "25px",
          }}
        >
          <div style={{ flex: 1 }}> {dots} </div>
        </div>
      ),
      customPaging: (i) => {
        if (i === 0) {
          return (
            <div style={{ flex: 1 }}>
              <img
                className="w-12 lg:w-16"
                alt="ensun"
                src={ensun}
                key="ensun"
              />
            </div>
          );
        }
        if (i === 1) {
          return (
            <div style={{ flex: 1 }}>
              <img
                className="w-12 lg:w-16"
                alt="jcbc_logo"
                src={kakao_map}
                key="jcbc_logo1"
              />
            </div>
          );
        }
        if (i === 2) {
          return (
            <div style={{ flex: 1 }}>
              <img
                className="w-12 lg:w-16"
                alt="kakao_map"
                src={jcbc_logo}
                key="kakao_map"
              />
            </div>
          );
        }
      },
    };

    return (
      <div className="">
        {isLoading ? (
          <div className="w-screen overflow-x-hidden">
            <div className="pt-0">
              <div className="px-2">
                <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-2xl">
                  <div className="flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md">
                      <div className="w-2/3 h-6 bg-gray-200 rounded-full animate-pulse mb-4"></div>
                      <div className="w-96 h-48 bg-gray-200 animate-pulse"></div>
                      <div className="mt-8 h-32 w-full space-y-3">
                        <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="w-1/2 h-4 bg-gray-200 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="px-2">
                <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-2xl">
                  <div className="flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md">
                      <div className="w-2/3 h-6 bg-gray-200 rounded-full animate-pulse mb-4"></div>
                      <div className="w-96 h-48 bg-gray-200 animate-pulse"></div>
                      <div className="mt-8 h-32 w-full space-y-3">
                        <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="w-1/2 h-4 bg-gray-200 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="">
            <Slider {...settings}>
              <div className="w-screen overflow-x-hidden">
                <div className="pt-0">
                  <div className="px-2">
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-2xl">
                      <div className="flex">
                        <div className="w-full">
                          <div className="flex justify-between items-center p-3">
                            <div className="flex flex-row items-center">
                              <img
                                src={jcbc_logo}
                                className="rounded-full"
                                width="40"
                                alt="jcbc_logo"
                                key="jcbc_logo2"
                              />
                              <div className="flex flex-row items-center ml-2">
                                {" "}
                                <span className="font-bold mr-1">
                                  jejucleanboysclub
                                </span>
                                <small className="h-1 w-1 bg-gray-300 rounded-full mr-1 mt-1"></small>{" "}
                                <a
                                  href="instagram://user?username=jejucleanboysclub"
                                  className="text-blue-600 text-sm hover:text-blue-800"
                                >
                                  Follow
                                </a>
                              </div>
                            </div>
                            <div className="pr-2">
                              {" "}
                              <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div>
                            <video
                              autoPlay="autoplay"
                              muted="muted"
                              controls
                              loop
                              preload="auto"
                            >
                              <source src={kctv_jejucleanboysclub}></source>
                            </video>
                          </div>
                          <div className="p-4 flex justify-between items-center">
                            <div className="flex flex-row items-center">
                              <i className="fa fa-heart-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i className="fa fa-comment-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i className="fa fa-send-o mr-2 fa-1x hover:text-gray-600"></i>
                            </div>
                            <div>
                              <i className="fa fa-bookmark-o fa-1x hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div className="mx-4 mb-4">
                            <span className="text-sm">
                              jejucleanboysclub KCTV 스페셜 청정제주바다를
                              지켜라 1부 [제주클린보이즈클럽]편! 온에어 및
                              다시보기 가능 https://www.kctvjeju.com/
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-10">
                  <div className="px-2">
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-2xl">
                      <div className="flex">
                        <div className="w-full">
                          <div className="flex justify-between items-center p-3">
                            <div className="flex flex-row items-center">
                              <img
                                src={jcbc_logo}
                                className="rounded-full"
                                width="40"
                                alt="jcbc_logo"
                                key="jcbc_logo3"
                              />
                              <div className="flex flex-row items-center ml-2">
                                {" "}
                                <span className="font-bold mr-1">
                                  jejucleanboysclub
                                </span>
                                <small className="h-1 w-1 bg-gray-300 rounded-full mr-1 mt-1"></small>{" "}
                                <a
                                  href="instagram://user?username=jejucleanboysclub"
                                  className="text-blue-600 text-sm hover:text-blue-800"
                                >
                                  Follow
                                </a>
                              </div>
                            </div>
                            <div className="pr-2">
                              {" "}
                              <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div>
                            <img
                              src={season2}
                              className="w-full h-75"
                              alt="season2"
                              key="season2"
                            />
                          </div>
                          <div className="p-4 flex justify-between items-center">
                            <div className="flex flex-row items-center">
                              <i className="fa fa-heart-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i className="fa fa-comment-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i className="fa fa-send-o mr-2 fa-1x hover:text-gray-600"></i>
                            </div>
                            <div>
                              <i className="fa fa-bookmark-o fa-1x hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div className="mx-4 mb-4">
                            <span className="text-sm">
                              jejucleanboysclub 2021년 7월 20일 오전 7시30분
                              Season2 : Day 100🎉 하도리에서의 시즌 1에 이은
                              애월에서의 시즌 2도 어느덧 100일이 되었고, 저희는
                              여름방학을 맞이하려고 합니다! 모두 더위
                              조심하세요~ 코로나 조심하세요~ 조만간 시즌 3로
                              찾아뵙겠습니다!
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-10">
                  <div className="px-2">
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-2xl">
                      <div className="flex">
                        <div className="w-full">
                          <div className="flex justify-between items-center p-3">
                            <div className="flex flex-row items-center">
                              <img
                                src={jcbc_logo}
                                className="rounded-full"
                                width="40"
                                alt="jcbc_logo"
                                key="jcbc_logo4"
                              />
                              <div className="flex flex-row items-center ml-2">
                                {" "}
                                <span className="font-bold mr-1">
                                  jejucleanboysclub
                                </span>
                                <small className="h-1 w-1 bg-gray-300 rounded-full mr-1 mt-1"></small>{" "}
                                <a
                                  href="instagram://user?username=jejucleanboysclub"
                                  className="text-blue-600 text-sm hover:text-blue-800"
                                >
                                  Follow
                                </a>
                              </div>
                            </div>
                            <div className="pr-2">
                              {" "}
                              <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div>
                            <img
                              src={season1}
                              className="w-full h-75"
                              alt="season1"
                              key="season1"
                            />
                          </div>
                          <div className="p-4 flex justify-between items-center">
                            <div className="flex flex-row items-center">
                              <i className="fa fa-heart-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i className="fa fa-comment-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i className="fa fa-send-o mr-2 fa-1x hover:text-gray-600"></i>
                            </div>
                            <div>
                              <i className="fa fa-bookmark-o fa-1x hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div className="mx-4 mb-4">
                            <span className="text-sm">
                              🎊비치클린 Day 100 🎊 2021년 2월 16일
                              오전 8시 “우리의 놀이터
                              하도해변을 지키자!” 라는
                              타이틀로 활동한지 벌써 100일이
                              지났습니다. 매일 같이 해변에
                              나가서 해양쓰레기를 주웠는데요.
                              저희 인스타를 보시고 좋아요
                              눌러주시고 힘이 되는 댓글로
                              응원해 주셔서 감사합니다. 또한
                              DM 보내주셔서 비치클린
                              참여해주신 분들과 친애하는
                              친구들에게 정말 감사
                              말씀드립니다. 🙇🏻 비치클린
                              첫번째 시즌을 종료하고 재정비
                              후 두번째 시즌으로 다시
                              돌아오겠습니다! 더 재밌게 쓰줍
                              할거에요오 !! 😁 시즌2 에서는
                              참여해주시는 분들에게
                              @plasticberries.jeju 악세서리를
                              드립니다. 다시 한번
                              감사드립니다!! 😎😎
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-screen overflow-x-hidden text-center">
                <div className="mb-6 text-lg">활동 지역</div>
                <div
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <div id="Mymap" className="w-screen h-screen"></div>
                </div>
              </div>

              <div className="w-screen overflow-x-hidden">
                <div className="text-center text-lg mb-4 text-gray-800 mt-5">
                  시즌1
                </div>
                <div className="flex flex-wrap text-xs md:text-sm md:mx-24 mx-2 justify-items-auto justify-evenly">
                  {friend_profile1.map((profile) => (
                    <div
                      className="flex flex-col items-center md:mx-10 md:mb-12 mx-2 mb-6"
                      key={profile.id}
                    >
                      <div className="mb-2">{profile.name}</div>
                      <div className="flex">
                        <a
                          href={profile.url}
                          className="bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 p-0.5 rounded-full"
                        >
                          <img
                            className="md:w-20 w-12 rounded-full border-white border-2"
                            src={profile.img_url}
                            alt={profile.name}
                          />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center text-lg mb-6 text-gray-800 mt-10">
                  시즌2
                </div>
                <div className="flex flex-wrap text-xs md:text-sm mx-2 md:mx-24 justify-items-auto justify-evenly">
                  {friend_profile2.map((profile) => (
                    <div
                      className="flex flex-col items-center md:mx-10 md:mb-12 mx-2 mb-6"
                      key={profile.id}
                    >
                      <div className="mb-2">{profile.name}</div>
                      <div className="flex">
                        <a
                          href={profile.url}
                          className="bg-gradient-to-r from-yellow-400 via-pink-400 to-red-600 p-0.5 rounded-full"
                        >
                          <img
                            className="w-12 md:w-20 rounded-full border-white border-2"
                            src={profile.img_url}
                            alt={profile.name}
                          />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Slider>
            <div className="flex-col text-lg lg:text-lg sm:text-sm text-right mr-5 mb-24 border-t border-gray-400 lg:mx-48 sm:mx-4 mt-8">
              <div className="mt-4">문의</div>
              <div>📧 mcyoo247@gmail.com</div>
              <div>📱 010-4737-4115</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default App;
