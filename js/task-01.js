const categoriesList = document.querySelector("#categories");
const categoriesCount = categoriesList.children.length;
console.log(`Number of categories: ${categoriesCount}`);
// !-----------------------------------------------------------
const categoriesItems = categoriesList.querySelectorAll('li.item');

categoriesItems.forEach(item => {
  
 
    const categoryTitle = item.querySelector('h2').textContent;
      
     
    const categoryItemsCount = item.querySelectorAll('li').length;
      
     
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryItemsCount}`)
    });
    



