import workImg1 from "./img/small_1.png";
import workImg2 from "./img/small_2.png";

import imgAthlete2 from "./img/athlete2.png";


import imgGoodTims2 from "./img/good-times2.jpg";
import workImg3 from "./img/small_3.png";

import imgRacer2 from "./img/the-racer2.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: workImg1,
      secondaryImg: imgAthlete2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: workImg3,
      url: "/work/good-times",
      secondaryImg: imgGoodTims2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: workImg2,
      url: "/work/the-racer",
      secondaryImg: imgRacer2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
