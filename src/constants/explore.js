import cloudinaryUrl from "../config/cloudinary";

const locations = [
  {
    src: "roomy/sanfrancisco_yxsbuc.webp",
    city: "San Francisco",
    distance: "1 hour away",
  },
  {
    src: "roomy/losangeles_lqbno7.webp",
    city: "Los Angeles",
    distance: "2 hours away",
  },
  {
    src: "roomy/miami_w7dz7a.webp",
    city: "Miami",
    distance: "37 hours away",
  },
  {
    src: "roomy/washingtondc_lrdmlm.webp",
    city: "Washington D.C.",
    distance: "38 hours away",
  },
  {
    src: "roomy/newyork_jvly2l.webp",
    city: "New York",
    distance: "39 hours away",
  },
  {
    src: "roomy/chicago_rd2ogz.webp",
    city: "Chicago",
    distance: "28 hours away",
  },
  {
    src: "roomy/sanjose_tsnalj.webp",
    city: "San Jose",
    distance: "4 hours away",
  },
  {
    src: "roomy/philly_fpl0wp.webp",
    city: "Philadelphia",
    distance: "38 hours away",
  },
];

const dataWithCloudinaryUrl = locations.map((city) => {
  const newSrc = cloudinaryUrl + city.src
  const newLocation = {...city, src: newSrc}
  return newLocation
});


export default dataWithCloudinaryUrl;