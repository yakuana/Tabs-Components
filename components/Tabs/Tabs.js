
class TabLink {
  constructor(element) {
    
    // Assign this.element to the passed in DOM element
    this.element = element;
    // console.log(this.element); 

    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;
    // console.log(this.data); 

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`)
    // console.log(this.itemElement); 
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    // console.log(this.tabItem); 
    
    // Add a click event listener on this instance, calling the select method on click
    element.addEventListener("click", () => this.select())
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll(".tabs-link");
    // console.log("all elements with tabs-link class", links);

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(link => link.classList.remove("tabs-link-selected"));
    // console.log("links without 'tabs-link-selected' class", links);

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add("tabs-link-selected");
    // console.log("current link", this.element);
    
    // Call the select method on the item associated with this link
    this.tabItem.select(); 
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll(".tabs-item");
    // console.log("all elements with tabs-item class", items);

    // Remove the class "tabs-item-selected" from each element
    Array.from(items).forEach(item => item.classList.remove("tabs-item-selected"));
    // console.log("items without 'tabs-item-selected' class", items);

    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add("tabs-item-selected");
    // console.log("current item", this.element);
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

// all classes named ".tabs-link"
links = document.querySelectorAll(".tabs-link");

// returns new instances of TabLink
links.forEach((link) => {return new TabLink(link)})

// console.log(links); 