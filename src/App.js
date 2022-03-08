import React from "react";
import "./assets/App.css";

class App extends React.Component {
  state = {
    friend_profile1: [],
    friend_profile2: [],
    friend_profile3: [],
    feed_location: [],
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
    const { friend_profile1, friend_profile2,friend_profile3 } = instagramData;

    this.setState({
      friend_profile1,
      friend_profile2,
      friend_profile3,
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { friend_profile1, friend_profile2, friend_profile3 } = this.state;

    return (
      <div>
        <div className="w-screen overflow-x-hidden">
          <div className="text-center text-lg mb-4 text-gray-800">시즌3 51명</div>
          <div className="flex flex-wrap text-xs md:text-sm md:mx-24 mx-2 justify-items-auto justify-evenly">
            {friend_profile3.map((profile) => (
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
            시즌2 62명
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

          <div className="text-center text-lg mb-6 text-gray-800 mt-10">
            시즌1 39명
          </div>
          <div className="flex flex-wrap text-xs md:text-sm mx-2 md:mx-24 justify-items-auto justify-evenly">
            {friend_profile1.map((profile) => (
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
          <div className="text-center text-lg mb-6 text-gray-800 my-8">
            탱큐 베리 감사합니다 😀
          </div>
        </div>
      </div>
    );
  }
}
export default App;
