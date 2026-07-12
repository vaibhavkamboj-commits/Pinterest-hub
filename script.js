const pins = [
      {
          image: "images/pin1.jpg",
              link: "https://www.pinterest.com/pin/https://pin.it/4WHT3aNIC/"
                },
                  {
                      image: "images/pin2.jpg",
                          link: "https://www.pinterest.com/pin/https://pin.it/10yatGXFN/"
                            },
                              {
                                  image: "images/pin3.jpg",
                                      link: "https://www.pinterest.com/pin/https://pin.it/7okpzttMG/"
                                        }
                                        ];

                                        const container = document.getElementById("pins");

                                        pins.forEach(pin => {
                                          container.innerHTML += `
                                              <a href="${pin.link}" target="_blank">
                                                    <img src="${pin.image}" alt="Pinterest Pin">
                                                        </a>
                                                          `;
                                                          });
