import cat1 from "./CategoryImages/cat_1.jpg";
import cat2 from "./CategoryImages/cat_2.jpg";
import cat3 from "./CategoryImages/cat_3.jpg";
import cat4 from "./CategoryImages/cat_4.jpg";

export function getCategoriesData() {
    const categories = [  
      {
        title: "Category 1",
        image: cat1,
        type : "headphone"
      },
      {
        title: "Category 2",
        image: cat2,
        type : "speaker"
      },
      {
        title: "Category 3",
        image: cat3,
        type : "watch"
      },
      {
        title: "Category 4",
        image: cat4,
        type : "earbud"
      }
    ];
  
    return categories;
  }
  
  // Convert the data to JSON
//  const categoriesData = JSON.stringify(getCategoriesData());
  
  // Use the JSON data on your website
  // console.log(categoriesData);
  