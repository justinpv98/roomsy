import cloudinaryUrl from "../config/cloudinary";


const categories = [
{
    src:"roomy/cabin_cazu7x.webp",
    alt: "A cozy cabin retreat at night",
    heading: "Outdoor gateways",
    stays: 131
},
{
    src:"roomy/concretehome_v0k9cf.webp",
    alt: "A concrete apartment near the side of a hill",
    heading: "Unique stays",
    stays: 172
},
{
    src:"roomy/dog_k8hzvz.webp",
    alt: "A cute puppy",
    heading: "Pets allowed",
    stays: 321
},
{
    src:"roomy/modernhome_wvthc4.webp",
    alt: "A nice modern home with wooden sides",
    heading: "Entire homes",
    stays: 156
}
]

const dataWithCloudinaryUrl = categories.map((category) => {
    const newSrc = cloudinaryUrl + category.src
    const newCategory = {...category, src: newSrc}
    return newCategory
});
export default dataWithCloudinaryUrl


