// let h_Tag = document.getElementById("ip");

let video = document.getElementById("video");
let triangle = document.getElementById('triangle');

var sourceMP4 = document.getElementById("source");
sourceMP4.type = "video/mp4";
sourceMP4.src = "http://127.0.0.1:5000/videos/glitch.mp4";

video.appendChild(sourceMP4);

video.onclick = function () {
  // sourceMP4.src = "http://127.0.0.1:5000/videos/glitch2.mp4";
  if (video.paused === true) {
    video.play();
    triangle.hidden = true;
  }
  else {
    video.pause();
    triangle.hidden = false;
  }
};
(async () => {
  async function getIP() {
    return new Promise((res) => {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const response = JSON.parse(xhttp.responseText);
          let ip = response.ip_address;
          res(ip);
        }
      };
      xhttp.open(
        "GET",
        "https://ipgeolocation.abstractapi.com/v1/?api_key=9a6a1747433140ab894cdfe20d06248a",
        true
      );
      xhttp.send();
    });
  }
  const ip = await getIP();

  console.log(ip);
})();
