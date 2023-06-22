let h_Tag = document.getElementById("ip");

(async () => {
    async function getIP() {
        return new Promise((res) => {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const response = JSON.parse(xhttp.responseText);
                    let ip = response.ip_address;
                    res(ip)
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