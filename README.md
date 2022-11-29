# Development

### Link to Deployed Website
If you used the stencil code, this is https://sleepysealion99.github.io/milktea_shop/

### Goal and Value of the Application
Goal: Providing customers a website with filter and sort and shopping cart for the milk tea shop. 
Value: This application can work for all kinds of milk tea shops. It lists the menu of the shop. Customers can filter the teas according to gluten-free and iced-only. Some customers may only want to drink hot teas so the filter will do a lot of help. Customers can also sort the teas by their prices so that can quickly choose based on thier budget. Customers can add to shopping cart and remove from shopping cart. They can view amount in the cart shown.

### Usability Principles Considered
The aggregator is placed on the right so that it is clearer to view than being place on the top or the bottom. The filters have multiple choices so is set as dropdowm menus. The sort option only consists of yes or no so it is a switch.

### Organization of Components
The components mainly include two filters, one sort and one aggregator. The filters and sort components are placed in a filter class. They are implemented using ant design. Shop includes methods like add and reduce. It returns the list of cart items.

### How Data is Passed Down Through Components
Teadata is passed in the menu list using map. The menu list will then show the information needed. If some item is added to the aggregator, the item data will be passed into addShop by parameter. The filter component is imported into the tea component to shown on the homepage.

### How the User Triggers State Changes
User clicks on the sort swicth, the sort option will change. User choose filter from drop down menu, the menu list will be filtered. When user clicks on reset, all change will be removed. The website will change back to the original state. When user clicks on add to shopping cart button, the aggregator on the right will change. User clicks on the plus or minus button in the cart list, the amount of money and number will change. When the amount of an item becomes zero, the item will be removed from the cart.
